#!/usr/bin/env bash

set -euo pipefail

SITE_URL="${SITE_URL:-https://recounting.my.id}"
SITE_HOST="${SITE_HOST:-recounting.my.id}"

fetch() {
  curl --retry 5 --retry-delay 2 --retry-connrefused -sS "$@"
}

fetch_head() {
  curl --retry 5 --retry-delay 2 --retry-connrefused -sSI "$@"
}

echo "Checking ${SITE_URL}"

home_html="$(fetch "${SITE_URL}/")"
robots_txt="$(fetch "${SITE_URL}/robots.txt")"
sitemap_headers="$(fetch_head "${SITE_URL}/sitemap.xml")"
http_sitemap_headers="$(fetch_head "http://${SITE_HOST}/sitemap.xml")"

echo "${home_html}" | grep -q '<link rel="canonical" href="https://recounting.my.id/"'
echo "${home_html}" | grep -q '<meta name="robots" content="index, follow"'

if echo "${home_html}" | grep -q 'your-google-verification-code'; then
  echo "Placeholder Google verification tag is still present"
  exit 1
fi

echo "${robots_txt}" | grep -q 'Sitemap: https://recounting.my.id/sitemap.xml'

if echo "${robots_txt}" | grep -q '/_next/'; then
  echo "robots.txt still blocks /_next/"
  exit 1
fi

echo "${sitemap_headers}" | grep -Eiq '^HTTP/.* 200'
echo "${sitemap_headers}" | grep -Eiq '^content-type: application/xml'
echo "${http_sitemap_headers}" | grep -Eiq '^HTTP/.* 30[18]'

echo "SEO checks passed"
