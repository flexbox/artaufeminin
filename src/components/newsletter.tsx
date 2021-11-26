import React, { ReactElement } from "react"
import Input from "./input"
import Text from "./text"

export default function Newsletter(): ReactElement {
  return (
    <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center font-merri w-1/2">
      <div className="lg:w-0 lg:flex-1">
        <Text as="h2">Inscrivez-vous à ma newsletter</Text>
        <Text as="p">
          Recevez la liste des podcasts et des articles publiés directement par
          email.
        </Text>
      </div>
      <Input variant="rounded" />
    </div>
  )
}
