import { Link } from "gatsby"
import React from "react"

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
  const audioSrc = episode.enclosure.url

  let summary = episode.itunes.summary
  if (isSummaryTruncate === true) {
    summary = `${episode.itunes.summary.substring(0, 250)}…`
  }

  return (
    <>
      <Link
        to={`/episodes/${episode.guid}`}
        className="flex flex-col md:flex-row hover:no-underline post-preview"
      >
        <div className="flex-1 px-6">
          <h3 className="text-3xl text-blue-500 font-bold mt-0">
            {episode.title}
          </h3>
          <audio controls src={audioSrc} className="mb-8" />

          <div
            className="text-gray-500"
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>
        <div className="flex-shrink-0 px-3">
          <img
            className="w-48 h-48"
            src={episode.itunes.image}
            alt={`ART au feminin S${episode.itunes.season} E${episode.itunes.episode}`}
          />
        </div>
      </Link>
      <hr className="separator" />
    </>
  )
}
