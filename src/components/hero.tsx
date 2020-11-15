import React, { ReactElement } from "react"
import Image, { FixedObject } from "gatsby-image"

interface Props {
  heroTitle: string
  imageUrl: FixedObject | FixedObject[]
  imageAlt: string
  children?: ReactElement
}

export default function Hero({
  heroTitle,
  imageUrl,
  imageAlt,
  children,
}: Props): ReactElement {
  return (
    <div className="grid grid-flow-col grid-col-2 gap-4 justify-items-auto">
      <div className="justify-center flex flex-col">
        <h1>{heroTitle}</h1>
        {children}
      </div>
      <div className="justify-center items-center">
        <Image fixed={imageUrl} alt={imageAlt} />
      </div>
    </div>
  )
}
