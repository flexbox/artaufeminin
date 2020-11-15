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
    <div className="grid grid-flow-col grid-col-2 gap-8 justify-items-auto">
      <div className="justify-center flex flex-col pr-16">
        <h1>{heroTitle}</h1>
        {children}
      </div>
      <div className="justify-center items-center">
        {imageUrlFixed && <Image fixed={imageUrlFixed} alt={imageAlt} />}
        {imageUrlFluid && <Image fluid={imageUrlFluid} alt={imageAlt} />}
      </div>
    </div>
  )
}
