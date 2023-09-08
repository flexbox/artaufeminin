import React, { ReactElement } from "react"

import Button from "./button"
import Card from "./card"
import Text from "./text"

interface Props {}

export default function SubscribeInstagram({}: Props): ReactElement {
  return (
    <Card title="Suivre sur Instagram">
      <div className="">
        <Text as="p">
          Pour encore plus d'ART au féminin. Suivez-moi ! Au plaisir d'échanger
          avec vous.
        </Text>
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
