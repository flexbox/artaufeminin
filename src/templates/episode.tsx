import React, { useMemo } from 'react';

import Layout from '../components/layout';
import { useAudioPlayer } from '../components/player/AudioProvider';
import { PlayButton } from '../components/player/PlayButton';
import SEO from '../components/seo';
import { dutationToString } from '../utils/dutationToString';
import { allPodcastPlatforms } from '../pages/links';

export default function Episode({ pageContext }) {
  const title = pageContext.title;
  const duration = dutationToString(pageContext.itunes.duration);
  const season = pageContext.itunes.season;
  const episode = pageContext.itunes.episode;
  const image = pageContext.itunes.image;
  const summary = pageContext.itunes.summary;

  const audioPlayerData = useMemo(
    () => ({
      title,
      audio: { src: pageContext.enclosure.url, type: 'audio/mpeg' },
      link: `/podcasts/${pageContext.guid}`,
    }),
    [pageContext]
  );
  const player = useAudioPlayer(audioPlayerData);

  return (
    <Layout withLastPodcast={false}>

      {/* ── HERO IMAGE ───────────────────────────────────────────── */}
      <div className="-mx-4 -mt-12 relative h-[55vh] min-h-[340px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 lg:px-0">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay-300">
              Saison {season} · Épisode {episode}
              {duration && <span> · {duration}</span>}
            </p>
            <h1 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── CONTENU ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-3xl px-6 lg:px-0">

        {/* Bouton play */}
        <div className="flex items-center gap-5 border-b border-clay-200 py-8">
          <PlayButton player={player} size="medium" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-clay-500">
              Écouter l'épisode
            </p>
            {duration && (
              <p className="mt-0.5 text-sm text-stone-400">{duration}</p>
            )}
          </div>
        </div>

        {/* Résumé */}
        <div
          className="prose prose-stone my-10 max-w-none text-stone-600 prose-p:leading-relaxed prose-p:text-stone-600 prose-a:text-clay-500 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <hr className="separator" />
      </div>

      {/* ── PANNEAUX BAS ─────────────────────────────────────────── */}
      <div className="mx-auto mb-20 grid max-w-5xl grid-cols-1 gap-6 px-6 lg:grid-cols-3 lg:px-0">

        {/* Plateformes d'écoute */}
        <div className="rounded-sm border border-clay-200 bg-cream-50 p-6">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-clay-500">
            Écouter sur
          </p>
          <h2 className="mb-5 font-display text-xl font-semibold text-stone-900">
            Toutes les plateformes
          </h2>
          <ul className="space-y-3">
            {allPodcastPlatforms
              .filter((p) => p.name !== 'Anchor')
              .map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium text-stone-700 transition-colors hover:text-clay-500"
                  >
                    <img
                      src={platform.imageUrl}
                      alt={platform.name}
                      className="size-6 shrink-0"
                    />
                    {platform.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* Instagram */}
        <div className="rounded-sm border border-clay-200 bg-cream-50 p-6">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-clay-500">
            Communauté
          </p>
          <h2 className="mb-3 font-display text-xl font-semibold text-stone-900">
            Suivez ART <span className="italic font-light">au féminin</span>
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-stone-500">
            Pour encore plus de contenus sur les femmes artistes, suivez le compte Instagram du podcast.
          </p>
          <a
            href="https://www.instagram.com/artaufeminin/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-clay-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-clay-500 transition-colors hover:bg-clay-500 hover:text-white"
          >
            @artaufeminin
          </a>
        </div>

        {/* Mécénat */}
        <div className="rounded-sm border border-clay-200 bg-cream-50 p-6">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-clay-500">
            Mécénat
          </p>
          <h2 className="mb-3 font-display text-xl font-semibold text-stone-900">
            Soutenez le podcast
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-stone-500">
            Si vous appréciez ce travail, vous pouvez soutenir ART au féminin sur Tipeee. Chaque contribution compte.
          </p>
          <a
            href="https://fr.tipeee.com/art-au-feminin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-clay-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-clay-500 transition-colors hover:bg-clay-500 hover:text-white"
          >
            Soutenir sur Tipeee
          </a>
        </div>

      </div>
    </Layout>
  );
}

export const Head = ({ pageContext }) => {
  const title = pageContext.title;
  const description = pageContext.contentSnippet
    ? pageContext.contentSnippet.substring(0, 155)
    : title;
  return <SEO title={`${title} — ART au féminin`} description={description} />;
};
