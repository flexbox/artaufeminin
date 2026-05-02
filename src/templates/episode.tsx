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
      <div className="-mx-4 relative h-[55vh] min-h-[340px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 lg:px-0">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white/60">
              Saison {season} · Épisode {episode}
              {duration && <span> · {duration}</span>}
            </p>
            <h1 className="font-display text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── CONTENU ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-3xl px-6 lg:px-0">

        <div className="flex items-center gap-5 border-b border-neutral-200 py-8">
          <PlayButton player={player} size="medium" />
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Écouter l'Épisode
            </p>
            {duration && (
              <p className="mt-0.5 text-sm font-light text-neutral-400">{duration}</p>
            )}
          </div>
        </div>

        <div
          className="prose prose-neutral my-10 max-w-none font-light text-neutral-600 prose-p:font-light prose-p:leading-relaxed prose-p:text-neutral-600 prose-a:text-neutral-700 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <hr className="separator" />
      </div>

      {/* ── PANNEAUX BAS ─────────────────────────────────────────── */}
      <div className="mx-auto mb-20 grid max-w-5xl grid-cols-1 gap-px bg-neutral-200 border border-neutral-200 px-6 lg:grid-cols-3 lg:px-0">

        <div className="bg-white p-6">
          <p className="mb-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Écouter sur
          </p>
          <h2 className="mb-5 font-display text-xl font-light text-neutral-900">
            Toutes les Plateformes
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
                    className="flex items-center gap-3 text-sm font-light text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    <img src={platform.imageUrl} alt={platform.name} className="size-5 shrink-0" />
                    {platform.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div className="bg-white p-6">
          <p className="mb-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Communauté
          </p>
          <h2 className="mb-3 font-display text-xl font-light text-neutral-900">
            Suivez ART AU FÉMININ
          </h2>
          <p className="mb-5 text-sm font-light leading-relaxed text-neutral-500">
            Pour encore plus de contenus sur les femmes artistes, suivez le compte Instagram du podcast.
          </p>
          <a
            href="https://www.instagram.com/artaufeminin/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-300 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            @artaufeminin
          </a>
        </div>

        <div className="bg-white p-6">
          <p className="mb-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Mécénat
          </p>
          <h2 className="mb-3 font-display text-xl font-light text-neutral-900">
            Soutenez le Podcast
          </h2>
          <p className="mb-5 text-sm font-light leading-relaxed text-neutral-500">
            Si vous appréciez ce travail, vous pouvez soutenir ART AU FÉMININ sur Tipeee. Chaque contribution compte.
          </p>
          <a
            href="https://fr.tipeee.com/art-au-feminin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-300 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
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
  return <SEO title={`${title} — ART AU FÉMININ`} description={description} />;
};
