import React, { ReactElement } from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  heroTitle: string
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
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-col gap-8 justify-items-auto">
      <div className="justify-center flex flex-col pr-16">
        <h1 className="mb-0 text-gray-700">{heroTitle}</h1>
        {children}
      </div>
      <div className="flex justify-end">
        <StaticImage
          src="../images/logo-podcast-art-au-feminin.png/"
          alt={imageAlt}
        />
      </div>
    </div>
  )
}
