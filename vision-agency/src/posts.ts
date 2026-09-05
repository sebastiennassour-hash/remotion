import type {PaletteName} from './theme';

export type HeroPost = {
	template: 'hero';
	headline: string;
	sub: string;
	cta?: string;
	size?: number;
};

export type StackPost = {
	template: 'stack';
	words: string[];
	sub: string;
};

export type SplitPost = {
	template: 'split';
	before: {label: string; text: string};
	after: {label: string; text: string};
	sub: string;
};

export type StepsPost = {
	template: 'steps';
	headline: string;
	steps: {title: string; text: string}[];
};

export type TickerPost = {
	template: 'ticker';
	headline: string;
	sub: string;
	cities: string[];
};

export type WordmarkPost = {
	template: 'wordmark';
	lines: string[];
	tagline: string;
};

export type PostContent =
	| HeroPost
	| StackPost
	| SplitPost
	| StepsPost
	| TickerPost
	| WordmarkPost;

export type Post = {
	slug: string;
	label: string;
	palette: PaletteName;
	content: PostContent;
	caption: string;
};

// Syntaxe des titres : *mot* => italique serif accentué. \n => retour à la ligne forcé.
export const posts: Post[] = [
	{
		slug: 'Manifeste',
		label: 'Manifeste',
		palette: 'ink',
		content: {
			template: 'hero',
			headline: 'Une salle pleine\ncommence sur\nun *écran.*',
			sub: 'Vision. L’agence vidéo des restaurants suisses.',
		},
		caption:
			'Une salle pleine commence sur un écran.\n\nVision est l’agence vidéo pensée uniquement pour les restaurants en Suisse. Nous filmons vos plats, votre salle et votre équipe comme ils le méritent, puis nous faisons en sorte que les bonnes personnes les voient.\n\nLien en bio.',
	},
	{
		slug: 'Exclusif',
		label: 'Exclusif',
		palette: 'cream',
		content: {
			template: 'hero',
			headline: 'Nous ne filmons\n*que* des\nrestaurants.',
			sub: 'Pas de mode. Pas d’immobilier. Pas de tech. Votre cuisine, votre salle, vos clients. Rien d’autre.',
		},
		caption:
			'Nous ne filmons que des restaurants.\n\nC’est un choix. Une agence qui fait tout ne connaît rien en profondeur. Nous connaissons le coup de feu, la lumière d’une salle à 19h et la façon dont un plat doit bouger à l’écran pour donner faim.\n\nVision. Exclusivement restaurants.',
	},
	{
		slug: 'Invisible',
		label: 'Le constat',
		palette: 'ink',
		content: {
			template: 'hero',
			headline: 'Votre cuisine\nest excellente.\n*Personne* ne\nle voit.',
			sub: 'Le talent en cuisine ne suffit plus. Il doit se voir avant d’être goûté.',
		},
		caption:
			'Votre cuisine est excellente. Personne ne le voit.\n\nAujourd’hui, un client choisit son restaurant depuis son canapé, en dix secondes, sur un écran. Si vous n’y êtes pas, vous n’existez pas pour lui.\n\nOn règle ça.',
	},
	{
		slug: 'Offre',
		label: 'Ce que nous faisons',
		palette: 'ink',
		content: {
			template: 'stack',
			words: ['Stratégie.', 'Tournage.', 'Montage.', '*Diffusion.*'],
			sub: 'On s’occupe de tout. Vous, vous cuisinez.',
		},
		caption:
			'Stratégie. Tournage. Montage. Diffusion.\n\nUn seul interlocuteur, de l’idée à la publication. Vous n’avez rien à gérer, rien à apprendre, rien à poster vous-même.\n\nVous cuisinez. On fait le reste.',
	},
	{
		slug: 'Reels',
		label: 'Contenu court',
		palette: 'accent',
		content: {
			template: 'hero',
			headline: 'Un reel.\nUne réservation.\n*Répétez.*',
			sub: 'Du contenu court pensé pour remplir vos tables, pas pour collectionner des likes.',
		},
		caption:
			'Un reel. Une réservation. Répétez.\n\nNous ne faisons pas de vidéos pour faire joli. Chaque format est construit pour une seule chose : donner envie de réserver, maintenant.\n\nVision. Le contenu qui remplit.',
	},
	{
		slug: 'Temps',
		label: 'Votre temps',
		palette: 'cream',
		content: {
			template: 'hero',
			headline: 'Une matinée\nde tournage.\nDes *mois*\nde contenu.',
			sub: 'On s’adapte à votre service. Jamais l’inverse.',
		},
		caption:
			'Une matinée de tournage. Des mois de contenu.\n\nOn arrive avant le service, on repart avant le coup de feu. Vous ne fermez pas, vous ne changez rien à votre organisation.\n\nEt votre feed est nourri pour des mois.',
	},
	{
		slug: 'Suisse',
		label: 'Partout en Suisse',
		palette: 'ink',
		content: {
			template: 'ticker',
			headline: 'On connaît\nvos *salles.*',
			sub: 'Une agence suisse, pour des restaurants suisses.',
			cities: [
				'Genève',
				'Lausanne',
				'Zurich',
				'Bâle',
				'Berne',
				'Lugano',
				'Neuchâtel',
				'Fribourg',
				'Sion',
				'Lucerne',
				'Montreux',
				'Vevey',
			],
		},
		caption:
			'Genève, Lausanne, Zurich, Bâle, Lugano.\n\nOn se déplace partout en Suisse. Une brasserie de quartier, une table étoilée, un concept qui ouvre : chaque salle a une histoire à filmer.\n\nVision. Une agence suisse pour des restaurants suisses.',
	},
	{
		slug: 'AvantApres',
		label: 'Avant / Après',
		palette: 'cream',
		content: {
			template: 'split',
			before: {
				label: 'Avant',
				text: 'Une photo de menu\nprise au téléphone.',
			},
			after: {
				label: 'Après',
				text: 'Une file d’attente\ndevant la *porte.*',
			},
			sub: 'La différence entre être ouvert et être plein.',
		},
		caption:
			'Avant : une photo de menu prise au téléphone.\nAprès : une file d’attente devant la porte.\n\nLa différence entre être ouvert et être plein tient souvent à ce que les gens voient de vous en ligne.\n\nOn s’en occupe.',
	},
	{
		slug: 'Methode',
		label: 'La méthode',
		palette: 'ink',
		content: {
			template: 'steps',
			headline: 'Trois étapes.\nZéro *friction.*',
			steps: [
				{
					title: 'Découverte',
					text: 'On visite, on goûte, on comprend votre carte et vos clients.',
				},
				{
					title: 'Tournage',
					text: 'Une équipe légère, une matinée, votre salle dans sa meilleure lumière.',
				},
				{
					title: 'Diffusion',
					text: 'On publie, on analyse, on ajuste. Chaque mois, à vos côtés.',
				},
			],
		},
		caption:
			'Trois étapes. Zéro friction.\n\n01 Découverte. 02 Tournage. 03 Diffusion.\n\nUne méthode simple, rodée sur des dizaines de salles, pensée pour des restaurateurs qui n’ont pas une minute à perdre.\n\nVision.',
	},
	{
		slug: 'PremierServeur',
		label: 'Point de vue',
		palette: 'cream',
		content: {
			template: 'hero',
			headline: 'Le contenu n’est\npas une dépense.\nC’est votre\n*premier serveur.*',
			sub: 'Il accueille vos clients avant même qu’ils poussent la porte.',
			size: 118,
		},
		caption:
			'Le contenu n’est pas une dépense. C’est votre premier serveur.\n\nIl accueille, il rassure, il donne faim. Il travaille sept jours sur sept, sans pause, avant même que le client pousse la porte.\n\nAutant qu’il soit excellent.',
	},
	{
		slug: 'Ouverture',
		label: 'Nouvelle adresse',
		palette: 'accent',
		content: {
			template: 'hero',
			headline: 'Vous ouvrez ?\nOn filme\n*l’ouverture.*',
			sub: 'Les premières semaines décident de tout. Ne les laissez pas passer en silence.',
		},
		caption:
			'Vous ouvrez ? On filme l’ouverture.\n\nLes premières semaines d’un restaurant décident de tout. C’est le moment où la curiosité est maximale, et où le silence coûte le plus cher.\n\nOn arrive avant le premier service.',
	},
	{
		slug: 'Associe',
		label: 'Accompagnement',
		palette: 'ink',
		content: {
			template: 'hero',
			headline: 'Pas un\nprestataire.\nUn *associé*\nde salle.',
			sub: 'Stratégie, tournage, publication, analyse. Chaque mois. À vos côtés.',
		},
		caption:
			'Pas un prestataire. Un associé de salle.\n\nOn ne dépose pas des fichiers dans un dossier. On construit avec vous, mois après mois, une présence qui remplit vos tables et qui vous ressemble.\n\nVision. Accompagnement complet.',
	},
	{
		slug: 'Spectacle',
		label: 'Chaque service',
		palette: 'cream',
		content: {
			template: 'hero',
			headline: 'Chaque service\nest un\n*spectacle.*',
			sub: 'On le filme comme tel. Le geste, la lumière, l’assiette qui arrive en salle.',
		},
		caption:
			'Chaque service est un spectacle.\n\nLe geste du chef, la vapeur qui monte, l’assiette qui traverse la salle. Tout ce que vos clients adorent et que personne ne filme.\n\nNous, si.',
	},
	{
		slug: 'Places',
		label: 'Candidatures',
		palette: 'ink',
		content: {
			template: 'hero',
			headline: 'Nous accompagnons\nun nombre *limité*\nde restaurants.',
			sub: 'Pour rester exclusifs, nous choisissons nos tables. Présentez la vôtre.',
			cta: 'Candidatures ouvertes · Lien en bio',
			size: 112,
		},
		caption:
			'Nous accompagnons un nombre limité de restaurants.\n\nPas par posture. Parce qu’un accompagnement réel demande du temps, de la présence et de l’attention. On préfère quelques salles pleines à beaucoup de clients déçus.\n\nCandidatures ouvertes. Lien en bio.',
	},
	{
		slug: 'Signature',
		label: 'Signature',
		palette: 'ink',
		content: {
			template: 'wordmark',
			lines: ['Agence vidéo.', 'Restaurants.', 'Suisse.'],
			tagline: 'De la cuisine jusqu’au feed.',
		},
		caption:
			'Vision.\nAgence vidéo. Restaurants. Suisse.\n\nDe la cuisine jusqu’au feed.',
	},
];
