import React, { ReactElement, ReactNode } from "react"
import Text from "./text"

interface CardProps {
  title: string
  children: ReactNode
}

export default function Card({ title, children }: CardProps): ReactElement {
  return (
    <div className="bg-white drop-shadow-md py-6 px-4 mb-12 rounded-md">
      <div className="mb-6">
        <Text as="h2">{title}</Text>
      </div>
      {children}
    </div>
  )
}
