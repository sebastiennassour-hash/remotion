import type {ExplainerProps} from './Explainer';

const V = (n: number) => `vclips/${String(n).padStart(2, '0')}.mp4`;

export const explainers: {slug: string; props: ExplainerProps}[] = [
	{
		slug: 'Methode',
		props: {
			kicker: 'L’accompagnement',
			music: 'music/01.m4a',
			audio: 'vo/01.wav',
			cta: 'Message privé · Lien en bio',
			clips: [V(1), V(9), V(15), V(2), V(1)],
			sentences: [
				'On ne vend pas des vidéos. *On accompagne votre restaurant.*',
				'Une matinée chez vous, avant le service, sans rien changer à votre organisation.',
				'Puis chaque semaine : on publie, on mesure, on ajuste, *jusqu’à ce que la salle soit pleine.*',
				'Les restaurants qu’on accompagne : *×3 clients* en moins de 90 jours.',
				'Vision. On accompagne les restaurants à *devenir des références.*',
			],
		},
	},
	{
		slug: 'Pourquoi',
		props: {
			kicker: 'Positionnement',
			music: 'music/01.m4a',
			audio: 'vo/02.wav',
			cta: 'Votre ville est-elle libre ?',
			clips: [V(2), V(15), V(9), V(1)],
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
			audio: 'vo/03.wav',
			cta: 'Le prochain, c’est vous',
			clips: [V(2), V(9), V(15), V(1), V(2)],
			sentences: [
				'Un restaurant qu’on accompagne, à Fribourg. Une cuisine excellente, un compte Instagram *silencieux.*',
				'Un tournage, quatre vidéos, trente jours d’accompagnement.',
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
			audio: 'vo/04.wav',
			cta: 'Écrivez-nous · Réponse en 24 h',
			clips: [V(15), V(1), V(9), V(2), V(15)],
			sentences: [
				'On accompagne un *nombre limité* de restaurants par mois.',
				'Pas par posture : faire grandir un restaurant demande du temps et de la présence.',
				'Chez ceux qu’on accompagne : *×3 clients*, *+50 % de chiffre d’affaires*, en moins de 90 jours.',
				'Stratégie, tournage, diffusion, suivi. *Un seul interlocuteur, chaque semaine.*',
				'Si votre ville est libre, on vous le dit en 24 heures. *Vision.*',
			],
		},
	},
];
