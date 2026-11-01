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

export type {PhotoPost} from './photoPosts.data';
export {photoPosts} from './photoPosts.data';
import type {PhotoPost} from './photoPosts.data';
import {photoPosts} from './photoPosts.data';

// *mot* → doré
const Em: React.FC<{text: string}> = ({text}) => (
	<>
		{text.split(/(\*[^*]+\*)/g).map((part, i) =>
			part.startsWith('*') ? <span key={i} style={{color: GOLD}}>{part.slice(1, -1)}</span> : <React.Fragment key={i}>{part}</React.Fragment>,
		)}
	</>
);

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
	if (template === 'minimal') {
		return (
			<AbsoluteFill style={{background: INK}}>
				<div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 1226}}>
					<Photo src={post.photo} focus={post.focus} />
				</div>
				<Kicker text={post.kicker} />
				<div style={{position: 'absolute', left: 0, right: 0, top: 1226, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SANS, fontWeight: 300, fontSize: 26, letterSpacing: '0.36em', textTransform: 'uppercase', color: post.shortGold ? GOLD : IVORY}}>{post.short ?? (post.line ?? '').replace(/\*/g, '').replace(/\n/g, ' ')}</div>
				<Grain opacity={0.06} />
			</AbsoluteFill>
		);
	}
	if (template === 'letterbox') {
		return (
			<AbsoluteFill style={{background: INK}}>
				<div style={{position: 'absolute', left: 0, right: 0, top: 300, height: 608}}>
					<Photo src={post.photo} focus={post.focus} />
				</div>
				<Kicker text={post.kicker} />
				{post.line ? (
					<div style={{position: 'absolute', left: M, right: M, bottom: 110, fontFamily: FRAUNCES, fontStyle: 'italic', fontWeight: 400, fontSize: 54, lineHeight: 1.15, color: IVORY}}><Em text={post.line} /></div>
				) : null}
				<Grain opacity={0.05} />
			</AbsoluteFill>
		);
	}
	if (template === 'stat') {
		return (
			<AbsoluteFill style={{background: INK}}>
				<Photo src={post.photo} focus={post.focus} />
				<AbsoluteFill style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)'}} />
				<Kicker text={post.kicker} />
				<div style={{position: 'absolute', left: M, right: M, bottom: 120}}>
					<div style={{fontFamily: DISPLAY, fontSize: 520, lineHeight: 0.85, color: GOLD, letterSpacing: '-0.02em', textShadow: '0 12px 60px rgba(0,0,0,0.5)'}}>{post.big}</div>
					<div style={{marginTop: 26, fontFamily: DISPLAY, fontSize: 84, lineHeight: 0.98, color: IVORY, whiteSpace: 'pre-line'}}>{post.line}</div>
				</div>
				<Grain opacity={0.06} />
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
				<div style={{position: 'absolute', left: M, right: M, bottom: 96, textAlign: 'center', fontFamily: SANS, fontWeight: 500, fontSize: 40, lineHeight: 1.3, color: IVORY, textShadow: '0 2px 12px rgba(0,0,0,0.8)'}}><Em text={post.line ?? ''} /></div>
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
					<div style={{fontFamily: FRAUNCES, fontWeight: 500, fontSize: 68, lineHeight: 1.06, letterSpacing: '-0.025em', color: IVORY, maxWidth: 900}}><Em text={post.line} /></div>
				</div>
			) : null}
			<Grain opacity={0.06} />
		</AbsoluteFill>
	);
};



export const PhotoPostComp: React.FC<{i: number}> = ({i}) => <PhotoPostView post={photoPosts[i]} />;
export const PhotoPostMinComp: React.FC<{i: number}> = ({i}) => <PhotoPostView post={{...photoPosts[i], template: 'minimal'}} />;
