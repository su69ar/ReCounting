#!/usr/bin/env bash
# Instagram Token Refresh — VPS host-side cron job (Docker setup)
# ---------------------------------------------------------------------------
# This script lives in the repo (web/scripts/) but is invoked from the HOST,
# not from inside the Docker container.
#
# Architecture context (recounting-app on Ubuntu VPS):
#   - Next.js app runs in Docker (recounting-app, port 3103)
#   - env vars are baked into the image at build time via docker-compose args
#   - the host's .env is the source of truth — container .env is throwaway
#   - GitHub Actions deploys by rsync + docker compose build/up (no .env push)
#
# So the refresh flow must:
#   1. Call POST /api/instagram/refresh inside the container (Meta API requires
#      the current still-valid token to refresh — the container has it).
#   2. Parse the new token from the response.
#   3. Write the new token to the HOST .env (this script does it).
#   4. Rebuild + restart the container so the build args pick up the new env.
#
# Recommended cron (weekly):
#   0 3 * * 1 /home/dotdev/.../recounting-app/web/scripts/refresh-instagram-token.sh
# ---------------------------------------------------------------------------

set -euo pipefail

# Resolve repo root (web/ parent) from script location.
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
WEB_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
REPO_DIR="$(cd "${WEB_DIR}/.." && pwd)"
ENV_FILE="${REPO_DIR}/.env"

# Defaults — override via env or .env
SITE_URL="${SITE_URL:-http://127.0.0.1:3103}"
LOG_FILE="${INSTAGRAM_REFRESH_LOG:-/var/log/instagram-refresh.log}"
DOCKER_COMPOSE_CMD="${DOCKER_COMPOSE_CMD:-docker compose}"
DOCKER_COMPOSE_FILE="${DOCKER_COMPOSE_FILE:-${REPO_DIR}/docker-compose.yml}"
DRY_RUN="${DRY_RUN:-0}"

# Load INSTAGRAM_REFRESH_SECRET from host .env.
if [[ -z "${INSTAGRAM_REFRESH_SECRET:-}" && -f "${ENV_FILE}" ]]; then
  INSTAGRAM_REFRESH_SECRET="$(grep -E '^INSTAGRAM_REFRESH_SECRET=' "${ENV_FILE}" | head -1 | cut -d'=' -f2- )"
  export INSTAGRAM_REFRESH_SECRET
fi

if [[ -z "${INSTAGRAM_REFRESH_SECRET:-}" ]]; then
  echo "ERROR: INSTAGRAM_REFRESH_SECRET not set (checked env and ${ENV_FILE})" >&2
  exit 2
fi

if [[ ! -f "${ENV_FILE}" ]]; then
  echo "ERROR: host .env not found at ${ENV_FILE}" >&2
  exit 2
fi

# Ensure log file is writable; fall back to /tmp if not.
if ! touch "${LOG_FILE}" 2>/dev/null; then
  LOG_FILE="/tmp/instagram-refresh.log"
fi

log() {
  printf '[%s] %s\n' "$(date -u '+%Y-%m-%dT%H:%M:%SZ')" "$1" | tee -a "${LOG_FILE}" >/dev/null
}

log "begin refresh — SITE_URL=${SITE_URL} ENV_FILE=${ENV_FILE} DRY_RUN=${DRY_RUN}"

# --- Step 1: Call refresh endpoint inside the container. ---
RESPONSE_FILE="$(mktemp)"
trap 'rm -f "${RESPONSE_FILE}"' EXIT

HTTP_CODE=$(curl --silent --show-error --output "${RESPONSE_FILE}" \
  --write-out '%{http_code}' \
  --max-time 30 \
  --retry 2 --retry-delay 5 \
  -X POST "${SITE_URL}/api/instagram/refresh" \
  -H "Authorization: Bearer ${INSTAGRAM_REFRESH_SECRET}" \
  -H "Content-Type: application/json" \
  -d '{}' 2>>"${LOG_FILE}") || HTTP_CODE="000"

RESPONSE="$(cat "${RESPONSE_FILE}")"
log "http_code=${HTTP_CODE} response_size=${#RESPONSE}B"

