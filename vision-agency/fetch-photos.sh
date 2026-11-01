#!/usr/bin/env bash
# Télécharge les photos (photos.json) dans public/photos/.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p public/photos
for n in $(jq -r 'keys[]' photos.json); do
	url=$(jq -r --arg n "$n" '.[$n]' photos.json)
	[ -s "public/photos/$n.png" ] || curl -fsSL -o "public/photos/$n.png" "$url"
done
echo "✔ $(ls public/photos | wc -l) photos"
