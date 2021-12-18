import { Link } from "gatsby"
import React from "react"
import Text from "./text"

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
          <Text as="h3Link">{episode.title}</Text>
          <audio controls src={audioSrc} className="mb-8 mt-4" />

          <div
            className="text-gray-500 font-light "
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>
        <div className="flex-shrink-0 px-3">
          <img
            className="w-48 h-48 mt-2"
            src={episode.itunes.image}
            alt={`ART au feminin S${episode.itunes.season} E${episode.itunes.episode}`}
          />
        </div>
      </Link>
      <hr className="separator my-8" />
    </>
  )
}
