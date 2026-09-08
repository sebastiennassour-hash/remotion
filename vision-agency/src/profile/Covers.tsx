// Couvertures de stories à la une (1080 × 1920) et visuels de grille (1080 × 1350) — charte Vision or sur noir.
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Wordmark} from '../components/Chrome';
import {Grain} from '../components/Grain';
import {FRAUNCES, MONO, SANS} from '../fonts';

const GOLD = '#C9A84C';
const IVORY = '#F3EBDD';
const INK = '#080808';

export const highlightCovers = [
	{slug: 'Travaux', word: 'Travaux', glyph: '◆'},
	{slug: 'Coulisses', word: 'Coulisses', glyph: '●'},
	{slug: 'Methode', word: 'Méthode', glyph: '◇'},
	{slug: 'Suisse', word: 'Suisse', glyph: '✚'},
	{slug: 'Contact', word: 'Contact', glyph: '→'},
];

export const HighlightCover: React.FC<{word: string; glyph: string}> = ({word, glyph}) => (
	<AbsoluteFill style={{background: INK, justifyContent: 'center', alignItems: 'center'}}>
		{/* Zone visible dans le rond de la story à la une : ~ 1080 × 1080 centré */}
		<div
			style={{
				width: 560,
				height: 560,
				borderRadius: '50%',
				border: `2px solid ${GOLD}`,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 26,
			}}
		>
			<div style={{fontFamily: FRAUNCES, fontSize: 150, lineHeight: 1, color: GOLD}}>{glyph}</div>
			<div
				style={{
					fontFamily: MONO,
					fontSize: 34,
					letterSpacing: '0.22em',
					textTransform: 'uppercase',
					color: IVORY,
				}}
			>
				{word}
			</div>
		</div>
		<Grain opacity={0.06} />
	</AbsoluteFill>
);

export const gridStatements = [
	{
		slug: 'Manifeste',
		kicker: 'Manifeste',
		text: 'Une salle pleine\ncommence sur\nun *écran.*',
	},
	{
		slug: 'Exclusif',
		kicker: 'Positionnement',
		text: 'Nous ne filmons\n*que* des\nrestaurants.',
	},
	{
		slug: 'Places',
		kicker: 'Candidatures ouvertes',
		text: 'Un nombre *limité*\nde restaurants\npar mois.',
	},
];

const renderRich = (text: string) =>
	text.split('\n').map((line, li) => (
		<div key={li}>
			{line.split(/(\*[^*]+\*)/g).map((part, pi) =>
				part.startsWith('*') ? (
					<span key={pi} style={{fontStyle: 'italic', color: GOLD}}>
						{part.slice(1, -1)}
					</span>
				) : (
					<span key={pi}>{part}</span>
				),
			)}
		</div>
	));

export const GridStatement: React.FC<{kicker: string; text: string; index: number}> = ({kicker, text, index}) => (
	<AbsoluteFill style={{background: INK, padding: 84, justifyContent: 'space-between'}}>
		<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
			<Wordmark color={IVORY} size={22} />
			<div style={{fontFamily: MONO, fontSize: 19, letterSpacing: '0.16em', color: GOLD, textTransform: 'uppercase'}}>
				{kicker}
			</div>
		</div>
		<div
			style={{
				fontFamily: FRAUNCES,
				fontWeight: 500,
				fontSize: 132,
				lineHeight: 0.98,
				letterSpacing: '-0.03em',
				color: IVORY,
			}}
		>
			{renderRich(text)}
		</div>
		<div style={{display: 'flex', justifyContent: 'space-between', fontFamily: SANS, fontSize: 22, color: 'rgba(243,235,221,0.55)'}}>
			<div>Agence vidéo · Restaurants · Suisse</div>
			<div style={{fontFamily: MONO, letterSpacing: '0.14em'}}>{String(index).padStart(2, '0')}</div>
		</div>
		<Grain opacity={0.06} />
	</AbsoluteFill>
);
