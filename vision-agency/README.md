# Vision Agency — Campagne social media

Quinze posts Instagram (format 4:5, 1080 × 1350) qui vendent Vision, l’agence vidéo exclusivement dédiée aux restaurants en Suisse. Tout est généré en code avec Remotion : changer un mot, une couleur ou l’ordre des posts se fait dans un seul fichier, puis on relance le rendu.

## Direction artistique

- **Typo** : Instrument Serif (titres, italique accentuée) + Inter Tight (texte) + JetBrains Mono (étiquettes, index).
- **Palette** : encre `#0B0B0C`, crème `#F2ECE2`, accent tomate `#E2532D`. Trois fonds alternés pour donner un rythme au feed.
- **Système** : en-tête VISION + index `01 — 15`, pied avec étiquette du post et signature « Agence vidéo · Restaurants · Suisse », grain argentique, halo chaud, numéro fantôme.
- **Animation** : révélation mot à mot par ressort amorti, filets qui se tracent, 6 secondes, tenue finale pour la lecture.

## Fichiers

| Chemin | Rôle |
| --- | --- |
| `src/posts.ts` | Tout le contenu : titres, sous-titres, légendes, palette et gabarit de chaque post. C’est le seul fichier à toucher pour changer la campagne. |
| `src/theme.ts` | Couleurs, format, durée. |
| `src/templates/` | Les six gabarits : `Hero`, `Stack`, `Split`, `Steps`, `Ticker`, `WordmarkPost`. |
| `src/components/` | Briques partagées : `Chrome` (en-tête/pied), `Headline` (révélation mot à mot), `Grain`, `Glow`, `Rule`, `Reveal`. |
| `render.mts` | Rend tous les posts en MP4 + PNG et la planche contact dans `out/`. |
| `captions.mts` | Génère `out/LEGENDES.md` avec le texte à l’écran et la légende de chaque post. |
| `out/` | Livrables rendus. |

Dans un titre, `*mot*` passe le mot en italique serif couleur accent, et `\n` force un retour à la ligne.

## Commandes

```bash
cd vision-agency
bun install

# Studio Remotion pour prévisualiser et ajuster
bun run dev

# Rendu complet : 15 MP4 + 15 PNG + planche contact
bun render.mts

# Options
bun render.mts --stills-only
bun render.mts --only=VA-05-Reels

# Légendes prêtes à coller
bun captions.mts
```

Le script de rendu utilise le Chromium de la machine s’il le trouve (variable `CHROME_PATH` pour forcer un binaire), sinon Remotion télécharge le sien.

## Ajouter un post

1. Ajouter une entrée dans `src/posts.ts` avec un `slug`, une `label`, une `palette` et un `content` d’un des six gabarits.
2. Mettre à jour `TOTAL_POSTS` dans `src/theme.ts` si le compteur `01 — 15` doit changer.
3. Relancer `bun render.mts`.
