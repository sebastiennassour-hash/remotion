# Statuts du Pipeline ClickUp — VISION

Liste **Pipeline** (ClickUp, id 901216720724). Une tâche = un restaurant. Liste fermée de 9 statuts : on n'en ajoute pas, on n'en renomme pas. À chaque contact, trois champs bougent : **statut**, **échéance (= prochaine action datée)**, **commentaire d'une ligne**.

## 1. Les 9 statuts

| # | Statut | Définition (on y entre quand…) | On en sort quand… | Délai max avant alerte |
|---|---|---|---|---|
| 1 | **À appeler** | Restaurant repéré (passage, Instagram, Google) : nom, ville, cuisine, numéro notés. Aucun appel encore passé. | Premier appel passé. | 7 jours |
| 2 | **Appelé – pas joint** | Au moins un appel passé, le décideur n'a jamais été au bout du fil (messagerie, standard, serveur). | Décideur joint, ou 5 tentatives sur 10 jours → Perdu. | 3 jours sans nouvelle tentative |
| 3 | **Décideur joint** | On a parlé au responsable (téléphone, DM ou en personne), pas encore de RDV daté. Inclut « rappelez plus tard » et « envoyez un mail ». | RDV fixé, ou J+10 sans RDV → Perdu. | 2 jours sans action |
| 4 | **RDV fixé** | Date + heure + lieu dans l'agenda Google, confirmés par WhatsApp. Inclut un RDV à refixer après un lapin (le nôtre ou le sien). | RDV tenu, ou 2 lapins → Perdu. | Veille du RDV sans rappel envoyé ; 2 jours après un lapin sans nouvelle date |
| 5 | **RDV tenu** | Le RDV de stratégie a eu lieu : chiffres du restaurant recueillis, calcul ROI fait, prix annoncé en RDV. | Proposition envoyée (le soir même), ou refus sur place → Perdu. | 24 h (email récap + PDF non envoyés avant 20h) |
| 6 | **Proposition envoyée** | Email récap + proposition 1 page PDF envoyés. Cadence J+2 / J+5 / J+10 en cours. | Signé, En réflexion (date de réponse promise), ou J+10 → Perdu. | 2 jours sans relance effectuée |
| 7 | **En réflexion** | Le prospect a dit « je réfléchis » et a donné **une date de réponse**. Vraie raison notée en commentaire. | Signé, ou Perdu après J+10 / 2 dates promises. | Date promise dépassée de 1 jour |
| 8 | **Signé** | Contrat + Annexe A + Annexe B signés, facture envoyée. Cuisine + ville bloquées en exclusivité. | Ne sort pas : la ligne reste pour le comptage. Le suivi continue dans le dossier client. | 3 jours sans dossier client créé (ClickUp + Drive) |
| 9 | **Perdu** | Refus, injoignable, 2 lapins, J+10 sans réponse. **Raison obligatoire** en commentaire (prix / déjà quelqu'un / pas convaincu / timing / injoignable / lapin / autre). | Recontact à 90 jours si raison = timing ou déjà quelqu'un → repasse « À appeler ». | 90 jours (rappel de recontact) |

Règles transverses :
- Toute tâche avec **échéance dépassée** = urgence du jour, avant tout nouvel appel.
- Une tâche sans échéance n'existe pas : on en met une à chaque changement de statut.
- Le prix n'apparaît jamais dans ClickUp avant le statut « RDV tenu » (pas de grille, pas de devis anticipé). Après le RDV, le plan et le prix proposés vont dans le commentaire.
- Aucun chiffre de résultat, aucun nom de client ailleurs que dans le dossier client.

## 2. Mouvements autorisés

```
À appeler → Appelé – pas joint → Décideur joint → RDV fixé → RDV tenu → Proposition envoyée → Signé
                 ↓                   ↓               ↓            ↓              ↓↑
               Perdu               Perdu           Perdu        Perdu       En réflexion → Signé / Perdu
Perdu (timing, déjà quelqu'un) → À appeler après 90 jours
```

Un restaurant joint directement en personne (passage à table) ou par DM entre en « Décideur joint » sans passer par les deux premiers statuts.

## 3. Les 5 chiffres de la semaine

Comptés chaque vendredi soir (ou dimanche), semaine du lundi au dimanche, à partir des commentaires ClickUp datés et de l'agenda. Notés dans un commentaire épinglé de la liste Pipeline.

| Chiffre | Définition | Source |
|---|---|---|
| **1. Appels** | Nombre de tentatives d'appel sortantes (y compris messagerie, standard, faux numéro). Un restaurant appelé 3 fois = 3. | Feuille d'appel → commentaires ClickUp |
| **2. Décideurs joints** | Nombre de conversations distinctes avec un responsable (téléphone, DM ou en personne). Un même décideur joint 2 fois = 1 par semaine. | Statut « Décideur joint » ou plus haut, atteint cette semaine |
| **3. RDV fixés** | RDV datés, dans l'agenda, confirmés par WhatsApp, fixés cette semaine (même si le RDV a lieu la semaine suivante). | Agenda Google + statut « RDV fixé » |
| **4. RDV tenus** | RDV de stratégie réellement tenus cette semaine (prospect présent, calcul ROI fait). | Statut « RDV tenu » atteint cette semaine |
| **5. Signatures** | Contrats signés cette semaine (Annexe A + B). | Statut « Signé » atteint cette semaine |

### Formule de conversion

```
Taux global      = Signatures / Appels
Joint            = Décideurs joints / Appels
Fixation         = RDV fixés / Décideurs joints
Tenue            = RDV tenus / RDV fixés
Closing          = Signatures / RDV tenus

Taux global = Joint × Fixation × Tenue × Closing
```

Lecture : chaque semaine, on regarde **le maillon le plus faible** et on ne travaille que celui-là la semaine suivante (horaires d'appel si Joint est bas, script et objections si Fixation est basse, rappel la veille si Tenue est basse, calcul ROI et proposition si Closing est bas).

### Rétro-calcul de l'objectif

Pour viser N signatures par mois, on remonte la chaîne avec les taux observés :

```
RDV tenus nécessaires   = N / Closing
RDV fixés nécessaires   = RDV tenus / Tenue
Décideurs nécessaires   = RDV fixés / Fixation
Appels nécessaires      = Décideurs / Joint
Appels par session      = Appels nécessaires / nombre de sessions dans le mois
```

Les taux ne sont pas inventés : tant qu'on n'a pas 4 semaines de chiffres, on note les chiffres bruts et on ne publie aucun taux.

### Gabarit hebdo (à coller dans le commentaire épinglé)

```
Semaine du __/__ au __/__
Appels : __ | Décideurs joints : __ | RDV fixés : __ | RDV tenus : __ | Signatures : __
Joint __% | Fixation __% | Tenue __% | Closing __% | Global __%
Maillon faible de la semaine : ________ → action semaine prochaine : ________
Tâches en retard dans le Pipeline lundi matin : __ (objectif : 0)
```
