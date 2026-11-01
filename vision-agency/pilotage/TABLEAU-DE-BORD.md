# Tableau de bord — les 12 chiffres du lundi

Document interne VISION, équipe finance et pilotage. Date de référence : 01.11.2026.

État de départ (fait vérifié) : **0 client actif, MRR 0 CHF, dette 1'100 CHF envers Robin (montage).** Tout chiffre non nul dans ce document est un objectif ou un exemple, jamais un résultat.

Règle : un chiffre = une source désignée, un relevé daté, une personne qui le relève. Pas de source, pas de chiffre. Les statistiques Instagram/TikTok (vues, abonnés) ne figurent pas ici : ce sont du contexte, pas du pilotage (voir `../SYSTEME-DE-MESURE-CLIENT.md`, section 1).

Relevé : **chaque lundi, 08h00–08h30**, avant le premier appel de prospection. Nassour relève, saisit la scorecard dans Notion (page « Scorecard hebdo »), et ne fait rien d'autre tant que les 12 cases ne sont pas remplies. Une case vide s'écrit « non relevé », jamais 0.

---

## 1. Les 12 chiffres

| # | Bloc | Chiffre | Définition exacte | Source | Fréquence | Seuil d'alerte | Qui relève |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Commercial | **Appels passés** | Appels sortants composés vers un restaurant de la liste, semaine écoulée (lun–dim), qu'ils aient abouti ou non | ClickUp, liste `Prospection`, tâches en statut ≥ « Appelé », filtrées sur la date d'appel | Hebdo | < 100 / semaine [OBJECTIF] (le Hub note une capacité ClickUp de 100 appels/jour ; l'objectif réaliste d'un fondateur seul est 100–150 par semaine, voir `PLAN-90-JOURS.md`) | Nassour |
| 2 | Commercial | **Décideurs joints** | Conversations avec la personne qui décide (patron, gérant), pas le serveur ni la boîte vocale | ClickUp `Prospection`, champ « Décideur joint = oui » daté dans la semaine | Hebdo | < 15 % des appels (ex. < 15 sur 100) | Nassour |
| 3 | Commercial | **RDV fixés** | Rendez-vous physique ou visio avec date et heure confirmés dans l'agenda Apple / Vision OS (Google interdit aux IA, décision Hub 22.10) | ClickUp `Prospection`, statut « RDV fixé » + agenda | Hebdo | < 2 / semaine à partir de la semaine 3 | Nassour |
| 4 | Commercial | **RDV tenus** | RDV qui ont eu lieu (les deux parties présentes, ≥ 20 min) | ClickUp `Prospection`, statut « RDV tenu » ; no-show noté « RDV manqué » | Hebdo | taux tenu / fixé < 60 % | Nassour |
| 5 | Commercial | **Signatures** | Contrat + Annexe A signés sections 1–4 et 6–10, PDF archivé dans Drive `00 Contrat` ; un « oui » oral ne compte pas | ClickUp `00 Contrat`, tâche « Annexe A signée » cochée + fichier Drive | Hebdo | 0 signature sur 4 semaines consécutives après la semaine 3 | Nassour |
| 6 | Clients | **Clients actifs** | Clients avec contrat signé, non résilié, dont le mois en cours est facturé (en période de référence S-4…S-1 ou en diffusion) | ClickUp, un dossier `[VILLE] — [Enseigne]` par client, liste `00 Contrat` ; vérifié contre Vision OS (portail) | Hebdo | écart entre ClickUp et Vision OS ≠ 0 | Nassour |
| 7 | Clients | **MRR** | Somme des mensualités HT des clients actifs, à la grille 3'390 / 5'590 / 7'990, hors remises et hors mois offerts (option A de la garantie si retenue) | Vision OS, module contrats (champ Formule) ; recalculé à la main depuis ClickUp `00 Contrat` tant que Vision OS n'est pas fiable | Hebdo | MRR < objectif du mois dans `PLAN-90-JOURS.md` deux lundis de suite | Nassour |
| 8 | Clients | **Churn** | Clients ayant résilié ou arrivés à J90 sans renouveler, sur les 30 derniers jours ; en nombre et en CHF de MRR perdu | ClickUp `00 Contrat`, tâche « J90 calculé » avec issue « poursuite / arrêt » | Mensuel (1er lundi du mois), relevé hebdo = report | ≥ 1 résiliation avant J90, ou taux de non-renouvellement à J90 > 1 sur 3 | Nassour |
| 9 | Production | **Vidéos livrées / promises** | Vidéos publiées le mois en cours, notées le jour même avec lien, contre le total dû (12 / 22 / 30 × clients en diffusion), prorata du mois | ClickUp `02 Publication` (tâches avec « Date publiée » et « Lien » remplis) | Hebdo | retard > 2 vidéos sur un client, ou < 90 % du prorata en fin de mois | Nassour (production renseigne, Nassour relève) |
| 10 | Production | **Délai moyen** | Jours calendaires entre la date de tournage et la date de publication, moyenne des vidéos publiées sur 4 semaines glissantes | ClickUp `02 Publication`, champs « Date tournage » (à créer) et « Date publiée » ; Vision OS pour le suivi monteur | Hebdo | > 10 jours [OBJECTIF : 7 jours] | Nassour |
| 11 | Cash | **Encaissé du mois** | Montants reçus sur le compte bancaire VISION depuis le 1er du mois, factures clients uniquement (hors apports du fondateur) | Relevé bancaire (e-banking), rapproché avec Vision OS « factures » | Hebdo | encaissé < 100 % des factures échues depuis > 10 jours | Nassour |
| 12 | Cash | **À encaisser** et **trésorerie** | À encaisser : factures QR émises, non payées, avec date d'échéance. Trésorerie : solde bancaire disponible moins dettes exigibles (dont Robin 1'100) moins provision impôts/AVS/TVA (voir `MODELE-ECONOMIQUE.md`, règle de provision) | Banque + Vision OS « factures » + compte de provision séparé | Hebdo | trésorerie nette < 1 mois de charges fixes [HYPOTHÈSE 300–800 CHF, montants abonnements à confirmer] ; toute facture en retard > 30 jours | Nassour |

