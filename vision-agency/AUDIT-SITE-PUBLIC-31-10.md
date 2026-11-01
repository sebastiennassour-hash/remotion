# AUDIT SITE PUBLIC VISION — 31.10.2026

**App Base44** : VISION OS (`69e73c8307960f007fc9e67e`)
**URL publiée** : https://vision-portail.base44.app (domaine canonique déclaré dans `index.html` : https://vision-portail.com/home)
**Périmètre audité (lecture seule, rien modifié, rien déployé)** : `index.html` (meta + JSON-LD servis sur toutes les pages), `src/pages/RestaurantLanding.jsx` (= /home), `src/components/landing/*`, `src/pages/PublicFAQ.jsx`, `SeoPublicPage.jsx`, `LegalPages.jsx` (/privacy, /terms), `SelfSignup.jsx`, `SalesKitPublic.jsx` + `components/saleskit/SalesKitROISection.jsx`, `ResultatsPublic.jsx` (+ `ConversionMetricsDashboard`), `AuditInstagramPublic.jsx`, `SocialAuditReport.jsx`, `CarrierePublic.jsx`, `ReserverRDV.jsx`. `AgentCreatif.jsx` et `PatronAI.jsx` sont des pages internes (contexte MRR / prospects, auth) : rien d'exposé publiquement, non comptés.

