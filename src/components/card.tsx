import React, { ReactElement } from "react"

interface Props {
  title: string
  children: any
}

export default function Card({ title, children }: Props): ReactElement {
  return (
    <div className="bg-white shadow-md mb-12">
      <div className="p-6">
        <h2 className="text-4xl text-gray-500 font-bold mt-0 mb-0">{title}</h2>
      </div>
      {children}
    </div>
  )
}