Notes :
- Le point 12 regroupe deux montants pour tenir dans 12 lignes ; sur la scorecard ils sont deux cases.
- Tant que Vision OS (Base44) n'est pas fiabilisé (failles relevées dans le Journal d'amélioration du 22.10), **ClickUp fait foi** pour les chiffres 1–10 et **la banque fait foi** pour 11–12. Vision OS est un contrôle, pas une source.
- Champs ClickUp à créer avant le premier relevé : `Prospection` (Date d'appel, Décideur joint, Date RDV, RDV tenu, Issue) et `02 Publication` (Date tournage). À faire semaine 1 du plan.

## 2. Comment lire le tableau en 5 minutes

1. Lire d'abord le cash (11–12). Si la trésorerie nette passe sous le seuil, c'est le seul sujet de la semaine.
2. Puis le commercial (1–5), de haut en bas : si les appels sont là mais pas les décideurs, c'est l'heure d'appel ; si les décideurs sont là mais pas les RDV, c'est le script ; si les RDV sont tenus mais pas signés, c'est l'offre ou le contrat.
3. Enfin clients et production (6–10) : un seul client en retard de livraison passe avant toute prospection du jour.

## 3. Gabarit de scorecard hebdomadaire (vide)

À copier chaque lundi dans Notion, page « Scorecard hebdo ». Une ligne par semaine, les colonnes ne changent jamais.

```
SCORECARD VISION — semaine du __.__.____ au __.__.____  (S__ du plan 90 jours)
Relevé le : __.__.____ à __h__     Par : ____________     Sources ouvertes : ClickUp [ ]  Vision OS [ ]  Banque [ ]

| #  | Chiffre                        | Objectif semaine | Relevé | Écart | Alerte ? | Commentaire (1 ligne, factuel) |
| -- | ------------------------------ | ---------------- | ------ | ----- | -------- | ------------------------------ |
| 1  | Appels passés                  |                  |        |       | [ ]      |                                |
| 2  | Décideurs joints               |                  |        |       | [ ]      |                                |
| 3  | RDV fixés                      |                  |        |       | [ ]      |                                |
| 4  | RDV tenus                      |                  |        |       | [ ]      |                                |
| 5  | Signatures                     |                  |        |       | [ ]      |                                |
| 6  | Clients actifs                 |                  |        |       | [ ]      |                                |
| 7  | MRR (CHF HT)                   |                  |        |       | [ ]      |                                |
| 8  | Churn (30 j, nb / CHF)         |                  |        |       | [ ]      |                                |
| 9  | Vidéos livrées / promises      |                  |        |       | [ ]      |                                |
| 10 | Délai moyen tournage→publi (j) |                  |        |       | [ ]      |                                |
| 11 | Encaissé du mois (CHF)         |                  |        |       | [ ]      |                                |
| 12a| À encaisser (CHF)              |                  |        |       | [ ]      |                                |
| 12b| Trésorerie nette (CHF)         |                  |        |       | [ ]      |                                |

Décision de la semaine (une seule) : ______________________________________________
Ce qui a bloqué la semaine passée (une ligne) : ______________________________________
Dettes exigibles : Robin ____ CHF  |  autres ____ CHF
Provision versée sur le compte séparé cette semaine : ____ CHF (taux ____ % à confirmer fiduciaire)
```

## 4. Exemple rempli — « EXEMPLE »

**Ceci est un exemple fictif pour montrer comment remplir la scorecard. Aucun de ces chiffres n'a été obtenu.** Il correspond à ce que viserait la semaine 7 du plan (14–20 décembre), avec un premier client signé en novembre.

```
EXEMPLE — SCORECARD VISION — semaine du 14.12.2026 au 20.12.2026  (S7 du plan 90 jours)
Relevé le : 21.12.2026 à 08h10     Par : Nassour     Sources ouvertes : ClickUp [x]  Vision OS [x]  Banque [x]

| #  | Chiffre                        | Objectif semaine | Relevé | Écart | Alerte ? | Commentaire (1 ligne, factuel)                              |
| -- | ------------------------------ | ---------------- | ------ | ----- | -------- | ----------------------------------------------------------- |
| 1  | Appels passés                  | 120              | 96     | -24   | [x]      | Jeudi perdu en tournage client 1 ; bloquer les matins       |
| 2  | Décideurs joints               | 20               | 17     | -3    | [ ]      | 18 % des appels, dans la cible                              |
| 3  | RDV fixés                      | 3                | 3      | 0     | [ ]      | 2 Lausanne, 1 Vevey                                         |
| 4  | RDV tenus                      | 2                | 2      | 0     | [ ]      | 1 no-show reporté à S8                                      |
| 5  | Signatures                     | 1                | 0      | -1    | [x]      | 1 contrat envoyé, réponse promise mercredi                  |
| 6  | Clients actifs                 | 1                | 1      | 0     | [ ]      | Client 1 en S-2 de référence                                |
| 7  | MRR (CHF HT)                   | 3'390            | 3'390  | 0     | [ ]      | Formule 12                                                  |
| 8  | Churn (30 j, nb / CHF)         | 0                | 0 / 0  | 0     | [ ]      |                                                             |
| 9  | Vidéos livrées / promises      | 0 / 0            | 0 / 0  | 0     | [ ]      | Période de référence : tourné 8, rien publié (règle)        |
| 10 | Délai moyen tournage→publi (j) | n/a              | n/a    |       | [ ]      | Aucune publication encore                                   |
| 11 | Encaissé du mois (CHF)         | 3'390            | 3'390  | 0     | [ ]      | Facture QR M1 payée le 11.12                                |
| 12a| À encaisser (CHF)              | 0                | 0      | 0     | [ ]      |                                                             |
| 12b| Trésorerie nette (CHF)         | > 800            | 1'273  | +473  | [ ]      | Après Robin 1'100 soldé et provision 30 % (1'017) mise de côté |

Décision de la semaine (une seule) : bloquer 08h30–11h30 lun/mar/jeu pour les appels, tournages l'après-midi uniquement.
Ce qui a bloqué la semaine passée (une ligne) : pas de créneau d'appel fixe.
Dettes exigibles : Robin 0 CHF  |  autres 0 CHF
Provision versée sur le compte séparé cette semaine : 1'017 CHF (taux 30 % à confirmer fiduciaire)
```

Lecture de l'exemple : une alerte commerciale (appels) et une alerte signature. La décision de la semaine traite la cause (créneaux d'appel), pas le symptôme. C'est le format attendu : une décision, pas une liste.

## 5. Ce qui manque pour que le tableau fonctionne

| Manque | Qui | Quand |
| --- | --- | --- |
| Liste ClickUp `Prospection` avec les 5 champs du point 1 | Nassour | Semaine 1 (02–08.11) |
| Champ « Date tournage » dans `02 Publication` | Nassour | Avant le premier tournage |
| Compte bancaire de provision séparé | Nassour + banque | Avant le premier encaissement |
| Montants des abonnements Base44 / ClickUp / Notion / Higgsfield (pour le seuil de trésorerie) | Nassour | Semaine 1 |
| Page Notion « Scorecard hebdo » avec le gabarit de la section 3 | Nassour | Semaine 1 |
