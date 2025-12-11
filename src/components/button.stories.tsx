import React from 'react';
import 'typeface-merriweather';

import Button from './button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => {
  return <Button variant="outline">Default</Button>;
};

export const Variants = () => {
  return (
    <>
      <Button>Hello</Button>
      <Button variant="outline">Hello</Button>
      <Button variant="solid">Hello</Button>
      <Button variant="ghost">Hello</Button>
    </>
  );
};

export const Sizes = () => {
  return (
    <>
      <Button size="s">Small</Button>
      <Button size="sm">Medium</Button>
      <Button size="lg">Large</Button>
    </>
  );
};

export const WithIcon = () => {
  return <Button variant="outline" withIcon href="http://www.google.com" />;
};

export const Podcast = () => {
  return (
    <Button
      variant="ghost"
      withIconPodcast
      href="http://www.google.com"
      key="spotify"
      url="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/spotify.svg"
      alt={`ART au feminin sur spotify`}
    >
      Spotify
    </Button>
  );
};

export const AhrefButton = () => {
  return (
    <Button variant="outline" as="a" href="http://www.google.com">
      Href
    </Button>
  );
};
