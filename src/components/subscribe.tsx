import React, { Fragment, ReactElement } from "react"

import { allPodcastPlatforms } from "../pages/links"
import Button from "./button"
import Card from "./card"

export default function Subscribe(): ReactElement {
  return (
    <Card title="S’inscrire aux épisodes">
      {allPodcastPlatforms
        .filter((platform) => platform.name !== "Anchor")
        .map((platform) => (
          <Fragment key={platform.name}>
            <Button
              variant="ghost"
              as="iconpod"
              size="s"
              href={platform.url}
              url={platform.imageUrl}
              alt={`ART au feminin sur ${platform.name}`}
            >
              {platform.name}
            </Button>
          </Fragment>
        ))}
    </Card>
  )
}
