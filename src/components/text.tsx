import React, { ReactElement } from "react"

interface TextProps {
  as?: "h1" | "h2" | "p" | "h3"
  children: string
}

export default function Text({
  children,
  as,

  ...props
}: TextProps) {
  let classNamesVariant = ""

  if (as === "h1") {
    classNamesVariant =
      "mb-0 text-gray-700 text-6xl font-merri font-bold leading-snug"
  }
  if (as === "h2") {
    classNamesVariant =
      "font-merri text-xl text-gray-500 font-semibold mt-0 mb-0"
  }
  if (as === "h3") {
    classNamesVariant = "font-merri text-lg"
  }

  if (as === "p") {
    classNamesVariant = "font-merri mb-6 text-base"
  }
  return <div className={` ${classNamesVariant}`}>{children}</div>
}
