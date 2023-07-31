import { Link } from "gatsby"
import React, { useMemo } from "react"
import Text from "./text"
import { useAudioPlayer } from "./player/AudioProvider"
import { PlayButton } from "./player/PlayButton"
import { AudioPlayer } from "./player/AudioPlayer"

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
  let audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: {
        src: episode.enclosure.url,
        type: "audio/mpeg",
      },
      link: `/${episode.guid}`,
    }),
    [episode]
  )
  let player = useAudioPlayer(audioPlayerData)

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
      <div className="flex items-center">
        <PlayButton player={player} size="small" />
        <Text className="ml-4 text-slate-500 font-merri">Écouter</Text>
      </div>
      <hr className="separator my-8" />
    </>
  )
}
