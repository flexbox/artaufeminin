import { graphql, useStaticQuery } from 'gatsby';
import React, { useMemo } from 'react';

import { ContentCard } from '../components/content-card';
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

  const plainSummary = episode.itunes.summary
    ? episode.itunes.summary.replace(/<[^>]*>/g, '').substring(0, 140) + '…'
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
          <span className="text-xs font-semibold uppercase tracking-widest text-clay-500">
            Écouter
          </span>
        </div>
      }
    />
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
