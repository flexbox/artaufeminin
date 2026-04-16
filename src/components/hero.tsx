import React from 'react';

import Button from './button';
import HeroCard from './heroCard';
import Text from './text';

type HeroProps = {
  allEpisodes: any;
};

export function Hero({ allEpisodes }: HeroProps) {
  if (!allEpisodes || allEpisodes.length < 3) {
    return (
      <div className="m-auto my-12 w-3/4 text-center">
        <Text as="p" variant="p" className="text-stone-500">
          Aucun épisode disponible pour le moment.
        </Text>
      </div>
    );
  }

  return (
    <div className="m-auto w-3/4">
      <div className="flex flex-col gap-3 md:flex-row">

        {/* Grande carte */}
        <div className="h-72 md:h-[520px] md:flex-[2]">
          <HeroCard
            heroLink={`/podcasts/${allEpisodes[0].guid}`}
            imageUrl={allEpisodes[0].itunes.image}
            heroTitle={allEpisodes[0].title}
          />
        </div>

        {/* Deux petites cartes empilées */}
        <div className="flex flex-col gap-3 md:flex-1">
          <div className="h-48 md:h-[254px]">
            <HeroCard
              heroLink={`/podcasts/${allEpisodes[1].guid}`}
              imageUrl={allEpisodes[1].itunes.image}
              heroTitle={allEpisodes[1].title}
            />
          </div>
          <div className="h-48 md:h-[254px]">
            <HeroCard
              heroLink={`/podcasts/${allEpisodes[2].guid}`}
              imageUrl={allEpisodes[2].itunes.image}
              heroTitle={allEpisodes[2].title}
            />
          </div>
        </div>

      </div>

      <div className="mt-6 flex justify-end">
        <Button as="a" href="/podcasts" variant="outlineDark" size="s">
          Écouter tous les épisodes
        </Button>
      </div>
    </div>
  );
}
