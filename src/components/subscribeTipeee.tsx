import React, { ReactElement } from "react"
import Card from "./card"

export default function SubscribeTipeee(): ReactElement {
  return (
    <Card title="Mécénat">
      <div className="px-8">
        <p>
          Ces emissions sont possibles grâce à la générosité de nos auditeurs.
          Si vous avez trouvé notre podcast utile ou divertissant, pensez à
          soutenir directement en devenant mécène.
        </p>
        <div className="py-8">
          <a href="https://fr.tipeee.com/art-au-feminin" className="button">
            Soutenir sur tipeee
          </a>
        </div>
      </div>
    </Card>
  )
}
