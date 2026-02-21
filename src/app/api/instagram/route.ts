import { NextResponse } from 'next/server';

// Use Facebook Graph API for Page Access Tokens (EAAM...)
// Use Instagram Graph API for User Access Tokens (IGQ...)
const INSTAGRAM_API_BASE = process.env.INSTAGRAM_ACCESS_TOKEN?.startsWith('EAA')
  ? 'https://graph.facebook.com/v19.0'
  : 'https://graph.instagram.com';

export type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  children?: { data: InstagramMedia[] };
};

type InstagramResponse = {
  data: InstagramMedia[];
  paging?: {
    cursors: { before: string; after: string };
    next?: string;
  };
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || '6';
  const after = searchParams.get('after');

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const accountId = process.env.INSTAGRAM_ACCOUNT_ID;

  if (!accessToken || !accountId) {
    return NextResponse.json(
      { error: 'Instagram credentials not configured' },
      { status: 500 }
    );
  }

  try {
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,children{media_url,media_type}';
    let url = `${INSTAGRAM_API_BASE}/${accountId}/media?fields=${fields}&access_token=${accessToken}&limit=${limit}`;

    if (after) {
      url += `&after=${after}`;
    }

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Instagram API error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch Instagram posts' },
        { status: response.status }
      );
    }

    const data: InstagramResponse = await response.json();

    return NextResponse.json({
      posts: data.data,
      paging: data.paging,
    });
  } catch (error) {
    console.error('Instagram fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
