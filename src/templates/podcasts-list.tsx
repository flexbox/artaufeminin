import { graphql } from 'gatsby';
import React from 'react';

import { slugify } from '../utils/slugify';

import {
  EpisodeCard,
  EpisodeListenAction,
  episodeMeta,
} from '../components/episode-card';
import { FeaturedCard } from '../components/featured-card';
import Layout from '../components/layout';
import { Pagination } from '../components/pagination';
import SEO from '../components/seo';
import { truncateWords } from '../utils/date';
import { stripHtml } from '../utils/html';

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
      <section className="mx-auto mb-10 mt-8 w-page max-w-6xl lg:w-page-lg border-b border-neutral-200 pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Tous les Épisodes
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Podcasts sur les femmes artistes
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
          Plus de 100 épisodes pour découvrir les femmes qui ont façonné
          l'Histoire de l'Art — de l'Antiquité à l'art contemporain. Présenté
          par Aldjia Boughias.
        </p>
      </section>

      {/* ── DERNIER ÉPISODE — featured uniquement page 1 ─────────── */}
      {featured && (
        <section className="mx-auto mb-16 w-page max-w-6xl lg:w-page-lg">
          <div className="mb-8 flex items-baseline border-b border-neutral-200 pb-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
              Dernier Épisode
            </h2>
          </div>
          <FeaturedCard
            href={`/podcasts/${slugify(featured.title)}/`}
            imageUrl={featured.itunes.image}
            imageAlt={featured.title}
            label={episodeMeta(featured)}
            title={featured.title}
            description={
              featured.itunes.summary
                ? truncateWords(stripHtml(featured.itunes.summary), 300)
                : undefined
            }
            cta={<EpisodeListenAction episode={featured} />}
          />
        </section>
      )}

      {/* ── GRILLE D'ÉPISODES ─────────────────────────────────────── */}
      {rest.length > 0 && (
        <section className="mx-auto mb-10 w-page max-w-6xl lg:w-page-lg">
          <div className="mb-8 flex items-baseline border-b border-neutral-200 pb-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
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

  const firstEpisodeImage = data.allAnchorEpisode.nodes[0]?.itunes?.image;

  const jsonLd = isFirst
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'PodcastSeries',
          name: 'ART AU FÉMININ',
          description:
            "Plus de 100 épisodes sur les femmes artistes qui ont façonné l'Histoire de l'Art — avec des historiennes, conservatrices de musées et artistes contemporaines.",
          url: 'https://artaufeminin.fr/podcasts/',
          inLanguage: 'fr',
          author: {
            '@type': 'Person',
            name: 'Aldjia Boughias',
            url: 'https://artaufeminin.fr/about',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Épisodes du podcast ART AU FÉMININ',
          url: 'https://artaufeminin.fr/podcasts/',
          itemListElement: data.allAnchorEpisode.nodes.map((episode, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `https://artaufeminin.fr/podcasts/${slugify(episode.title)}/`,
            name: episode.title,
          })),
        },
      ]
    : undefined;

  return (
    <SEO
      title={title}
      description="Plus de 100 épisodes sur les femmes artistes qui ont façonné l'Histoire de l'Art — avec des historiennes, conservatrices de musées et artistes contemporaines. Le podcast ART AU FÉMININ, présenté par Aldjia Boughias."
      url={`https://artaufeminin.fr${location.pathname}`}
      image={isFirst && firstEpisodeImage ? firstEpisodeImage : undefined}
      imageAlt="ART AU FÉMININ — Le podcast sur les femmes artistes"
      jsonLd={jsonLd}
    />
  );
};

export default PodcastsListTemplate;
