# Grille de notation des rushs

**VISION — contrôle qualité par plan, rempli par le monteur (ou Nassour) dans les 24 h suivant le dépôt Drive.**
Version 1.0 · 1er novembre 2026 · Référence : `BRIEF-TOURNAGE-STANDARD.md` (24 plans R-01 à R-24).

## 1. Principe

Chaque plan livré est noté sur **7 critères**. Chaque critère reçoit **0, 1 ou 2** :

- **2** = parfait, le plan entre dans l'EDL tel quel.
- **1** = acceptable, le plan est utilisable avec une correction au montage (recadrage, stabilisation légère, correction d'exposition, coupe plus courte).
- **0** = refusé sur ce critère.

Les critères n'ont pas tous le même poids. La note du plan est sur 100, la note du tournage est la **moyenne des 24 plans** (un plan manquant vaut 0). On note la meilleure des deux prises (A ou B) ; la seconde prise ne compte que si la première est refusée.

## 2. Les 7 critères et leur poids

| Critère | Poids | 2 — parfait | 1 — acceptable | 0 — refusé |
| --- | --- | --- | --- | --- |
| **Conformité au brief** | 25 | C'est le plan demandé, le bon numéro, l'action complète, le type de restaurant respecté (R-11 / R-12 / R-22) | Le plan est là mais l'action est partielle (flamme coupée, geste répété) ou l'angle diffère du brief | Autre plan, plan non demandé livré sous ce numéro, lettrage ou prix lisible, personne sans droit à l'image en plan serré |
| **Cadrage** | 15 | Sujet placé comme au brief, horizon droit, rien de parasite dans le cadre, zone libre pour le texte quand prévu (R-24) | Recadrage nécessaire mais possible en 4K (sujet décentré, objet en bord de cadre) | Sujet coupé, horizon > 2°, cadre penché, élément refusé par le brief au premier plan |
| **Netteté** | 15 | Point sur le sujet pendant les 5 s, pas de pompage | Point légèrement en avant/arrière mais lisible en 1080 ; une recherche de point hors des 5 s utiles | Flou, pompage d'AF pendant l'action, flou de bougé |
| **Exposition / lumière** | 10 | Hautes lumières tenues (flammes, bougies), peaux justes, balance des blancs cohérente avec la scène | Un diaph à corriger, légère dominante, récupérable en étalonnage | Cramé irrécupérable, auto-exposition qui pompe, balance qui change dans le plan, ring light visible dans les yeux |
| **Stabilité / mouvement** | 15 | Mouvement régulier sur toute la durée, ou fixe parfait ; le travelling a la bonne vitesse pour 5 s | Léger tremblé corrigeable (recadrage 10 %), départ ou fin de mouvement un peu sec | À-coups, gelée de stabilisation logicielle, mouvement opposé au brief |
| **Durée / montabilité** | 10 | ≥ 8 s tenues, l'action commence après la tête propre et se termine avant la fin ; cadence correcte (24/25, 60, 120) | 5 – 8 s, ou action collée au début ; cadence différente mais exploitable | < 5 s utiles, action coupée, ralenti tourné à 25 i/s |
| **Son natif** | 10 | Son propre et exploitable quand le brief le demande (R-06, R-10, R-22, R-21-SON), niveaux corrects | Son présent mais bruité (hotte, musique du lieu), utilisable sous la musique | Pas de son alors que le brief l'exige, saturation, ou fichier `R-21-SON` manquant. Pour les plans « son non nécessaire », mettre 2 d'office |

**Note du plan** = Σ (points × poids) / 2. Exemple : tous les critères à 2 → 100 ; conformité 2, cadrage 1, netteté 2, exposition 1, stabilité 2, durée 2, son 2 → (50 + 15 + 30 + 10 + 30 + 20 + 20) / 2 = 87,5.

**Règle d'élimination** : un **0 en conformité ou en netteté** met le plan à **0** quelle que soit la suite (plan inutilisable). Un plan à 0 doit avoir un commentaire d'une ligne.

## 3. Score du tournage et seuils

| Score (moyenne des 24 plans) | Verdict | Conséquence (voir `BAREME-PHOTOGRAPHE.md`) |
| --- | --- | --- |
| **≥ 90** | Bonus | Base + bonus de conformité |
| **75 – 89** | Standard | Base |
| **< 75** | Reprise | Reprise des plans à 0 et des plans manquants, non payée. La base est versée après reprise si le score repasse à ≥ 75 |

Ajustements au score du tournage (appliqués après la moyenne) :

- Dépôt Drive après minuit le jour du tournage : **−5**.
- Droits à l'image absents ou incomplets : **−10**, et les plans serrés concernés passent à 0 (ils ne sont pas publiables).
- Nommage non conforme (fichiers renommés à la main par le monteur) : **−3**.
- Notes de tournage absentes : **−2**.

Le score plafonne à 100 et ne descend pas sous 0.

## 4. Qui note, quand, où

1. **J0 soir** : le vidéaste dépose. ClickUp : tâche « Tournage [CLIENT] [DATE] » passe en « Rushs déposés ».
2. **J+1 avant midi** : le monteur ouvre la grille (copie du gabarit ci-dessous dans la description de la tâche ClickUp ou le champ « Grille »), visionne les 48 prises, remplit, commente les 0 et les 1.
3. **J+1** : Nassour valide ou corrige la grille (il peut relever ou abaisser un critère avec un commentaire). Le score devient définitif. La tâche passe en « Rushs validés » ou « Reprise demandée ».
4. Le score définitif et la liste des plans retenus (prise A ou B, timecode) sont copiés dans `clips.json` par le monteur (voir `PIPELINE-MONTAGE-IA.md`).
5. Le vidéaste voit la grille dans ClickUp : c'est son retour, plan par plan. Pas de note sans commentaire sur les 0.

## 5. Gabarit à copier dans ClickUp

Copier tel quel dans la description de la tâche. Colonnes : Conf. (×25), Cadr. (×15), Net. (×15), Expo (×10), Stab. (×15), Durée (×10), Son (×10). Mettre 0, 1 ou 2 dans chaque case ; « Prise » = A ou B ; « Note » = Σ (points × poids) / 2.

```
Client : ____________   Date tournage : __________   Vidéaste : ____________
Monteur : ____________  Date contrôle : __________   Validé par Nassour : [ ] oui  date ______

| #    | Plan                              | Prise | Conf | Cadr | Net | Expo | Stab | Durée | Son | Note | Commentaire |
|------|-----------------------------------|-------|------|------|-----|------|------|-------|-----|------|-------------|
| R-01 | Plongée table, assiette arrive    |       |      |      |     |      |      |       |     |      |             |
| R-02 | Main pousse le plat               |       |      |      |     |      |      |       |     |      |             |
| R-03 | Salle pleine, travelling          |       |      |      |     |      |      |       |     |      |             |
| R-04 | Façade heure bleue                |       |      |      |     |      |      |       |     |      |             |
| R-05 | Fumée sur le passe                |       |      |      |     |      |      |       |     |      |             |
| R-06 | Couteau herbes, macro             |       |      |      |     |      |      |       |     |      |             |
| R-07 | Flamme poêle 120 i/s              |       |      |      |     |      |      |       |     |      |             |
| R-08 | Brigade, travelling               |       |      |      |     |      |      |       |     |      |             |
| R-09 | Fromage 60 i/s                    |       |      |      |     |      |      |       |     |      |             |
| R-10 | Vin versé 60 i/s                  |       |      |      |     |      |      |       |     |      |             |
| R-11 | Plat signature 1 sort du feu      |       |      |      |     |      |      |       |     |      |             |
| R-12 | Plat signature 2, rotation        |       |      |      |     |      |      |       |     |      |             |
| R-13 | Portrait chef                     |       |      |      |     |      |      |       |     |      |             |
| R-14 | Serveur en marche                 |       |      |      |     |      |      |       |     |      |             |
| R-15 | Patron rit avec client            |       |      |      |     |      |      |       |     |      |             |
| R-16 | Cinq mains, plongée               |       |      |      |     |      |      |       |     |      |             |
| R-17 | Terrasse / extérieur fin de jour  |       |      |      |     |      |      |       |     |      |             |
| R-18 | Café / dessert détail             |       |      |      |     |      |      |       |     |      |             |
| R-19 | Bar, boisson préparée             |       |      |      |     |      |      |       |     |      |             |
| R-20 | Première bouchée                  |       |      |      |     |      |      |       |     |      |             |
| R-21 | Coup de feu 120 i/s (+ R-21-SON)  |       |      |      |     |      |      |       |     |      |             |
| R-22 | Matière ASMR                      |       |      |      |     |      |      |       |     |      |             |
| R-23 | Équipe fin de service             |       |      |      |     |      |      |       |     |      |             |
| R-24 | Salle vide, respiration           |       |      |      |     |      |      |       |     |      |             |

Moyenne des 24 plans : ______ / 100
Ajustements : dépôt tardif (−5) [ ]  droits manquants (−10) [ ]  nommage (−3) [ ]  notes absentes (−2) [ ]
SCORE TOURNAGE : ______ / 100   → [ ] Bonus ≥ 90   [ ] Standard 75–89   [ ] Reprise < 75
Plans à reprendre : ____________________________
```

Dans ClickUp, le score final va aussi dans le champ personnalisé numérique **« Score rushs »** de la tâche, pour suivre la moyenne de chaque vidéaste sur 3 mois.

## 6. Exemple rempli (extrait)

| # | Plan | Prise | Conf | Cadr | Net | Expo | Stab | Durée | Son | Note | Commentaire |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R-07 | Flamme poêle | B | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 95 | A : flamme coupée en haut. B : parfaite, cuisine un peu claire |
| R-10 | Vin versé | A | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 92,5 | Verre trop à gauche, recadré |
| R-13 | Portrait chef | A | 1 | 2 | 2 | 2 | 2 | 2 | 2 | 87,5 | Sourit dès la première image, pas de temps neutre |
| R-20 | Première bouchée | — | 0 | — | — | — | — | — | — | 0 | Client sans droit à l'image signé : inutilisable |
