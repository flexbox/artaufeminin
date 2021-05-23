import React, { ReactElement } from "react"
import Card from "./card"

interface Props {}

export default function SubscribeInstagram({}: Props): ReactElement {
  return (
    <Card title="Suivre sur Instagram">
      <div className="px-8">
        <p>
          Pour encore plus d'ART au féminin. Suivez-moi ! Au plaisir d'échanger
          avec vous.
        </p>
        <div className="py-8">
          <a href="https://www.instagram.com/artaufeminin/" className="button">
            @artaufeminin
          </a>
        </div>
      </div>
    </Card>
  )
}
