import React, { ReactElement } from "react"
import Input from "./input"
import Text from "./text"

export default function Newsletter(): ReactElement {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl m-auto lg:items-center md:w-1/2 w-full">
        <div className="m-auto text-center lg:flex-1">
          <Text as="h2">Inscrivez-vous à ma newsletter</Text>
          <Text as="p">
            Recevez la liste des podcasts et des articles publiés directement
            par email.
          </Text>
        </div>
        <Input variant="rounded" />
      </div>
    </section>
  )
}
