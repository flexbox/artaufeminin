import React, { useState } from "react"
import Layout from "../components/layout"
import LayoutSidebar from "../components/layoutSidebar"
import SEO from "../components/seo"
import { dutationToString } from "../utils/dutationToString"

export default function Episode({ pageContext }) {
  const title = pageContext.title
  const description = pageContext.contentSnippet.substring(0, 155)
  const duration = dutationToString(pageContext.itunes.duration)
  const audioSrc = pageContext.enclosure.url

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
    <Layout>
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

          <div className="z-1000 fixed bottom-0 left-0 m-auto flex w-full items-center bg-[#f2f2f2] ">
            <button
              className={`play-pause-button ${isPlaying ? "playing" : ""}`}
              onClick={togglePlay}
            />
            <audio
              controls
              src={audioSrc}
              id="audio-element"
              className="w-full"
            />
          </div>

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
