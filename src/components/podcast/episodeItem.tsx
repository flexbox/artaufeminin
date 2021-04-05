import { Link } from "gatsby"
import React from "react"

import { dutationToString } from "../../utils/dutationToString"

interface EpisodeItemProps {
  isSummaryTruncate?: boolean
  episode: {
    guid: string
    link: string
    title: string
    itunes: {
      summary: string
      image: string
      episode: string
      season: string
      duration: string
    }
    enclosure: {
      url: string
    }
  }
}

export default function EpisodeItem({
  episode,
  isSummaryTruncate,
}: EpisodeItemProps) {
  const duration = dutationToString(episode.itunes.duration)
  const audioSrc = episode.enclosure.url

  let summary = episode.itunes.summary
  if (isSummaryTruncate === true) {
    summary = `${episode.itunes.summary.substring(0, 250)}…`
  }

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 px-6">
          <h3 className="text-3xl text-gray-700 font-bold mt-0">
            <Link className="flex" to={`/episodes/${episode.guid}`}>
              {episode.title}
            </Link>
          </h3>
          <audio controls src={audioSrc} className="mb-8"></audio>
          <div dangerouslySetInnerHTML={{ __html: summary }} />

          <p className="text-gray-500">
            <em>Saison {episode.itunes.season}</em>
            <span className="mx-4">•</span>
            <em>Épisode {episode.itunes.episode}</em>
            <span className="mx-4">•</span>
            <em>{duration}</em>
          </p>
        </div>
        <div className="flex-shrink-0 px-3">
          <img
            className="w-48 h-48"
            src={episode.itunes.image}
            alt={`ART au feminin S${episode.itunes.season} E${episode.itunes.episode}`}
          />
        </div>
      </div>
      <hr className="separator" />
    </>
  )
}
