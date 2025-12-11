import React, { Fragment } from 'react';

import { allPodcastPlatforms } from '../pages/links';
import Button from './button';
import Card from './card';

export default function Subscribe() {
  return (
    <Card title="S’inscrire aux épisodes">
      {allPodcastPlatforms
        .filter((platform) => platform.name !== 'Anchor')
        .map((platform) => (
          <Button
            key={platform.name}
            variant="ghost"
            withIconPodcast
            as="a"
            size="sm"
            href={platform.url}
            url={platform.imageUrl}
            alt={`ART au feminin sur ${platform.name}`}
          >
            {platform.name}
          </Button>
        ))}
    </Card>
  );
}
