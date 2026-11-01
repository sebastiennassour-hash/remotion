# Brief de tournage standard — « Les 5 secondes parfaites »

**VISION — partenaire de croissance des restaurants · Suisse romande**
Version 1.0 · 1er novembre 2026 · Remis au vidéaste avant chaque tournage, signé par les deux parties.

## 0. La règle du jeu

On ne veut plus de rushs d'une minute. On veut, pour chacun des 24 plans ci-dessous, **5 secondes parfaites** (tenues 8 secondes pour laisser de la marge au montage). Le montage se fait dans Remotion, au tempo de la musique (EDL en temps musicaux, 96 bpm par défaut) : un plan dure 1, 2 ou 4 temps, soit 0,6 à 2,5 secondes à l'écran. Chaque plan doit donc être **lisible instantanément** : un sujet, un geste, un mouvement, pas de recherche de cadre dans la prise.

Le vidéaste est payé plus s'il livre exactement les plans demandés (voir `BAREME-PHOTOGRAPHE.md`). Le monteur note chaque plan avec `GRILLE-NOTATION-RUSHS.md`. Les plans sont ensuite sélectionnés et montés avec assistance IA (`PIPELINE-MONTAGE-IA.md`).

Direction artistique de référence : flash direct / pellicule 35 mm, vraies personnes, Suisse romande, **aucun lettrage** (pas de menu, de prix, d'ardoise, d'écran de caisse lisible dans le cadre). Un seul mouvement de film : de la table au four, du four au chef, du chef à la salle.

## 1. Réglages caméra (obligatoires)

| Réglage | Valeur | Pourquoi |
| --- | --- | --- |
| Format | **Vertical 9:16**, capteur plein (pas de recadrage en caméra) | Reels / TikTok ; le recadrage vertical se fait au montage (`focusY`) |
| Résolution | **4K** (3840 × 2160 tourné en vertical, ou 2160 × 3840) | Marge de recadrage et de stabilisation |
| Cadence standard | **24 ou 25 i/s**, obturateur 1/48 – 1/50 | Rendu cinéma, flou de mouvement naturel |
| Ralentis | **60 i/s** (fromage, vin, versé) et **120 i/s** (flamme, coup de feu, sauce) | Lus à 0,5 ou 0,25 au montage (`speed`) |
| Exposition | **Manuelle**. ISO fixe par lieu, ouverture f/2 – f/2.8, pas d'auto-exposition | Aucun pompage de lumière à l'intérieur d'un plan |
| Balance des blancs | **Fixe** (3200 K intérieur tungstène, 4500 K mixte, 5600 K jour). Même valeur pour toute une scène | L'étalonnage (ombres froides, hautes lumières chaudes) est appliqué au montage |
| Profil | Log ou profil plat si disponible, sinon « neutre », contraste −2, saturation −1 | Garder les hautes lumières (flammes, bougies) |
| Mise au point | Manuelle ou AF verrouillé sur le sujet. Pas de pompage | Un plan qui cherche le point est refusé |
| Stabilisation | Gimbal pour les travellings ; à la main uniquement sur les macros avec appui | Stabilisation logicielle interdite (gelée) |
| Son | Micro intégré ou cravate ; niveaux −12 dB ; **son natif enregistré sur chaque plan** | L'ASMR (feu, couteau, fromage, versé) est monté avec la musique |
| Objectifs | 35 mm équivalent pour la salle, 50 – 85 mm pour les portraits, macro pour les détails | — |
| Lumière | Lumière du lieu + flash direct / petite LED pour accrocher la matière. Pas de ring light | Look 35 mm Portra 800 |

## 2. Les 24 plans

Pour chaque plan : **durée cible 5 s, tenue 8 s minimum**, 2 prises (A et B, cadrage ou action différente). Les numéros sont fixes : R-07 est toujours la flamme, chez tous les clients. C'est ce qui permet de réutiliser la même EDL d'un restaurant à l'autre.

