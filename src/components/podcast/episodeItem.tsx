import React from "react"

import { dutationToString } from "../../utils/dutationToString"

interface EpisodeItemProps {
  episode: {
    id: string
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

export default function EpisodeItem({ episode }: EpisodeItemProps) {
  const duration = dutationToString(episode.itunes.duration)
  const summary = episode.itunes.summary.substring(0, 250)
  const audioSrc = episode.enclosure.url

  return (
    <div key={episode.id}>
      <div className="flex">
        <div className="flex-1 px-6">
          <h3 className="text-3xl text-gray-700 font-bold mt-0">
            {episode.title}
          </h3>
          <audio controls src={audioSrc} className="mb-8"></audio>
          <div dangerouslySetInnerHTML={{ __html: `${summary}…` }} />
          <p className="text-gray-500">
            <em>Saison {episode.itunes.season}</em>
            <span className="mx-4">•</span>
            <em>Épisode {episode.itunes.episode}</em>
            <span className="mx-4">•</span>
            <em>{duration}</em>
          </p>
        </div>
        <div className="flex-none">
          <img
            className="w-48 h-48"
            src={episode.itunes.image}
            alt={`ART au feminin S${episode.itunes.season} E${episode.itunes.episode}`}
          />
        </div>
      </div>
      <hr />
    </div>
  )
}
