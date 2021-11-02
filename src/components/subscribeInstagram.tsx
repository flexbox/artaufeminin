import React, { ReactElement } from "react"
import Button from "./button"
import Card from "./card"

interface Props {}

export default function SubscribeInstagram({}: Props): ReactElement {
  return (
    <Card title="Suivre sur Instagram">
      <div className="">
        <p>
          Pour encore plus d'ART au féminin. Suivez-moi ! Au plaisir d'échanger
          avec vous.
        </p>

        <Button
          variant="outline"
          href="https://www.instagram.com/artaufeminin/"
          as="a"
        >
          @artaufeminin
        </Button>
      </div>
    </Card>
  )
}
