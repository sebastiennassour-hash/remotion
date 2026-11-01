# Système de mesure client — de J0 à M3

Document interne VISION. Il décrit comment on mesure, où on range, ce qu'on envoie au client chaque mois et ce qu'on a le droit de dire en public. Il accompagne `ANNEXE-A-OBJECTIF.md` : l'Annexe dit *quoi* mesurer et avec quelle conséquence, ce document dit *comment* on s'y prend chaque semaine.

Règle de base : **aucune vidéo ne part tant que le point de départ n'est pas signé.** Les quatre semaines de référence ne sont pas du temps perdu, c'est le moment où on tourne la matière, où on cale les créneaux et où on apprend la caisse du client.

Positionnement : VISION est le partenaire de croissance des restaurants, [ZONE À TRANCHER : toute la Suisse / Suisse romande]. On ne parle pas d'« agence vidéo ».

---

## 1. Rôles

| Rôle | Qui | Responsabilité dans la mesure |
| --- | --- | --- |
| Responsable client | Nassour (ou la personne désignée dans ClickUp) | Signe l'Annexe A, fixe l'objectif avec le client, envoie le rapport mensuel, fait le calcul à J90 |
| Référent chiffres côté client | [nom dans l'Annexe A, section 4] | Envoie la preuve hebdomadaire (export, photo du cahier) |
| Production | équipe tournage / montage | Note les dates de publication et les liens dans ClickUp, aucune responsabilité sur le chiffre |
| Contrôle | Nassour | Relit chaque rapport avant envoi, vérifie que chaque chiffre a sa preuve |

Un seul chiffre fait foi : celui de la source désignée en section 4 de l'Annexe A. Les statistiques Instagram/TikTok sont du contexte, pas du résultat.

## 2. Où c'est rangé

### ClickUp — dossier client

Un dossier par client, nommé `[VILLE] — [Enseigne]`, avec quatre listes :

| Liste | Contenu | Champs personnalisés |
| --- | --- | --- |
| `00 Contrat` | Tâches : Annexe A signée, point de départ validé, J1 confirmé, J90 calculé | Date J0, Date J1, Date J90, Formule, Indicateur, Option garantie retenue |
| `01 Mesure` | Une tâche par semaine (`S-4` à `S+13`), avec la valeur de l'indicateur et le lien vers la preuve sur Drive | Valeur, Créneaux, Preuve (lien Drive), Relevé par, Date de relevé |
| `02 Publication` | Une tâche par vidéo : date, plateforme, lien, créneau visé par la vidéo | Date publiée, Plateforme, Lien, Créneau visé |
| `03 Rapports` | Une tâche par rapport mensuel (M1, M2, M3), avec le PDF en pièce jointe et la date d'envoi | Date envoyée, Accusé client (oui/non) |

### Drive — dossier client

```
Clients/
└── [VILLE] — [Enseigne]/
    ├── 00 Contrat/            contrat signé, Annexe A signée (PDF), avenants
    ├── 01 Preuves/            un fichier par semaine : AAAA-MM-JJ_S-4_export-caisse.pdf
    │                          nommage : date du dimanche de fin de semaine + numéro de semaine + source
    ├── 02 Vidéos publiées/    exports finaux, nommés comme dans ClickUp
    ├── 03 Rapports/           M1.pdf, M2.pdf, M3.pdf, et la version .md source
    └── 04 Autorisations/      accords écrits du client pour usage public (e-mails exportés en PDF)
```

Règles :
- Une preuve = un fichier daté dans `01 Preuves`, jamais seulement dans un fil WhatsApp ou un e-mail. Si la preuve arrive par message, on l'exporte en PDF ou on la sauvegarde en image le jour même.
- Rien n'est supprimé ni renommé après coup. Une correction = un nouveau fichier avec le suffixe `_v2` et une note dans la tâche ClickUp.
- Le client reçoit un lien en lecture sur `01 Preuves` et `03 Rapports` s'il le demande.

## 3. Le calendrier, de J0 à M3

Les semaines sont numérotées par rapport à J1 (première vidéo publiée). Les quatre semaines de référence vont de S-4 à S-1.

### J0 — signature

| Quoi | Qui | Où |
| --- | --- | --- |
| Contrat + Annexe A signés (sections 1 à 4, 6 à 10 ; la section 5 reste vide à ce stade) | Nassour + client | Drive `00 Contrat`, tâche ClickUp `Annexe A signée` |
| Choisir l'indicateur, la source, les créneaux ciblés, le référent chiffres côté client | Nassour + client | Annexe A, sections 3 et 4 |
| Créer le dossier ClickUp et le dossier Drive | Nassour | ClickUp + Drive |
| Convenir du jour de relevé hebdomadaire (recommandé : lundi matin pour la semaine écoulée) | Nassour + référent client | Tâche ClickUp `S-4` |
| Demander un export de la même période l'année précédente si la caisse le permet (contexte, pas calcul) | Nassour | Drive `01 Preuves/contexte/` |

### S-4 à S-1 — période de référence (4 semaines)

Chaque lundi :

| Quoi | Qui | Où |
| --- | --- | --- |
| Envoyer la preuve de la semaine écoulée (export caisse filtré sur les créneaux, ou photo du cahier) | Référent client | E-mail à VISION |
| Archiver la preuve, saisir la valeur dans la tâche `S-x`, relancer si rien n'est arrivé le mardi midi | Nassour | Drive `01 Preuves`, ClickUp `01 Mesure` |
| Tourner la matière, préparer les vidéos, **ne rien publier** | Production | ClickUp `02 Publication` (statut « prêt, non publié ») |

Fin de S-1 :

| Quoi | Qui | Où |
| --- | --- | --- |
| Remplir la section 5 de l'Annexe A (P0 = total des 4 semaines) | Nassour | Annexe A |
| Fixer l'objectif O (section 6) avec le client, en partant de la capacité réelle de la salle sur les créneaux ciblés | Nassour + client | Annexe A |
| Faire signer les sections 5 et 6, archiver | Nassour + client | Drive `00 Contrat`, tâche `Point de départ validé` |
| Confirmer J1 par e-mail aux deux adresses de l'Annexe | Nassour | Tâche `J1 confirmé` |

### S1 à S4 — mois 1

| Quoi | Qui | Où |
| --- | --- | --- |
| Publier selon la formule (12 / 22 / 30 vidéos par mois), noter chaque publication le jour même | Production | ClickUp `02 Publication` |
| Relevé hebdomadaire, identique à la période de référence | Référent client + Nassour | ClickUp `01 Mesure`, Drive `01 Preuves` |
| Si l'indicateur est « demandes directes » : tenir le registre (date, canal, ce que la personne a dit, suite donnée) | Client, avec le gabarit VISION | Drive `01 Preuves/registre-demandes.xlsx` |
| Point de 15 minutes avec le client à S2 : la preuve arrive-t-elle sans friction ? Les créneaux sont-ils les bons ? | Nassour | Note dans ClickUp |
| **Rapport M1** envoyé au plus tard le 5e jour ouvrable après S4 | Nassour | Drive `03 Rapports`, ClickUp `03 Rapports` |

### S5 à S8 — mois 2

Même rythme. En plus :

| Quoi | Qui | Où |
| --- | --- | --- |
| Appliquer les changements annoncés dans le rapport M1 (créneaux, formats, horaires de publication) | Production | ClickUp `02 Publication` |
| Vérifier à S6 où on en est par rapport à l'objectif (R partiel / O) et le dire au client sans détour, même si c'est en dessous | Nassour | Rapport M2 |
| **Rapport M2** | Nassour | Drive, ClickUp |

### S9 à S13 — mois 3 et clôture

Les semaines S10 à S13 sont la période de comparaison de l'Annexe A (4 dernières semaines complètes avant J90).

| Quoi | Qui | Où |
| --- | --- | --- |
| Relevés hebdomadaires sans exception : une preuve manquante ici pèse sur le calcul (Annexe A, 7.1 point 4) | Référent client + Nassour | ClickUp, Drive |
| **Rapport M3** incluant le calcul R contre O, les 4 preuves, et la conséquence prévue (section 7.2 ou 7.3 de l'Annexe) | Nassour | Drive, ClickUp, e-mail au client dans les 10 jours ouvrables après J90 |
| Attendre les 10 jours ouvrables de contestation avant d'appliquer la conséquence | Nassour | Tâche `J90 calculé` |
| Si poursuite : nouvelle Annexe A, nouveau P0 = R, nouvel O | Nassour + client | Drive `00 Contrat` |
| Demander l'accord écrit pour un usage public du résultat (voir section 5 de ce document) | Nassour | Drive `04 Autorisations` |

## 4. Gabarit du rapport mensuel

Un rapport = 1 page, 4 sections, toujours dans cet ordre. Il part en PDF par e-mail, avec les preuves du mois en pièces jointes ou en lien Drive. La version source est un `.md` dans `03 Rapports`.

```markdown
# [Enseigne] — Rapport mois [1/2/3]
Période : du [jj.mm] au [jj.mm] (semaines S[x] à S[y]) · Indicateur : [couverts sur créneaux ciblés / réservations honorées / demandes directes]
Objectif à 90 jours (Annexe A) : O = [ ] · Point de départ : P0 = [ ]

## 1. Le chiffre du restaurant
| Semaine | Dates | Valeur | Preuve |
| S[x] | | | [lien Drive] |
| S[y] | | | [lien Drive] |
Total du mois : [ ] — Point de départ sur 4 semaines : [P0] — Écart : [+/- ] ([ ] %)
Où on en est par rapport à l'objectif : [une phrase factuelle, sans adjectif].
Contexte noté ce mois : [fermeture, changement de carte, événement local, rien].

## 2. Les vidéos publiées
| Date | Plateforme | Lien | Créneau visé | Vues / enregistrements / partages (contexte) |
Total publié : [ ] / [12 · 22 · 30] prévus.
Rappel : les vues, likes et visites de profil sont du contexte, pas du résultat.

## 3. Ce qu'on a vu
Trois points maximum, tirés des chiffres ci-dessus. Exemples de forme :
- « Les deux vidéos “cuisine ouverte” ont été les plus partagées ; le mardi soir est passé de [ ] à [ ] couverts sur les deux semaines qui ont suivi. »
- « Les réservations arrivent surtout le dimanche soir pour la semaine ; on publie actuellement le jeudi. »
- « Le registre des demandes directes a été tenu [x] jours sur [y] : on manque de données pour conclure. »

## 4. Ce qu'on change le mois prochain
Trois décisions maximum, chacune avec : quoi, pourquoi (renvoi à la section 3), à partir de quand.
- [ ]
- [ ]
- [ ]
Ce qu'on vous demande : [ex. continuer les preuves le lundi, nous dire si la carte change].
```

Règles d'écriture du rapport :
- Chaque chiffre de la section 1 renvoie à un fichier dans `01 Preuves`. Pas de fichier, pas de chiffre.
- On écrit l'écart même quand il est négatif. Un rapport qui n'annonce que des bonnes nouvelles n'est pas lu.
- Pas de projection (« à ce rythme on atteindra… »). On dit où on en est, et ce qu'on change.
- Relecture par Nassour avant envoi, même si c'est lui qui l'a écrit : relire à froid, le lendemain.

## 5. Publier un chiffre en public

Un chiffre d'un client (post, reel, prospection, site, pitch) ne sort que si **les quatre conditions** sont remplies. C'est la règle du Hub : aucun chiffre de résultat non prouvé, risque art. 3 LCD.

1. **Une Annexe A signée** par ce client, sections 5 et 6 remplies, et un calcul J90 (ou un rapport mensuel) qui contient ce chiffre.
2. **La preuve archivée** dans `01 Preuves` : export ou photo datée, qui permet de retrouver le chiffre sans explication orale.
3. **L'accord écrit du client**, par e-mail ou signature, archivé dans `04 Autorisations`, qui précise :
   - ce qui peut être dit : le chiffre seul, anonymisé (« une pizzeria à [ville] ») / le chiffre avec le nom de l'enseigne / rien ;
   - sur quels supports ;
   - que l'accord est révocable à tout moment.
4. **Une formulation qui décrit, sans promettre** : on dit ce qui s'est passé chez ce client, sur cet indicateur, sur cette période. On n'écrit pas « ×3 pour vous aussi », ni « garanti », ni un chiffre moyen calculé sur un seul client.

Formulations admises (exemples) :
- « Chez un client à [ville], les couverts du mardi soir sont passés de 19 à 31 par semaine en 90 jours. Mesuré en caisse, point de départ signé. »
- « Une enseigne accompagnée depuis [mois] : +[ ] réservations honorées par semaine sur les services ciblés, relevées dans son logiciel de réservation. »

Formulations interdites :
- tout chiffre sans preuve archivée ou sans accord écrit ;
- tout chiffre agrégé (« nos clients font ×3 ») tant qu'on n'a pas au moins [DÉCISION NASSOUR : nombre minimum] clients avec Annexe A et preuve, et une méthode d'agrégation écrite ;
- toute mention des vues, de la portée ou des abonnés présentée comme un résultat ;
- tout prix, tout nombre de vidéos, tout nom de client sans accord écrit.

Si un chiffre est déjà en ligne et que le client retire son accord : retrait des supports contrôlés par VISION dans les 10 jours ouvrables, note dans la tâche ClickUp `04 Autorisations`.

Mémo sur le kit actuel : les mentions « ×3 clients », « ×3 chiffre d'affaires », « plus de 500 000 personnes touchées » et le cas Galata présents dans `LEGENDES-POSTS-PHOTO.md` et `LIVRAISON.md` ne remplissent pas ces quatre conditions aujourd'hui. Ils restent en attente de validation par Nassour, comme indiqué dans `LIVRAISON.md`.

## 6. Checklist premier client (10 lignes)

Cocher dans l'ordre. On ne passe pas à la ligne suivante tant que la précédente n'est pas faite.

- [ ] 1. Option de garantie A/B/C tranchée, règle de la preuve manquante tranchée, Annexe A relue par le juriste et la fiduciaire, version finale sans les deux options écartées.
- [ ] 2. Contrat + Annexe A signés (sections 1 à 4, 6 à 10) ; indicateur, source, créneaux ciblés et référent chiffres nommés.
- [ ] 3. Dossier ClickUp `[VILLE] — [Enseigne]` créé avec les 4 listes ; dossier Drive créé avec les 5 sous-dossiers ; lien Drive dans la tâche `00 Contrat`.
- [ ] 4. Jour de relevé hebdomadaire convenu ; premier export test reçu et ouvert pour vérifier qu'on sait filtrer les créneaux ciblés.
- [ ] 5. Quatre preuves de référence (S-4 à S-1) archivées et saisies dans ClickUp ; aucune vidéo publiée pendant ce temps.
- [ ] 6. Section 5 (P0) et section 6 (O) de l'Annexe A remplies, signées, archivées ; J1 confirmé par e-mail.
- [ ] 7. Chaque vidéo publiée notée le jour même dans `02 Publication` avec son lien et son créneau visé.
- [ ] 8. Rapport M1 envoyé dans les 5 jours ouvrables après S4, avec preuves, relu à froid par Nassour.
- [ ] 9. À S6, point d'étape honnête avec le client sur R partiel contre O, consigné dans ClickUp.
- [ ] 10. Rapport M3 avec calcul R contre O dans les 10 jours ouvrables après J90 ; 10 jours de contestation respectés ; conséquence appliquée ; accord écrit demandé avant toute mention publique.

---

## Décisions à prendre avant le premier client

| # | Décision | Où elle atterrit |
| --- | --- | --- |
| 1 | Option de garantie A, B ou C | Annexe A, 7.3 |
| 2 | Règle de la preuve hebdomadaire manquante (neutraliser ou prendre la moyenne de référence) | Annexe A, 7.1 point 4 |
| 3 | Zone d'intervention : toute la Suisse ou Suisse romande | Annexe A, section 1 ; ce document, en-tête |
| 4 | Nombre minimum de clients avec Annexe A avant tout chiffre agrégé en public | Ce document, section 5 |
| 5 | Qui tient le dossier ClickUp si ce n'est pas Nassour | Ce document, section 1 |
