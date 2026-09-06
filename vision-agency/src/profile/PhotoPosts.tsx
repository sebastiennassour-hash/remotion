// 20 posts photo éditoriaux — 1080 × 1350. La photo porte le post, le texte reste minimal.
import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {Wordmark} from '../components/Chrome';
import {Grain} from '../components/Grain';
import {DISPLAY, FRAUNCES, MONO, SANS} from '../fonts';

const GOLD = '#C9A84C';
const IVORY = '#F0EBE0';
const INK = '#080808';
const M = 64;

export type PhotoPost = {
	slug: string;
	photo: string; // public/photos/xx.png
	template: 'full' | 'letterbox' | 'bigtype' | 'subtitle' | 'quiet';
	kicker: string;
	line?: string;
	focus?: string; // object-position
	caption: string;
};

const Photo: React.FC<{src: string; focus?: string; style?: React.CSSProperties}> = ({src, focus, style}) => (
	<Img src={staticFile(`photos/${src}`)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: focus ?? '50% 50%', ...style}} />
);

const Kicker: React.FC<{text: string; color?: string}> = ({text, color = IVORY}) => (
	<div style={{position: 'absolute', top: M, left: M, right: M, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
		<Wordmark color={color} size={20} />
		<div style={{fontFamily: MONO, fontSize: 18, letterSpacing: '0.16em', textTransform: 'uppercase', color: color === IVORY ? 'rgba(240,235,224,0.85)' : color}}>{text}</div>
	</div>
);

export const PhotoPostView: React.FC<{post: PhotoPost}> = ({post}) => {
	const {template} = post;
	if (template === 'letterbox') {
		return (
			<AbsoluteFill style={{background: INK}}>
				<div style={{position: 'absolute', left: 0, right: 0, top: 300, height: 608}}>
					<Photo src={post.photo} focus={post.focus} />
				</div>
				<Kicker text={post.kicker} />
				{post.line ? (
					<div style={{position: 'absolute', left: M, right: M, bottom: 110, fontFamily: FRAUNCES, fontStyle: 'italic', fontWeight: 400, fontSize: 54, lineHeight: 1.15, color: IVORY}}>{post.line}</div>
				) : null}
				<Grain opacity={0.05} />
			</AbsoluteFill>
		);
	}
	if (template === 'bigtype') {
		return (
			<AbsoluteFill style={{background: INK}}>
				<Photo src={post.photo} focus={post.focus} />
				<AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%)'}} />
				<Kicker text={post.kicker} />
				<div style={{position: 'absolute', left: M, right: M, bottom: 140, fontFamily: DISPLAY, fontSize: 150, lineHeight: 0.92, color: GOLD, textShadow: '0 10px 50px rgba(0,0,0,0.45)', whiteSpace: 'pre-line'}}>{post.line}</div>
				<Grain opacity={0.06} />
			</AbsoluteFill>
		);
	}
	if (template === 'subtitle') {
		return (
			<AbsoluteFill style={{background: INK}}>
				<div style={{position: 'absolute', left: 0, right: 0, top: 232, height: 886}}>
					<Photo src={post.photo} focus={post.focus} />
				</div>
				<Kicker text={post.kicker} />
				<div style={{position: 'absolute', left: M, right: M, bottom: 96, textAlign: 'center', fontFamily: SANS, fontWeight: 500, fontSize: 40, lineHeight: 1.3, color: IVORY, textShadow: '0 2px 12px rgba(0,0,0,0.8)'}}>{post.line}</div>
				<Grain opacity={0.05} />
			</AbsoluteFill>
		);
	}
	if (template === 'quiet') {
		return (
			<AbsoluteFill style={{background: INK}}>
				<Photo src={post.photo} focus={post.focus} />
				<Kicker text={post.kicker} />
				<Grain opacity={0.06} />
			</AbsoluteFill>
		);
	}
	return (
		<AbsoluteFill style={{background: INK}}>
			<Photo src={post.photo} focus={post.focus} />
			<AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 28%, rgba(0,0,0,0) 62%, rgba(0,0,0,0.62) 100%)'}} />
			<Kicker text={post.kicker} />
			{post.line ? (
				<div style={{position: 'absolute', left: M, right: M, bottom: 96}}>
					<div style={{width: 56, height: 1.5, background: GOLD, marginBottom: 26}} />
					<div style={{fontFamily: FRAUNCES, fontWeight: 500, fontSize: 60, lineHeight: 1.08, letterSpacing: '-0.02em', color: IVORY, maxWidth: 880}}>{post.line}</div>
				</div>
			) : null}
			<Grain opacity={0.06} />
		</AbsoluteFill>
	);
};

