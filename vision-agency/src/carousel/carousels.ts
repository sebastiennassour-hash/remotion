import type {CarouselDef} from './Carousel';

const SIGN = '\n\nVision. On accompagne les restaurants de Suisse romande sur la durée, jusqu’à ce qu’ils deviennent des références.\nUn restaurant par cuisine, par ville.\n\nVotre place est peut-être encore libre : message privé.';

export const carousels: CarouselDef[] = [
	{
		slug: 'Soiree',
		kicker: 'Un mardi',
		slides: [
			{kind: 'text', title: '21h14.\nUn mardi.', sub: 'Faites défiler.'},
			{kind: 'photo', photo: '03.png'},
			{kind: 'photo', photo: '19.png'},
			{kind: 'photo', photo: '08.png'},
			{kind: 'photo', photo: '12.png'},
			{kind: 'photo', photo: '18.png'},
			{kind: 'text', title: 'Une salle pleine\nun mardi.', sub: 'C’est ça qu’on construit, mois après mois, avec les restaurants qu’on accompagne.\n×3 clients en moins de 90 jours. Rentable dès le premier mois.', gold: true},
		],
		caption: `21h14. Un mardi.\n\nPas des vues, pas des likes : des couverts, des habitués, une équipe fière de sa salle. Les restaurants qu’on accompagne : ×3 clients en moins de 90 jours, +50 % de chiffre d’affaires.${SIGN}`,
	},
	{
		slug: 'Coulisses',
		kicker: 'Coulisses',
		slides: [
			{kind: 'text', title: 'Chez vous.\nChaque semaine.', sub: 'Ce que personne ne voit.'},
			{kind: 'photo', photo: '13.png'},
			{kind: 'photo', photo: '20.png'},
			{kind: 'photo', photo: '09.png'},
			{kind: 'photo', photo: '14.png'},
			{kind: 'photo', photo: '01.png'},
			{kind: 'text', title: 'Vous ne fermez pas.\nVous ne jouez rien.', sub: 'On tourne chez vous régulièrement, on publie, on mesure, on ajuste. Vous validez tout depuis votre app. Un partenaire sur la durée, pas un prestataire d’un jour.', gold: true},
		],
		caption: `Chez vous. Chaque semaine.\n\nOn ne vient pas une fois. On revient tourner régulièrement, on publie, on mesure, on ajuste. Vous ne fermez pas, vous ne jouez rien. Un vrai partenaire, jusqu’à ce que la salle soit pleine.${SIGN}`,
	},
	{
		slug: 'Restaurants',
		kicker: 'Positionnement',
		slides: [
			{kind: 'text', title: 'On ne travaille\nqu’avec des\nrestaurants.', sub: 'Et c’est un choix.'},
			{kind: 'photo', photo: '05.png'},
			{kind: 'photo', photo: '16.png'},
			{kind: 'photo', photo: '06.png'},
			{kind: 'photo', photo: '17.png'},
			{kind: 'photo', photo: '07.png'},
			{kind: 'text', title: 'Un restaurant\npar cuisine,\npar ville.', sub: 'Le premier qui signe garde la place.\nVotre place est-elle libre ?', gold: true},
		],
		caption: `On ne travaille qu’avec des restaurants. Et c’est un choix.\n\nUne salle a une heure. Un plat se filme comme un visage. Un bon restaurant que personne ne connaît reste un bon restaurant vide : notre travail, c’est l’inverse.${SIGN}`,
	},
	{
		slug: 'Cuisine',
		kicker: 'Cuisine',
		slides: [
			{kind: 'text', title: 'Ce que vos clients\nne voient jamais.', sub: '9h du matin, en cuisine.'},
			{kind: 'photo', photo: '36.png', focus: '68% 22%', zoom: 1.8},
			{kind: 'photo', photo: '31.png', focus: '18% 58%', zoom: 1.7},
			{kind: 'photo', photo: '32.png'},
			{kind: 'photo', photo: '35.png', focus: '50% 85%', zoom: 1.3},
			{kind: 'photo', photo: '33.png'},
			{kind: 'photo', photo: '34.png'},
			{kind: 'photo', photo: '37.png'},
			{kind: 'photo', photo: '38.png', focus: '50% 50%', zoom: 1.95},
			{kind: 'text', title: 'On filme ça.\nEt ça remplit\nla salle.', sub: 'Le geste, l’ingrédient, la seconde juste avant le service. On revient le filmer chaque semaine, parce que c’est ce qui donne envie de venir.\n×3 clients en moins de 90 jours.', gold: true},
		],
		caption: `Ce que vos clients ne voient jamais.\n\n9h du matin, en cuisine. Les œufs, la tomate, le poisson sur glace, le beurre qui mousse, la pâte, le fromage qu’on râpe. Tout ce qui donne envie de venir, et que personne ne montre. On le filme, chaque semaine.${SIGN}`,
	},
];