| # | Plan | Cadrage | Mouvement | Lumière | Son natif | Accepté | Refusé |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R-01 | **Plongée table, l'assiette arrive** (plan d'ouverture) | Plongée 90°, table nette, assiette centrée, mains du serveur visibles | Fixe, l'assiette entre dans le cadre et se pose | Lumière de table, flash doux | Oui (pose de l'assiette) | L'assiette se pose entre 1 s et 3 s, reste immobile 4 s | Assiette déjà posée ; caméra qui bouge pendant la pose ; nappe froissée, miettes |
| R-02 | **La main pousse le plat vers la caméra** | Plongée ou 45°, le plat occupe le tiers central | Le plat glisse vers l'objectif, caméra fixe | Idem R-01 | Oui | Un seul geste, fluide, le plat finit net au premier plan | Deux gestes ; main qui masque le plat ; flou de mise au point en fin de course |
| R-03 | **Salle pleine, travelling latéral** | Plan large à hauteur d'épaule, 3 tables au moins occupées | Dolly / gimbal latéral lent, 5 s pour traverser | Lumière de la salle, soir de préférence | Oui (ambiance) | Clients en conversation, aucun regard caméra, mouvement régulier | Salle vide ou 1 table ; à-coups ; client qui regarde l'objectif ; téléphone lumineux au premier plan |
| R-04 | **Façade / entrée, heure bleue** | Plan large vertical, l'entrée au centre, enseigne hors champ ou floue | Fixe, ou très lent travelling avant | Heure bleue (20 – 30 min après le coucher du soleil), lumières intérieures allumées | Oui (rue) | Fenêtres chaudes, ciel bleu profond, un client qui entre | Enseigne lisible plein cadre ; plein jour ; nuit noire sans ciel ; voiture garée devant |
| R-05 | **Fumée sur le passe, contre-jour** | Plan moyen sur le passe, lampe chauffante en contre-jour | Fixe | Contre-jour, exposition pour la fumée (sous-exposer d'un diaph) | Oui | La fumée dessine des volutes, les assiettes au premier plan sont nettes | Pas de fumée ; passe cramé par la lampe ; cadre penché |
| R-06 | **Couteau sur les herbes, macro** | Macro, lame et herbes, mains du chef | Fixe ou très léger panoramique qui suit la lame | Lumière de cuisine + LED latérale | **Oui, essentiel** (le son du couteau) | 3 – 5 coups de couteau nets, herbes fraîches | Planche sale ; couteau qui sort du cadre ; son couvert par la hotte |
| R-07 | **Flamme dans la poêle** | Plan moyen serré, la poêle en bas de cadre, la flamme monte | Fixe, **120 i/s** | Exposer pour la flamme (sous-exposer la cuisine) | Oui (en 120 i/s le son est inutilisable : prendre le son de R-21) | Une flambée franche et complète, départ et fin dans la prise | Flamme coupée en haut de cadre ; plan trop large ; cuisine surexposée ; pas de flambée |
| R-08 | **Brigade en mouvement, travelling** | Plan large de la cuisine, 2 personnes au moins | Gimbal, travelling avant ou latéral, 5 s | Lumière de cuisine, balance fixe | Oui | Gestes de service, pas de pause, passage de plat | Cuisine à l'arrêt ; quelqu'un qui pose pour la caméra ; poubelle ou plonge au premier plan |
| R-09 | **Fromage qui tombe / qui coule** | Macro ou plan serré, l'assiette plein cadre | Fixe, **60 i/s** | LED rasante pour la matière | Oui (à 60 i/s, utilisable) | Le fromage tombe ou file sans interruption pendant 5 s | Fromage déjà tombé ; râpe qui masque ; main qui tremble |
| R-10 | **Vin / boisson versée, macro** | Macro, verre au tiers droit, reflets visibles | Fixe, **60 i/s** | Contre-jour ou lumière latérale pour les reflets | **Oui, essentiel** (le son du versé) | Le liquide monte dans le verre, pas de débordement, bouteille sans étiquette lisible | Étiquette lisible (prix, marque) ; verre sale ; verre déjà plein |
| R-11 | **Le plat sort du four / de la poêle** (plat signature 1) | Plan moyen, four ou passe, pelle / poêle / louche | Suivi lent du plat, de la source à l'assiette | Lumière du four, flash d'appoint | Oui | Le plat signature du restaurant, croûte, bulles, vapeur | Plat quelconque ; four éteint ; mouvement de caméra qui perd le plat |
| R-12 | **Plat signature 2, dressé, rotation** | 45°, assiette plein cadre, fond flou | Orbite lente (gimbal ou plateau tournant), 5 s pour un quart de tour | Flash direct + lumière de table | Non nécessaire | Dressage propre, assiette immaculée, rotation régulière | Trace de sauce sur le bord ; rotation à-coups ; assiette qui sort du cadre |
| R-13 | **Portrait du chef, bras croisés** | Plan poitrine, 50 – 85 mm, cuisine floue derrière | Fixe. Le chef regarde l'objectif, puis sourit | Lumière de cuisine en contre, LED douce en face | Non | Regard caméra 2 s, puis sourire ou rire franc. Tenue propre | Sourire forcé dès la première image ; fond cramé ; tablier taché ; regard qui fuit |
| R-14 | **Serveur en marche, plateau** | Plan moyen, serveur de face ou de trois quarts, salle floue | Caméra qui recule devant le serveur (gimbal) | Lumière de salle | Oui | Le serveur marche à vitesse normale, plateau plein, salle vivante derrière | Serveur qui regarde la caméra ; plateau vide ; cadre qui coupe la tête |
| R-15 | **Le patron rit avec un client** | Plan moyen, les deux visages dans le cadre | Fixe ou léger zoom avant | Lumière de table | Oui (rire) | Rire vrai, contact (main sur l'épaule, trinquer) | Scène jouée ; client sans droit à l'image signé ; visage caché |
| R-16 | **Cinq mains dans le même plat** (plongée) | Plongée 90°, plat de partage au centre, 4 – 5 mains | Fixe | Flash direct | Oui | Mains qui se servent en même temps, plat généreux | Plat entamé aux trois quarts ; une seule main ; téléphone sur la table |
| R-17 | **Terrasse ou salle vue de l'extérieur, fin de journée** | Plan large, lumière chaude, tables pleines | Travelling latéral très lent ou fixe | Coucher de soleil ou heure bleue | Oui | Tables pleines, verres levés, lumières allumées | Terrasse vide ; midi plein soleil ; parasol publicitaire lisible |
| R-18 | **Café / dessert, détail** | Macro, tasse ou dessert, main qui prend la cuillère | Fixe | Lumière de table, flash doux | Oui (cuillère, tasse) | Un geste : la cuillère entre dans le dessert, ou le café versé | Dessert déjà entamé ; main floue ; nappe tachée |
| R-19 | **Bar : boisson préparée** | Plan moyen serré sur les mains du barman, bouteilles floues | Fixe ou léger suivi | Rétro-éclairage du bar | Oui (glaçons, shaker, pression) | Un geste complet : bière tirée, cocktail versé, mousse nette | Bouteilles avec marques lisibles au premier plan ; verre qui déborde ; geste coupé |
| R-20 | **Première bouchée / réaction client** | Plan serré 85 mm, visage et fourchette | Fixe | Lumière de table | Non | Réaction spontanée (yeux fermés, hochement), **droit à l'image signé** | Client qui regarde la caméra ; bouche pleine en gros plan ; réaction surjouée |
| R-21 | **Coup de feu, ralenti** | Plan large ou moyen de la cuisine en rush | Fixe, **120 i/s** | Lumière de cuisine | Oui (enregistrer aussi 10 s de son d'ambiance à 25 i/s, fichier séparé `R-21-SON`) | Plusieurs actions simultanées : flamme, dressage, passage | Cuisine calme ; une seule personne ; plan tremblé |
| R-22 | **Matière : pain qui s'ouvre, sauce qui coule** (ASMR) | Macro, mains et aliment plein cadre | Fixe | LED rasante | **Oui, essentiel** (croûte, sauce) | Le pain craque, la sauce file, la viande se tranche : un geste, son propre | Son couvert par la musique du lieu ou la hotte ; geste répété deux fois dans la prise |
| R-23 | **L'équipe au complet, fin de service** | Plan large ou moyen, toute l'équipe, cuisine ou salle derrière | Fixe. Regards caméra, puis rire | Lumière de lieu + flash direct | Non | Équipe détendue, tabliers, un rire qui part | Équipe alignée comme une photo de classe ; personne en retrait floue ; sans droit à l'image |
| R-24 | **Respiration : salle vide avant service** (fond de carton) | Plan moyen, table dressée, bougie ou lampe, fond sombre | Fixe ou travelling avant très lent | Lumière basse, bougie | Non | Calme, peu de détails, zone sombre pour poser un texte | Plan chargé ; lumière crue ; objet au centre du cadre |

### Plans spécifiques par type de restaurant (remplacent R-11 / R-12 / R-22)

Les plans signature changent avec le restaurant ; le numéro reste le même.

| Type | R-11 (sort du feu) | R-12 (dressé) | R-22 (matière ASMR) |
| --- | --- | --- | --- |
| Pizzeria | La pelle sort la margherita, fromage qui bulle | Pizza entière, rotation | Croûte cloquée qu'on déchire |
| Kebab / street | Lame qui tranche la viande | Assiette ou sandwich dressé | Pain chaud qui s'ouvre, sauce qui coule |
| Brasserie | Entrecôte-frites posée devant le client | Assiette + moutarde + demi qui mousse | Frite cassée, couteau dans la viande |
| Café / tea-room | Café serré qui coule | Croissant et tasse, main de la patronne | Croissant ouvert, beurre qui fond |
| Burger | Fromage qui coule sur le steak | Burger assemblé | Mains qui compressent le burger |
| Italien / portugais de famille | Plat du jour servi en salle par le patron | Plat sur nappe à carreaux | Fromage râpé qui tombe (= R-09) |
| Food truck | Barquette tendue par la fenêtre, fumée | Barquette plein cadre | Sauce versée |
| Sushi | Couteau sur le saumon | Plateau, comptoir bois | Riz pressé entre les mains |
| Bar à pâtes | Assiette tendue au passe, vapeur | Tagliatelles dressées | Fromage râpé qui tombe |
| Bistrot, terrasse | Planchette apportée | Charcuterie, fromage, verre de blanc | Mains qui se servent (= R-16) |

## 3. Ce qui vaut pour tous les plans

- **Un plan = une action.** Le début et la fin de l'action sont dans les 8 secondes. Pas de « je laisse tourner, vous choisirez ».
- **Pas de lettrage lisible** : menus, prix, ardoises, étiquettes de bouteille, écrans. Flouter par la profondeur de champ ou sortir du cadre. Un prix lisible rend le plan inutilisable.
- **Pas de regard caméra** sauf R-13, R-20 (réaction) et R-23.
- **Aucune personne sans droit à l'image signé** dans un plan serré (R-13, R-15, R-20, R-23). Dans les plans larges (R-03, R-17), on ne doit pas pouvoir identifier un client qui n'a pas signé : dos, flou, distance.
- **Horizon droit** sur les plans larges. Tolérance 1°.
- **Rien ne bouge dans les 10 premières images** d'une prise (laisse une tête propre au montage), sauf travelling déjà lancé.
- **Ordre de tournage conseillé** (3 h, un soir de service) : 17 h 30 R-24, R-04 (heure bleue selon saison) → 18 h cuisine R-05 à R-11, R-21, R-22 → 19 h 30 salle R-01, R-02, R-03, R-14, R-15, R-16, R-18, R-19, R-20 → 21 h R-12, R-13, R-17 → fin R-23.

## 4. Nommage des fichiers et dépôt

Nom de fichier : `[CLIENT]_[AAAA-MM-JJ]_R-[NN]_[A|B].mp4`
Exemples : `GALATA_2026-11-07_R-07_A.mp4`, `GALATA_2026-11-07_R-07_B.mp4`, `GALATA_2026-11-07_R-21-SON_A.wav`.

- `R-01` à `R-24` : numéro fixe du brief. Un plan supplémentaire non demandé : `R-X1`, `R-X2`… (jamais payé en plus, parfois utile).
- `A` / `B` : deux prises obligatoires par plan. `C` si une troisième vaut la peine.
- Pas d'espace, pas d'accent, pas de majuscules changeantes. Le nom est lu par un script (`fetch-clips.sh`) : un fichier mal nommé est considéré comme manquant.
- Fichiers originaux de la caméra (pas de réencodage, pas d'export depuis un téléphone), métadonnées intactes.

Dépôt : **dans le Drive VISION le jour même du tournage**, dossier `Tournages / [CLIENT] / [AAAA-MM-JJ] / rushs /`. Avant minuit. Un dépôt le lendemain fait perdre le bonus (voir barème). Avec les rushs, dans le même dossier :

1. `DROITS-IMAGE_[CLIENT]_[DATE].pdf` : tous les formulaires signés, scannés ou photographiés.
2. `NOTES-TOURNAGE.md` (ou un message ClickUp) : plans manquants et pourquoi, plans où la prise B est la meilleure, incidents (four éteint, salle vide).

## 5. Droit à l'image : avant de filmer, pas après

- Formulaire VISION signé par **le restaurateur** (lieu, nom, équipe) avant la première prise. Pas de signature, pas de tournage, et le déplacement n'est pas facturable.
- Formulaire individuel pour **chaque personne reconnaissable en plan serré** : chef, patron, serveurs, clients de R-15 et R-20, équipe de R-23. Prénom, date, signature, case « réseaux sociaux de VISION et du restaurant ».
- Mineurs : signature du parent, sinon hors cadre.
- Les clients des plans larges sont prévenus par l'affichette VISION à l'entrée (« Tournage ce soir, merci de nous signaler si vous ne souhaitez pas apparaître »). L'affichette est dans le kit du vidéaste.

## 6. Check-list de départ (à cocher dans ClickUp avant de quitter le restaurant)

- [ ] 24 plans × 2 prises visionnés sur la caméra, aucun flou de point, aucune surexposition.
- [ ] Les ralentis (R-07, R-09, R-10, R-21) sont bien à 60 / 120 i/s.
- [ ] Son natif présent sur R-06, R-10, R-22 et `R-21-SON`.
- [ ] Aucun prix, menu ou étiquette lisible.
- [ ] Droits à l'image signés, photographiés.
- [ ] Cartes copiées, dépôt Drive lancé, notes de tournage écrites.
