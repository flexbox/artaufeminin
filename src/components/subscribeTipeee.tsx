import React, { ReactElement } from "react"
import Button from "./button"
import Card from "./card"
import Text from "./text"

export default function SubscribeTipeee(): ReactElement {
  return (
    <Card title="Mécénat">
      <div className="">
        <Text as="p">
          Pour aider ART au féminin à réaliser ses futurs projets.
        </Text>
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
