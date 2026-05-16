import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { sendInstagramTokenRefreshEmail } from '@/lib/email';

const ENV_PATH = path.join(process.cwd(), '.env');

type RefreshResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

type EnvWriteResult = { ok: true } | { ok: false; error: string };

function updateEnvFile(newToken: string): EnvWriteResult {
  try {
    let envContent = '';
    if (fs.existsSync(ENV_PATH)) {
      envContent = fs.readFileSync(ENV_PATH, 'utf-8');
    }

    const lines = envContent.split('\n');
    let found = false;

    const updatedLines = lines.map((line) => {
      if (line.startsWith('INSTAGRAM_ACCESS_TOKEN=')) {
        found = true;
        return `INSTAGRAM_ACCESS_TOKEN=${newToken}`;
      }
      return line;
    });

    if (!found) {
      updatedLines.push(`INSTAGRAM_ACCESS_TOKEN=${newToken}`);
    }

    fs.writeFileSync(ENV_PATH, updatedLines.join('\n'));
    return { ok: true };
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    return { ok: false, error };
  }
}

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization');
  const secret = process.env.INSTAGRAM_REFRESH_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: 'INSTAGRAM_REFRESH_SECRET not configured on server' },
      { status: 500 }
    );
  }
  if (authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const currentToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!currentToken) {
    return NextResponse.json(
      { error: 'No Instagram token configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`
    );

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      console.error('[instagram-refresh] Meta rejected refresh:', errBody);
      return NextResponse.json(
        { error: 'Failed to refresh token', details: errBody },
        { status: response.status }
      );
    }

    const data: RefreshResponse = await response.json();
    const newToken = data.access_token;
    const expiresInDays = Math.round(data.expires_in / 86400);
    const expiresAt = new Date(Date.now() + data.expires_in * 1000).toISOString();
    const refreshedAt = new Date().toISOString();

    const envWrite = updateEnvFile(newToken);

    // Send notification email — fire and forget, do not fail the response on email failure
    sendInstagramTokenRefreshEmail({
      newToken,
      expiresInDays,
      expiresAt,
      refreshedAt,
      envWriteOk: envWrite.ok,
      envWriteError: envWrite.ok ? undefined : envWrite.error,
      hostname: request.headers.get('host') || undefined,
    }).catch((err) => {
      console.error('[instagram-refresh] Email notification failed:', err);
    });

    return NextResponse.json({
      success: true,
      message: envWrite.ok
        ? 'Token refreshed and .env updated'
        : 'Token refreshed but .env write failed — see email for manual instructions',
      expiresInDays,
      expiresAt,
      refreshedAt,
      envWriteOk: envWrite.ok,
      ...(envWrite.ok ? {} : { envWriteError: envWrite.error }),
    });
  } catch (error) {
    console.error('[instagram-refresh] Internal error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to check token status
export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const accountId = process.env.INSTAGRAM_ACCOUNT_ID;

  if (!token || !accountId) {
    return NextResponse.json({ configured: false });
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${token}`
    );

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      return NextResponse.json({
        configured: true,
        valid: false,
        error: 'Token may be expired or invalid',
        details: errBody,
      });
    }

    const data = await response.json();

    return NextResponse.json({
      configured: true,
      valid: true,
      username: data.username,
      accountId: data.id,
    });
  } catch (error) {
    console.error('[instagram-refresh] GET status error:', error);
    return NextResponse.json({
      configured: true,
      valid: false,
      error: 'Failed to verify token',
    });
  }
}
