> **Brouillon établi le 01.11.2026, à valider par un juriste et la fiduciaire avant usage.**
> Ce document ne constitue pas un conseil comptable ou fiscal. Les champs `[À COMPLÉTER]` et `[À TRANCHER]` doivent être arrêtés avec la fiduciaire avant la première facture. Il met en œuvre l'article 4 du Contrat d'accompagnement VISION (facturation mensuelle d'avance, QR-facture, échéance 10 jours).

# Gabarit de facture suisse avec QR-facture — VISION

## 1. Mentions obligatoires

Une facture suisse doit permettre d'identifier sans ambiguïté le fournisseur, le client, la prestation et le montant. Pour un assujetti TVA, l'art. 26 LTVA impose en plus le numéro IDE avec le suffixe « TVA », le taux et le montant de la TVA. Pour un non-assujetti, **aucune TVA ne doit être facturée ni mentionnée comme due** ; une mention « non assujetti » évite les malentendus.

| Mention | Contenu VISION | Obligatoire |
| --- | --- | --- |
| Fournisseur | Sébastien Nassour, Vision Marketing Agency, Route de Fribourg 52, 1773 Léchelles | Oui |
| IDE du fournisseur | CHE-[xxx.xxx.xxx] [+ « TVA » si assujetti] | Oui (si assujetti) ; recommandé sinon |
| Client | Raison sociale, forme juridique, adresse complète de l'établissement facturé | Oui |
| Numéro de facture | Unique, continu, format `VIS-AAAA-NNN` (ex. VIS-2026-001) | Oui |
| Date d'émission | jj.mm.aaaa | Oui |
| Échéance | Date d'émission + 10 jours, en clair (« Payable jusqu'au jj.mm.aaaa, net ») | Oui (contrat art. 4.3) |
| Objet | Formule, période contractuelle couverte (du … au …), référence au Contrat | Oui |
| Montant | Par ligne et total, en CHF, 2 décimales | Oui |
| TVA | [À TRANCHER] « Non assujetti à la TVA (art. 10 LTVA) » **ou** taux [8,1] % + montant TVA + total TTC | Oui |
| Coordonnées de paiement | QR-IBAN [CH..] ou IBAN classique, nom et adresse du créancier, référence | Oui (QR-facture) |
| Référence | Référence QR à 27 chiffres (avec QR-IBAN) **ou** référence SCOR `RF…` (avec IBAN classique) | Recommandé (rapprochement automatique) |
| Informations supplémentaires | « Facture VIS-2026-001, STARTER, mois 1 » (champ « Informations supplémentaires » de la QR-facture, 140 caractères max) | Recommandé |

