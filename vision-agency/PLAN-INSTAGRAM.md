# Vision — Plan Instagram & TikTok (14 jours)

Objectif : un compte qui vend l’agence pendant que Nassour prospecte. Un seul message répété sous dix angles : **Vision est l’agence vidéo exclusivement dédiée aux restaurants suisses, et son contenu remplit des salles.**

## 1. Profil

**Nom** : Vision · Vidéo pour restaurants
**Bio** (150 caractères max, 4 lignes) :

```
Agence vidéo. Restaurants. Suisse.
On filme votre salle, votre cuisine, votre histoire.
Un nombre limité de restaurants par mois.
↓ Candidatures
```

**Lien** : page de candidature (formulaire court : nom du restaurant, ville, Instagram, téléphone).
**Photo de profil** : losange or sur noir, pas de texte (le nom est déjà écrit à côté).
**Stories à la une** (couvertures dans `out/PROFIL-Story-*.png`, dans cet ordre) : Travaux · Coulisses · Méthode · Suisse · Contact.
**Épinglés** (3) : Brand film Vision · Reel Galata publié · Grille 01 Manifeste.

## 2. Grille

Alternance stricte pour un profil lisible : **film client → reel Vision → statement or/noir**. Jamais deux visuels typographiques côte à côte. Les statements or/noir (`out/PROFIL-Grille-*.png`) servent de respirations.

## 3. Calendrier

Heure de publication : 11h30 ou 18h30 (heure suisse). TikTok : même vidéo, légende raccourcie à une phrase, 3 hashtags.

| Jour | Format | Contenu | Fichier |
| --- | --- | --- | --- |
| J1 lun | Reel épinglé | Brand film Vision, 20 s | `VISION-BrandFilm.mp4` |
| J1 | Story ×3 | Coulisses du montage, sondage « Votre resto est sur Reels ? » | captures Studio |
| J2 mar | Reel | Galata Fribourg (dessert, reel déjà publié) reposté avec légende « Travail client » | rush Galata |
| J3 mer | Post | Grille 01 Manifeste | `PROFIL-Grille-01-Manifeste.png` |
| J4 jeu | Reel | Exclusif | `VF-01-Exclusif.mp4` |
| J5 ven | Reel | Coulisses | `VF-02-Coulisses.mp4` |
| J5 | Story | Face cam Nassour 30 s : « Pourquoi que des restaurants » | téléphone |
| J6 sam | Post | Grille 02 Exclusif | `PROFIL-Grille-02-Exclusif.png` |
| J7 dim | Repos | Stories seulement : coulisses d’un service Galata | téléphone |
| J8 lun | Reel | Suisse | `VF-03-Suisse.mp4` |
| J9 mar | Reel | Galata : interview Betül, extrait 15 s sous-titré | rush Galata |
| J10 mer | Reel | Spectacle | `VF-04-Spectacle.mp4` |
| J11 jeu | Post | Grille 03 Places | `PROFIL-Grille-03-Places.png` |
| J12 ven | Reel | Places (candidatures) | `VF-05-Places.mp4` |
| J12 | Story | Compte à rebours « Candidatures » + lien | natif IG |
| J13 sam | Reel | Galata : salle + musique live, 12 s | rush Galata |
| J14 dim | Story | Récap semaine, résultats Galata en chiffres si dispo | natif IG |

## 4. Légendes

Structure fixe : **accroche (1 ligne) · espace · 2 phrases · espace · signature « Vision. » + appel**. Pas d’émojis dans le texte, un seul en fin si besoin.

### Brand film
```
Nous ne filmons que des restaurants.

Vision est l’agence vidéo des restaurants suisses. Stratégie, tournage, montage, diffusion : un seul interlocuteur, de l’idée à la publication. Votre salle, votre cuisine, votre histoire, filmées comme elles le méritent.

Candidatures ouvertes. Lien en bio.
```

### Reels Vision
Les légendes des cinq reels sont dans `src/vision/edls.ts` (champ `caption`) et dans `out/LEGENDES-VF.md`.

### Reposts Galata
```
Travail client — Galata, Fribourg.

Café-restaurant turc, mezze maison, musique live. Tourné un soir de service, publié la semaine suivante.

Vision. Le contenu qui remplit.
```

## 5. Hashtags

Bloc unique de 8, en premier commentaire, pas dans la légende :

```
#restaurantsuisse #gastronomiesuisse #geneve #lausanne #fribourg #zurichfood #videomarketing #agencevideo
```

TikTok : `#restaurant #suisse #foodvideo`.

## 6. Son

Les fichiers sont livrés sans musique pour que le son soit ajouté dans l’app au moment de publier : choisir un son tendance dans la bibliothèque Instagram ou TikTok, tempo 95 à 105 BPM (les coupes sont calées à 100 BPM). Les reels Galata gardent leur son direct (musique live).

## 7. Règles de compte pendant la semaine de prospection

- Répondre à chaque commentaire dans l’heure, avec une question en retour.
- DM à chaque restaurant qui like un reel : « Merci, vous êtes où ? On se déplace dans toute la Suisse. »
- Pas de post sans story le même jour.
- Ne jamais publier deux visuels typographiques à la suite.
