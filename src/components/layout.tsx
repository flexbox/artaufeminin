import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode, useMemo } from 'react';

import Footer from './footer';
import { Header } from './header';
import Instagram from './instagram';
import { AudioPlayer } from './player/AudioPlayer';
import { useAudioPlayer } from './player/AudioProvider';
import { PlayButton } from './player/PlayButton';
import Text from './text';

interface LayoutProps {
  children: ReactNode;
  withInstagram?: boolean;
  withLastPodcast?: boolean;
}

function Layout({
  children,
  withInstagram = false,
  withLastPodcast = true,
}: LayoutProps) {
  const data = useStaticQuery(graphql`
    query {
      allAnchorEpisode {
        nodes {
          enclosure {
            url
          }
          title
          guid
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const audioUrl = data.allAnchorEpisode.nodes[0].enclosure.url;
  const siteTitle = data.site.siteMetadata.title;
  const lastPodcastTitle = data.allAnchorEpisode.nodes[0].title;
  const guid = data.allAnchorEpisode.nodes[0].guid;

  const audioPlayerData = useMemo(
    () => ({
      title: lastPodcastTitle,
      audio: {
        src: audioUrl,
        type: 'audio/mpeg',
      },
      link: `/${guid}`,
    }),
    [audioUrl, guid, lastPodcastTitle],
  );
  const player = useAudioPlayer(audioPlayerData);

  return (
    <div className="bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-neutral-900 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
      >
        Passer au contenu principal
      </a>
      <Header />
      <main id="main-content" role="main" className="px-4">
        {children}
      </main>
      {withInstagram && <Instagram />}
      {withLastPodcast && (
        <div className="z-1000 fixed bottom-0 left-0 m-auto flex w-full items-center p-4">
          <div className="flex items-center rounded-3xl bg-slate-200 p-4">
            <PlayButton player={player} size="small" />

            <Text variant={'default'} className="ml-4 font-merri">
              {lastPodcastTitle}
            </Text>
          </div>
        </div>
      )}
      <div className="lg:left-112 xl:left-120 fixed inset-x-0 bottom-0 z-10">
        <AudioPlayer />
      </div>
      <Footer siteTitle={siteTitle} />
    </div>
  );
}

export default Layout;
