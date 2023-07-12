import React, { ReactNode, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import Instagram from "./instagram"
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

  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    const audioElement = document.getElementById("audio-element")
    if (isPlaying) {
      audioElement?.pause()
    } else {
      audioElement?.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="bg-gray-50">
      <Header />
      <main role="main" className="mt-12 px-4">
        {children}
      </main>
      {withInstagram && <Instagram />}
      {withLastPodcast && (
        <div className="z-1000 fixed bottom-0 left-0 m-auto flex w-full items-center p-4">
          <Text className=" text-gray-500 sm:text-base ">
            Écoutez le dernier épisode
          </Text>
          <button
            className={`play-pause-button ${isPlaying ? "playing" : ""}`}
            onClick={togglePlay}
          />

          <audio controls src={audioUrl} className="w-full" />
        </div>
      )}
      <Footer siteTitle={siteTitle} />
    </div>
  )
}

export default Layout
