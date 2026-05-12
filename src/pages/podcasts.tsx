import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useMemo } from 'react';

import { FeaturedCard } from '../components/featured-card';
import { stripHtml } from '../utils/html';
import { ContentCard } from '../components/content-card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useAudioPlayer } from '../components/player/AudioProvider';
import { PlayButton } from '../components/player/PlayButton';

function EpisodeCard({ episode }: { episode: any }) {
  const audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: { src: episode.enclosure.url, type: 'audio/mpeg' },
      link: `/podcasts/${episode.guid}`,
    }),
    [episode],
  );
  const player = useAudioPlayer(audioPlayerData);

  const plainSummary = episode.itunes.summary
    ? stripHtml(episode.itunes.summary).substring(0, 140) + '…'
    : '';

  const meta = [
    `Saison ${episode.itunes.season}`,
    `Épisode ${episode.itunes.episode}`,
    episode.itunes.duration,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <ContentCard
      href={`/podcasts/${episode.guid}`}
      imageUrl={episode.itunes.image}
      imageAlt={episode.title}
      meta={meta}
      title={episode.title}
      description={plainSummary}
      action={
        <div className="flex items-center gap-3">
          <PlayButton player={player} size="small" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Écouter
          </span>
        </div>
      }
    />
  );
}

const PodcastsPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes;
  const featured = allEpisodes[0];
  const rest = allEpisodes.slice(1);

  return (
    <Layout>

      {/* ── EN-TÊTE ───────────────────────────────────────────────── */}
      <section className="mx-auto mb-10 mt-8 w-11/12 max-w-7xl border-b border-neutral-200 pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Tous les Épisodes
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Podcasts sur les Femmes Artistes
        </h1>
      </section>

      {/* ── DERNIER ÉPISODE — grande card featured ────────────────── */}
      {featured && (
        <section className="mx-auto mb-16 w-11/12 max-w-7xl">
          <div className="mb-8 flex items-baseline justify-between border-b border-neutral-200 pb-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
              Dernier Épisode
            </h2>
          </div>
          <FeaturedCard
            href={`/podcasts/${featured.guid}`}
            imageUrl={featured.itunes.image}
            imageAlt={featured.title}
            label={`Saison ${featured.itunes.season} · Épisode ${featured.itunes.episode}`}
            title={featured.title}
            description={
              featured.itunes.summary
                ? stripHtml(featured.itunes.summary).substring(0, 300) + '…'
                : undefined
            }
            cta={
              <Link
                to={`/podcasts/${featured.guid}`}
                aria-label={`Écouter l'épisode : ${featured.title}`}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-colors hover:text-neutral-900"
              >
                Écouter l'Épisode <span aria-hidden="true">→</span>
              </Link>
            }
          />
        </section>
      )}

      {/* ── TOUS LES ÉPISODES ─────────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="mx-auto mb-20 w-11/12 max-w-7xl">
          <div className="mb-8 flex items-baseline border-b border-neutral-200 pb-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
              Tous les Épisodes
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </section>
      )}

    </Layout>
  );
};

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="Tous les Épisodes — ART AU FÉMININ, le podcast sur les femmes artistes"
    description="Écoutez tous les épisodes du podcast ART AU FÉMININ, présenté par Aldjia Boughias. Des récits captivants sur les femmes artistes qui ont marqué l'Histoire de l'Art."
    url={`https://www.artaufeminin.fr${location.pathname}`}
  />
);

export default function PodcastQuery() {
  const data = useStaticQuery(graphql`
    query {
      allAnchorEpisode(sort: { isoDate: DESC }) {
        nodes {
          id
          isoDate
          guid
          title
          itunes {
            summary
            image
            episode
            season
            duration
          }
          enclosure {
            url
          }
        }
      }
    }
  `);

  return <PodcastsPage data={data} />;
}
