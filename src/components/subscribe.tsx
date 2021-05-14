import React, { ReactElement } from "react"
import { allPodcastPlatforms } from "../pages/links"
import Card from "./card"

export default function Subscribe(): ReactElement {
  return (
    <Card title="S’inscrire aux épisodes">
      {allPodcastPlatforms
        .filter((platform) => platform.name !== "Anchor")
        .map((platform) => (
          <a href={platform.url} className="text-black">
            <div
              key={platform.name}
              className="flex px-4 py-4 sm:px-6 items-center"
            >
              <img
                src={platform.imageUrl}
                alt={`ART au feminin sur ${platform.name}`}
                className="w-16 h-16 mr-4"
              />
              {platform.name}
            </div>
          </a>
        ))}
    </Card>
  )
}
