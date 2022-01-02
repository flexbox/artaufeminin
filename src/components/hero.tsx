import React, { ReactElement } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Text from "./text"

interface HeroProps {
  children?: ReactElement
  heroTitle: string
}

export default function Hero({ children, heroTitle }: HeroProps): ReactElement {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-col gap-8 justify-items-auto">
      <div className="justify-center flex flex-col">
        <Text as="h1">{heroTitle}</Text>
        {children}
      </div>
      <div className="flex justify-end md:w-5/6 w-full">
        <StaticImage
          src="../images/logo-podcast-art-au-feminin.png"
          alt="Logo podcast ART au feminin"
        />
      </div>
    </div>
  )
}
