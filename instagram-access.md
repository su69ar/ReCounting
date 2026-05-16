# Instagram Feed Integration

Dokumentasi ini menjelaskan cara kerja integrasi Instagram Feed di website ReCounting.

## Overview

Website menampilkan post Instagram secara real-time menggunakan **Instagram Graph API** dengan **auto-refresh token** untuk menjaga akses tetap aktif.

## Arsitektur

```
┌─────────────────────────────────────────────────────────────────┐
│                      INSTAGRAM FEED FLOW                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────┐                                            │
│  │ Instagram       │                                            │
│  │ @recountingasia │                                            │
│  └────────┬────────┘                                            │
│           │                                                      │
│           ▼                                                      │
│  ┌─────────────────┐      ┌─────────────────┐                   │
│  │ Instagram       │ ---> │ /api/instagram  │                   │
│  │ Graph API       │      │ (fetch posts)   │                   │
│  └─────────────────┘      └────────┬────────┘                   │
│                                    │                            │
│                                    ▼                            │
│                           ┌─────────────────┐                   │
│                           │ InstagramFeed   │                   │
│                           │ Component       │                   │
│                           └─────────────────┘                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      AUTO-REFRESH SYSTEM                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────┐                                            │
│  │ Cron Job        │ (setiap minggu)                           │
│  │ (Ubuntu VPS)    │                                            │
│  └────────┬────────┘                                            │
│           │                                                      │
│           ▼                                                      │
│  ┌─────────────────────────────────────────┐                    │
│  │ POST /api/instagram/refresh             │                    │
│  │ Authorization: Bearer {REFRESH_SECRET}  │                    │
│  └────────┬────────────────────────────────┘                    │
│           │                                                      │
│           ▼                                                      │
│  ┌─────────────────┐                                            │
│  │ Instagram API   │                                            │
│  │ refresh_token   │                                            │
│  └────────┬────────┘                                            │
│           │                                                      │
│           ▼                                                      │
│  ┌─────────────────┐                                            │
│  │ Update .env     │                                            │
│  │ (new token)     │                                            │
│  └─────────────────┘                                            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## File Structure

```
web/
├── .env                                    # Credentials (JANGAN COMMIT!)
├── scripts/
│   └── refresh-instagram-token.sh          # Cron script
└── src/
    ├── app/api/instagram/
    │   ├── route.ts                        # Fetch posts
    │   └── refresh/route.ts                # Auto-refresh token
    └── components/sections/
        └── InstagramFeed.tsx              # UI Component
```

## Environment Variables

File `.env`:

```env
# Instagram Graph API
INSTAGRAM_ACCESS_TOKEN=IGxxxx...           # Access token (60 hari valid)
INSTAGRAM_ACCOUNT_ID=17841449206784407     # Instagram Business Account ID
INSTAGRAM_REFRESH_SECRET=your-secret       # Secret untuk auto-refresh endpoint
```

**PENTING:**
- `INSTAGRAM_ACCESS_TOKEN` expired setelah 60 hari
- Auto-refresh akan memperbarui token secara otomatis
- Jangan commit `.env` ke repository!

## API Endpoints

### GET `/api/instagram`

Fetch Instagram posts.

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `limit` | number | 6 | Jumlah posts yang di-fetch |
| `after` | string | - | Cursor untuk pagination |

**Response:**
```json
{
  "posts": [
    {
      "id": "18086908184127575",
      "caption": "Post caption...",
      "media_type": "IMAGE | VIDEO | CAROUSEL_ALBUM",
      "media_url": "https://...",
      "thumbnail_url": "https://...",  // untuk VIDEO
      "permalink": "https://instagram.com/p/xxx",
      "timestamp": "2026-02-19T05:20:19+0000",
      "children": {  // untuk CAROUSEL_ALBUM
        "data": [...]
      }
    }
  ],
  "paging": {
    "cursors": { "before": "...", "after": "..." },
    "next": "..."
  }
}
```

**Error Response:**
```json
{
  "error": "Instagram credentials not configured"
}
```

---

### POST `/api/instagram/refresh`

Refresh access token. Dipanggil oleh cron job.

**Headers:**
```
Authorization: Bearer {INSTAGRAM_REFRESH_SECRET}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Token refreshed successfully",
  "expiresInDays": 60,
  "refreshedAt": "2026-02-19T10:00:00.000Z"
}
```

**Response (Error):**
```json
{
  "error": "Unauthorized"  // Secret salah
}
```

---

### GET `/api/instagram/refresh`

Check token status.

**Response:**
```json
{
  "configured": true,
  "valid": true,
  "username": "recountingasia",
  "accountId": "17841449206784407"
}
```

## Component Usage

### Basic Usage

```tsx
import { InstagramFeed } from "@/components/sections/InstagramFeed";

