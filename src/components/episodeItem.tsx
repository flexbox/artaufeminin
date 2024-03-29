import { Link } from 'gatsby';
import React, { useMemo } from 'react';

import { useAudioPlayer } from './player/AudioProvider';
import { PlayButton } from './player/PlayButton';
import Text from './text';

interface EpisodeItemProps {
  isSummaryTruncate?: boolean;
  withPlayer?: boolean;
  episode: {
    guid: string;
    link: string;
    title: string;
    itunes: {
      summary: string;
      image: string;
      episode: string;
      season: string;
      duration: string;
    };
    enclosure: {
      url: string;
    };
  };
}

export default function EpisodeItem({
  episode,
  isSummaryTruncate,
}: EpisodeItemProps) {
  const audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: {
        src: episode.enclosure.url,
        type: 'audio/mpeg',
      },
      link: `/${episode.guid}`,
    }),
    [episode],
  );
  const player = useAudioPlayer(audioPlayerData);

  let summary = episode.itunes.summary;
  if (isSummaryTruncate === true) {
    summary = `${episode.itunes.summary.substring(0, 250)}…`;
  }

  return (
    <>
      <Link
        to={`/podcasts/${episode.guid}`}
        className="article-preview flex flex-col hover:no-underline md:flex-row"
      >
        <div className="flex-1">
          <Text as="h3" variant={'h3Link'}>
            {episode.title}
          </Text>

          <div
            className="font-light text-gray-500 "
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>
        <div className="hidden shrink-0 px-3 sm:flex">
          <img
            className="mt-2 size-48"
            src={episode.itunes.image}
            alt={`ART au feminin S${episode.itunes.season} E${episode.itunes.episode}`}
          />
        </div>
      </Link>
      <div className="flex items-center">
        <PlayButton player={player} size="small" />
        <Text className="ml-4 font-merri text-slate-500">Écouter</Text>
      </div>
      <hr className="separator my-8" />
    </>
  );
}
