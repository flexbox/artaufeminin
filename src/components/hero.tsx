import React, { ReactElement } from "react"
import Image, { FixedObject, FluidObject } from "gatsby-image"

interface Props {
  heroTitle: string
  imageUrlFixed?: FixedObject | FixedObject[]
  imageUrlFluid?: FluidObject | FluidObject[]
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
        <h1>{heroTitle}</h1>
        {children}
      </div>
      <div className="flex justify-end">
        {imageUrlFixed && <Image fixed={imageUrlFixed} alt={imageAlt} />}
        {imageUrlFluid && <Image fluid={imageUrlFluid} alt={imageAlt} />}
      </div>
    </div>
  )
}