if [[ "${HTTP_CODE}" != "200" ]]; then
  log "FAILURE: refresh endpoint did not return 200 (got ${HTTP_CODE})"
  log "response: ${RESPONSE}"
  exit 1
fi

# --- Step 2: Parse new token from response. ---
# Use python3 (always present on Ubuntu) for safe JSON parsing — avoid jq dep.
NEW_TOKEN="$(python3 -c "import sys, json; d = json.load(sys.stdin); print(d.get('newToken', ''))" <<<"${RESPONSE}" 2>>"${LOG_FILE}" || echo "")"
EXPIRES_DAYS="$(python3 -c "import sys, json; d = json.load(sys.stdin); print(d.get('expiresInDays', ''))" <<<"${RESPONSE}" 2>>"${LOG_FILE}" || echo "")"

if [[ -z "${NEW_TOKEN}" ]]; then
  log "FAILURE: response did not contain newToken field"
  log "response: ${RESPONSE}"
  exit 1
fi

log "got new token (len=${#NEW_TOKEN}) — expires in ${EXPIRES_DAYS} days"

# --- Step 3: Persist to host .env atomically. ---
if [[ "${DRY_RUN}" == "1" ]]; then
  log "DRY_RUN=1 — skipping .env write and container rebuild"
  log "would have written INSTAGRAM_ACCESS_TOKEN to ${ENV_FILE}"
  exit 0
fi

# Backup current .env before mutation.
BACKUP="${ENV_FILE}.bak.$(date -u +%Y%m%d-%H%M%S)"
cp "${ENV_FILE}" "${BACKUP}"
log "backed up .env to ${BACKUP}"

# Use a tmpfile + mv for atomicity (no half-written .env if power dies).
TMP_ENV="$(mktemp)"
awk -v tok="${NEW_TOKEN}" '
  BEGIN { written = 0 }
  /^INSTAGRAM_ACCESS_TOKEN=/ { print "INSTAGRAM_ACCESS_TOKEN=" tok; written = 1; next }
  { print }
  END { if (!written) print "INSTAGRAM_ACCESS_TOKEN=" tok }
' "${ENV_FILE}" > "${TMP_ENV}"

# Sanity-check: tmpfile must contain the new token and be non-empty.
if [[ ! -s "${TMP_ENV}" ]] || ! grep -q "^INSTAGRAM_ACCESS_TOKEN=${NEW_TOKEN}$" "${TMP_ENV}"; then
  log "FAILURE: tmpfile sanity-check failed — leaving original .env untouched"
  rm -f "${TMP_ENV}"
  exit 1
fi

# Atomic replace + preserve perms.
chmod --reference="${ENV_FILE}" "${TMP_ENV}" 2>/dev/null || chmod 0640 "${TMP_ENV}"
mv "${TMP_ENV}" "${ENV_FILE}"
log "wrote new token to ${ENV_FILE}"

# Keep only the last 5 backups to avoid disk creep.
ls -1t "${ENV_FILE}".bak.* 2>/dev/null | tail -n +6 | xargs -r rm -f
log "pruned old .env backups (kept latest 5)"

# --- Step 4: Rebuild + restart container so build args pick up new token. ---
log "rebuilding container via ${DOCKER_COMPOSE_CMD} -f ${DOCKER_COMPOSE_FILE} up -d --build"
if (cd "${REPO_DIR}" && set -a && . "${ENV_FILE}" && set +a && ${DOCKER_COMPOSE_CMD} -f "${DOCKER_COMPOSE_FILE}" up -d --build --remove-orphans) >>"${LOG_FILE}" 2>&1; then
  log "container rebuild + up succeeded"
else
  log "FAILURE: container rebuild failed — restoring previous .env from ${BACKUP}"
  cp "${BACKUP}" "${ENV_FILE}"
  exit 1
fi

# --- Step 5: Verify the new token is live. ---
sleep 5
VERIFY="$(curl --silent --max-time 10 "${SITE_URL}/api/instagram/refresh" || echo '{}')"
if echo "${VERIFY}" | grep -q '"valid":true'; then
  log "SUCCESS: container running new token, /api/instagram/refresh reports valid:true"
  exit 0
fi

log "WARN: container restarted but verify-endpoint did not return valid:true"
log "verify response: ${VERIFY}"
exit 1
