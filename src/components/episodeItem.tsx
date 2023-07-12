import { Link } from "gatsby"
import React from "react"
import Text from "./text"

interface EpisodeItemProps {
  isSummaryTruncate?: boolean
  withPlayer?: boolean
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
  withPlayer = true,
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
        className="article-preview flex flex-col hover:no-underline md:flex-row"
      >
        <div className="flex-1">
          <Text as="h3Link">{episode.title}</Text>
          {withPlayer && (
            <audio controls src={audioSrc} className="mb-8 mt-4" />
          )}

          <div
            className="font-light text-gray-500 "
            dangerouslySetInnerHTML={{ __html: summary }}
          />
        </div>
        <div className="hidden flex-shrink-0 px-3 sm:flex">
          <img
            className="mt-2 h-48 w-48"
            src={episode.itunes.image}
            alt={`ART au feminin S${episode.itunes.season} E${episode.itunes.episode}`}
          />
        </div>
      </Link>
      <hr className="separator my-8" />
    </>
  )
}
