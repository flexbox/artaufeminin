import React, { ReactElement } from "react"
import Button from "./button"
import Text from "./text"

interface Props {
  title: string
  children: any
}

export default function Card({ title, children }: Props): ReactElement {
  return (
    <div className="bg-white shadow-md py-6 px-4 mb-4">
      <div className="mb-6">
        <Text as="h2">{title}</Text>
      </div>
      {children}
    </div>
  )
}
