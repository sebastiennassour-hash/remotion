# Pipeline de montage assisté par IA — de A à Z

**VISION — des rushs au post publié, en 4 jours.**
Version 1.0 · 1er novembre 2026 · Dépôt : `/vision-agency` (Remotion). Références : `BRIEF-TOURNAGE-STANDARD.md`, `GRILLE-NOTATION-RUSHS.md`, `BAREME-PHOTOGRAPHE.md`, `src/galata/edl.ts`, `src/galata/BrandFilm.tsx`, `fetch-clips.sh`.

## 1. Vue d'ensemble

```
J0            J+1                  J+2                       J+3              J+4
Tournage  →  Contrôle (grille)  →  Sélection 5 s + EDL   →  Validation     →  Publication
Dépôt Drive  Nassour valide        Rendu Remotion            client (app)      ClickUp fermé
             clips.json            out/[CLIENT]-*.mp4                          avec l'URL
```

| Étape | Qui | Échéance | Livrable | État ClickUp |
| --- | --- | --- | --- | --- |
| 1. Tournage et dépôt | Vidéaste | **J0**, avant minuit | 48 fichiers + `R-21-SON` + droits + notes dans Drive | Rushs déposés |
| 2. Contrôle qualité | Monteur, validé par Nassour | **J+1** midi (monteur), J+1 soir (Nassour) | Grille remplie, score, liste de reprise | Rushs validés / Reprise demandée |
| 3. Sélection des 5 s | Monteur (IA en assistance) | **J+2** matin | `clips.json` avec timecodes | Sélection faite |
| 4. EDL Remotion | Monteur (IA en assistance) | **J+2** | `src/clients/[client]/edl.ts` | Montage en cours |
| 5. Rendu | Script | **J+2** soir | `out/[CLIENT]/...mp4` + PNG de couverture | Rendu prêt |
| 6. Validation client | Client, relancé par Nassour | **J+3** | Approbation dans l'app (ou demande de correction) | En validation / Corrections |
| 7. Publication | Nassour ou community manager | **J+4** | Post en ligne, URL | Publié |
| 8. Clôture | Monteur | **J+4** | Tâche fermée avec URL, score, fichiers archivés | Fermé |

Une correction client (étape 6) renvoie à l'étape 4 avec un délai de 24 h : publication au plus tard J+5. Deux tours de corrections maximum inclus.

## 2. Étape par étape

### Étape 1 — Rushs reçus (J0)

- Le vidéaste dépose dans `Drive / Tournages / [CLIENT] / [DATE] / rushs /`.
- La tâche ClickUp « Tournage [CLIENT] [DATE] » existe déjà (créée à la prise de rendez-vous, avec le brief en pièce jointe). Le vidéaste la passe en **Rushs déposés** et y colle ses notes de tournage.
- Un script de réception (`fetch-clips.sh` étendu) liste les fichiers, vérifie le nommage `[CLIENT]_[DATE]_R-NN_[A|B]`, la présence des 24 numéros, la cadence des ralentis (ffprobe), la durée ≥ 8 s, la présence d'une piste audio. Il écrit un rapport `RECEPTION.md` dans le dossier et commente la tâche ClickUp : « 47/48 fichiers, manquant R-20_B, R-07 à 25 i/s au lieu de 120 ».

### Étape 2 — Contrôle (J+1)

