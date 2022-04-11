import React, { ReactElement } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Text from "./text"

interface HeroProps {
  children?: ReactElement
  heroTitle: string
}

export default function Hero({ children, heroTitle }: HeroProps): ReactElement {
  return (
    <div className="justify-items-auto grid grid-cols-1 gap-8 sm:grid-flow-col sm:grid-cols-2">
      <div className="flex flex-col justify-center">
        <Text as="h1">{heroTitle}</Text>
        {children}
      </div>
      <div className="flex w-full justify-end md:w-5/6">
        <StaticImage
          src="../images/logo-podcast-art-au-feminin.png"
          alt="Logo podcast ART au feminin"
        />
      </div>
    </div>
  )
}