Règles de la QR-facture (norme SIX, en vigueur depuis le 30.09.2022, seul bulletin de versement admis) :
- La section paiement (QR + partie « Récépissé ») est imprimée **en bas de la page A4**, 210 × 105 mm, avec une ligne de séparation ou perforation ; en PDF, la ligne de coupe est remplacée par la mention « À séparer avant le versement » ou laissée telle quelle pour un paiement par scan.
- Le code QR porte la croix suisse au centre, taille 46 × 46 mm, et une police lisible (Arial, Helvetica, Liberation Sans ou Frutiger, 8 à 10 pt).
- Avec un **QR-IBAN** (IBAN dont l'identifiant d'institution commence par 30000 à 31999), la référence QR est obligatoire ; avec un **IBAN classique**, on utilise soit aucune référence, soit une référence SCOR (`RF` + 2 chiffres de contrôle + jusqu'à 21 caractères).
- Montant arrondi à 5 centimes si la facture est réglée en espèces ; en virement, les centimes sont admis.

## 2. Gabarit vierge

```
┌──────────────────────────────────────────────────────────────────────────┐
│ VISION — partenaire de croissance des restaurants                       │
│ Sébastien Nassour, Vision Marketing Agency                              │
│ Route de Fribourg 52, 1773 Léchelles, Suisse                             │
│ IDE CHE-[xxx.xxx.xxx] [TVA]   ·   [e-mail]   ·   [téléphone]             │
│                                                                          │
│                                   Facturé à :                            │
│                                   [Raison sociale du Restaurant]         │
│                                   [Rue, numéro]                          │
│                                   [NPA Localité]                         │
│                                   IDE CHE-[xxx.xxx.xxx]                  │
│                                                                          │
│ FACTURE N° VIS-[AAAA]-[NNN]                                              │
│ Date d'émission : [jj.mm.aaaa]       Échéance : [jj.mm.aaaa] (10 jours)  │
│ Contrat d'accompagnement du [jj.mm.aaaa] — Annexe A du [jj.mm.aaaa]      │
│                                                                          │
│ Désignation                                       Qté   Prix HT   Total  │
│ ──────────────────────────────────────────────────────────────────────── │
│ Accompagnement [FORMULE] — mois [n]                1   [x'xxx.00] [x'xxx.00] │
│   Période du [jj.mm.aaaa] au [jj.mm.aaaa]                                │
│   [12/22/30] vidéos, suivi de l'indicateur, rapport mensuel              │
│ Frais de mise en place                             1        0.00     0.00 │
│ ──────────────────────────────────────────────────────────────────────── │
│ Sous-total HT                                                  [x'xxx.00] │
│ [TVA 8,1 %                                                      [xxx.xx]] │
│ [Non assujetti à la TVA (art. 10 LTVA) — aucune TVA facturée]            │
│ TOTAL À PAYER CHF                                              [x'xxx.xx] │
│                                                                          │
│ Payable à 10 jours, net, par virement avec la référence ci-dessous.      │
│ Facturation mensuelle d'avance (Contrat, art. 4.2). Merci.               │
├──────────────────────────────────────────────────────────────────────────┤
│ Récépissé            │ Section paiement                                  │
│ Compte / Payable à   │  [QR]   Monnaie  Montant                          │
│ [QR-IBAN]            │  [CODE]  CHF      [x'xxx.xx]                      │
│ Sébastien Nassour    │                                                   │
│ Vision Marketing Ag. │ Compte / Payable à                                │
│ Route de Fribourg 52 │ [QR-IBAN À COMPLÉTER : CH.. 3... .... .... ....]  │
│ 1773 Léchelles       │ Sébastien Nassour, Vision Marketing Agency        │
│                      │ Route de Fribourg 52, 1773 Léchelles              │
│ Référence            │ Référence                                         │
│ [00 00000 00000 ...] │ [27 chiffres]                                     │
│                      │ Informations supplémentaires                      │
│ Payable par          │ Facture VIS-[AAAA]-[NNN], [FORMULE] mois [n]      │
│ [Restaurant]         │ Payable par                                       │
│ [Adresse]            │ [Raison sociale, rue, NPA localité]               │
│ Monnaie  Montant     │                                                   │
│ CHF      [x'xxx.xx]  │                                                   │
└──────────────────────┴───────────────────────────────────────────────────┘
```

## 3. Exemple rempli — STARTER, mois 1

Hypothèses : contrat signé le 03.11.2026, premier mois contractuel du 03.11.2026 au 02.12.2026, facture émise le jour de la signature (facturation d'avance), VISION **non assujettie** à la TVA (variante assujettie indiquée en dessous).

```
VISION — partenaire de croissance des restaurants
Sébastien Nassour, Vision Marketing Agency
Route de Fribourg 52, 1773 Léchelles, Suisse
IDE CHE-[xxx.xxx.xxx]  ·  [e-mail]  ·  [téléphone]

                                   Facturé à :
                                   [Pizzeria Exemple Sàrl]
                                   [Rue de la Gare 1]
                                   [1700 Fribourg]
                                   IDE CHE-[xxx.xxx.xxx]

FACTURE N° VIS-2026-001
Date d'émission : 03.11.2026         Échéance : 13.11.2026 (10 jours)
Contrat d'accompagnement du 03.11.2026 — Annexe A du 03.11.2026

Désignation                                        Qté   Prix HT     Total
──────────────────────────────────────────────────────────────────────────
Accompagnement STARTER — mois 1                     1   3'390.00  3'390.00
  Période du 03.11.2026 au 02.12.2026
  12 vidéos, suivi de l'indicateur (Annexe A), rapport mensuel
Frais de mise en place                              1       0.00      0.00
──────────────────────────────────────────────────────────────────────────
Sous-total HT                                                     3'390.00
Non assujetti à la TVA (art. 10 LTVA) — aucune TVA facturée
TOTAL À PAYER CHF                                                 3'390.00

Payable jusqu'au 13.11.2026, net, par virement avec la référence ci-dessous.
Facturation mensuelle d'avance (Contrat, art. 4.2). Merci.

[Section paiement QR-facture]
Compte / Payable à : [QR-IBAN À COMPLÉTER]  Sébastien Nassour, Vision Marketing Agency, Route de Fribourg 52, 1773 Léchelles
Référence : [27 chiffres, ex. 00 00000 00000 00000 00202 60013 — à générer]
Informations supplémentaires : Facture VIS-2026-001, STARTER mois 1
Payable par : [Pizzeria Exemple Sàrl, Rue de la Gare 1, 1700 Fribourg]
Monnaie : CHF   Montant : 3'390.00
```

**Variante si VISION est assujettie** (à la place des deux lignes TVA / total ci-dessus) :

```
Sous-total HT                                                     3'390.00
TVA 8,1 % (CHE-[xxx.xxx.xxx] TVA)                                   274.59
TOTAL À PAYER CHF                                                 3'664.59
```

Mois 2 et suivants : même structure, numéro suivant (VIS-2026-002…), « mois 2 », période du 03.12.2026 au 02.01.2027, émission le 03.12.2026, échéance le 13.12.2026. Si l'option A de l'Annexe A est retenue et déclenchée, le mois non facturé fait l'objet d'une facture à 0.00 CHF portant la mention « Mois offert au titre de la garantie 90 jours (Annexe A, 7.3) » [À TRANCHER avec la fiduciaire].

## 4. Procédure en 6 étapes

**Préalables (une seule fois)** : ouvrir ou désigner le compte bancaire professionnel de VISION ; demander à la banque un **QR-IBAN** (gratuit chez la plupart des banques, à demander explicitement) ou décider d'utiliser l'IBAN classique avec référence SCOR ; décider le schéma de numérotation (`VIS-AAAA-NNN`) et le tenir dans un registre unique ; faire valider ce gabarit par la fiduciaire (mention TVA). Rien de tout cela n'est fait tant que la ligne « TVA » n'est pas tranchée.

1. **Déclencheur.** Le jour de la signature du Contrat (mois 1), puis le premier jour de chaque mois contractuel : la tâche récurrente ClickUp « Facturer [Enseigne] — mois n » (liste **Facturation**) arrive à échéance. Vérifier dans le dossier client que la formule et la période sont les bonnes et qu'aucune résiliation n'a été notifiée pour cette échéance.

2. **Générer la facture.** Outil gratuit suggéré, au choix : le **générateur de QR-facture de l'e-banking** de la banque de VISION (PostFinance, Raiffeisen, UBS, BCF et la plupart des banques cantonales proposent « Créer une QR-facture » gratuitement, avec génération automatique de la référence) ; à défaut, un générateur gratuit conforme à la norme SIX (par ex. **Banana Comptabilité** version gratuite, ou la bibliothèque open source `qrbill` / `swissqrbill` si l'on automatise plus tard). Remplir : créancier (VISION), QR-IBAN, montant, débiteur (Restaurant), référence, informations supplémentaires « Facture VIS-AAAA-NNN, FORMULE mois n ». Vérifier le QR avec l'app de la banque (scan test) avant envoi.
   > Note : la BNS n'édite pas de générateur ; la norme est gérée par SIX. Si une source interne mentionne « qr-facture de la BNS », lire « générateur conforme SIX / e-banking ».

3. **Assembler le PDF.** Placer la section paiement QR générée en bas de la page A4 du gabarit de la section 2 (modèle Google Docs `FACTURE-VISION-GABARIT`, à créer dans Drive `VISION — Admin / Gabarits`). Contrôler les 10 points : fournisseur, IDE, client, numéro unique, date, échéance à +10 jours, objet et période, montants, mention TVA, QR lisible. Exporter en PDF nommé `AAAA-MM-DD_VIS-AAAA-NNN_[Enseigne]_[FORMULE]-M[n].pdf`.

4. **Envoyer.** E-mail depuis l'adresse VISION à l'adresse de notification du Restaurant (Contrat, préambule), objet « VISION — Facture VIS-AAAA-NNN — [FORMULE] mois n — échéance jj.mm.aaaa », PDF en pièce jointe, trois lignes de texte (période couverte, échéance, référence). Pas de lien de paiement, pas de carte : virement QR uniquement.

5. **Archiver dans Drive.** Déposer le PDF dans le dossier client `[VILLE] — [Enseigne] / 💳 Factures` (sous-dossier à ajouter au gabarit « VISION — Template Client », à côté de `📋 Brief & Infos client`, `📹 Rushs`, `🎬 Montages`, `✅ Livrables`, `📊 Rapports mensuels`) et une copie dans `VISION — Admin / Comptabilité / AAAA / Factures émises`. Ne jamais renommer ni supprimer après envoi ; une correction = note de crédit + nouvelle facture, numéros suivants.

6. **Enregistrer dans ClickUp.** Dans la liste **Facturation** (espace VISION), compléter la tâche « Facturer [Enseigne] — mois n » : champs `N° facture`, `Montant CHF`, `Date d'émission`, `Échéance` (+10 jours), `Formule`, `Lien Drive` (PDF), statut **Envoyée**. Poser un rappel à l'échéance ; au paiement (relevé bancaire, référence rapprochée), passer en **Payée** avec la date ; à échéance + 5 jours sans paiement, passer en **Rappel 1** et envoyer le rappel écrit (Contrat, art. 4.4) ; à + 20 jours, **Rappel 2** avec frais et information de suspension possible. Clôturer le mois avec l'export de la liste pour la fiduciaire.

---

## Questions au juriste / à la fiduciaire

1. **Fiduciaire** — Statut TVA de VISION aujourd'hui (chiffre d'affaires 12 mois glissants contre le seuil de 100'000 CHF) : mention exacte à porter sur la facture (« non assujetti » avec ou sans référence à l'art. 10 LTVA) et à partir de quand l'assujettissement volontaire serait avantageux.
2. **Fiduciaire** — Si l'assujettissement intervient en cours de contrat : les prix convenus « HT » peuvent-ils être majorés de 8,1 % sans avenant, et comment facturer le mois à cheval ?
3. **Fiduciaire** — Facturation d'avance : date de comptabilisation du produit (émission ou période couverte), traitement d'un mois résilié ou suspendu, et modèle de note de crédit à utiliser.
4. **Fiduciaire** — Mois non facturé (option A) ou rabais (option B) de la garantie 90 jours : écriture comptable, mention sur la facture, incidence TVA d'une prestation gratuite.
5. **Fiduciaire** — QR-IBAN avec référence QR ou IBAN classique avec référence SCOR : lequel recommander pour une raison individuelle avec moins de 20 factures par mois et pour un rapprochement simple avec le logiciel comptable retenu ?
6. **Fiduciaire** — Numérotation `VIS-AAAA-NNN` et conservation 10 ans (art. 958f CO) : format d'archivage admis (PDF simple ou PDF/A), signature électronique nécessaire pour les factures envoyées par e-mail ?
7. **Juriste** — Mentions de retard (intérêt 5 %, frais de rappel [20] CHF, suspension) : doivent-elles figurer sur la facture pour être opposables, ou la référence au Contrat suffit-elle ?
8. **Juriste / Fiduciaire** — Faut-il faire figurer sur la facture la mention de l'exclusivité ou de la garantie 90 jours, ou s'en tenir à la référence au Contrat et à l'Annexe A pour éviter toute lecture comme promesse de résultat ?
