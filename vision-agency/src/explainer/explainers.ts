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
				'On ne vend pas des vidéos. *On accompagne votre restaurant.*',
				'On ne vient pas une fois : on revient chez vous *chaque semaine*, sans rien changer à votre organisation.',
				'Tournages réguliers, publication, mesure, ajustements : *un vrai partenaire*, jusqu’à ce que la salle soit pleine.',
				'Les restaurants qu’on accompagne : *×3 clients* en moins de 90 jours. Rentable dès le premier mois.',
				'Vision. On accompagne les restaurants à *devenir des références.*',
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
		slug: 'Client',
		props: {
			kicker: 'Étude de cas · Fribourg',
			music: 'music/01.m4a',
			cta: 'Le prochain, c’est vous',
			clips: [V(10), V(17), V(7), V(3), V(19)],
			sentences: [
				'Un restaurant qu’on accompagne, à Fribourg. Une cuisine excellente, un compte Instagram *silencieux.*',
				'Trente jours d’accompagnement, plusieurs tournages.',
				'Portée *×16*. 12 000 personnes touchées. Visites de profil *×6*. Clics *×10*.',
				'Au total, les restaurants qu’on accompagne ont touché *plus de 500 000 personnes.*',
				'On ne remplit pas un feed. *On fait grandir un restaurant.*',
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
				'Pas par posture : faire grandir un restaurant demande du temps et de la présence.',
				'Chez ceux qu’on accompagne : *×3 clients*, *×3 de chiffre d’affaires*, en moins de 90 jours.',
				'Stratégie, tournages réguliers, diffusion, suivi. *Un seul interlocuteur, chaque semaine, sur la durée.*',
				'Et vous gardez la main sur tout depuis *votre app* : tournages, vidéos, résultats.',
				'Si votre ville est libre, on vous le dit en 24 heures. *Vision.*',
			],
		},
	},
];
