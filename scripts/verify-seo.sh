#!/usr/bin/env bash

set -euo pipefail

SITE_URL="${SITE_URL:-https://recounting.my.id}"
SITE_HOST="${SITE_HOST:-recounting.my.id}"
MAX_ATTEMPTS="${MAX_ATTEMPTS:-20}"
SLEEP_SECONDS="${SLEEP_SECONDS:-3}"

fetch() {
  curl --retry 5 --retry-delay 2 --retry-connrefused -sS "$@"
}

fetch_head() {
  curl --retry 5 --retry-delay 2 --retry-connrefused -sSI "$@"
}

echo "Checking ${SITE_URL}"

attempt=1

while [ "${attempt}" -le "${MAX_ATTEMPTS}" ]; do
  home_html="$(fetch "${SITE_URL}/")"
  robots_txt="$(fetch "${SITE_URL}/robots.txt")"
  sitemap_headers="$(fetch_head "${SITE_URL}/sitemap.xml" | tr -d '\r')"
  http_sitemap_headers="$(fetch_head "http://${SITE_HOST}/sitemap.xml" | tr -d '\r')"

  if grep -q '<link rel="canonical" href="https://recounting.my.id/"' <<<"${home_html}" &&
    grep -q '<meta name="robots" content="index, follow"' <<<"${home_html}" &&
    ! grep -q 'your-google-verification-code' <<<"${home_html}" &&
    grep -q 'Sitemap: https://recounting.my.id/sitemap.xml' <<<"${robots_txt}" &&
    ! grep -q '/_next/' <<<"${robots_txt}" &&
    grep -Eiq '^HTTP/.* 200' <<<"${sitemap_headers}" &&
    grep -Eiq '^content-type: application/xml' <<<"${sitemap_headers}" &&
    grep -Eiq '^HTTP/.* 30[18]' <<<"${http_sitemap_headers}" &&
    grep -Eiq '^location: https://recounting\.my\.id/sitemap\.xml/?$' <<<"${http_sitemap_headers}"; then
    echo "SEO checks passed"
    exit 0
  fi

  echo "SEO checks not ready yet (attempt ${attempt}/${MAX_ATTEMPTS})"
  attempt=$((attempt + 1))
  sleep "${SLEEP_SECONDS}"
done

echo "SEO checks failed after ${MAX_ATTEMPTS} attempts"
echo "Homepage snippet:"
echo "${home_html}" | head -n 5
echo "robots.txt:"
echo "${robots_txt}"
echo "HTTPS sitemap headers:"
echo "${sitemap_headers}"
echo "HTTP sitemap headers:"
echo "${http_sitemap_headers}"
exit 1
