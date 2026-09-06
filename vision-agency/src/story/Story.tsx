// Stories 1080 × 1920 : photo plein cadre, phrase, appel au message privé.
import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {Wordmark} from '../components/Chrome';
import {Grain} from '../components/Grain';
import {FRAUNCES, MONO, SANS} from '../fonts';
import {photoPosts} from '../profile/photoPosts.data';

const GOLD = '#C9A84C';
const IVORY = '#F0EBE0';
const INK = '#080808';
const M = 64;

const Em: React.FC<{text: string}> = ({text}) => (
	<>{text.split(/(\*[^*]+\*)/g).map((p, i) => (p.startsWith('*') ? <span key={i} style={{color: GOLD}}>{p.slice(1, -1)}</span> : <React.Fragment key={i}>{p}</React.Fragment>))}</>
);

export const Story: React.FC<{i: number}> = ({i}) => {
	const p = photoPosts[i];
	const line = p.line ?? p.kicker;
	return (
		<AbsoluteFill style={{background: INK}}>
			<Img src={staticFile(`photos/${p.photo}`)} style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.focus ?? '50% 50%'}} />
			<AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.75) 100%)'}} />
			<div style={{position: 'absolute', top: 150, left: M, right: M, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
				<Wordmark color={IVORY} size={22} />
				<div style={{fontFamily: MONO, fontSize: 19, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(240,235,224,0.85)'}}>{p.kicker}</div>
			</div>
			<div style={{position: 'absolute', left: M, right: M, bottom: 290}}>
				<div style={{width: 56, height: 1.5, background: GOLD, marginBottom: 28}} />
				<div style={{fontFamily: FRAUNCES, fontWeight: 500, fontSize: 64, lineHeight: 1.08, letterSpacing: '-0.02em', color: IVORY, maxWidth: 900, whiteSpace: 'pre-line'}}><Em text={line.replace(/\n/g, ' ')} /></div>
			</div>
			<div style={{position: 'absolute', left: M, bottom: 190, padding: '18px 30px', border: `1.5px solid ${GOLD}`, borderRadius: 999, fontFamily: SANS, fontWeight: 500, fontSize: 24, letterSpacing: '0.04em', color: GOLD}}>
				Votre place est-elle libre ? → message privé
			</div>
			<Grain opacity={0.06} />
		</AbsoluteFill>
	);
};
