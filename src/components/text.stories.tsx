import React from 'react';

import Hr from './hr';
import Text from './text';

export default {
  title: 'Typography/Text',
};

export const TextStory = () => {
  return (
    <div>
      <div className="mb-10">
        <Text as="h1" variant={'h1'}>
          h1 - Pourquoi n'y a-t-il pas eu de grands artistes femmes ?
        </Text>
        <Text as="h2" variant={'h2'}>
          h2 - Pourquoi n'y a-t-il pas eu de grands artistes femmes ?
        </Text>
        <Text as="h2" variant={'h2about'}>
          h2about - Pourquoi n'y a-t-il pas eu de grands artistes femmes ?
        </Text>
        <Text as="h2" variant={'h2episode'}>
          h2episode - Pourquoi n'y a-t-il pas eu de grands artistes femmes ?
        </Text>
        <Text as="h3" variant={'h3'}>
          h3 - Pourquoi n'y a-t-il pas eu de grands artistes femmes ?
        </Text>
        <Text as="h3" variant={'h3Link'}>
          h3Link - Pourquoi n'y a-t-il pas eu de grands artistes femmes ?
        </Text>
      </div>
      <div className="mb-10">
        <Hr />
      </div>
      <div className="mb-10">
        <Text as="p" variant={'p'}>
          Avant de devenir historienne de l’art, professeure d’université,
          théoricienne de l’art, … Elle obtient en 1951 un baccalauréat en
          philosophie tout en se formant aux études grecques et d’histoire de
          l’art.
        </Text>
        <Text as="p" variant={'pAbout'}>
          pAbout Avant de devenir historienne de l’art, professeure
          d’université, théoricienne de l’art, … Elle obtient en 1951 un
          baccalauréat en philosophie tout en se formant aux études grecques et
          d’histoire de l’art.
        </Text>
        <Text as="p" variant={'pEpisode'}>
          pEpisode Avant de devenir historienne de l’art, professeure
          d’université, théoricienne de l’art, … Elle obtient en 1951 un
          baccalauréat en philosophie tout en se formant aux études grecques et
          d’histoire de l’art.
        </Text>
      </div>
      <div className="prose">
        <p>
          prose Avant de devenir historienne de l’art, professeure d’université,
          théoricienne de l’art, … Elle obtient en 1951 un baccalauréat en
          philosophie tout en se formant aux études grecques et d’histoire de
          l’art.
        </p>
      </div>
    </div>
  );
};
