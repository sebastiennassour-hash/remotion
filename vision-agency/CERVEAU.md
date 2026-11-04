# VISION — Cerveau central (lire en premier, toute IA, tout humain)

Mis à jour le 01.11.2026. Un seul point d'entrée. Si un document contredit celui-ci, celui-ci et le Hub Notion priment.

## 1. Ce qu'est VISION, en 4 lignes
Partenaire de croissance des restaurants, en Suisse. Promesse : « On remplit vos tables. » Méthode : point de départ mesuré 4 semaines, objectif chiffré signé (Annexe A), tournages réguliers chez le restaurant, publication, mesure, ajustement, rapport mensuel. Sans engagement, un restaurant par cuisine et par ville. Prix jamais public, annoncé en RDV avec le calcul du restaurateur.

## 2. Où est la vérité
| Quoi | Source unique | Les autres renvoient |
| --- | --- | --- |
| Faits, règles, décisions, interdits | Hub Notion (VISION Intelligence Hub) | tout le reste |
| Tâches, chantiers, dates | ClickUp, liste Redressement 30J puis Pipeline | QG |
| Suivi commercial (appels, RDV, résultats) | Vision OS (Base44), onglet registre | ClickUp Pipeline |
| Fichiers, rushs, factures, contrats signés | Google Drive, dossier client | — |
| Process, modèles, kit, code | Dépôt vision-agency (ce dossier) | Hub |
| La journée | QG du jour, régénéré 06h35 : https://claude.ai/artifact/4Q2vbDBZctfJ8ii5tT2T5Y | Mac |

## 3. Les interdits (validés par Nassour)
Prix en public. Chiffre de résultat sans preuve archivée. « Agence vidéo ». Nommer un client. Une IA qui écrit à un prospect ou un client, dépense, déploie ou supprime sans Nassour. Rien à l'ex-client de Fribourg.

## 4. L'ordre des étapes, pour ne jamais se demander quoi faire
1. **Matin 06h35** : le QG est prêt. Nassour lit : journée, risques, fait cette nuit.
2. **Appels / terrain** : feuille d'appel (commercial/FEUILLE-APPEL.md), fiches de la veille (Hub, « Briefs appels — jour »). Résultat noté dans les 10 minutes dans Vision OS.
3. **Après chaque contact** : commercial/CADENCE-APRES-CONTACT.md dit quoi faire à 10 min, 24 h, J+2, J+5, J+10. Message prêt. Statut ClickUp posé.
4. **RDV de stratégie** : commercial/PRESENTATION-OFFRE.md (45 min), CALCUL-ROI-RDV.md avec le restaurateur, prix puis silence, prochaine étape datée. Proposition 1 page après.
5. **Signature** : juridique/CONTRAT-ACCOMPAGNEMENT.md + ANNEXE-A-OBJECTIF.md + droit à l'image. Facture QR du mois 1 (juridique/FACTURE-QR-MODELE.md). Provision virée le jour même.
6. **J0 client** : clients/KICKOFF-J0.md. Dossier Drive copié du Template. Point de départ mesuré 4 semaines (SYSTEME-DE-MESURE-CLIENT.md).
7. **Tournage** : production/BRIEF-TOURNAGE-STANDARD.md (24 plans, 5 secondes). Rushs notés (GRILLE-NOTATION-RUSHS.md), vidéaste payé au score (BAREME-PHOTOGRAPHE.md).
8. **Montage et publication** : production/PIPELINE-MONTAGE-IA.md, J0 → J+4, textes de la Bibliothèque uniquement, validation client dans l'app, tâche ClickUp fermée avec l'URL.
9. **Chaque mois** : rapport client (gabarit dans SYSTEME-DE-MESURE-CLIENT.md), rituels de rétention (clients/PLAYBOOK-RETENTION.md).
10. **Chaque lundi** : pilotage/TABLEAU-DE-BORD.md, 12 chiffres. **Chaque dimanche 17h40** : bilan honnête automatique dans le Hub.
11. **Fin de collaboration** : clients/OFFBOARDING.md, sans exception.
12. **Un problème, n'importe lequel** : INCIDENTS.md. Tâche rouge ou orange en 10 minutes, réglé le jour même.
13. **Une info sur un prospect ou un client** (Nassour la dit, l'écrit ou l'enregistre) : elle est posée dans `crm/<ville>/<restaurant>.md` dans les 10 minutes, datée, avec la prochaine étape. Enregistrements dans Drive › 02-Prospection › Appels › Enregistrements, transcrits par Claude. Jamais « je te le dirai plus tard ».

## 5. Ce qui tourne tout seul (session Claude « tout-casser »)
06h35 QG · 12h50 et 17h50 veille des urgences (INCIDENTS.md) · 18h20 (dim → jeu) fiches du lendemain · dimanche 17h40 bilan hebdo · à chaque rendu : commit, push, ligne dans le Hub. Base44 : 37 automatisations en pause tant qu'il n'y a pas de client. Make : webhook leads à brancher (Nassour connecte ClickUp).

## 6. Les décisions ouvertes qui bloquent (Nassour)
Positionnement (zone) · mécanique de garantie A/B/C · solde ex-client 1 190 CHF · TVA et provision (FlexSolution) · montants du barème vidéaste · Remote Control sur le Mac · objectif cohérent (100K MRR ≈ 20 clients à la grille actuelle).

## 7. Le Mac
`mac/vision-setup-mac.sh` : une commande range le bureau dans ~/VISION, fait pointer VISION.html sur le QG, tire les process chaque matin à 06h30. Ensuite Remote Control pour que Claude écrive directement dessus.

## 8. La mesure du niveau
RDV tenus et signatures par semaine. Tout le reste est au service de ces deux chiffres.

## 14. Règles de travail de Claude (non négociables, 04.11.2026)

1. Nassour sur le terrain = tout arrive dans le chat, en texte lisible au téléphone. Pas d'artifact, pas de lien à ouvrir, sauf s'il le demande.
2. Tout est prêt la veille au soir : le parcours, les restos, les phrases, les fiches. Jamais le jour même.
3. Un message de Nassour = l'action, pas une explication. Il dit « fais », c'est fait dans le message suivant.
4. Une info donnée (un resto, une capture, un nom) = rangée tout de suite dans la bonne fiche CRM, sans qu'il le demande.
5. Un resto inconnu au RDV = je reconnais l'erreur en une ligne et je refais tout de suite.
6. Pas de pavés. Ce qu'il doit faire en premier, en premier.
7. Pas de liste de « pas fait » pour se couvrir : soit c'est fait, soit je le fais.
8. Les routines (QG, veille, fiches, score) tournent même si la session redémarre : à chaque réveil, je rattrape ce qui a sauté avant toute autre chose.
9. Jamais de prix, jamais de chiffre non prouvé, jamais « agence vidéo », rien à Galata, aucun message envoyé à un prospect par une IA.
10. Objectif unique de chaque journée : des RDV calés et des signatures. Tout le reste passe après.
