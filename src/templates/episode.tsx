import React, { useState } from "react"
import Layout from "../components/layout"
import LayoutSidebar from "../components/layoutSidebar"
import SEO from "../components/seo"
import { dutationToString } from "../utils/dutationToString"
import { useMemo } from "react"
import { useAudioPlayer } from "../components/AudioProvider"
import { PlayButton } from "../components/player/PlayButton"

export default function Episode({ pageContext }) {
  const title = pageContext.title
  const description = pageContext.contentSnippet.substring(0, 155)
  const duration = dutationToString(pageContext.itunes.duration)
  const audioSrc = pageContext.enclosure.url

  let audioPlayerData = useMemo(
    () => ({
      title: pageContext.title,
      audio: {
        src: pageContext.enclosure.url,
      },
      link: `/${pageContext.guid}`,
    }),
    [pageContext]
  )
  let player = useAudioPlayer(audioPlayerData)

  return (
    <Layout withLastPodcast={false}>
      <SEO title={`Podcast ${title}`} description={description} />

      <LayoutSidebar>
        <article className="prose prose-blue text-gray-500">
          <h1 className="text-gray-700">{title}</h1>

          <p className="text-gray-500">
            <em>Saison {pageContext.itunes.season}</em>
            <span className="mx-4">•</span>
            <em>Épisode {pageContext.itunes.episode}</em>
            <span className="mx-4">•</span>
            <em>{duration}</em>
          </p>

          <PlayButton player={player} size="large" />
          {/* <audio controls src={audioSrc} id="audio-element" /> */}

          <div
            className="my-12"
            dangerouslySetInnerHTML={{ __html: pageContext.itunes.summary }}
          />

          <hr className="separator" />
        </article>
      </LayoutSidebar>
    </Layout>
  )
}
