#!/usr/bin/env bash
# Télécharge les plans générés (clips.json) dans public/clips/.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p public/clips
for n in $(jq -r 'keys[]' clips.json); do
	url=$(jq -r --arg n "$n" '.[$n]' clips.json)
	[ -s "public/clips/$n.mp4" ] || curl -fsSL -o "public/clips/$n.mp4" "$url"
	echo "✔ clips/$n.mp4"
done
