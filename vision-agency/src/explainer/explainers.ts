import type {ExplainerProps} from './Explainer';

const V = (n: number) => `vclips/${String(n).padStart(2, '0')}.mp4`;

export const explainers: {slug: string; props: ExplainerProps}[] = [
	{
		slug: 'Methode',
		props: {
			kicker: 'La méthode',
			audio: 'vo/01.wav',
			cta: 'Message privé · Lien en bio',
			clips: [V(1), V(9), V(15), V(2), V(1)],
			sentences: [
				'On filme. *Vous cuisinez.*',
				'Une matinée dans votre restaurant, avant le service, sans rien changer à votre organisation.',
				'On repart avec *un mois de contenu* : des vidéos courtes, montées, publiées, suivies chaque semaine.',
				'Résultat chez nos partenaires : *×3 clients* en moins de 90 jours.',
				'Vision. L’agence vidéo des *restaurants suisses.*',
			],
		},
	},
	{
		slug: 'Pourquoi',
		props: {
			kicker: 'Positionnement',
			audio: 'vo/02.wav',
			cta: 'Votre ville est-elle libre ?',
			clips: [V(2), V(15), V(9), V(1)],
			sentences: [
				'On ne filme *que* des restaurants. Et c’est un choix.',
				'Une salle a une heure. Un plat se filme comme un visage. Vos clients veulent voir *la table où ils vont s’asseoir.*',
				'C’est ce qui fait la différence entre des vues et *une salle pleine.*',
				'Un restaurant par cuisine, par ville. *La vôtre est peut-être libre.*',
			],
		},
	},
	{
		slug: 'Galata',
		props: {
			kicker: 'Étude de cas · Fribourg',
			audio: 'vo/03.wav',
			cta: 'Le prochain, c’est vous',
			clips: [V(2), V(9), V(15), V(1), V(2)],
			sentences: [
				'Galata, à Fribourg. Une cuisine excellente, un compte Instagram *silencieux.*',
				'Un tournage, quatre vidéos, trente jours.',
				'Portée *×16*. 12 000 personnes touchées. Visites de profil *×6*. Clics *×10*.',
				'Au total, nos vidéos ont touché *plus de 500 000 personnes* en Suisse romande.',
				'On ne remplit pas un feed. *On remplit une salle.*',
			],
		},
	},
	{
		slug: 'Candidatures',
		props: {
			kicker: 'Candidatures',
			audio: 'vo/04.wav',
			cta: 'Écrivez-nous · Réponse en 24 h',
			clips: [V(15), V(1), V(9), V(2), V(15)],
			sentences: [
				'On accompagne un *nombre limité* de restaurants par mois.',
				'Pas par posture : aller chercher des clients demande du temps et de la présence.',
				'Chez nos partenaires : *×3 clients*, *+50 % de chiffre d’affaires*, en moins de 90 jours.',
				'Stratégie, tournage, montage, diffusion. *Un seul interlocuteur.*',
				'Si votre ville est libre, on vous le dit en 24 heures. *Vision.*',
			],
		},
	},
];
