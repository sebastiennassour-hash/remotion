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
rm -f public/vclips/*.mp4
fetch vclips.json vclips mp4
rm -f public/vo/*.wav
[ -f vo.json ] && fetch vo.json vo wav || true
[ -f music.json ] && fetch music.json music m4a || true
mkdir -p public/audio && cp -f public/music/*.m4a public/audio/ 2>/dev/null || true
[ -f aclips.json ] && fetch aclips.json asmr mp4 || true
true
