import React from 'react';
import {Composition, Still} from 'remotion';
import {loadFonts} from './fonts';
import {Planche, PLANCHE_HEIGHT, PLANCHE_WIDTH} from './Planche';
import {Post} from './Post';
import {posts} from './posts';
import {Reel, reelDuration} from './reels/Reel';
import {REEL_FPS, reels} from './reels/reels';
import {DURATION, FPS, HEIGHT, WIDTH} from './theme';
import {BrandFilm, brandFilmDuration} from './galata/BrandFilm';
import {galataEdl} from './galata/edl';
import {visionFilm, visionReels} from './vision/edls';
import {GridStatement, HighlightCover, gridStatements, highlightCovers} from './profile/Covers';

loadFonts();

export const compositionId = (index: number, slug: string) =>
	`VA-${String(index).padStart(2, '0')}-${slug}`;

export const Root: React.FC = () => (
	<>
		{posts.map((p, i) => (
			<Composition
				key={p.slug}
				id={compositionId(i + 1, p.slug)}
				component={Post}
				durationInFrames={DURATION}
				fps={FPS}
				width={WIDTH}
				height={HEIGHT}
				defaultProps={{index: i + 1}}
			/>
		))}
		{reels.map((r, i) => (
			<Composition
				key={r.slug}
				id={`VR-${String(i + 1).padStart(2, '0')}-${r.slug}`}
				component={Reel}
				durationInFrames={reelDuration(i + 1)}
				fps={REEL_FPS}
				width={1080}
				height={1920}
				defaultProps={{index: i + 1}}
			/>
		))}
		<Composition
			id="VISION-BrandFilm"
			component={BrandFilm}
			durationInFrames={brandFilmDuration(visionFilm, REEL_FPS)}
			fps={REEL_FPS}
			width={1080}
			height={1920}
			defaultProps={{edl: visionFilm}}
		/>
		{visionReels.map((r, i) => (
			<Composition
				key={r.slug}
				id={`VF-${String(i + 1).padStart(2, '0')}-${r.slug}`}
				component={BrandFilm}
				durationInFrames={brandFilmDuration(r.edl, REEL_FPS)}
				fps={REEL_FPS}
				width={1080}
				height={1920}
				defaultProps={{edl: r.edl}}
			/>
		))}
		{highlightCovers.map((c) => (
			<Still key={c.slug} id={`PROFIL-Story-${c.slug}`} component={HighlightCover} width={1080} height={1920} defaultProps={{word: c.word, glyph: c.glyph}} />
		))}
		{gridStatements.map((g, i) => (
			<Still key={g.slug} id={`PROFIL-Grille-${String(i + 1).padStart(2, '0')}-${g.slug}`} component={GridStatement} width={1080} height={1350} defaultProps={{kicker: g.kicker, text: g.text, index: i + 1}} />
		))}
		<Composition
			id="GALATA-BrandFilm"
			component={BrandFilm}
			durationInFrames={brandFilmDuration(galataEdl, REEL_FPS)}
			fps={REEL_FPS}
			width={1080}
			height={1920}
		/>
		<Composition
			id="VA-Planche"
			component={Planche}
			durationInFrames={DURATION}
			fps={FPS}
			width={PLANCHE_WIDTH}
			height={PLANCHE_HEIGHT}
		/>
	</>
);
