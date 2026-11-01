// Contenu des reels 9:16. Les clips sont dans public/clips/<n>.mp4 (plans générés).
// Syntaxe des titres : *mot* => italique serif accent ; \n => retour forcé.
export type ReelShot = {clip: number; from?: number};

export type Reel = {
	slug: string;
	label: string;
	template: 'fullbleed' | 'letterbox' | 'stack';
	shots: ReelShot[];
	headline: string;
	sub?: string;
	kicker?: string;
	cta?: string;
	caption: string;
};

export const REEL_FPS = 30;
export const CLIP_FRAMES = 150; // 5 s par plan

export const reels: Reel[] = [
	{
		slug: 'Manifeste',
		label: 'Manifeste',
		template: 'fullbleed',
		shots: [{clip: 2}],
		kicker: 'Vision — Agence vidéo',
		headline: 'UNE SALLE\nPLEINE\nCOMMENCE\nSUR UN\nÉCRAN.',
		sub: 'L’agence vidéo des restaurants suisses.',
		caption:
			'Une salle pleine commence sur un écran.\n\nVision est l’agence vidéo pensée uniquement pour les restaurants en Suisse. On filme vos plats, votre salle, votre équipe. Et on fait en sorte que les bonnes personnes les voient.\n\nLien en bio.',
	},
	{
		slug: 'Exclusif',
		label: 'Exclusif',
		template: 'letterbox',
		shots: [{clip: 1}],
		kicker: 'Exclusivement restaurants',
		headline: 'Nous ne filmons\n*que* des\nrestaurants.',
		sub: 'Pas de mode. Pas d’immobilier. Pas de tech.',
		caption:
			'Nous ne filmons que des restaurants.\n\nC’est un choix. On connaît le coup de feu, la lumière d’une salle à 19h et la façon dont un plat doit bouger à l’écran pour donner faim.\n\nVision. Exclusivement restaurants.',
	},
	{
		slug: 'Histoire',
		label: 'Votre histoire',
		template: 'fullbleed',
		shots: [{clip: 3}],
		kicker: 'Depuis 1974, ou depuis hier',
		headline: 'VOTRE\nHISTOIRE\nMÉRITE\nUN FILM.',
		sub: 'Pas une photo de menu.',
		caption:
			'Votre histoire mérite un film.\n\nTrente ans derrière le même comptoir, ou trois semaines depuis l’ouverture : chaque restaurant a une histoire que ses clients ne connaissent pas encore.\n\nOn la raconte.',
	},
	{
		slug: 'Offre',
		label: 'Ce que nous faisons',
		template: 'stack',
		shots: [{clip: 5}, {clip: 9}],
		kicker: 'Un seul interlocuteur',
		headline: 'TOURNAGE.\nMONTAGE.\nDIFFUSION.',
		sub: 'On s’occupe de tout. Vous, vous cuisinez.',
		caption:
			'Tournage. Montage. Diffusion.\n\nUn seul interlocuteur, de l’idée à la publication. Vous n’avez rien à gérer, rien à apprendre, rien à poster vous-même.\n\nVous cuisinez. On fait le reste.',
	},
	{
		slug: 'Reels',
		label: 'Contenu court',
		template: 'letterbox',
		shots: [{clip: 6}],
		kicker: 'Formats courts',
		headline: 'Un reel.\nUne réservation.\n*Répétez.*',
		sub: 'Du contenu pensé pour remplir vos tables, pas pour collectionner des likes.',
		caption:
			'Un reel. Une réservation. Répétez.\n\nOn ne fait pas de vidéos pour faire joli. Chaque format est construit pour une seule chose : donner envie de réserver, maintenant.\n\nVision. Le contenu qui remplit.',
	},
	{
		slug: 'Temps',
		label: 'Votre temps',
		template: 'fullbleed',
		shots: [{clip: 10}],
		kicker: 'Coulisses',
		headline: 'UNE MATINÉE\nDE TOURNAGE.\nDES MOIS\nDE CONTENU.',
		sub: 'On s’adapte à votre service. Jamais l’inverse.',
		caption:
			'Une matinée de tournage. Des mois de contenu.\n\nOn arrive avant le service, on repart avant le coup de feu. Vous ne fermez pas, vous ne changez rien.\n\nEt votre feed est nourri pour des mois.',
	},
	{
		slug: 'Suisse',
		label: 'Partout en Suisse',
		template: 'stack',
		shots: [{clip: 8}, {clip: 7}],
		kicker: 'Genève · Lausanne · Zurich · Bâle · Lugano',
		headline: 'ON CONNAÎT\nVOS SALLES.',
		sub: 'Une agence suisse, pour des restaurants suisses.',
		caption:
			'Genève, Lausanne, Zurich, Bâle, Lugano.\n\nOn se déplace partout en Suisse. Une brasserie de quartier, une table étoilée, un chalet d’altitude : chaque salle a une histoire à filmer.\n\nVision. Une agence suisse pour des restaurants suisses.',
	},
	{
		slug: 'Spectacle',
		label: 'Chaque service',
		template: 'stack',
		shots: [{clip: 4}, {clip: 11}],
		kicker: 'Le geste, la lumière, l’assiette',
		headline: 'CHAQUE\nSERVICE\nEST UN\nSPECTACLE.',
		sub: 'On le filme comme tel.',
		caption:
			'Chaque service est un spectacle.\n\nLe geste du chef, la flamme au bar, le vin qui tombe dans le verre. Tout ce que vos clients adorent et que personne ne filme.\n\nNous, si.',
	},
	{
		slug: 'Associe',
		label: 'Accompagnement',
		template: 'letterbox',
		shots: [{clip: 12}],
		kicker: 'Chaque mois, à vos côtés',
		headline: 'Pas un\nprestataire.\nUn *associé*\nde salle.',
		sub: 'Stratégie, tournage, publication, analyse.',
		caption:
			'Pas un prestataire. Un associé de salle.\n\nOn ne dépose pas des fichiers dans un dossier. On construit avec vous, mois après mois, une présence qui remplit vos tables et qui vous ressemble.\n\nVision. Accompagnement complet.',
	},
	{
		slug: 'Places',
		label: 'Candidatures',
		template: 'fullbleed',
		shots: [{clip: 2}],
		kicker: 'Places limitées',
		headline: 'NOUS\nACCOMPAGNONS\nUN NOMBRE\nLIMITÉ DE\nRESTAURANTS.',
		sub: 'Pour rester exclusifs, on choisit nos tables.',
		cta: 'Candidatures ouvertes · Lien en bio',
		caption:
			'Nous accompagnons un nombre limité de restaurants.\n\nPas par posture. Parce qu’un accompagnement réel demande du temps, de la présence et de l’attention.\n\nCandidatures ouvertes. Lien en bio.',
	},
];
