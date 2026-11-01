import type {ExplainerProps} from './Explainer';

const V = (n: number) => `vclips/${String(n).padStart(2, '0')}.mp4`;

export const explainers: {slug: string; props: ExplainerProps}[] = [
	{
		slug: 'Methode',
		props: {
			kicker: 'L’accompagnement',
			music: 'music/01.m4a',
			cta: 'Message privé · Lien en bio',
			clips: [V(13), V(10), V(7), V(3), V(19)],
			sentences: [
				'On ne vend pas des vidéos. *On remplit vos tables.*',
				'On ne vient pas une fois : on revient chez vous *chaque semaine*, sans rien changer à votre organisation.',
				'Tournages réguliers, publication, mesure, ajustements : *un vrai partenaire*, jusqu’à ce que la salle soit pleine.',
				'Un objectif chiffré fixé ensemble, vos résultats *chaque mois*, sans engagement.',
				'Vision. Partenaire de croissance des restaurants, *jusqu’à ce qu’ils deviennent des références.*',
			],
		},
	},
	{
		slug: 'Pourquoi',
		props: {
			kicker: 'Positionnement',
			music: 'music/01.m4a',
			cta: 'Votre ville est-elle libre ?',
			clips: [V(12), V(3), V(10), V(19)],
			sentences: [
				'On ne travaille *qu’avec* des restaurants. Et c’est un choix.',
				'Une salle a une heure. Un plat se filme comme un visage. Vos clients veulent voir *la table où ils vont s’asseoir.*',
				'Un bon restaurant que personne ne connaît reste un bon restaurant vide. *Notre travail, c’est l’inverse.*',
				'Un restaurant par cuisine, par ville. *La vôtre est peut-être libre.*',
			],
		},
	},
	{
		slug: 'Mesure',
		props: {
			kicker: 'Comment on mesure',
			music: 'music/01.m4a',
			cta: 'Le prochain, c’est vous',
			clips: [V(10), V(17), V(7), V(3), V(19)],
			sentences: [
				'Avant la première vidéo, on mesure votre *point de départ* : vos services calmes, vos couverts, vos réservations.',
				'On fixe ensemble *un objectif chiffré*. Par écrit.',
				'Chaque mois, vous voyez ce qui a bougé. *Pas des vues : des tables.*',
				'On ne publie aucun chiffre qu’on ne peut pas prouver. *Les vôtres, on les prouve.*',
				'On ne remplit pas un feed. *On remplit un restaurant.*',
			],
		},
	},
	{
		slug: 'Candidatures',
		props: {
			kicker: 'Candidatures',
			music: 'music/01.m4a',
			cta: 'Écrivez-nous · Réponse en 24 h',
			clips: [V(1), V(13), V(17), V(12), V(19)],
			sentences: [
				'On accompagne un *nombre limité* de restaurants par mois.',
				'Pas par posture : remplir un restaurant demande du temps et de la présence.',
				'Chez ceux qu’on accompagne : un objectif signé au départ, *des tables qui se remplissent*, des chiffres chaque mois.',
				'Stratégie, tournages réguliers, diffusion, suivi. *Un seul interlocuteur, chaque semaine, sur la durée.*',
				'Et vous gardez la main sur tout depuis *votre app* : tournages, vidéos, résultats.',
				'Si votre ville est libre, on vous le dit en 24 heures. *Vision.*',
			],
		},
	},
];
