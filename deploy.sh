#!/usr/bin/env bash
set -euo pipefail

if ! command -v vercel >/dev/null 2>&1; then
  echo "Vercel CLI not found. Install with 'npm install -g vercel'." >&2
  exit 1
fi

npm install
npm run lint
npm run test -- --watch=false
npm run build

vercel deploy --prebuilt --prod
