#!/usr/bin/env bash
# Télécharge photos, plans vidéo et voix off (photos.json, vclips.json, vo.json) dans public/.
set -euo pipefail
cd "$(dirname "$0")"
fetch() { # json dossier extension
	mkdir -p "public/$2"
	for n in $(jq -r 'keys[]' "$1"); do
		url=$(jq -r --arg n "$n" '.[$n]' "$1")
		[ -s "public/$2/$n.$3" ] || curl -fsSL -o "public/$2/$n.$3" "$url"
	done
	echo "✔ $2 : $(ls public/$2 | wc -l)"
}
rm -f public/photos/*.png
fetch photos.json photos png
fetch vclips.json vclips mp4
[ -f vo.json ] && fetch vo.json vo wav || true
true