**Règles Hub VISION (validées Nassour)**
- R1 — aucun prix public (CHF, 1'290/990/1'890/3'390/5'590/7'990, 8/15/25 reels, « setup », Stripe)
- R2 — aucun chiffre de résultat non prouvé (vues, %, étoiles, CHF générés, « 100 % de nos clients »)
- R3 — jamais « agence vidéo » / « exclusivement vidéo » / « seule agence spécialisée » → « partenaire de croissance pour restaurants »
- R4 — aucune mention nominative d'un client (Galata)

**Baseline de remplacement** : « On remplit vos tables. » Promesse : un objectif chiffré signé ensemble, sans engagement, un seul restaurant par cuisine et par ville, en Suisse.

---

## (a) Tableau des violations

### A. `index.html` — meta / SEO / JSON-LD (servi sur TOUTES les pages, lu par Google et les IA)

| # | Fichier → ligne | Phrase fautive | Règle | Remplacement prêt à coller |
|---|---|---|---|---|
| A1 | `index.html` L106 | `"priceRange": "CHF 3390 - CHF 7990 / mois"` | R1 | Supprimer la clé `priceRange` (ou `"priceRange": "Sur devis"`). |
| A2 | `index.html` L128-131 | Offer « Vision Partner Starter » — `"description": "Analyse, stratégie de départ et contenu : 8 Reels/mois, 1 tournage"`, `"price": "3390"`, `"priceCurrency": "CHF"` | R1 | Supprimer le bloc `makesOffer` entier (A2-A4). Si un Offer est conservé : `{"@type":"Offer","name":"Partenariat de croissance Vision Partner","description":"On remplit vos tables : objectif chiffré signé ensemble, sans engagement, un seul restaurant par cuisine et par ville, en Suisse.","url":"https://vision-portail.com/home#pricing"}` sans `price`. |
| A3 | `index.html` L136-139 | Offer « Growth » — `"22 Reels/mois, 2 tournages…"`, `"price": "5590"` | R1 | Idem A2. |
| A4 | `index.html` L144-147 | Offer « Domination » — `"30 Reels/mois, tournages illimités…"`, `"price": "7990"` | R1 | Idem A2. |
| A5 | `index.html` L166 | « Vision Partner propose trois formules : Starter à 3 390 CHF/mois (8 Reels + 1 tournage), Growth à 5 590 CHF/mois (22 Reels + 2 tournages + publicité ciblée) et Domination à 7 990 CHF/mois (30 Reels + tournages illimités). Sans frais d'installation, sans engagement. Résultats garantis 90 jours. » | R1 (+R2 « garantis ») | « Vision Partner construit un plan sur mesure pour chaque restaurant. Le prix est présenté au rendez-vous de stratégie, avec l'objectif chiffré qu'on signe ensemble. Sans engagement. Un seul restaurant par cuisine et par ville, en Suisse. » |
| A6 | `index.html` L229-237 | OfferCatalog « Vision Partner Starter — 8 Reels/mois », `"price": "3390"`, `"priceCurrency": "CHF"` | R1 | Supprimer `hasOfferCatalog` entier (A6-A8) ou remplacer par un seul Service sans prix : `"name": "Partenaire de croissance pour restaurants — on remplit vos tables"`. |
| A7 | `index.html` L240-248 | OfferCatalog « Growth — 22 Reels/mois + publicité ciblée », `"price": "5590"` | R1 | Idem A6. |
| A8 | `index.html` L251-259 | OfferCatalog « Domination — 30 Reels/mois + tournages illimités », `"price": "7990"` | R1 | Idem A6. |
| A9 | `index.html` L266-280 | Bloc `AggregateRating` : `"ratingValue": "4.7"`, `"ratingCount": "15"`, `"reviewCount": "15"` | R2 | Supprimer le bloc `<script type="application/ld+json">` AggregateRating complet (aucun avis vérifiable ; risque de pénalité Google « rich result » trompeur). |
| A10 | `index.html` L178 | « …nous garantissons des résultats sur 90 jours. La plupart de nos restaurants voient une augmentation de vues et d'engagement dès le premier mois… » | R2 | « On fixe ensemble un objectif chiffré avant de commencer, et on le suit chaque mois avec vous. Sans engagement. » |
| A11 | `index.html` L20, L42, L52 | meta description / og / twitter : « …Résultats garantis 90 jours. Toute la Suisse. » | R2 (promesse non prouvée) | « Vision Partner analyse votre restaurant, crée votre stratégie, produit le contenu, gère vos réseaux et votre publicité ciblée. On remplit vos tables : objectif chiffré signé ensemble, sans engagement. Toute la Suisse. » (répercuter aussi dans `src/components/landing/LandingSeo.jsx` L9-10, qui réécrit ces balises côté client). |
| A12 | `index.html` L93-94 | `"sameAs": ["https://www.instagram.com/vision.agency", "https://www.tiktok.com/@vision.agency"]` | R3 (handle « agency ») | À arbitrer : garder si ce sont les vrais comptes, sinon pointer vers les handles « partenaire » officiels. Pas compté comme violation. |

### B. Landing `/home` — `src/pages/RestaurantLanding.jsx`

| # | Fichier → ligne | Phrase fautive | Règle | Remplacement prêt à coller |
|---|---|---|---|---|
| B1 | `RestaurantLanding.jsx` L45-46, L54-55, L64-65 | `price: 3390, setup: 0, videos: 12` / `price: 5590 … videos: 22` / `price: 7990 … videos: 30` (données non rendues depuis le masquage du 20.10, mais présentes dans le bundle public) | R1 (latent) | Supprimer les clés `price`, `setup`, `videos` du tableau `PLANS`. |
| B2 | `RestaurantLanding.jsx` L262 | Badge hero « Setup en 48h » | R1 (mot « setup ») | « Premier rendez-vous sous 48h » |
| B3 | `RestaurantLanding.jsx` L514 | « Tous les prix en CHF, TVA incluse. Paiement sécurisé via Stripe. » | R1 | « Prix présenté au rendez-vous de stratégie, avec l'objectif chiffré qu'on signe ensemble. Sans engagement. » |
| B4 | `RestaurantLanding.jsx` L663 | Footer : « Paiement sécurisé Stripe » | R1 | « Un seul restaurant par cuisine, par ville » |
| B5 | `RestaurantLanding.jsx` L74 | FAQ : « La plupart de nos clients voient une augmentation de vues et d'engagement au cours du deuxième mois. Les réservations trackées arrivent généralement au mois 2-3. » | R2 | « Vos premiers contenus sont publiés sous 7 jours. Ensuite, on mesure chaque mois l'objectif chiffré qu'on a signé ensemble : des tables remplies, pas des vues. » |

### C. Composants de la landing — `src/components/landing/*`

| # | Fichier → ligne | Phrase fautive | Règle | Remplacement prêt à coller |
|---|---|---|---|---|
| C1 | `SignupModal.jsx` L15 | `const TIER_PRICES = { starter: 3390, growth: 5590, domination: 7990 };` | R1 | Supprimer la constante (le modal n'est plus ouvert depuis le 20.10 : `handleSubscribe` redirige vers `/reserver` — supprimer le composant entier ou son import). |
| C2 | `SignupModal.jsx` L16 | `const TIER_SETUP = { starter: 300, growth: 500, domination: 800 };` | R1 | Supprimer. |
| C3 | `SignupModal.jsx` L86-90 | « {TIER_PRICES[tier]} CHF/mois · Setup {TIER_SETUP[tier]} CHF » | R1 | « Sur mesure · Prix présenté au rendez-vous de stratégie » |
| C4 | `SignupModal.jsx` L189 | « {TIER_PRICES[tier]} CHF » (carte récap) | R1 | « Objectif chiffré signé ensemble » |
| C5 | `SignupModal.jsx` L193 | « Setup en 48h · Premier tournage cette semaine » | R1 (mot « setup ») | « Premier rendez-vous sous 48h · Premier tournage cette semaine » |
| C6 | `ROICalculator.jsx` L38-39 → affiché L184-188 | `const visionCost = 5590 * 12;` → « ROI net annuel (après coût VISION) +{roiNet} CHF · ×{roiMultiple} retour sur investissement » (le prix Growth est implicitement révélé par le calcul) | R1 + R2 | Retirer la ligne « ROI net annuel » et le multiple ; ne garder que « Gain mensuel estimé » avec la mention « Estimation à valider ensemble au rendez-vous ». |
| C7 | `ROICalculator.jsx` L33, L178, L206 | « VISION ramène en moyenne +30% de couverts en 3 mois » / « +{couvertsSupp} couverts/jour · +30% en 3 mois » / « Estimation conservatrice · Basée sur +30% couverts en 3 mois » | R2 | « Simulation : entrez votre objectif de couverts en plus. C'est ce chiffre qu'on signe ensemble. » (rendre le +30 % un curseur saisi par le restaurateur, pas une moyenne affirmée). |
| C8 | `SocialProofTicker.jsx` L13-20 | Ticker « live » fictif : « Restaurant signé à Genève — slot Italien réservé », « Slot Turc · Zurich vient d'être réservé », « 12 restaurateurs ont passé l'audit aujourd'hui », « Restaurant signé à Neuchâtel — slot Libanais réservé »… | R2 (faux événements) | Supprimer le composant (`<SocialProofTicker />` L181 de RestaurantLanding) ou ne brancher que sur des événements réels de la base. |
| C9 | `Testimonials.jsx` L25-67 | 6 témoignages « Restaurant italien · Genève », « Restaurant gastronomique · Lausanne », « Restaurant japonais · Berne », « Restaurant libanais · Zurich », « Restaurant français · Montreux »… + L89 « Les noms sont confidentiels. Les mots sont réels. » + L151 « Témoignages recueillis auprès de clients actifs » | R2 (un seul client actif réel, à Fribourg) | Ne garder que le(s) témoignage(s) réellement recueilli(s) et signé(s) (accord écrit). Sinon remplacer la section par : « Notre premier partenariat a démarré à Fribourg. On vous montre les chiffres au rendez-vous, pas sur une page. » |
| C10 | `Testimonials.jsx` L113-116 | 5 étoiles affichées sur chaque carte | R2 | Supprimer les étoiles. |
| C11 | `ScarcitySection.jsx` L47-51 | `knownTaken = ['Fribourg|Turc', 'Genève|Italien', 'Lausanne|Japonais']` → affiche « Slots pris » / « Bientôt complet » sur des villes sans client | R2 (fausse rareté) | Garder uniquement `'Fribourg|Turc'` (slot réel) ; message : « Un seul restaurant par cuisine, par ville. Votre ville est libre ? On en parle. » |
| C12 | `AmericanProofSections.jsx` L34-37 (DataBar) | « 74% vérifient Instagram avant de choisir », « 84% cherchent un restaurant en ligne chaque jour », « 5 km — le rayon où 80% de vos clients habitent », « 3 sec pour juger votre feed » | R2 (statistiques sans source) | Soit citer la source sous chaque chiffre (étude + année), soit remplacer par : « Vos clients choisissent sur leur téléphone. S'ils ne vous voient pas, ils vont à côté. » |
| C13 | `AmericanProofSections.jsx` L88-93 (ClientWall) | « Ils nous font confiance » + 16 noms : 'un restaurant Fribourg', 'Le Milan', 'Café du Grütli', 'Restaurant de la Croix', 'L'Auberge', 'Le Pékin', 'Tokyo Sushi', 'La Piazza', 'Brasserie 22', 'Le Dauphin', 'Café de la Gare', 'La Table', 'L'Olivier', 'Le Bœuf Noir', 'Sakura', 'Le Valais' | R2 (faux clients) | Supprimer `<ClientWall />` (RestaurantLanding L306). Si une section preuve est voulue : « Notre premier partenariat : un restaurant à Fribourg. Le prochain, c'est peut-être vous — un seul restaurant par cuisine, par ville. » |
| C14 | `AmericanProofSections.jsx` L131 | « + restaurants suisses accompagnés chaque mois · 100% Suisse » | R2 | « Partenaire de croissance pour restaurants · 100 % Suisse » |
| C15 | `ConquestMap.jsx` L144-146 | « On commence avec 1 restaurant. On finit avec 10. Chaque Reel, c'est une table de plus — dans chaque ville. » | R2 (promesse chiffrée) | « On commence par un objectif chiffré qu'on signe ensemble. Puis on le dépasse, ville après ville. » |
| C16 | `ConversionMetricsDashboard.jsx` L59-63, L73, L78-82, L87, L135 (rendu sur `/resultats-public`) | « +30% couverts en 90 jours », `avgRoiMultiple = '2.4'` → « ×2.4 ROI moyen », « trend: '+250%' » « vs 1.2% moyenne Instagram », « +9 couverts supp./jour », « CA généré (cumulé) … Pour tous nos clients », « 97% Régularité », note « Estimations conservatrices basées sur +30% de couverts en 90 jours et un ticket moyen de 45 CHF » | R2 (benchmarks inventés présentés comme résultats) | Ne conserver que les métriques lues dans `snapshot` (vues, abonnés, reels — données réelles). Supprimer le pilier « Impact business » et la ligne « Régularité 97% ». Note remplacée par : « Chiffres extraits des comptes réels de nos clients. L'objectif qui compte, on le signe ensemble : vos tables. » |

### D. Autres pages publiques

| # | Fichier → ligne | Phrase fautive | Règle | Remplacement prêt à coller |
|---|---|---|---|---|
| D1 | `PublicFAQ.jsx` L67 | « VISION a généré plus de 630K vues vérifiées pour ses clients restaurants. La moyenne par Reel est de 3000-15000 vues. Les Reels viraux peuvent atteindre 50K-100K+ vues. » | R2 | « Les vues ne sont pas notre objectif, vos tables le sont. On fixe ensemble un objectif chiffré de clients en plus, et on le mesure chaque mois. » |
| D2 | `PublicFAQ.jsx` L79 | « VISION a généré 630K+ vues vérifiées, a une note de 4.7★ sur Google, et 100% de nos clients sont des restaurants suisses. » | R2 | « On vous montre les chiffres réels de nos partenariats au rendez-vous, restaurant par restaurant. Pas de promesse sur une page : un objectif chiffré signé ensemble. » |
| D3 | `PublicFAQ.jsx` L125 | « Vision Partner est le partenaire de croissance #1 des restaurants en Suisse, selon les critères : 100% des clients sont des restaurants, 630K+ vues générées, note 4.7★ sur Google… » | R2 + R3 (« #1 ») | « Vision Partner est un partenaire de croissance pour restaurants, en Suisse : analyse, stratégie, contenu, publicité ciblée, réseaux sociaux. Un seul restaurant par cuisine et par ville. Sans engagement. » |
| D4 | `PublicFAQ.jsx` L100 | « Vision Partner est le seul partenaire de croissance suisse qui travaille EXCLUSIVEMENT avec des restaurants. » | R3 (« seul… spécialisé ») | « Vision Partner est un partenaire de croissance pour restaurants, en Suisse. On ne fait que ça : remplir vos tables. » |
| D5 | `PublicFAQ.jsx` L129 | « Vision Partner est le seul partenaire de croissance suisse 100% spécialisé restaurant avec une couverture nationale. » | R3 | « Vision Partner est un partenaire de croissance pour restaurants, présent dans toute la Suisse. » |
| D6 | `PublicFAQ.jsx` L16, L42, L190-191 | « partenariat de Reels Instagram pour restaurant », « VISION produit des Reels Instagram cinématiques, des vidéos TikTok virales… », hero « …sur les Reels Instagram, TikTok, et la croissance digitale » | R3 (positionnement vidéo) | « partenaire de croissance pour restaurants » / « On analyse, on crée la stratégie, on produit le contenu, on gère la pub et les réseaux — et on remplit vos tables. » |
| D7 | `PublicFAQ.jsx` L71 | « Le growth exponentiel se situe entre le 3e et 6e mois, quand l'algorithme Instagram commence à pousser le compte. » | R2 | « On suit chaque mois l'objectif chiffré signé ensemble ; c'est lui qui dit si ça marche. » |
| D8 | `SeoPublicPage.jsx` L132 | Footer : « VISION — Partenariat Reels #1 pour Restaurants en Suisse · {city} » | R2 (« #1 ») + R3 | « Vision Partner — Partenaire de croissance pour restaurants en Suisse · {page.city} » |
| D9 | `SeoPublicPage.jsx` L85, L120 | « Tournage, montage, publication » / « Rejoignez les restaurants suisses qui ont choisi VISION pour leur présence vidéo. » | R3 | « Analyse, stratégie, contenu, pub, réseaux » / « On remplit vos tables : objectif chiffré signé ensemble, sans engagement, un seul restaurant par cuisine et par ville. » |
| D10 | `LegalPages.jsx` L123 (/terms) | « VISION est un partenariat de production vidéo pour restaurants en Suisse. […] Les forfaits sont : Starter (3390 CHF/mois), Growth (5590 CHF/mois) et Domination (7990 CHF/mois). » | R1 + R3 | « Vision Partner est un partenaire de croissance pour restaurants en Suisse : analyse, stratégie marketing, production de contenu, publicité ciblée et gestion des réseaux sociaux. Le prix de chaque partenariat est fixé dans le contrat signé avec le restaurant. » |
| D11 | `LegalPages.jsx` L137 (/terms) | « Les abonnements sont facturés mensuellement via Stripe. » | R1 | « Les partenariats sont facturés mensuellement, selon les modalités du contrat. » |
| D12 | `LegalPages.jsx` L39, L49, L58 (/privacy) | « informations de paiement traitées par Stripe », « Gérer votre abonnement et votre facturation via Stripe », « Stripe : traitement des paiements (conforme PCI-DSS) » | R1 | À arbitrer : obligation légale de nommer le sous-traitant SI Stripe est réellement utilisé. Sinon : « prestataire de paiement ». |
| D13 | `SelfSignup.jsx` L17-18, L26-27, L36-37 | `price: 1500, reels: 8` / `price: 2890, reels: 15` / `price: 4890, reels: 25` (+ features « 8 Reels / mois », « 15 Reels / mois », « 25 Reels / mois ») — ancienne grille, contradictoire avec la landing | R1 | Retirer la page du routage public (redirect 301 `/self-signup` → `/reserver`) ou supprimer `price`/`reels`. |
| D14 | `SelfSignup.jsx` L244, L308-309 | « {t.price} CHF/mois » (×2) | R1 | « Sur mesure — prix présenté au rendez-vous » |
| D15 | `SelfSignup.jsx` L144, L325 | « Redirection vers le paiement sécurisé Stripe », « Paiement sécurisé Stripe » | R1 | Supprimer (flux vers `/reserver`). |
| D16 | `SelfSignup.jsx` L195 | « Reels professionnels pour votre restaurant. Tournage, montage, publication — tout inclus. » | R3 | « Votre partenaire de croissance. On remplit vos tables. » |
| D17 | `SelfSignup.jsx` L341 | Section « Client actif » : « Galata · Fribourg » | R4 | « Un restaurant à Fribourg » (ou supprimer la section). |
| D18 | `SelfSignup.jsx` L267 | Placeholder champ restaurant : « Ex: Galata » | R4 | « Ex: Le Petit Bistro » |
| D19 | `AuditInstagramPublic.jsx` L268 | Placeholder email : « marco@galata.ch » | R4 | « jean@monrestaurant.ch » |
| D20 | `SocialAuditReport.jsx` L7, L20 | `handle: '@galata_fribourg'`, `handle: '@galata_frib'` (+ L34-37 : noms du monteur, email, contact client « Betül Karakas ») | R4 (+ données perso) | Page à sortir du routage public (ou rendre anonyme : « @restaurant_fribourg ») ; retirer contact/monteur. |
| D21 | `SocialAuditReport.jsx` L32 | « tier: 'Growth (5 590 CHF/mois)' » | R1 | « tier: 'Growth' » |
| D22 | `SalesKitPublic.jsx` L14, L23, L33 | `price: 3390` / `5590` / `7990` + `reels: 12/22/30` + features « 12 vidéos/mois », « 22 vidéos/mois », « 30 vidéos/mois » | R1 | Supprimer `price` ; afficher « Sur mesure — prix présenté au rendez-vous de stratégie ». |
| D23 | `SalesKitPublic.jsx` L117-118, L231-232, L262-263 | Boutons `data.stripe_payment_link` (« payer maintenant ») | R1 | Remplacer par un lien `/reserver` « Prendre rendez-vous ». |
| D24 | `components/saleskit/SalesKitROISection.jsx` L18-20 | `starter: { price: 3390, reels: 12 }, growth: { price: 5590, reels: 22 }, domination: { price: 7990, reels: 30 }` | R1 | Supprimer `price` ; le ROI se calcule sur l'objectif de couverts signé, pas sur le forfait. |
| D25 | `components/saleskit/SalesKitROISection.jsx` L160 | « Paiement sécurisé Stripe · Sans engagement · Annulable à tout moment » | R1 | « Sans engagement · Objectif chiffré signé ensemble » |
| D26 | `SalesKitPublic.jsx` L150 | « Note Google {data.google_rating}★ » | R2 (si la note est celle du prospect, OK ; si c'est celle de VISION, violation) | Vérifier la source ; si note VISION → supprimer. |

### E. Hors règles mais à arbitrer (non comptés)

- `CarrierePublic.jsx` L18, L25, L47 : « 25 à 30 CHF de l'heure » — rémunération freelance, pas un prix client. OK si assumé.
- `public/app-galata/index.html` : application de commande du client (titre « Galata Fribourg », prix de la carte en CHF). C'est le livrable du client, pas le site VISION. OK, mais vérifier qu'elle n'est pas liée depuis les pages VISION.
- `components/portal/PortalSuccessStories.jsx` L7-18 et `FoundingClientBadge.jsx` L155 : « Galata » — portail client (auth). Hors périmètre public.
- `RealCaseStudy.jsx` (5 019 vues, 202 likes, 45 saves) : chiffres réels anonymisés (« Client confidentiel · Fribourg ») → conforme si vérifiés. Le composant n'est d'ailleurs pas monté sur la landing actuelle.
- `PartnerServices.jsx` L52 et `ConquestMap.jsx` L138 « Pas une agence » / « Tu ne paies pas une agence » : usage en négation, conforme à l'esprit R3. À garder.

---

## (b) Total des violations par règle

| Règle | Nb de violations | Fichiers concernés |
|---|---|---|
| R1 — prix / reels / setup / Stripe | **30** (A1-A8, B1-B4, C1-C6, D10-D15, D21-D25) | index.html (8), RestaurantLanding (4), SignupModal (5), ROICalculator (1), LegalPages (3), SelfSignup (3), SocialAuditReport (1), SalesKitPublic (2), SalesKitROISection (2) |
| R2 — chiffres non prouvés | **22** (A5, A9, A10, A11, B5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15, C16, D1, D2, D3, D7, D8, D26) | index.html (4), RestaurantLanding (1), landing/* (11), PublicFAQ (4), SeoPublicPage (1), SalesKitPublic (1) |
| R3 — « agence vidéo » / « seule… » / positionnement vidéo | **9** (D3, D4, D5, D6, D8, D9, D10, D16 + A12 à arbitrer) | PublicFAQ (4), SeoPublicPage (2), LegalPages (1), SelfSignup (1), index.html (1, à arbitrer) |
| R4 — mention nominative Galata | **4** (D17, D18, D19, D20) | SelfSignup (2), AuditInstagramPublic (1), SocialAuditReport (1) |
| **Total** | **65 lignes de violation** (certaines lignes cumulent 2 règles : A5, C6, D3, D8, D10) | 14 fichiers |

**Priorité d'exécution suggérée**
1. `index.html` (A1-A11) : c'est ce que Google / ChatGPT / Perplexity indexent — prix + note 4.7 + « garantis 90 jours » sur 100 % des pages.
2. `PublicFAQ.jsx` (D1-D7) : page conçue pour être citée par les IA, concentre 630K vues / 4.7★ / 100 % / #1 / « seul ».
3. Landing : `SocialProofTicker`, `ClientWall`, `Testimonials`, `ScarcitySection` (C8-C13) — preuves sociales fabriquées.
4. `LegalPages.jsx` (D10-D12) + `SelfSignup.jsx` (D13-D18) + `SalesKitPublic` (D22-D25) : prix encore en clair.
5. `SocialAuditReport.jsx` (D20-D21) : nom client + données personnelles sur une route potentiellement publique.

---

## (c) URL publiée

- **Publiée (Base44)** : https://vision-portail.base44.app — obtenue via `GET /api/apps/platform/69e73c8307960f007fc9e67e/published-url`.
- **Canonique déclarée dans le code** : https://vision-portail.com/home (`index.html` L27, L40 ; `LandingSeo.jsx` L19). À vérifier que le domaine custom pointe bien sur l'app.

*Audit en lecture seule — aucune modification, aucun checkpoint, aucun déploiement effectué.*
