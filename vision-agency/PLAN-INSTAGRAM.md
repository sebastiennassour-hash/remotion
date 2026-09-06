# Vision — Plan Instagram & TikTok · 14 jours (kit final du 6 septembre)

Un seul message, répété sous vingt angles : **Vision n’est pas une agence qui vend des vidéos. On accompagne les restaurants de Suisse romande sur la durée : on revient tourner chez eux chaque semaine, on publie, on mesure, on ajuste, jusqu’à ce qu’ils deviennent des références. Et c’est rentable pour eux dès le premier mois. Chez ceux qu’on accompagne : ×3 clients en moins de 90 jours, +50 % de chiffre d’affaires, plus de 500 000 personnes touchées.**

Règles : aucun nom de client, aucun décompte de vidéos, aucun prix en public, aucune voix synthétique. Le CTA est toujours le message privé.

## 1. Profil

**Nom** : Vision · Croissance des restaurants
**Bio** :
```
On accompagne les restaurants, sur la durée, à devenir des références
×3 clients en moins de 90 jours · Suisse romande
Un restaurant par cuisine, par ville
↓ Votre place est-elle libre ?
```
**Lien** : visionmedia-agency.com (page candidature : nom du restaurant, ville, Instagram, téléphone).
**Photo de profil** : losange or sur noir.
**Stories à la une** (couvertures `out/PROFIL-Story-*.png`) : Coulisses · Méthode · Suisse · Contact.
**Épinglés** : Brand film v2 · Carrousel 01 « 21h14. Un mardi. » · Post 11 « ×3 clients ».

## 2. Grille

Alternance : **photo forte → carrousel ou reel → photo avec chiffre**. Jamais deux chiffres côte à côte. Ordre de la première grille (aperçu `GRILLE-Apercu.png`) : 03 Table · 02 Façade · 07 Geste · 10 Avant · 11 Lausanne · 01 POV · 12 Fondue · 16 Chef · 17 Feu · 19 Rire · 14 Scène · 05 Chefs.

## 3. Calendrier · fichiers dans `deliverables/`

| Jour | Format | Contenu | Fichier |
| --- | --- | --- | --- |
| J1 lun | Reel épinglé | Brand film v2 | `reels-final/small-VISION-Film2.mp4` |
| J1 | Post | 03 Table « Une salle pleine un mardi » | `posts-final/POST-03-Table.png` |
| J1 | Stories ×3 | 03, 19, 11 | `stories/STORY-03…19…11.png` |
| J2 mar | Carrousel épinglé | 01 « 21h14. Un mardi. » | `carousels/CAR-01-Soiree-01..07.png` |
| J2 | Story | 07 Geste | `stories/STORY-07-Geste.png` |
| J3 mer | Post | 02 Façade « Plus de clients. En 90 jours. » | `posts-final/POST-02-Facade.png` |
| J3 | Reel | Manifeste 01 | `reels-final/small-MANIFESTE-01-Manifeste.mp4` |
| J4 jeu | Post | 07 Geste « 500 000 personnes » | `posts-final/POST-07-Geste.png` |
| J4 | Post | 09 « Vous voyez tout. Vous validez tout. Depuis votre app. » | `posts-final/POST-09-Moniteur.png` |
| J4 | Story | 12 Fondue | `stories/STORY-12-Fondue.png` |
| J5 ven | Reel | ASMR « Le service » | `reels-final/small-ASMR-01-Service.mp4` |
| J5 | Post | 10 Avant le service | `posts-final/POST-10-Avant.png` |
| J6 sam | Post | 11 Lausanne « ×3 clients » | `posts-final/POST-11-Lausanne.png` |
| J6 | Stories ×2 | 10, 13 | `stories/STORY-10…13.png` |
| J7 dim | Carrousel | 04 « Cuisine » | `carousels/CAR-04-Cuisine-01..10.png` |
| J8 lun | Reel | Explicatif 01 « L’accompagnement » | `reels-final/small-EXP-01-Methode.mp4` |
| J8 | Story | 09 « Votre app » | `stories/STORY-09-Moniteur.png` |
| J8 | Post | 01 POV | `posts-final/POST-01-POV.png` |
| J9 mar | Post | 12 Fondue | `posts-final/POST-12-Fondue.png` |
| J9 | Story | 17 Feu | `stories/STORY-17-Feu.png` |
| J10 mer | Carrousel | 02 « Chez vous. Chaque semaine. » | `carousels/CAR-02-Coulisses-01..07.png` |
| J10 | Reel | Explicatif 03 « Étude de cas » | `reels-final/small-EXP-03-Client.mp4` |
| J11 jeu | Post | 16 Chef « De bonne adresse à référence » | `posts-final/POST-16-Uniquement.png` |
| J11 | Story | 16 | `stories/STORY-16-Uniquement.png` |
| J12 ven | Reel | Manifeste 02 « Ce qu’on construit » | `reels-final/small-MANIFESTE-02-Salle.mp4` |
| J12 | Post | 17 Feu « Vu 16 fois plus » | `posts-final/POST-17-Feu.png` |
| J13 sam | Carrousel | 03 « On ne travaille qu’avec des restaurants » | `carousels/CAR-03-Restaurants-01..07.png` |
| J13 | Post | 19 Rire | `posts-final/POST-19-Rire.png` |
| J14 dim | Reel | Explicatif 04 « Candidatures » | `reels-final/small-EXP-04-Candidatures.mp4` |
| J14 | Post | 20 Plateau « Candidatures ouvertes » | `posts-final/POST-20-Plateau.png` |
| J14 | Stories ×3 | 20, 05, 06 + sticker « Envoyez-nous votre ville » | `stories/STORY-20…05…06.png` |

Semaines 3 et 4 : posts 04, 05, 06, 08, 09, 13, 14, 15, 18 (un jour sur deux), reel Explicatif 02, republication des trois meilleurs reels en TikTok.

Heures : posts 11h30 ou 18h45 · reels 19h · stories 12h et 21h.

## 4. Légendes

Posts : `LEGENDES-POSTS-PHOTO.md`. Carrousels : champ `caption` dans `src/carousel/carousels.ts`. Reels : première phrase du reel + bloc signature :
```
Vision. On accompagne les restaurants de Suisse romande sur la durée, jusqu’à ce qu’ils deviennent des références.
Un restaurant par cuisine, par ville.
Votre place est peut-être encore libre : message privé.
```
Hashtags en premier commentaire : `#restaurantsuisse #gastronomiesuisse #fribourg #lausanne #geneve #videomarketing #restaurantmarketing #suisseromande`

## 5. Réponses aux messages privés

Voir `SCRIPTS-PROSPECTION.md`.
