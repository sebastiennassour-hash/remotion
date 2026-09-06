// Carrousel étude de cas Galata + posts chiffres — 1080 × 1350, charte Vision, grille stricte.
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Wordmark} from '../components/Chrome';
import {Grain} from '../components/Grain';
import {FRAUNCES, MONO, SANS} from '../fonts';

const GOLD = '#C9A84C';
const IVORY = '#F0EBE0';
const INK = '#080808';
const M = 84;

const Frame: React.FC<{kicker: string; index: string; children: React.ReactNode; footer?: string}> = ({kicker, index, children, footer}) => (
	<AbsoluteFill style={{background: INK, padding: M, justifyContent: 'space-between'}}>
		<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid rgba(201,168,76,0.35)`, paddingBottom: 26}}>
			<Wordmark color={IVORY} size={22} />
			<div style={{fontFamily: MONO, fontSize: 19, letterSpacing: '0.16em', color: GOLD, textTransform: 'uppercase'}}>{kicker}</div>
		</div>
		<div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>{children}</div>
		<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: `1px solid rgba(201,168,76,0.35)`, paddingTop: 26, fontFamily: SANS, fontSize: 21, color: 'rgba(240,235,224,0.6)'}}>
			<div>{footer ?? 'Agence vidéo · Restaurants · Suisse romande'}</div>
			<div style={{fontFamily: MONO, letterSpacing: '0.14em', color: GOLD}}>{index}</div>
		</div>
		<Grain opacity={0.05} />
	</AbsoluteFill>
);

const Big: React.FC<{children: React.ReactNode; size?: number}> = ({children, size = 124}) => (
	<div style={{fontFamily: FRAUNCES, fontWeight: 500, fontSize: size, lineHeight: 0.98, letterSpacing: '-0.03em', color: IVORY}}>{children}</div>
);
const Gold: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: GOLD, fontStyle: 'italic'}}>{children}</span>;
const Body: React.FC<{children: React.ReactNode}> = ({children}) => (
	<div style={{fontFamily: SANS, fontSize: 32, lineHeight: 1.35, color: 'rgba(240,235,224,0.8)', maxWidth: 800, marginTop: 40}}>{children}</div>
);
const Stat: React.FC<{value: string; label: string}> = ({value, label}) => (
	<div style={{borderTop: `1px solid rgba(201,168,76,0.35)`, paddingTop: 22}}>
		<div style={{fontFamily: FRAUNCES, fontWeight: 600, fontSize: 132, lineHeight: 1, letterSpacing: '-0.03em', color: GOLD}}>{value}</div>
		<div style={{fontFamily: SANS, fontSize: 28, color: IVORY, marginTop: 10}}>{label}</div>
	</div>
);

export const caseSlides: {slug: string; node: React.ReactNode}[] = [
	{
		slug: 'Couverture',
		node: (
			<Frame kicker="Étude de cas" index="01 / 06" footer="Galata · Fribourg">
				<Big>Comment on a rempli<br />une salle avec<br /><Gold>quatre vidéos.</Gold></Big>
				<Body>Galata, café-restaurant turc à Fribourg. Trente jours. Un tournage. Résultats réels, client réel.</Body>
			</Frame>
		),
	},
	{
		slug: 'Avant',
		node: (
			<Frame kicker="Le point de départ" index="02 / 06" footer="Galata · Fribourg">
				<Big>Une cuisine excellente.<br />Un compte Instagram<br /><Gold>silencieux.</Gold></Big>
				<Body>Le bouche-à-oreille marchait. Le digital, non. Le potentiel était là, il n’était juste pas filmé.</Body>
			</Frame>
		),
	},
	{
		slug: 'Methode',
		node: (
			<Frame kicker="Ce qu’on a fait" index="03 / 06" footer="Galata · Fribourg">
				<div style={{display: 'flex', flexDirection: 'column', gap: 44}}>
					{[
						['01', 'On filme.', 'Un soir de service, sans rien changer. Les assiettes, la salle, la musique live.'],
						['02', 'On publie.', 'Des vidéos courtes, montées et optimisées pour Instagram et TikTok.'],
						['03', 'Ils réservent.', 'Les vues deviennent des visites, des clics, puis des clients à table.'],
					].map(([n, t, d]) => (
						<div key={n} style={{display: 'flex', gap: 36, alignItems: 'flex-start', borderTop: `1px solid rgba(201,168,76,0.35)`, paddingTop: 26}}>
							<div style={{fontFamily: MONO, fontSize: 22, color: GOLD, letterSpacing: '0.14em', paddingTop: 14, width: 60}}>{n}</div>
							<div>
								<div style={{fontFamily: FRAUNCES, fontWeight: 500, fontSize: 72, lineHeight: 1, color: IVORY, letterSpacing: '-0.02em'}}>{t}</div>
								<div style={{fontFamily: SANS, fontSize: 27, lineHeight: 1.35, color: 'rgba(240,235,224,0.75)', marginTop: 12, maxWidth: 720}}>{d}</div>
							</div>
						</div>
					))}
				</div>
			</Frame>
		),
	},
	{
		slug: 'Resultats',
		node: (
			<Frame kicker="Résultats · 30 jours" index="04 / 06" footer="Galata · Fribourg">
				<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 60, rowGap: 56}}>
					<Stat value="×16" label="de portée" />
					<Stat value="12 000" label="comptes touchés" />
					<Stat value="×6" label="de visites de profil" />
					<Stat value="×10" label="de clics" />
				</div>
			</Frame>
		),
	},
	{
		slug: 'Lecon',
		node: (
			<Frame kicker="La leçon" index="05 / 06" footer="Galata · Fribourg">
				<Big>On ne remplit pas<br />un feed.<br />On remplit <Gold>une salle.</Gold></Big>
				<Body>Le vrai signal, c’est l’intention : des gens qui cliquent, regardent le menu, et viennent. C’est ça qui remplit un vendredi soir.</Body>
			</Frame>
		),
	},
	{
		slug: 'CTA',
		node: (
			<Frame kicker="Votre restaurant" index="06 / 06" footer="@vision.agency">
				<Big>Un seul restaurant<br />par cuisine,<br />par <Gold>ville.</Gold></Big>
				<Body>Si votre place est libre, elle peut être à vous. Écrivez-nous en message privé, on vous dit en 24 heures si on peut travailler ensemble.</Body>
			</Frame>
		),
	},
];

export const numberPosts: {slug: string; node: React.ReactNode}[] = [
	{
		slug: 'x3',
		node: (
			<Frame kicker="Vision · 2026" index="01">
				<div style={{fontFamily: FRAUNCES, fontWeight: 600, fontSize: 420, lineHeight: 0.9, letterSpacing: '-0.05em', color: GOLD}}>×3</div>
				<Big size={80}>restaurants accompagnés<br />en trois mois.</Big>
				<Body>Sans publicité pour nous-mêmes. Uniquement des salles remplies et des restaurateurs qui en parlent.</Body>
			</Frame>
		),
	},
	{
		slug: 'x16',
		node: (
			<Frame kicker="Galata · Fribourg" index="02">
				<div style={{fontFamily: FRAUNCES, fontWeight: 600, fontSize: 420, lineHeight: 0.9, letterSpacing: '-0.05em', color: GOLD}}>×16</div>
				<Big size={80}>de portée en trente jours,<br />avec quatre vidéos.</Big>
				<Body>Douze mille comptes touchés à Fribourg et autour. Pas des vues pour faire joli : des gens qui cliquent et qui viennent.</Body>
			</Frame>
		),
	},
	{
		slug: 'un',
		node: (
			<Frame kicker="Exclusivité" index="03">
				<div style={{fontFamily: FRAUNCES, fontWeight: 600, fontSize: 420, lineHeight: 0.9, letterSpacing: '-0.05em', color: GOLD}}>1</div>
				<Big size={80}>restaurant par cuisine,<br />par ville.</Big>
				<Body>On ne travaille jamais pour votre concurrent direct. Quand une place est prise, elle est prise.</Body>
			</Frame>
		),
	},
];

export const CaseSlide: React.FC<{i: number}> = ({i}) => <>{caseSlides[i].node}</>;
export const NumberPost: React.FC<{i: number}> = ({i}) => <>{numberPosts[i].node}</>;
