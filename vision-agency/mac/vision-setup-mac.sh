#!/bin/bash
# VISION — mise en ordre du Mac en une commande. À lancer une fois dans le Terminal :
#   bash ~/Downloads/vision-setup-mac.sh
# Ne supprime rien : déplace les fichiers VISION du bureau dans une arborescence unique et
# fait pointer VISION.html vers le QG du jour qui se régénère chaque matin.
set -e
ROOT="$HOME/VISION"
QG_URL="https://claude.ai/artifact/4Q2vbDBZctfJ8ii5tT2T5Y"

mkdir -p "$ROOT"/{00-QG,01-Clients/_Template/{01-Brief,02-Rushs,03-Montages,04-Livrables,05-Rapports,06-Factures},02-Prospection/{Fiches,Appels},03-Production/{Rushs-entrants,Rendus},04-Finance/{Factures-emises,Provisions,Fiduciaire},05-Juridique,06-Marque/Kit-v11,07-Process,08-Archives/Galata,09-Inbox}

# 1. Le QG : un seul fichier sur le bureau, qui ouvre la page du jour.
cat > "$ROOT/00-QG/VISION.html" <<HTML
<!doctype html><meta charset="utf-8"><title>VISION · Aujourd'hui</title>
<meta http-equiv="refresh" content="0; url=$QG_URL">
<body style="background:#0b0a0d;color:#f1ece4;font-family:-apple-system,system-ui;display:grid;place-items:center;height:100vh;margin:0">
<a href="$QG_URL" style="color:#e63946;font-size:28px;text-decoration:none">Ouvrir le QG du jour →</a></body>
HTML

# 2. Les fichiers connus du bureau, rangés (déplacés, jamais supprimés).
D="$HOME/Desktop"
mv_if() { [ -e "$D/$1" ] && mv -n "$D/$1" "$2/" && echo "→ $1 rangé dans $2"; return 0; }
mv_if "VISION.html"            "$ROOT/08-Archives"
mv_if "EN COURS.md"            "$ROOT/00-QG"
mv_if "QG DU JOUR"             "$ROOT/08-Archives"
mv_if "LANCER LES APPELS"      "$ROOT/02-Prospection/Appels"
mv_if "FAIRE SIGNER"           "$ROOT/05-Juridique"
mv_if "STRATÉGIES À PRÉSENTER" "$ROOT/02-Prospection"
mv_if "VISION-POCHE"           "$ROOT/02-Prospection"
mv_if "RDV ENREGISTRÉS"        "$ROOT/02-Prospection/Appels"
mv_if "MES RESTAU"             "$ROOT/02-Prospection/Fiches"
mv_if "DÉPÔT RUSHS"            "$ROOT/03-Production/Rushs-entrants"
mv_if "À IMPRIMER"             "$ROOT/05-Juridique"
mv_if "ARCHIVES"               "$ROOT/08-Archives"
mv_if "VISION OS"              "$ROOT/07-Process"

# 3. Raccourci unique sur le bureau.
ln -sfn "$ROOT/00-QG/VISION.html" "$D/VISION — Aujourd'hui.html"
ln -sfn "$ROOT" "$D/VISION"

# 4. Le dépôt des process, à jour chaque matin à 06h30 (git requis : xcode-select --install si absent).
if command -v git >/dev/null; then
  if [ ! -d "$ROOT/07-Process/vision-agency/.git" ]; then
    git clone -q --depth 1 --filter=blob:none --sparse -b claude/tout-casser-d7x5c9 https://github.com/sebastiennassour-hash/remotion "$ROOT/07-Process/vision-agency" 2>/dev/null \
      && (cd "$ROOT/07-Process/vision-agency" && git sparse-checkout set vision-agency) || echo "clone impossible (réseau ou accès) : à refaire plus tard"
  fi
  PL="$HOME/Library/LaunchAgents/com.vision.pull.plist"
  cat > "$PL" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
<key>Label</key><string>com.vision.pull</string>
<key>ProgramArguments</key><array><string>/bin/bash</string><string>-c</string><string>cd "$ROOT/07-Process/vision-agency" && git pull -q</string></array>
<key>StartCalendarInterval</key><dict><key>Hour</key><integer>6</integer><key>Minute</key><integer>30</integer></dict>
</dict></plist>
PLIST
  launchctl unload "$PL" 2>/dev/null; launchctl load "$PL" && echo "→ mise à jour automatique des process chaque matin à 06h30"
fi

# 5. Safari s'ouvre sur le QG (page d'accueil).
defaults write com.apple.Safari HomePage -string "$QG_URL" 2>/dev/null && echo "→ page d'accueil Safari = QG du jour"

echo
echo "Terminé. Arborescence : $ROOT"
echo "Prochaine étape pour que Claude écrive directement sur ce Mac : app Claude → Réglages → Claude Code → Remote Control → ajouter le dossier $ROOT"
