# Vision — Plan Instagram & TikTok · 14 jours (kit du 29 octobre, aligné sur le Hub)

Un seul message, répété sous vingt angles : **On remplit vos tables. Vision est le partenaire de croissance des restaurants, en Suisse : on revient tourner chez eux chaque semaine, on publie, on mesure, on ajuste, jusqu’à ce qu’ils deviennent des références. Objectif chiffré fixé ensemble au départ, chiffres chaque mois, sans engagement.**

Règles (Hub VISION, validées par Nassour) : aucun chiffre de résultat non prouvé (risque art. 3 LCD), jamais « agence vidéo », aucun nom de client, aucun décompte de vidéos, aucun prix en public, aucune voix synthétique. Le CTA est toujours le message privé. Un chiffre ne revient dans le kit qu’avec une preuve archivée (export, caisse, réservations) d’un client qui a signé l’Annexe A.

## 1. Profil

**Nom** : Vision · On remplit vos tables
**Bio** :
```
Partenaire de croissance des restaurants · Suisse
On remplit vos tables. Et on reste.
Un restaurant par cuisine, par ville
↓ Votre place est-elle libre ?
```
**Lien** : visionmedia-agency.com (page candidature : nom du restaurant, ville, Instagram, téléphone).
**Photo de profil** : losange or sur noir.
**Stories à la une** (couvertures `out/PROFIL-Story-*.png`) : Coulisses · Méthode · Suisse · Contact.
**Épinglés** : Brand film v3 · Carrousel 01 « 21h14. Un mardi. » · Post 02 « On remplit vos tables ».

## 2. Grille

Alternance : **photo forte → carrousel ou reel → photo avec phrase dorée**. Jamais deux phrases dorées côte à côte. Ordre de la première grille (aperçu `GRILLE-Apercu.png`) : 03 Table · 02 Façade · 07 Geste · 10 Avant · 11 Lausanne · 01 POV · 12 Fondue · 16 Chef · 17 Feu · 19 Rire · 14 Scène · 05 Chefs.

## 3. Calendrier · fichiers dans `deliverables/`

| Jour | Format | Contenu | Fichier |
| --- | --- | --- | --- |
| J1 lun | Reel épinglé | Brand film v3 « Ce soir, on mange » | `reels-final/small-VISION-Film3.mp4` |
| J1 | Post | 03 Table « Une salle pleine un mardi » | `posts-final/POST-03-Table.png` |
| J1 | Stories ×3 | 03, 19, 11 | `stories/STORY-03…19…11.png` |
| J2 mar | Carrousel épinglé | 01 « 21h14. Un mardi. » | `carousels/CAR-01-Soiree-01..07.png` |
| J2 | Story | 07 Geste | `stories/STORY-07-Geste.png` |
| J3 mer | Post | 02 Façade « On remplit vos tables » | `posts-final/POST-02-Facade.png` |
| J4 jeu | Post | 07 Geste « Personne ne le voyait » | `posts-final/POST-07-Geste.png` |
| J4 | Post | 09 « Vous voyez tout. Vous validez tout. Depuis votre app. » | `posts-final/POST-09-Moniteur.png` |
| J4 | Story | 12 Fondue | `stories/STORY-12-Fondue.png` |
| J5 ven | Reel | ASMR « Le service » | `reels-final/small-ASMR-01-Service.mp4` |
| J5 | Post | 10 Avant le service | `posts-final/POST-10-Avant.png` |
| J6 sam | Post | 11 Lausanne « Du lundi au jeudi. Plein aussi. » | `posts-final/POST-11-Lausanne.png` |
| J6 | Stories ×2 | 10, 13 | `stories/STORY-10…13.png` |
| J7 dim | Carrousel | 04 « Cuisine » | `carousels/CAR-04-Cuisine-01..10.png` |
| J8 lun | Reel | Explicatif 01 « L’accompagnement » | `reels-final/small-EXP-01-Methode.mp4` |
| J8 | Story | 09 « Votre app » | `stories/STORY-09-Moniteur.png` |
| J8 | Post | 01 POV | `posts-final/POST-01-POV.png` |
| J9 mar | Post | 12 Fondue | `posts-final/POST-12-Fondue.png` |
| J9 | Story | 17 Feu | `stories/STORY-17-Feu.png` |
| J10 mer | Carrousel | 02 « Chez vous. Chaque semaine. » | `carousels/CAR-02-Coulisses-01..07.png` |
| J10 | Reel | Explicatif 03 « Comment on mesure » | `reels-final/small-EXP-03-Mesure.mp4` |
| J11 jeu | Post | 16 Chef « De bonne adresse à référence » | `posts-final/POST-16-Uniquement.png` |
| J11 | Story | 16 | `stories/STORY-16-Uniquement.png` |
| J12 ven | Post | 13 « On ne vient pas une fois. On revient. » | `posts-final/POST-13-Arrivee.png` |
| J12 | Post | 17 Feu « Enfin montré » | `posts-final/POST-17-Feu.png` |
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
Vision. Partenaire de croissance des restaurants, en Suisse. On remplit vos tables, et on reste jusqu’à ce que votre adresse devienne une référence.
Un restaurant par cuisine, par ville.
Votre place est peut-être encore libre : message privé.
```
Hashtags en premier commentaire : `#restaurantsuisse #gastronomiesuisse #fribourg #lausanne #geneve #restaurantmarketing #suisseromande #remplirsestables`

## 5. Réponses aux messages privés

Voir `SCRIPTS-PROSPECTION.md`.

## 6. TikTok

Même compte, même grille. Sur TikTok on publie les **stories 9:16 en mode photo** (3 à 5 images par publication, musique tendance calme) et les posts à phrase dorée en image unique. Texte natif TikTok au-dessus, deux lignes maximum.

| Publication | Images | Texte natif TikTok |
| --- | --- | --- |
| Un mardi | STORY-03, 19, 08, 18 | « Un mardi soir. Salle pleine. On remplit vos tables. » |
| Cuisine | STORY-12, 17, 07 + CAR-04 slides 3, 6, 8 | « On filme ce que vos clients ne voient jamais. » |
| Lundi au jeudi | STORY-14, 11, 03 | « Du lundi au jeudi, plein aussi. Partenaire de croissance des restaurants. » |
| Coulisses | STORY-13, 01, 09, 20 | « On ne vient pas une fois. On revient chaque semaine. » |
| Le patron | STORY-06, 05, 16 | « Trente ans de métier. Enfin filmé. » |

Légende TikTok : la première phrase du post + « Un restaurant par cuisine, par ville. Suisse. » Hashtags : #restaurant #suisse #fribourg #lausanne #geneve #food #foodtok #chef.
