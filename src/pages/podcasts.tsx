import { Link, graphql, useStaticQuery } from 'gatsby';
import React, { useMemo } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Text from '../components/text';
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

  // Supprimer les balises HTML du résumé
  const plainSummary = episode.itunes.summary
    ? episode.itunes.summary.replace(/<[^>]*>/g, '').substring(0, 140) + '…'
    : '';

  return (
    <article className="group flex flex-col">
      {/* Pochette */}
      <Link
        to={`/podcasts/${episode.guid}`}
        className="block overflow-hidden rounded-sm"
      >
        <div className="aspect-square overflow-hidden bg-stone-100">
          <img
            src={episode.itunes.image}
            alt={episode.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Contenu */}
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-xs font-semibold uppercase tracking-widest text-clay-500">
          Saison {episode.itunes.season} · Épisode {episode.itunes.episode}
          {episode.itunes.duration && ` · ${episode.itunes.duration}`}
        </p>

        <Link to={`/podcasts/${episode.guid}`}>
          <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-stone-900 transition-colors hover:text-clay-500">
            {episode.title}
          </h2>
        </Link>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">
          {plainSummary}
        </p>

        <div className="mt-4 flex items-center gap-3">
          <PlayButton player={player} size="small" />
          <span className="text-xs font-semibold uppercase tracking-widest text-clay-500">
            Écouter
          </span>
        </div>
      </div>
    </article>
  );
}

const PodcastsPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes;

  return (
    <Layout>
      {/* En-tête */}
      <section className="m-auto mb-10 mt-8 w-3/4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Tous les épisodes
        </p>
        <Text
          as="h1"
          variant="h1"
          className="text-4xl leading-tight md:text-5xl"
        >
          Podcasts sur les femmes artistes
        </Text>
      </section>

      {/* Grille d'épisodes */}
      <div className="m-auto mb-20 grid w-3/4 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {allEpisodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </Layout>
  );
};

export const Head = () => {
  return (
    <SEO
      title="Tous les épisodes — ART au féminin, le podcast sur les femmes artistes"
      description="Écoutez tous les épisodes du podcast ART au féminin, présenté par Aldjia Boughias. Des récits captivants sur les femmes artistes qui ont marqué l'histoire de l'art."
    />
  );
};

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
