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

## Cron Job Setup (VPS Ubuntu)

### 1. Edit Script Configuration

```bash
nano /path/to/project/scripts/refresh-instagram-token.sh
```

Update nilai:
```bash
SITE_URL="https://recounting.my.id"
REFRESH_SECRET="CHANGE_TO_MATCH_INSTAGRAM_REFRESH_SECRET_IN_ENV"
LOG_FILE="/var/log/instagram-refresh.log"
```

### 2. Setup Cron

```bash
crontab -e
```

Tambahkan:
```cron
# Refresh Instagram token setiap Senin jam 3 pagi
0 3 * * 1 /path/to/project/scripts/refresh-instagram-token.sh
```

### 3. Create Log File

```bash
sudo touch /var/log/instagram-refresh.log
sudo chown $USER:$USER /var/log/instagram-refresh.log
```

### 4. Test Cron

```bash
# Run manually to test
/path/to/project/scripts/refresh-instagram-token.sh

# Check log
cat /var/log/instagram-refresh.log
```

## Manual Token Refresh

Jika perlu refresh token secara manual:

### Option 1: Via API

```bash
curl -X POST "https://recounting.my.id/api/instagram/refresh" \
  -H "Authorization: Bearer your-refresh-secret"
```

### Option 2: Via Meta Developer

1. Buka https://developers.facebook.com/apps/
2. Pilih app → Instagram → Settings
3. Generate new token
4. Update `.env`:
   ```env
   INSTAGRAM_ACCESS_TOKEN=new_token_here
   ```
5. Restart service

## Troubleshooting

### Token Expired

**Symptom:** Feed tidak muncul, error "Invalid OAuth access token"

**Solution:**
1. Check status: `GET /api/instagram/refresh`
2. Jika `valid: false`, refresh token manual
3. Pastikan cron job berjalan

### Cron Job Not Working

**Check:**
```bash
# List cron jobs
crontab -l

# Check script permission
ls -la /path/to/script/refresh-instagram-token.sh

# Make executable
chmod +x /path/to/script/refresh-instagram-token.sh

# Check log
cat /var/log/instagram-refresh.log
```

### CORS Error

Jika feed error di production tapi OK di localhost:

1. Pastikan `SITE_URL` di script benar
2. Pastikan server mendukung HTTPS (Cloudflare handles this)
3. Check browser console untuk detail error

## Security Notes

1. **`.env` tidak boleh di-commit** ke repository
2. **`INSTAGRAM_REFRESH_SECRET`** harus string random panjang
3. **Endpoint `/api/instagram/refresh`** memerlukan Authorization header
4. **Token di `.env`** hanya bisa dibaca server-side

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

---

*Dokumentasi ini untuk developer/agent yang akan mengelola integrasi Instagram feed.*
