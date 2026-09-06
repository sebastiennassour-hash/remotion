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
import {CaseSlide, NumberPost, caseSlides, numberPosts} from './profile/CaseStudy';
import {ErreursSlide, PourquoiSlide, StatementPost, erreurs, pourquoi, statements} from './profile/Batch2';
import {PhotoPostComp, photoPosts} from './profile/PhotoPosts';
import {Explainer, calculateExplainerMetadata} from './explainer/Explainer';
import {explainers} from './explainer/explainers';
import {Asmr, asmrDuration} from './asmr/Asmr';
import {asmrs} from './asmr/asmrs';
import {Manifeste, manifesteDuration} from './manifeste/Manifeste';
import {manifestes} from './manifeste/manifestes';
import {CarouselSlide} from './carousel/Carousel';
import {carousels} from './carousel/carousels';
import {visionFilm2} from './vision/film2';
import {Story} from './story/Story';
import {GridPreview} from './grid/Grid';
import {DeckPageView} from './deck/Deck';
import {deck} from './deck/deck';

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
		{caseSlides.map((c, i) => (
			<Still key={c.slug} id={`CAS-GALATA-${String(i + 1).padStart(2, '0')}-${c.slug}`} component={CaseSlide} width={1080} height={1350} defaultProps={{i}} />
		))}
		{numberPosts.map((c, i) => (
			<Still key={c.slug} id={`CHIFFRE-${String(i + 1).padStart(2, '0')}-${c.slug}`} component={NumberPost} width={1080} height={1350} defaultProps={{i}} />
		))}
		{pourquoi.map((c, i) => (
			<Still key={c.slug} id={`CAS-POURQUOI-${String(i + 1).padStart(2, '0')}-${c.slug}`} component={PourquoiSlide} width={1080} height={1350} defaultProps={{i}} />
		))}
		{erreurs.map((c, i) => (
			<Still key={c.slug} id={`CAS-ERREURS-${String(i + 1).padStart(2, '0')}-${c.slug}`} component={ErreursSlide} width={1080} height={1350} defaultProps={{i}} />
		))}
		{statements.map((c, i) => (
			<Still key={c.slug} id={`DIT-${String(i + 1).padStart(2, '0')}-${c.slug}`} component={StatementPost} width={1080} height={1350} defaultProps={{i}} />
		))}
		{photoPosts.map((c, i) => (
			<Still key={c.slug} id={`POST-${String(i + 1).padStart(2, '0')}-${c.slug}`} component={PhotoPostComp} width={1080} height={1350} defaultProps={{i}} />
		))}
		{explainers.map((e, i) => (
			<Composition
				key={e.slug}
				id={`EXP-${String(i + 1).padStart(2, '0')}-${e.slug}`}
				component={Explainer}
				durationInFrames={900}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={e.props}
				calculateMetadata={calculateExplainerMetadata}
			/>
		))}
		<Composition id="VISION-Film2" component={BrandFilm} durationInFrames={brandFilmDuration(visionFilm2, REEL_FPS)} fps={REEL_FPS} width={1080} height={1920} defaultProps={{edl: visionFilm2}} />
		{carousels.flatMap((c, ci) =>
			c.slides.map((_, si) => (
				<Still key={`${c.slug}-${si}`} id={`CAR-${String(ci + 1).padStart(2, '0')}-${c.slug}-${String(si + 1).padStart(2, '0')}`} component={CarouselSlide} width={1080} height={1350} defaultProps={{def: c, i: si}} />
			)),
		)}
		{photoPosts.map((c, i) => (
			<Still key={`story-${c.slug}`} id={`STORY-${String(i + 1).padStart(2, '0')}-${c.slug}`} component={Story} width={1080} height={1920} defaultProps={{i}} />
		))}
		<Still id="GRILLE-Apercu" component={GridPreview} width={1080} height={1440} defaultProps={{order: [2, 1, 6, 9, 10, 0, 11, 15, 16, 18, 13, 4]}} />
		{deck.map((_, i) => (
			<Still key={`deck-${i}`} id={`DECK-${String(i + 1).padStart(2, '0')}`} component={DeckPageView} width={1240} height={1754} defaultProps={{pages: deck, i}} />
		))}
		{manifestes.map((e, i) => (
			<Composition
				key={e.slug}
				id={`MANIFESTE-${String(i + 1).padStart(2, '0')}-${e.slug}`}
				component={Manifeste}
				durationInFrames={manifesteDuration(e.props.shots.length)}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={e.props}
			/>
		))}
		{asmrs.map((e, i) => (
			<Composition
				key={e.slug}
				id={`ASMR-${String(i + 1).padStart(2, '0')}-${e.slug}`}
				component={Asmr}
				durationInFrames={asmrDuration(e.props.clips.length)}
				fps={30}
				width={1080}
				height={1920}
				defaultProps={e.props}
			/>
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