- Le monteur visionne les 48 prises et remplit la grille (`GRILLE-NOTATION-RUSHS.md`, gabarit ClickUp). Il choisit la meilleure prise par plan et note le **timecode de début des 5 secondes parfaites**.
- Nassour valide le score. Le champ « Score rushs » est rempli ; le vidéaste est notifié (le barème s'applique).
- Si score < 75 ou ≥ 4 plans à 0 : **Reprise demandée**, liste des plans dans la tâche, nouveau dépôt sous 7 jours, retour à l'étape 1.

### Étape 3 — Sélection des 5 secondes : `clips.json`

Aujourd'hui `clips.json` associe un numéro à une URL (`"01": "https://…mp4"`) et `fetch-clips.sh` télécharge dans `public/clips/`. Pour les tournages réels, on garde le même fichier et le même script, avec une valeur étendue par plan : fichier source, prise retenue, point d'entrée des 5 s, score et commentaire. Un `clips.json` par client et par tournage : `clients/[client]/[date]/clips.json`.

```json
{
	"client": "GALATA",
	"date": "2026-11-07",
	"bpm": 96,
	"clips": {
		"R-01": {"src": "GALATA_2026-11-07_R-01_A.mp4", "take": "A", "in": 2.4,  "out": 7.4,  "score": 95,   "note": "assiette posée à 3.1 s"},
		"R-07": {"src": "GALATA_2026-11-07_R-07_B.mp4", "take": "B", "in": 1.0,  "out": 6.0,  "score": 95,   "fps": 120, "note": "flambée complète 1.0–4.2 s"},
		"R-10": {"src": "GALATA_2026-11-07_R-10_A.mp4", "take": "A", "in": 0.8,  "out": 5.8,  "score": 92.5, "fps": 60,  "sound": true},
		"R-13": {"src": "GALATA_2026-11-07_R-13_A.mp4", "take": "A", "in": 1.5,  "out": 6.5,  "score": 87.5, "note": "sourire à 3.4 s"},
		"R-20": null
	}
}
```

Règles :

- `in` et `out` en secondes dans le fichier source, `out − in = 5`. C'est `in` qui devient `from` dans l'EDL.
- `null` = plan manquant ou inutilisable : l'EDL ne doit jamais le référencer ; le script de rendu refuse de rendre un EDL qui pointe sur un `null`.
- Un script `select-clips.mts` (à écrire) copie les 24 extraits `in → out` (+ 1 s de chaque côté) vers `public/clips/[client]/R-NN.mp4` avec ffmpeg, sans réencodage quand c'est possible. On ne monte jamais depuis les originaux de 4K dans Remotion : on monte sur les extraits 1080 × 1920 proxys, et on rend avec les extraits 4K.

### Étape 4 — EDL Remotion

Le moteur est `src/galata/BrandFilm.tsx` avec le type `Edl` de `src/galata/edl.ts` : `bpm`, `music`, `shots[]` (`src`, `from`, `beats`, `speed`, `text`, `textStyle`, `flash`, `focusY`), `endCard`, `kicker`, `grade`. Une image = `(60 / bpm) × fps` par temps ; à 96 bpm et 30 i/s, un temps = 18,75 images, soit 0,625 s. Un plan de 1 temps = 0,6 s, 2 temps = 1,25 s, 4 temps = 2,5 s : les 5 secondes livrées couvrent toujours le besoin : à vitesse 1, le plan le plus long (4 temps) consomme 2,5 s de source ; en ralenti (vitesse 0,5 ou 0,25) encore moins, puisque le ralenti étire la source. Le plan le plus long possible sans manquer de matière est 8 temps à vitesse 1.

Gabarit standard « Ce soir, on mange chez vous » (30 s, 96 bpm), reprenant `SHOTLIST-FILM-CE-SOIR.md` avec les numéros du brief :

| Ordre | Plan | Temps | Vitesse | Texte (Bibliothèque) |
| --- | --- | --- | --- | --- |
| 1 | R-01 | 2 | 1 | **CE SOIR,** (big, flash) |
| 2 | R-02 | 2 | 1 | **ON MANGE** (big) |
| 3 | R-03 | 2 | 1 | **CHEZ VOUS.** (big) |
| 4 | R-05 | 1 | 1 | |
| 5 | R-06 | 1 | 1 | |
| 6 | R-08 | 2 | 1 | |
| 7 | R-07 | 2 | 0.25 (120 i/s) | |
| 8 | R-10 | 2 | 0.5 (60 i/s) | |
| 9 | R-09 | 1 | 0.5 | |
| 10 | R-11 | 2 | 1 | |
| 11 | R-13 | 2 | 1 | |
| 12 | R-14 | 2 | 1 | On ne vend pas des vidéos. (serif) |
| 13 | R-23 | 2 | 1 | On revient. Chaque semaine. (serif) |
| 14 | R-15 | 1 | 1 | |
| 15 | R-17 | 2 | 1 | **ON REMPLIT** (big, flash) |
| 16 | R-16 | 2 | 1 | **VOS TABLES.** (big) |
| 17 | R-21 | 4 | 0.25 | Jusqu'à ce que vous refusiez du monde. (serif) |
| — | endCard sur R-24 ou noir | 6 | — | Nom du restaurant · kicker · CTA « Réservez · Lien en bio » |

Les plans non utilisés (R-04, R-12, R-18, R-19, R-20, R-22) servent aux déclinaisons : reel ASMR 10 s (R-22, R-06, R-10, R-09, R-07, son natif en avant), reel « plat du jour » 7 s (R-11, R-12, R-20, R-02), story façade (R-04), couverture (R-12 ou R-13).

Règles sur les textes, non négociables :

- **Uniquement des formulations de la Bibliothèque rédactionnelle** (Notion, 25 lignes : baseline « On remplit vos tables », « partenaire de croissance », etc.). L'EDL référence la ligne : `text: 'On remplit vos tables.'` avec un commentaire `// Bibliothèque L-03`.
- **Jamais de prix, jamais de chiffre non prouvé** (« +1520 % », « 12 000 personnes », « ×16 » sont classés Interdits dans la Bibliothèque faute d'export archivé). Un chiffre n'entre dans un film que si l'export ou la capture est joint dans la tâche ClickUp et que Nassour a coché « Prouvé ».
- **Jamais « agence vidéo »**, jamais de nom d'un autre client, pas d'emoji.
- Le `kicker` est le nom du restaurant + ville ; l'`endCard` reprend trois lignes factuelles (type de cuisine, spécialité, jours d'ouverture) données par le client, sans superlatif.

Le monteur crée `src/clients/[client]/edl.ts` à partir du gabarit, remplace `from` par les `in` de `clips.json`, choisit la musique (`music.json`, pistes libres de droits, offset sur le premier temps fort), règle `focusY` sur les plans recadrés, et vérifie dans le Studio (`bun run dev`) que chaque coupe tombe sur un temps.

### Étape 5 — Rendu

- `bun render.mts --only=[CLIENT]-Film` rend le film 1080 × 1920, 30 i/s, H.264, plus les déclinaisons et la PNG de couverture dans `out/[CLIENT]/[DATE]/`.
- Contrôle automatique après rendu : durée = somme des temps, niveau audio −14 LUFS, aucun plan `null`, texte uniquement depuis la Bibliothèque (le script compare chaque `text` à la liste exportée `bibliotheque.json`, et refuse tout `text` contenant un chiffre ou « CHF » sauf si `proven: true` est posé sur le plan avec l'URL de la preuve).
- Le monteur regarde le rendu en entier une fois, sur téléphone.

### Étape 6 — Validation client (J+3)

- Le rendu est poussé dans l'**app client** (espace de validation : un film, un bouton « Valider », un champ « Correction »). Nassour envoie le lien par message au restaurateur le J+2 soir.
- Le client valide ou demande une correction (texte, plan, musique). Sans réponse à J+3 18 h, Nassour appelle. Sans réponse à J+4 midi, publication reportée, tâche en « En attente client » ; on ne publie jamais sans validation.
- Chaque correction est notée dans la tâche ; au-delà de deux tours, le troisième est facturé au client selon son contrat (hors de ce document).

### Étape 7 — Publication (J+4)

- Publication sur les comptes du restaurant (et, si prévu au contrat, repartage par VISION) à l'horaire défini dans `PLAN-INSTAGRAM.md`. Légende issue de la Bibliothèque, générée par `captions.mts` ; pas de prix, pas de chiffre, pas de nom d'autre client.
- Capture d'écran du post publié dans la tâche.

### Étape 8 — Clôture

- La tâche ClickUp passe en **Fermé** avec : l'URL du post, le score rushs, le lien Drive des originaux, le lien du rendu, le `clips.json` et l'`edl.ts` commités dans le dépôt.
- Le vidéaste est payé selon le barème (sous 10 jours après J+1).
- Les statistiques du post sont relevées à J+7 et J+30 (`SYSTEME-DE-MESURE-CLIENT.md`) ; c'est la seule source de chiffres autorisée pour un futur texte.

## 3. Rôles

| Rôle | Responsable de | Ne fait pas |
| --- | --- | --- |
| **Vidéaste** | Les 24 plans, le son, les droits, le dépôt J0, les notes | Ne monte pas, ne publie pas, ne montre pas les rushs |
| **Monteur** | Grille, `clips.json`, EDL, rendu, contrôle sur téléphone, clôture ClickUp | Ne change pas les textes de la Bibliothèque, ne valide pas son propre score |
| **Nassour** | Validation de la grille (score définitif), textes et musique en cas de doute, relation client, publication | Ne refait pas le montage lui-même sauf exception |
| **Client (restaurateur)** | Droits à l'image du lieu, trois lignes factuelles pour le carton, validation J+3 | Ne choisit pas les plans un par un |
| **IA / scripts** | Réception, pré-notation, proposition de timecodes, EDL brouillon, contrôles avant rendu | Ne valide jamais seule : chaque proposition est relue par le monteur ; le score reste humain |

## 4. Automatisable aujourd'hui / plus tard

| Étape | Aujourd'hui (scripts dans le dépôt, ffmpeg/ffprobe, modèle de langue avec vision) | Plus tard (quand le volume le justifie) |
| --- | --- | --- |
| Réception | Vérification nommage, 24 numéros, cadence, durée, piste audio ; commentaire ClickUp automatique (`fetch-clips.sh` + ffprobe) | Surveillance du Drive en continu, création de la tâche de contrôle |
| Contrôle qualité | Pré-notation **technique** automatique : netteté (variance du laplacien), exposition (histogramme, hautes lumières écrêtées), stabilité (flux optique), durée, son (niveau, présence). Pré-remplit Net / Expo / Stab / Durée / Son ; le monteur note Conformité et Cadrage et corrige | Pré-notation de la conformité par un modèle vision entraîné sur nos grilles validées (3 mois d'historique minimum) ; détection automatique de lettrage, prix et visages non signés |
| Sélection des 5 s | Proposition de `in` par script : premier instant d'action (mouvement) après la tête propre, pic sonore pour R-06/R-10/R-22, instant de la flambée pour R-07. Le monteur confirme ou déplace | Sélection validée automatiquement quand la proposition et le monteur ont coïncidé à ±0,3 s sur 50 tournages |
| EDL | Génération de `edl.ts` depuis le gabarit + `clips.json` (plans, `from`, `speed`), textes du gabarit, musique au tempo | Choix de l'ordre et des temps par l'IA selon le type de restaurant et les scores des plans (mettre le meilleur plan en 1), variantes A/B |
| Rendu | `render.mts`, contrôles automatiques (durée, LUFS, textes Bibliothèque, chiffres interdits) | Rendu serveur (Lambda) déclenché par le commit de l'EDL, 5 déclinaisons d'un coup |
| Validation client | Lien d'app envoyé à la main par Nassour | Envoi automatique, rappel J+3 18 h, bouton « Valider » qui passe la tâche ClickUp |
| Publication | Manuelle, légende générée par `captions.mts` | Planification via l'API Instagram / TikTok à l'horaire du plan, URL écrite dans ClickUp |
| Clôture | Manuelle | Automatique à la publication, score vidéaste agrégé, facture du vidéaste pré-remplie |

Priorité d'implémentation : 1) réception et vérification technique (une journée de travail, enlève 80 % des allers-retours), 2) génération de l'EDL depuis `clips.json` (une demi-journée), 3) contrôles avant rendu sur les textes (une demi-journée), 4) pré-notation technique (deux à trois jours). Le reste attend d'avoir 20 tournages archivés avec grille validée.

## 5. Check-list de clôture d'un tournage

- [ ] Score rushs validé par Nassour, vidéaste notifié
- [ ] `clips.json` et `edl.ts` commités dans `src/clients/[client]/[date]/`
- [ ] Rendu contrôlé sur téléphone, contrôles automatiques passés
- [ ] Validation client enregistrée dans l'app (date, nom)
- [ ] Post publié, URL et capture dans la tâche
- [ ] Facture vidéaste reçue avec le numéro de tâche, paiement programmé sous 10 jours
- [ ] Tâche ClickUp fermée
