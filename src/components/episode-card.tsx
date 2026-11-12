import React, { useMemo } from 'react';

import { truncateWords } from '../utils/date';
import { formatMinutes } from '../utils/duration';
import { stripHtml } from '../utils/html';
import { slugify } from '../utils/slugify';
import { ContentCard } from './content-card';
import { useAudioPlayer } from './player/AudioProvider';
import { PlayButton } from './player/PlayButton';

// « Saison 6 · Épisode 5 · 14 min »
export function episodeMeta(episode: any): string {
  return [
    `Saison ${episode.itunes.season}`,
    `Épisode ${episode.itunes.episode}`,
    formatMinutes(episode.itunes.duration),
  ]
    .filter(Boolean)
    .join(' · ');
}

// Bouton lecture + « Écouter » : lance l'épisode dans le lecteur du site
export function EpisodeListenAction({ episode }: { episode: any }) {
  const audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: { src: episode.enclosure.url, type: 'audio/mpeg' },
      link: `/podcasts/${slugify(episode.title)}/`,
    }),
    [episode]
  );
  const player = useAudioPlayer(audioPlayerData);

  return (
    <div className="flex items-center gap-3">
      <PlayButton player={player} size="small" label={episode.title} />
      <span
        aria-hidden="true"
        className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500"
      >
        Écouter
      </span>
    </div>
  );
}

export function EpisodeCard({ episode }: { episode: any }) {
  return (
    <ContentCard
      href={`/podcasts/${slugify(episode.title)}/`}
      imageUrl={episode.itunes.image}
      imageAlt={episode.title}
      meta={episodeMeta(episode)}
      title={episode.title}
      description={
        episode.itunes.summary
          ? truncateWords(stripHtml(episode.itunes.summary), 140)
          : ''
      }
      action={<EpisodeListenAction episode={episode} />}
    />
  );
}
