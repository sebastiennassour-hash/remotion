// Deuxième lot : deux carrousels de fond + quatre statements. Charte Vision, message réel.
import React from 'react';
import {Big, Body, Frame, Gold} from './CaseStudy';
import {FRAUNCES, MONO, SANS} from '../fonts';

const GOLD = '#C9A84C';
const IVORY = '#F0EBE0';

const Point: React.FC<{n: string; title: string; text: string}> = ({n, title, text}) => (
	<>
		<div style={{fontFamily: MONO, fontSize: 22, color: GOLD, letterSpacing: '0.14em', marginBottom: 34}}>{n}</div>
		<Big size={104}>{title}</Big>
		<Body>{text}</Body>
	</>
);

export const pourquoi = [
	{slug: 'Couverture', node: <Frame kicker="Positionnement" index="01 / 05"><Big>Pourquoi on ne filme<br /><Gold>que</Gold> des restaurants.</Big><Body>Pas de mode, pas d’immobilier, pas de tech. Un seul métier, appris de l’intérieur. Voici pourquoi.</Body></Frame>},
	{slug: 'Heure', node: <Frame kicker="Positionnement" index="02 / 05"><Point n="01" title="Une salle a une heure." text="Dix-neuf heures. La lumière tombe, le bruit monte, le coup de feu commence. Une agence généraliste arrive à quatorze heures, quand la salle est vide." /></Frame>},
	{slug: 'Geste', node: <Frame kicker="Positionnement" index="03 / 05"><Point n="02" title="Un plat se filme comme un visage." text="Il faut connaître le geste avant de lancer la caméra. Où la vapeur monte, quand la sauce tombe, à quelle seconde le fromage file." /></Frame>},
	{slug: 'Table', node: <Frame kicker="Positionnement" index="04 / 05"><Point n="03" title="Vos clients ne veulent pas une pub." text="Ils veulent voir la table où ils vont s’asseoir, entendre la salle, deviner l’accueil. On filme ça, rien d’autre." /></Frame>},
	{slug: 'CTA', node: <Frame kicker="Exclusivité" index="05 / 05" footer="@vision.agency"><Big>Un restaurant par cuisine,<br />par ville.<br />La vôtre est peut-être <Gold>libre.</Gold></Big><Body>Écrivez-nous en message privé. Réponse en vingt-quatre heures.</Body></Frame>},
];

export const erreurs = [
	{slug: 'Couverture', node: <Frame kicker="Diagnostic" index="01 / 05"><Big>Votre compte a des abonnés.<br />Pas de <Gold>réservations.</Gold></Big><Body>Trois raisons, vues dans presque tous les restaurants qu’on rencontre. Et ce qu’on fait à la place.</Body></Frame>},
	{slug: 'Photos', node: <Frame kicker="Diagnostic" index="02 / 05"><Point n="01" title="Vous postez des photos de plats." text="Les gens ne réservent pas une assiette. Ils réservent une soirée : la salle, le bruit, la lumière, les gens. Ça ne tient pas dans une photo." /></Frame>},
	{slug: 'Temps', node: <Frame kicker="Diagnostic" index="03 / 05"><Point n="02" title="Vous postez quand vous avez le temps." text="C’est-à-dire jamais au bon moment. Le contenu qui remplit une salle est régulier, pensé en avance, et tourné en une seule fois." /></Frame>},
	{slug: 'Action', node: <Frame kicker="Diagnostic" index="04 / 05"><Point n="03" title="Personne ne dit aux gens quoi faire." text="Pas de lien, pas d’adresse, pas de « réservez ». Une vidéo qui donne faim sans dire où aller, c’est un client pour le voisin." /></Frame>},
	{slug: 'CTA', node: <Frame kicker="La solution" index="05 / 05" footer="@vision.agency"><Big>On règle les trois<br />en un tournage<br />par <Gold>mois.</Gold></Big><Body>Stratégie, tournage, montage, publication. Vous cuisinez, on fait le reste. Message privé pour savoir si votre ville est libre.</Body></Frame>},
];

export const statements = [
	{slug: 'Matinee', node: <Frame kicker="Méthode" index="04"><Big>Une matinée<br />de tournage.<br />Un <Gold>mois</Gold> de contenu.</Big><Body>On arrive avant le service, on repart avant le coup de feu. Vous ne fermez pas, vous ne changez rien.</Body></Frame>},
	{slug: 'Vendredi', node: <Frame kicker="Point de vue" index="05"><Big>On ne vend pas<br />des vues.<br />On vend un vendredi<br />soir <Gold>plein.</Gold></Big><Body>Le seul chiffre qui compte se lit dans votre salle, pas dans vos statistiques.</Body></Frame>},
	{slug: 'Faim', node: <Frame kicker="Question" index="06"><Big>Ouvrez votre<br />Instagram.<br />Est-ce que ça donne <Gold>faim ?</Gold></Big><Body>Si vous hésitez, vos futurs clients n’hésitent pas. Ils passent au suivant.</Body></Frame>},
	{slug: 'Silence', node: <Frame kicker="Point de vue" index="07"><Big>Le silence coûte<br />plus cher que<br />la <Gold>vidéo.</Gold></Big><Body>Chaque semaine sans contenu, quelqu’un choisit un autre restaurant sans même savoir que le vôtre existe.</Body></Frame>},
];

export const PourquoiSlide: React.FC<{i: number}> = ({i}) => <>{pourquoi[i].node}</>;
export const ErreursSlide: React.FC<{i: number}> = ({i}) => <>{erreurs[i].node}</>;
export const StatementPost: React.FC<{i: number}> = ({i}) => <>{statements[i].node}</>;
