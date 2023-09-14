import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid"
import { type VariantProps, cva } from "class-variance-authority"
import { Link } from "gatsby"
import React from "react"

import Text from "./text"

export const heroCardVariants = cva(["primary"], {
  variants: {
    size: {
      md: ["bg-cover", "bg-center", "h-52", "md:h-1/2", "overflow-hidden"],
      lg: ["flex-1", "mb-4", "md:mb-0", "h-52", "md:h-full", "overflow-hidden"],
    },
  },

  defaultVariants: {
    size: "lg",
  },
})

export interface HeroCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroCardVariants> {
  heroLink: string
  imageUrl: string
  heroTitle: string
}

export const HeroCard: React.FC<HeroCardProps> = ({
  className,
  imageUrl,
  size,
  heroLink,
  heroTitle,
  ...rest
}) => {
  const textStyle =
    "text-white bg-black items-end flex  mb-6 mx-auto p-2 w-5/6 text-left"
  const imgStyle =
    "bg-cover bg-center h-full ease-in-out transition-all duration-300 flex items-end bg-no-repeat hover:scale-105 overflow-hidden"
  return (
    <div className={heroCardVariants({ className, size })}>
      <Link to={heroLink}>
        <div
          className={imgStyle}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <Text as="h3" className={textStyle}>
            {heroTitle}
          </Text>
        </div>
      </Link>
    </div>
  )
}

export default HeroCard
