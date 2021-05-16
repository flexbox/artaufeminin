import React, { ReactElement } from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

interface Props {
  heroTitle: string
  imageUrlFixed?: IGatsbyImageData
  imageUrlFluid?: IGatsbyImageData
  imageAlt: string
  children?: ReactElement
}

export default function Hero({
  heroTitle,
  imageUrlFixed,
  imageUrlFluid,
  imageAlt,
  children,
}: Props): ReactElement {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-col gap-8 justify-items-auto">
      <div className="justify-center flex flex-col pr-16">
        <h1 className="mb-0 text-gray-700">{heroTitle}</h1>
        {children}
      </div>
      <div className="flex justify-end">
        {imageUrlFixed && <GatsbyImage image={imageUrlFixed} alt={imageAlt} />}
        {imageUrlFluid && <GatsbyImage image={imageUrlFluid} alt={imageAlt} />}
      </div>
    </div>
  )
}
