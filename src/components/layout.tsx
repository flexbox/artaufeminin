import { graphql, useStaticQuery } from "gatsby"
import React, { ReactNode, useMemo } from "react"

import Footer from "./footer"
import { Header } from "./header"
import Instagram from "./instagram"
import { AudioPlayer } from "./player/AudioPlayer"
import { useAudioPlayer } from "./player/AudioProvider"
import { PlayButton } from "./player/PlayButton"
import Text from "./text"

interface LayoutProps {
  children: ReactNode
  withInstagram?: boolean
  withLastPodcast?: boolean
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
  `)
  const audioUrl = data.allAnchorEpisode.nodes[0].enclosure.url
  const siteTitle = data.site.siteMetadata.title
  const lastPodcastTitle = data.allAnchorEpisode.nodes[0].title
  const guid = data.allAnchorEpisode.nodes[0].guid

  let audioPlayerData = useMemo(
    () => ({
      title: lastPodcastTitle,
      audio: {
        src: audioUrl,
        type: "audio/mpeg",
      },
      link: `/${guid}`,
    }),
    [audioUrl, guid, lastPodcastTitle]
  )
  let player = useAudioPlayer(audioPlayerData)

  return (
    <div className="bg-gray-50">
      <Header />
      <main role="main" className="mt-12 px-4">
        {children}
      </main>
      {withInstagram && <Instagram />}
      {withLastPodcast && (
        <div className="z-1000 fixed bottom-0 left-0 m-auto flex w-full items-center p-4">
          <div className="flex bg-slate-200 items-center p-4 rounded-3xl">
            <PlayButton player={player} size="small" />

            <Text className="ml-4 font-merri">{lastPodcastTitle}</Text>
          </div>
        </div>
      )}
      <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
        <AudioPlayer />
      </div>
      <Footer siteTitle={siteTitle} />
    </div>
  )
}

export default Layout
