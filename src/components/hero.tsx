import React from 'react';

import HeroCard from './heroCard';
import { slugify } from '../utils/slugify';

type HeroProps = {
  allEpisodes: any;
};

export function Hero({ allEpisodes }: HeroProps) {
  if (!allEpisodes || allEpisodes.length < 3) {
    return (
      <div className="m-auto my-12 w-3/4 text-center">
        <p className="text-sm font-light text-neutral-400">
          Aucun épisode disponible pour le moment.
        </p>
      </div>
    );
  }

  return (
    <div className="m-auto w-3/4">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        {allEpisodes.slice(0, 3).map((episode: any) => (
          <HeroCard
            key={episode.guid}
            heroLink={`/podcasts/${slugify(episode.title)}/`}
            imageUrl={episode.itunes.image}
            heroTitle={episode.title}
            subtitle={`Saison ${episode.itunes.season} · Épisode ${episode.itunes.episode}`}
          />
        ))}
      </div>

      <div className="mt-12 flex justify-end border-t border-neutral-200 pt-6">
        <a
          href="/podcasts"
          aria-label="Écouter tous les épisodes"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-neutral-900"
        >
          Écouter tous les épisodes <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
