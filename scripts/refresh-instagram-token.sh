#!/usr/bin/env bash
# Instagram Token Refresh — VPS cron job
# ---------------------------------------------------------------------------
# Calls POST /api/instagram/refresh weekly. Meta long-lived tokens last
# 60 days but the refresh endpoint resets the 60-day clock, so as long as
# this script succeeds at least once every ~55 days the token never expires.
#
# Recommended cron schedule (every Monday 03:00 server time):
#   0 3 * * 1 /path/to/web/scripts/refresh-instagram-token.sh
#
# Sources config from <repo>/.env to keep secrets out of version control.
# ---------------------------------------------------------------------------

set -euo pipefail

# Resolve repo root from script location (works regardless of cwd at cron time).
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
REPO_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
ENV_FILE="${REPO_DIR}/.env"

# Defaults — override via env or .env
SITE_URL="${SITE_URL:-http://localhost:3000}"
LOG_FILE="${INSTAGRAM_REFRESH_LOG:-/var/log/instagram-refresh.log}"
SERVICE_RESTART_CMD="${INSTAGRAM_SERVICE_RESTART_CMD:-}"  # e.g. "systemctl restart recounting" or "pm2 reload recounting"

# Load INSTAGRAM_REFRESH_SECRET from .env if not already set in env.
if [[ -z "${INSTAGRAM_REFRESH_SECRET:-}" && -f "${ENV_FILE}" ]]; then
  # shellcheck disable=SC1090,SC2046
  export $(grep -E '^INSTAGRAM_REFRESH_SECRET=' "${ENV_FILE}" | xargs -I {} echo {})
fi

if [[ -z "${INSTAGRAM_REFRESH_SECRET:-}" ]]; then
  echo "ERROR: INSTAGRAM_REFRESH_SECRET not set (checked env and ${ENV_FILE})" >&2
  exit 2
fi

# Ensure log file is writable; fall back to /tmp if not.
if ! touch "${LOG_FILE}" 2>/dev/null; then
  LOG_FILE="/tmp/instagram-refresh.log"
fi

log() {
  printf '[%s] %s\n' "$(date -u '+%Y-%m-%dT%H:%M:%SZ')" "$1" >> "${LOG_FILE}"
}

log "begin refresh — SITE_URL=${SITE_URL}"

# Make the API request — fail fast on network errors, capture body + status.
HTTP_CODE=$(curl --silent --show-error --output /tmp/instagram-refresh-response.json \
  --write-out '%{http_code}' \
  --max-time 30 \
  --retry 2 --retry-delay 5 \
  -X POST "${SITE_URL}/api/instagram/refresh" \
  -H "Authorization: Bearer ${INSTAGRAM_REFRESH_SECRET}" \
  -H "Content-Type: application/json" \
  -d '{}' 2>>"${LOG_FILE}") || HTTP_CODE="000"

RESPONSE=$(cat /tmp/instagram-refresh-response.json 2>/dev/null || echo '{}')
rm -f /tmp/instagram-refresh-response.json

log "http_code=${HTTP_CODE} response=${RESPONSE}"

if [[ "${HTTP_CODE}" == "200" ]] && echo "${RESPONSE}" | grep -q '"success":true'; then
  log "SUCCESS: token refreshed"

  # Optional: restart service so the new .env is picked up
  if [[ -n "${SERVICE_RESTART_CMD}" ]]; then
    log "running service restart: ${SERVICE_RESTART_CMD}"
    if eval "${SERVICE_RESTART_CMD}" >>"${LOG_FILE}" 2>&1; then
      log "restart ok"
    else
      log "WARN: restart command exited non-zero — token is refreshed but server may serve stale token until next deploy"
    fi
  else
    log "no SERVICE_RESTART_CMD configured — server process must reload .env on its own or via next deploy"
  fi

  exit 0
fi

log "FAILURE: refresh did not succeed (http=${HTTP_CODE})"
exit 1
