import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ENV_PATH = path.join(process.cwd(), '.env');

type RefreshResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

function updateEnvFile(newToken: string) {
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
}

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization');
  const expectedAuth = `Bearer ${process.env.REFRESH_SECRET || 'refresh-token-secret'}`;

  if (authHeader !== expectedAuth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const currentToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!currentToken) {
    return NextResponse.json({ error: 'No Instagram token configured' }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`
    );

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: 'Failed to refresh token', details: error },
        { status: response.status }
      );
    }

    const data: RefreshResponse = await response.json();
    const newToken = data.access_token;
    const expiresInDays = Math.round(data.expires_in / 86400);

    // Update .env file
    updateEnvFile(newToken);

    return NextResponse.json({
      success: true,
      message: 'Token refreshed successfully',
      expiresInDays,
      refreshedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Token refresh error:', error);
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
      return NextResponse.json({
        configured: true,
        valid: false,
        error: 'Token may be expired or invalid',
      });
    }

    const data = await response.json();

    return NextResponse.json({
      configured: true,
      valid: true,
      username: data.username,
      accountId: data.id,
    });
  } catch {
    return NextResponse.json({
      configured: true,
      valid: false,
      error: 'Failed to verify token',
    });
  }
}
