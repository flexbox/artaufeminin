import React, { ReactElement } from "react"
import Card from "./card"

export default function SubscribeTipeee(): ReactElement {
  return (
    <Card title="Mécénat">
      <div className="px-8">
        <p>Pour aider ART au féminin à réaliser ses futurs projets.</p>
        <div className="py-8">
          <a href="https://fr.tipeee.com/art-au-feminin" className="button">
            Soutenir sur tipeee
          </a>
        </div>
      </div>
    </Card>
  )
}
