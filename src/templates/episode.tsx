import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useMemo } from 'react';

import Layout from '../components/layout';
import { useAudioPlayer } from '../components/player/AudioProvider';
import { PlayButton } from '../components/player/PlayButton';
import SEO from '../components/seo';
import { dutationToString } from '../utils/dutationToString';
import { stripHtml } from '../utils/html';
import { allPodcastPlatforms } from '../pages/links';

export default function Episode({ pageContext }) {
  const title = pageContext.title;
  const duration = dutationToString(pageContext.itunes.duration);
  const season = pageContext.itunes.season;
  const episode = pageContext.itunes.episode;
  const image = pageContext.itunes.image;
  const summary = pageContext.itunes.summary;
  const plainSummary = summary ? stripHtml(summary) : '';

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
          className="h-full w-full object-cover object-top"
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

        {/* Bouton play — style "description" de l'article */}
        <div className="flex items-center gap-5 border-b border-neutral-200 py-8">
          <PlayButton player={player} size="medium" />
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Écouter l'Épisode
            </p>
            {duration && (
              <p className="mt-0.5 font-display text-xl font-light italic text-neutral-500">
                {duration}
              </p>
            )}
          </div>
        </div>

        {/* Résumé en prose */}
        <div
          className="prose prose-neutral my-10 max-w-none font-light text-neutral-600 prose-p:font-light prose-p:leading-relaxed prose-p:text-neutral-600 prose-a:text-neutral-700 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: summary }}
        />

        <hr className="separator" />

        {/* Autrice */}
        <section className="my-10 flex items-center gap-6 border border-neutral-200 p-6">
          <div className="size-20 shrink-0 overflow-hidden rounded-full">
            <StaticImage
              src="../images/profile-picture.jpg"
              alt="Aldjia Boughias — ART AU FÉMININ"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Présenté par
            </p>
            <p className="text-sm font-light leading-relaxed text-neutral-500">
              Aldjia Boughias — développeuse web orientée Art et Culture, exploratrice de l'Histoire de l'Art le reste du temps. J'ai créé ART AU FÉMININ pour donner aux femmes artistes la place qu'elles méritent dans notre mémoire collective.
            </p>
          </div>
        </section>

        {/* Mécénat */}
        <section className="my-10 border border-neutral-200 p-6">
          <p className="mb-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Mécénat
          </p>
          <h2 className="mb-3 font-display text-xl font-light text-neutral-900">
            Vous avez aimé cet épisode ?
          </h2>
          <p className="mb-5 text-sm font-light leading-relaxed text-neutral-500">
            Si ce contenu vous a plu, vous pouvez soutenir ART AU FÉMININ sur Tipeee.
            Chaque contribution aide à produire de nouveaux épisodes et articles.
          </p>
          <a
            href="https://fr.tipeee.com/art-au-feminin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-300 px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            Soutenir sur Tipeee
          </a>
        </section>

        <hr className="separator" />
      </div>

      {/* ── ÉCOUTER SUR LES PLATEFORMES ──────────────────────────── */}
      <div className="mx-auto mb-20 max-w-3xl px-6 lg:px-0">
        <p className="mb-6 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Écouter sur
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {allPodcastPlatforms
            .filter((p) => p.name !== 'Anchor')
            .map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border border-neutral-200 p-4 transition-colors hover:border-neutral-400"
              >
                <img src={platform.imageUrl} alt={platform.name} className="size-6 shrink-0" />
                <span className="text-sm font-light text-neutral-700 transition-colors group-hover:text-neutral-900">
                  {platform.name}
                </span>
              </a>
            ))}
        </div>
      </div>

    </Layout>
  );
}

export const Head = ({ pageContext }) => {
  const title = pageContext.title;
  const description = pageContext.itunes?.summary
    ? stripHtml(pageContext.itunes.summary).substring(0, 155)
    : title;
  return <SEO title={`${title} — ART AU FÉMININ`} description={description} />;
};
