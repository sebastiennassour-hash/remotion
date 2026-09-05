# Livraison — Campagne Vision Agency

## Reels 9:16 (footage cinéma + typo)

Dix reels Instagram 1080 × 1920, 30 images/s, 5 ou 10 secondes, rendus avec Remotion sur les 12 plans générés.

- **Archive complète** (10 MP4 + 10 PNG + légendes) : https://d2ol7oe51mr4n9.cloudfront.net/user_3FqkaEzSuhqejW3vi12M4Z1Nzk2/03fb5d02-9fba-408a-88bb-25d53e24ab19.zip
- Aperçus directs :
  - VR-01 Manifeste : https://d2ol7oe51mr4n9.cloudfront.net/user_3FqkaEzSuhqejW3vi12M4Z1Nzk2/f60a02b3-a173-4754-b829-3207a7225cb7.mp4
  - VR-02 Exclusif : https://d2ol7oe51mr4n9.cloudfront.net/user_3FqkaEzSuhqejW3vi12M4Z1Nzk2/b2bdf8e0-1b57-4323-b065-80934d255bf8.mp4
  - VR-04 Offre : https://d2ol7oe51mr4n9.cloudfront.net/user_3FqkaEzSuhqejW3vi12M4Z1Nzk2/05eb42be-9b1b-4c40-bafe-718777871b25.mp4
  - VR-08 Spectacle : https://d2ol7oe51mr4n9.cloudfront.net/user_3FqkaEzSuhqejW3vi12M4Z1Nzk2/8ac8c58a-d26a-4a7d-a2d1-0309d3ae8ff3.mp4

| # | Reel | Plans | Gabarit |
| --- | --- | --- | --- |
| 01 | Manifeste | 02 façade blue hour | plein cadre |
| 02 | Exclusif | 01 dressage overhead | letterbox |
| 03 | Histoire | 03 portrait patron | plein cadre |
| 04 | Offre | 05 flammes + 09 chocolat | plein cadre, 2 plans |
| 05 | Reels | 06 table overhead | letterbox |
| 06 | Temps | 10 coulisses caméra | plein cadre |
| 07 | Suisse | 08 salle lac + 07 fondue | plein cadre, 2 plans |
| 08 | Spectacle | 04 vin + 11 bartender | plein cadre, 2 plans |
| 09 | Associé | 12 serveur en salle | letterbox |
| 10 | Places | 02 façade blue hour | plein cadre + CTA |

## Plans sources (Kling 3.0 pro, 5 s, 9:16, sans son)

Les URLs sont dans `clips.json`. Les images de départ ont été générées avec Cinema Studio 2.5 en 2K. Coût total : environ 130 crédits Higgsfield.

## Posts 4:5 typographiques

Quinze posts 1080 × 1350 dans `out/` (MP4 + PNG) et la planche contact `out/VA-Planche.png`. Légendes prêtes à coller dans `out/LEGENDES.md`.

## Refaire un rendu

```bash
cd vision-agency
npm i
./fetch-clips.sh                 # récupère les 12 plans
npx tsx render.mts --prefix=VR-  # les 10 reels
npx tsx render.mts               # les 15 posts
```

Pour changer un texte : `src/reels/reels.ts` (reels) ou `src/posts.ts` (posts), puis relancer.
