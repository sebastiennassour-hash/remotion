// Composants de cadre partagés (Batch2). L’ancienne étude de cas nommée et les posts chiffres ont été retirés (règles du Hub : aucun chiffre non prouvé, aucun nom de client).
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Wordmark} from '../components/Chrome';
import {Grain} from '../components/Grain';
import {FRAUNCES, MONO, SANS} from '../fonts';

const GOLD = '#C9A84C';
const IVORY = '#F0EBE0';
const INK = '#080808';
const M = 84;

export const Frame: React.FC<{kicker: string; index: string; children: React.ReactNode; footer?: string}> = ({kicker, index, children, footer}) => (
	<AbsoluteFill style={{background: INK, padding: M, justifyContent: 'space-between'}}>
		<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid rgba(201,168,76,0.35)`, paddingBottom: 26}}>
			<Wordmark color={IVORY} size={22} />
			<div style={{fontFamily: MONO, fontSize: 19, letterSpacing: '0.16em', color: GOLD, textTransform: 'uppercase'}}>{kicker}</div>
		</div>
		<div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>{children}</div>
		<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: `1px solid rgba(201,168,76,0.35)`, paddingTop: 26, fontFamily: SANS, fontSize: 21, color: 'rgba(240,235,224,0.6)'}}>
			<div>{footer ?? 'Partenaire de croissance · Restaurants · Suisse'}</div>
			<div style={{fontFamily: MONO, letterSpacing: '0.14em', color: GOLD}}>{index}</div>
		</div>
		<Grain opacity={0.05} />
	</AbsoluteFill>
);

export const Big: React.FC<{children: React.ReactNode; size?: number}> = ({children, size = 124}) => (
	<div style={{fontFamily: FRAUNCES, fontWeight: 500, fontSize: size, lineHeight: 0.98, letterSpacing: '-0.03em', color: IVORY}}>{children}</div>
);
export const Gold: React.FC<{children: React.ReactNode}> = ({children}) => <span style={{color: GOLD, fontStyle: 'italic'}}>{children}</span>;
export const Body: React.FC<{children: React.ReactNode}> = ({children}) => (
	<div style={{fontFamily: SANS, fontSize: 32, lineHeight: 1.35, color: 'rgba(240,235,224,0.8)', maxWidth: 800, marginTop: 40}}>{children}</div>
);
