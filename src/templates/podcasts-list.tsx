import { graphql, Link } from 'gatsby';
import React, { useMemo } from 'react';

import { slugify } from '../utils/slugify';

import { ContentCard } from '../components/content-card';
import { FeaturedCard } from '../components/featured-card';
import Layout from '../components/layout';
import { Pagination } from '../components/pagination';
import { useAudioPlayer } from '../components/player/AudioProvider';
import { PlayButton } from '../components/player/PlayButton';
import SEO from '../components/seo';
import { stripHtml } from '../utils/html';

function EpisodeCard({ episode }: { episode: any }) {
  const audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: { src: episode.enclosure.url, type: 'audio/mpeg' },
      link: `/podcasts/${slugify(episode.title)}/`,
    }),
    [episode]
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
      href={`/podcasts/${slugify(episode.title)}/`}
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

interface PodcastsListProps {
  data: {
    allAnchorEpisode: {
      nodes: any[];
    };
  };
  pageContext: {
    currentPage: number;
    numPages: number;
    skip: number;
    limit: number;
  };
  location: { pathname: string };
}

const PodcastsListTemplate = ({ data, pageContext }: PodcastsListProps) => {
  const episodes = data.allAnchorEpisode.nodes;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const featured = isFirst ? episodes[0] : null;
  const rest = isFirst ? episodes.slice(1) : episodes;

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

      {/* ── DERNIER ÉPISODE — featured uniquement page 1 ─────────── */}
      {featured && (
        <section className="mx-auto mb-16 w-11/12 max-w-7xl">
          <div className="mb-8 flex items-baseline border-b border-neutral-200 pb-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
              Dernier Épisode
            </h2>
          </div>
          <FeaturedCard
            href={`/podcasts/${slugify(featured.title)}/`}
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
                to={`/podcasts/${slugify(featured.title)}/`}
                aria-label={`Écouter l'épisode : ${featured.title}`}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-colors hover:text-neutral-900"
              >
                Écouter l'Épisode <span aria-hidden="true">→</span>
              </Link>
            }
          />
        </section>
      )}

      {/* ── GRILLE D'ÉPISODES ─────────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="mx-auto mb-10 w-11/12 max-w-7xl">
          <div className="mb-8 flex items-baseline border-b border-neutral-200 pb-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
              {isFirst ? 'Tous les Épisodes' : `Page ${currentPage}`}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </section>
      )}

      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        basePath="/podcasts"
      />
    </Layout>
  );
};

export const query = graphql`
  query PodcastsListQuery($skip: Int!, $limit: Int!) {
    allAnchorEpisode(sort: { isoDate: DESC }, limit: $limit, skip: $skip) {
      nodes {
        id
        guid
        isoDate
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
`;

export const Head = ({
  data,
  pageContext,
  location,
}: {
  data: { allAnchorEpisode: { nodes: any[] } };
  pageContext: { currentPage: number; numPages: number };
  location: { pathname: string };
}) => {
  const { currentPage } = pageContext;
  const isFirst = currentPage === 1;
  const title = isFirst
    ? 'Tous les Épisodes — ART AU FÉMININ, le podcast sur les femmes artistes'
    : `Tous les Épisodes — Page ${currentPage} — ART AU FÉMININ`;

  const jsonLd = isFirst
    ? {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Épisodes du podcast ART AU FÉMININ',
        url: 'https://www.artaufeminin.fr/podcasts/',
        itemListElement: data.allAnchorEpisode.nodes.map((episode, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `https://www.artaufeminin.fr/podcasts/${slugify(episode.title)}/`,
          name: episode.title,
        })),
      }
    : undefined;

  return (
    <SEO
      title={title}
      description="Écoutez tous les épisodes du podcast ART AU FÉMININ, présenté par Aldjia Boughias. Des récits captivants sur les femmes artistes qui ont marqué l'Histoire de l'Art."
      url={`https://www.artaufeminin.fr${location.pathname}`}
      jsonLd={jsonLd}
    />
  );
};

export default PodcastsListTemplate;
