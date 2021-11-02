import React, { ReactElement } from "react"
import Button from "./button"
import Card from "./card"

export default function SubscribeTipeee(): ReactElement {
  return (
    <Card title="Mécénat">
      <div className="">
        <p>Pour aider ART au féminin à réaliser ses futurs projets.</p>
        <div className="">
          <Button
            variant="outline"
            href="https://fr.tipeee.com/art-au-feminin"
            as="a"
          >
            Soutenir sur tipeee
          </Button>
        </div>
      </div>
    </Card>
  )
}