export default function Page() {
  return (
    <section className="py-16">
      <h2>Follow Us on Instagram</h2>
      <InstagramFeed limit={6} />
    </section>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialPosts` | InstagramMedia[] | - | Pre-fetched posts (SSR) |
| `limit` | number | 6 | Max posts to display |
| `className` | string | - | Additional CSS classes |

### Features

- **Grid Layout**: Featured post besar di posisi pertama
- **Hover Effects**: Zoom + caption reveal (GSAP animated)
- **Media Types**: Support IMAGE, VIDEO, CAROUSEL_ALBUM
- **Scroll Animation**: Staggered entrance via ScrollTrigger
- **Loading State**: Skeleton placeholder
- **Error Handling**: Graceful fallback message

## How Tokens Stay Valid Forever

Instagram Graph API long-lived tokens **last 60 days**. Meta provides a
`refresh_access_token` endpoint that resets the 60-day clock on a still-valid
token — but it does **not** work on already-expired tokens.

Strategy: call refresh weekly via host cron. As long as the cron runs at
least once every ~55 days, the token never expires.

```
Day 0   ──┐  Generate first long-lived token (manual, one-time)
          │
Day 7   ──┤  Host cron → POST /api/instagram/refresh
          │     ↳ Meta returns new token (60-day clock reset)
          │     ↳ Cron writes host .env + rebuilds container
Day 14  ──┤  Host cron → POST /api/instagram/refresh  (same flow)
…         │  (every Monday)
Day N+7 ──┘  Token always has 50-60 days of life remaining
```

If the cron fails for more than 60 days straight, the token dies and you must
regenerate manually via Meta Developer Portal (see "Manual Token Generation"
below).

### Why host-side cron (not in-container)

The Next.js app runs in Docker with env vars baked at build time via
`docker-compose.yml` build args. The host `.env` is the source of truth.

Implication for token refresh:
- Endpoint `/api/instagram/refresh` runs *inside* the container — it can call
  Meta but **cannot persist** to the host `.env`.
- The refresh response includes the new token in the body.
- The **host cron script** reads that token from the response, writes it to
  the host `.env`, and triggers `docker compose up -d --build` so the next
  image bakes in the new token.
- A `.env.bak.<timestamp>` backup is created on every refresh and the latest 5
  are retained for easy rollback.

## Cron Job Setup (VPS Ubuntu + Docker)

### 1. Confirm script paths

The cron script lives in the repo at `web/scripts/refresh-instagram-token.sh`.
On the VPS this resolves to:

```
/home/dotdev/Documents/Workspaces/Dotdev/Projects/ReCounting/recounting-app/web/scripts/refresh-instagram-token.sh
```

The script reads `INSTAGRAM_REFRESH_SECRET` directly from the host `.env` at
runtime. You do **not** edit secrets into the script or crontab.

Environment overrides accepted at cron time:

| Env var | Default | Purpose |
|---|---|---|
| `SITE_URL` | `http://127.0.0.1:3103` | Inside-host endpoint for the container |
| `INSTAGRAM_REFRESH_LOG` | `/var/log/instagram-refresh.log` | Log path (falls back to `/tmp`) |
| `DOCKER_COMPOSE_CMD` | `docker compose` | Override if using `docker-compose` legacy |
| `DOCKER_COMPOSE_FILE` | `<repo>/docker-compose.yml` | Compose file path |
| `DRY_RUN` | `0` | Set to `1` to test parse path without touching `.env` or container |

### 2. Dry-run test first

```bash
DRY_RUN=1 /home/dotdev/Documents/Workspaces/Dotdev/Projects/ReCounting/recounting-app/web/scripts/refresh-instagram-token.sh
tail -10 /var/log/instagram-refresh.log
```

You should see lines like:
```
[2026-05-16T03:00:01Z] begin refresh — SITE_URL=http://127.0.0.1:3103 ...
[2026-05-16T03:00:02Z] http_code=200 response_size=420B
[2026-05-16T03:00:02Z] got new token (len=186) — expires in 60 days
[2026-05-16T03:00:02Z] DRY_RUN=1 — skipping .env write and container rebuild
```

If the script fails here, fix before installing cron (almost always: log
permission, refresh secret missing, or container not reachable on port 3103).

### 3. Real run (writes .env, rebuilds container)

```bash
/home/dotdev/Documents/Workspaces/Dotdev/Projects/ReCounting/recounting-app/web/scripts/refresh-instagram-token.sh
```

What happens:
1. Script POSTs to `http://127.0.0.1:3103/api/instagram/refresh`
2. Container exchanges current token → new token via Meta API
3. Container returns `{success: true, newToken: "IGAA..."}` in response body
4. Script backs up host `.env` to `.env.bak.<timestamp>` (keeps last 5)
5. Script atomically rewrites `INSTAGRAM_ACCESS_TOKEN=` line in host `.env`
6. Script runs `docker compose -f <repo>/docker-compose.yml up -d --build`
7. Container rebuilt with new token baked in as build arg
8. Script verifies via `GET /api/instagram/refresh` that new container reports `valid:true`
9. Admin email sent with new token + expiry

Expected log on success:
```
[2026-05-16T03:00:01Z] begin refresh — ...
[2026-05-16T03:00:02Z] http_code=200 response_size=420B
[2026-05-16T03:00:02Z] got new token (len=186) — expires in 60 days
[2026-05-16T03:00:02Z] backed up .env to .../recounting-app/.env.bak.20260516-030002
[2026-05-16T03:00:02Z] wrote new token to .../recounting-app/.env
[2026-05-16T03:00:02Z] pruned old .env backups (kept latest 5)
[2026-05-16T03:00:02Z] rebuilding container via docker compose ...
[2026-05-16T03:01:30Z] container rebuild + up succeeded
[2026-05-16T03:01:35Z] SUCCESS: container running new token, ...
```

### 4. Install cron

```bash
crontab -e
```

Add:

```cron
# Refresh Instagram token every Monday 03:00 WITA — rebuilds Docker container
0 3 * * 1 /home/dotdev/Documents/Workspaces/Dotdev/Projects/ReCounting/recounting-app/web/scripts/refresh-instagram-token.sh
```

That's it. No env vars in the crontab — script reads everything from the host
`.env` and uses safe defaults for paths.

### 5. Prepare log file (optional)

```bash
sudo touch /var/log/instagram-refresh.log
sudo chown $USER:$USER /var/log/instagram-refresh.log
```

If unwritable, the script falls back to `/tmp/instagram-refresh.log` automatically.

### 6. GitHub Actions deploy compatibility

`deploy.yml` already rsyncs from checkout to host but **excludes `.env`**, so
the cron-updated `.env` survives deploys. Each `docker compose build --no-cache`
in the deploy workflow rebuilds with whatever is currently in the host `.env`,
which is what we want.

## Manual Token Refresh

Force a refresh on demand:

```bash
curl -X POST "https://recounting.my.id/api/instagram/refresh" \
  -H "Authorization: Bearer $INSTAGRAM_REFRESH_SECRET"
```

Response contains `expiresInDays` and `envWriteOk` so you can verify the
refresh succeeded and whether the server `.env` was updated automatically.

## Manual Token Generation (when token has fully expired)

If the cron failed for >60 days straight, the refresh endpoint can no longer
recover the token. You must regenerate from scratch:

1. Open https://developers.facebook.com/apps/ and pick your app
2. Sidebar → **Instagram → API setup with Instagram login**
3. Section "Generate access tokens" → pick `@recountingasia` → **Generate**
4. Copy the new token (starts with `IGAA…`)
5. Update both:
   - Production `.env` (via your deploy platform dashboard)
   - Local `.env` (just edit the file)
6. Restart the service so Next.js picks up the new value
7. Verify: `curl https://recounting.my.id/api/instagram/refresh` should return
   `"valid":true`
8. Confirm cron is still scheduled so it does not happen again:
   `crontab -l | grep refresh-instagram-token`

## Troubleshooting

### Symptom: "Failed to fetch Instagram posts" on the homepage

1. Hit the status endpoint: `curl https://recounting.my.id/api/instagram/refresh`
   - `valid: true` → token is fine; problem is elsewhere (DNS, CORS, caching)
   - `valid: false` → token expired or revoked; follow Manual Token Generation
2. Check cron log: `tail -30 /var/log/instagram-refresh.log`
3. If cron has been silent, run the script manually to see the failure:
   `SITE_URL=https://recounting.my.id /opt/recounting/web/scripts/refresh-instagram-token.sh`

### Cron not firing

```bash
crontab -l                              # confirm entry present
ls -la /opt/recounting/web/scripts/refresh-instagram-token.sh  # confirm executable
chmod +x /opt/recounting/web/scripts/refresh-instagram-token.sh  # if not
tail -50 /var/log/syslog | grep CRON    # confirm cron daemon ran it
```

### `.env` write fails on refresh

The endpoint logs `envWriteOk: false` and emails the new token to
`ADMIN_EMAIL`. Common causes:
- File system mounted read-only (Docker without writable volume)
- Process user lacks write permission on `.env`
- Working directory at runtime is not the repo root

Fix: ensure the Next.js process can write to `.env`, OR rely on the email
notification flow and paste the new token into production env yourself.

### Cron OK but feed still shows error

The Next.js process caches `process.env.INSTAGRAM_ACCESS_TOKEN` at boot. After
`.env` is rewritten, you must restart the service to pick up the new value.
That's what `INSTAGRAM_SERVICE_RESTART_CMD` in the cron entry does — make
sure it's set.

## Security Notes

1. **`.env` tidak boleh di-commit** ke repository
2. **`INSTAGRAM_REFRESH_SECRET`** harus string random panjang (≥32 chars)
3. **Endpoint `/api/instagram/refresh`** memerlukan Authorization header
4. **Token di `.env`** hanya bisa dibaca server-side
5. **Cron entry** boleh mengandung `SITE_URL` dan restart command tetapi
   **jangan** menulis `INSTAGRAM_REFRESH_SECRET` langsung di crontab — script
   reads it from `.env` so it never appears in `crontab -l` or process listings

## API Reference Links

- [Instagram Graph API Docs](https://developers.facebook.com/docs/instagram-platform)
- [Instagram API with Instagram Login](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login)
- [Token Refresh Endpoint](https://developers.facebook.com/docs/instagram-basic-display-api/reference/refresh_access_token)

## Prompt untuk Agent Lain

Gunakan prompt ini jika meminta agent lain untuk memasang Instagram Feed:

---

**PROMPT:**

```
Pasangkan komponen Instagram Feed di website.

Lokasi file yang perlu diketahui:
- Dokumentasi: instagram-access.md (baca ini dulu)
- Komponen: src/components/sections/InstagramFeed.tsx
- API: src/app/api/instagram/route.ts

Cara penggunaan komponen:
1. Import: import { InstagramFeed } from "@/components/sections/InstagramFeed"
2. Gunakan: <InstagramFeed limit={6} />

Props yang tersedia:
- limit: number (default 6) - jumlah post yang ditampilkan
- className: string - additional CSS classes

Contoh:
<section className="py-16">
  <h2>Follow Us</h2>
  <InstagramFeed limit={6} />
</section>

Jangan ubah file API atau komponen kecuali diminta. Baca instagram-access.md untuk dokumentasi lengkap.
```

---

## Changelog

| Date | Changes |
|------|---------|
| 2026-02-19 | Initial setup - Instagram Graph API integration |
| 2026-02-19 | Added auto-refresh system with cron job |
| 2026-05-16 | Token expired (60-day natural expiry, cron was never installed). Regenerated. |
| 2026-05-16 | Hardened refresh endpoint: reads INSTAGRAM_REFRESH_SECRET (not REFRESH_SECRET), sends admin email on every refresh, reports envWriteOk in response. |
| 2026-05-16 | Cron script now reads secret from .env, supports optional service restart command, logs to /var/log or /tmp fallback. |
| 2026-05-16 | Cron script rewritten for Docker setup: parses new token from API response, atomically writes host .env with backup retention, triggers docker compose up --build, verifies post-rebuild health. Endpoint now returns newToken in response body so host can persist. |

---

*Dokumentasi ini untuk developer/agent yang akan mengelola integrasi Instagram feed.*
