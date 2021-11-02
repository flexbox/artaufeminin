import React, { ReactElement } from "react"
import Button from "./button"

interface Props {
  title: string
  children: any
}

export default function Card({ title, children }: Props): ReactElement {
  return (
    <div className="bg-white shadow-md p-8 mb-4">
      <div className="mb-6">
        <h2 className="text-4xl text-gray-500 font-bold mt-0 mb-0">{title}</h2>
      </div>
      {children}
    </div>
  )
}