export const photoPosts: PhotoPost[] = [
	{slug: 'POV', photo: '01.png', template: 'subtitle', kicker: 'Coulisses', line: 'POV : votre restaurant fait des films.', caption: 'POV : votre restaurant fait des films.\n\nUne matinée, une caméra, votre salle. On ne demande rien à personne de jouer. On filme ce qui se passe déjà.\n\nVision. Un restaurant par cuisine, par ville.'},
	{slug: 'Facade', photo: '02.png', template: 'bigtype', kicker: 'Fribourg · 19h', line: 'UNE SALLE\nPLEINE\nCOMMENCE\nICI.', caption: 'Une salle pleine commence ici.\n\nÀ la porte. À l’heure où la lumière tombe et où les gens décident où ils vont manger. Si votre restaurant n’est pas sur leur écran à ce moment-là, il n’existe pas pour eux.\n\nOn règle ça.'},
	{slug: 'Table', photo: '03.png', template: 'letterbox', kicker: 'Vu d’en haut', line: 'Ici, une table ne reste jamais vide longtemps.', caption: 'Ici, une table ne reste jamais vide longtemps.\n\nCe n’est pas une question de chance. C’est ce que les gens voient de vous avant de venir.\n\nVision. Agence vidéo, restaurants, Suisse romande.'},
	{slug: 'Menu', photo: '04.png', template: 'full', kicker: 'Point de vue', line: 'On filme l’envie, pas la pose.', caption: 'On filme l’envie, pas la pose.\n\nPas besoin de montrer un visage pour donner faim. Il faut montrer une soirée que les gens ont envie de vivre.\n\nVision.'},
	{slug: 'Chefs', photo: '05.png', template: 'full', kicker: 'Exclusivité', line: 'Deux chefs. Une ville. Une seule place chez Vision.', caption: 'Deux chefs. Une ville. Une seule place chez Vision.\n\nOn ne travaille jamais pour deux restaurants de la même cuisine dans la même ville. Le premier qui signe garde la place.\n\nVérifiez si la vôtre est libre : message privé.'},
	{slug: 'Patron', photo: '06.png', template: 'quiet', kicker: 'Trente ans derrière le même comptoir', caption: 'Trente ans derrière le même comptoir. Personne ne l’avait filmé.\n\nChaque restaurant a une histoire que ses clients ne connaissent pas encore. La raconter, c’est la moitié du travail.\n\nVision.'},
	{slug: 'Geste', photo: '07.png', template: 'full', kicker: 'Le geste', line: 'Le geste que vos clients ne voient jamais.', caption: 'Le geste que vos clients ne voient jamais.\n\nLe service, la découpe, le dressage. Tout ce qui se passe à trois mètres des tables et qui donne envie de revenir.\n\nOn le filme.'},
	{slug: 'Pain', photo: '08.png', template: 'letterbox', kicker: 'Mains', line: 'Le pain qu’on déchire, pas celui qu’on photographie.', caption: 'Le pain qu’on déchire, pas celui qu’on photographie.\n\nLa différence entre une photo de plat et une vidéo qui donne faim tient dans un geste.\n\nVision.'},
	{slug: 'Moniteur', photo: '09.png', template: 'quiet', kicker: 'Coulisses · Prise 3', caption: 'Prise 3.\n\nCe que voit notre monitor pendant que vous cuisinez. Vous ne changez rien, on s’adapte au service.\n\nVision. Une matinée de tournage, un mois de contenu.'},
	{slug: 'Avant', photo: '10.png', template: 'full', kicker: '10h12', line: 'Avant le service.', caption: 'Avant le service.\n\nLa salle vide, la lumière qui entre, les tables prêtes. C’est là qu’on tourne, pour que le soir vous soyez pleins.\n\nVision.'},
	{slug: 'Lausanne', photo: '11.png', template: 'bigtype', kicker: 'Lausanne · Terrasse', line: 'LA SALLE\nEST PLEINE.\nC’EST\nLE BUT.', caption: 'La salle est pleine. C’est le but.\n\nOn ne vend pas des vues. On vend un vendredi soir plein. Le seul chiffre qui compte se lit dans votre salle.\n\nVision.'},
	{slug: 'Fondue', photo: '12.png', template: 'letterbox', kicker: 'Suisse', line: 'Le fromage file à la troisième seconde. On le sait.', caption: 'Le fromage file à la troisième seconde. On le sait.\n\nUn plat se filme comme un visage : il faut connaître le geste avant de lancer la caméra.\n\nVision. Restaurants uniquement.'},
	{slug: 'Arrivee', photo: '13.png', template: 'full', kicker: 'Coulisses', line: 'On arrive avant le coup de feu.', caption: 'On arrive avant le coup de feu.\n\nUne équipe légère, une matinée, votre salle dans sa meilleure lumière. Vous ne fermez pas.\n\nVision.'},
	{slug: 'Scene', photo: '14.png', template: 'quiet', kicker: 'Scène 01 · Fribourg', caption: 'Scène 01.\n\nUn restaurant devient un plateau. Pas un plateau de cinéma : le vôtre, tel qu’il est, un mardi matin.\n\nVision.'},
	{slug: 'Serveur', photo: '15.png', template: 'subtitle', kicker: 'Film', line: '— On filme. Vous cuisinez.', caption: 'On filme. Vous cuisinez.\n\nStratégie, tournage, montage, publication. Un seul interlocuteur, de l’idée à la salle pleine.\n\nVision. Un restaurant par cuisine, par ville.'},
	{slug: 'Uniquement', photo: '16.png', template: 'bigtype', kicker: 'Positionnement', line: 'RESTAURANTS.\nUNIQUEMENT.', caption: 'Restaurants. Uniquement.\n\nPas de mode, pas d’immobilier, pas de tech. Un seul métier, appris de l’intérieur.\n\nVision.'},
	{slug: 'Feu', photo: '17.png', template: 'full', kicker: 'Cuisine', line: 'Le coup de feu, filmé à 120 images par seconde.', caption: 'Le coup de feu, filmé à 120 images par seconde.\n\nCe que vos clients adorent et que personne ne filme. Nous, si.\n\nVision.'},
	{slug: 'Dessert', photo: '18.png', template: 'letterbox', kicker: 'Dernière assiette', line: 'Le dessert n’attend pas. La caméra non plus.', caption: 'Le dessert n’attend pas. La caméra non plus.\n\nOn connaît la seconde où la sauce tombe. C’est notre métier.\n\nVision.'},
	{slug: 'Rire', photo: '19.png', template: 'full', kicker: 'Ce qu’on vend vraiment', line: 'Ce qu’on vend vraiment.', caption: 'Ce qu’on vend vraiment.\n\nPas des vidéos. Des soirées comme celle-là, dans votre salle, toutes les semaines.\n\nVision.'},
	{slug: 'Plateau', photo: '20.png', template: 'full', kicker: 'Une matinée', line: 'Un restaurant devient un plateau. Le temps d’une matinée.', caption: 'Un restaurant devient un plateau. Le temps d’une matinée.\n\nOn arrive avant le service, on repart avant le coup de feu. Et votre compte est nourri pour un mois.\n\nCandidatures ouvertes. Message privé.'},
];

export const PhotoPostComp: React.FC<{i: number}> = ({i}) => <PhotoPostView post={photoPosts[i]} />;
