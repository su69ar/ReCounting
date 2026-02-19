#!/bin/bash

# Instagram Token Refresh Script
# Run this script weekly via cron to auto-refresh Instagram access token

# ============================================
# CONFIGURATION - Edit these values
# ============================================

# Your website URL (where Next.js is running)
SITE_URL="http://localhost:3000"

# Or use localhost if running on the same server:
# SITE_URL="http://localhost:3000"

# The refresh secret (must match INSTAGRAM_REFRESH_SECRET in .env)
REFRESH_SECRET="oWhDVw9z56fvxaZ4eRFNSZadmFEOxGYJXNHVd228"

# Log file location
LOG_FILE="/var/log/instagram-refresh.log"

# ============================================
# DO NOT EDIT BELOW THIS LINE
# ============================================

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

log "Starting Instagram token refresh..."

# Make the API request
RESPONSE=$(curl -s -X POST "$SITE_URL/api/instagram/refresh" \
  -H "Authorization: Bearer $REFRESH_SECRET" \
  -H "Content-Type: application/json")

# Check if request was successful
if echo "$RESPONSE" | grep -q '"success":true'; then
  log "SUCCESS: Token refreshed successfully"
  log "Response: $RESPONSE"

  # Optional: Restart your service if needed
  # Uncomment one of these based on your setup:
  # systemctl restart recounting  # if using systemd
  # docker restart recounting-container  # if using docker
  # pm2 reload recounting  # if using PM2

  exit 0
else
  log "ERROR: Failed to refresh token"
  log "Response: $RESPONSE"
  exit 1
fi
