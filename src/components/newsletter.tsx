import React, { ReactElement } from "react"
import Input from "./input"

export default function Newsletter(): ReactElement {
  return (
    <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
      <div className="lg:w-0 lg:flex-1">
        <h2 className="text-4xl text-gray-500 font-bold mt-0 mb-0 sm:text-4xl">
          Inscrivez-vous à ma newsletter
        </h2>
        <p className="mt-3 max-w-3xl text-xl text-gray-500 mb-0">
          Recevez la liste des podcasts et des articles publiés directement par
          email.
        </p>
      </div>
      <Input variant="rounded" />
    </div>
  )
}
