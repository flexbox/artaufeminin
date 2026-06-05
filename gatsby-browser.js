import React from 'react';
import './src/stylesheets/global.css';

import { AudioProvider } from './src/components/player/AudioProvider';

export const wrapRootElement = ({ element }) => (
  <AudioProvider>{element}</AudioProvider>
);

export const onClientEntry = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&display=swap';
  document.head.appendChild(link);
};
