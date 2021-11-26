import React, { ReactElement } from "react"

interface TextProps {
  as?: "h1" | "h2" | "p" | "h3" | "h3Link" | "h2about" | "pAbout" | "pAuthor"

  children: string | any
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
      "font-merri text-xl text-gray-500 font-semibold mt-2 mb-0"
  }
  if (as === "h2about") {
    classNamesVariant =
      "font-merri text-4xl text-black-500 font-semibold mt-2 mb-0 leading-relaxed"
  }
  if (as === "h3") {
    classNamesVariant = "font-merri text-lg mt-2"
  }
  if (as === "h3Link") {
    classNamesVariant = "font-merri text-lg text-blue-500 mt-2"
  }

  if (as === "p") {
    classNamesVariant = "font-merri mb-6 text-base text-gray-400 mt-2"
  }
  if (as === "pAbout") {
    classNamesVariant = "font-merri mb-6 text-xl text-gray-500 mt-2 font-thin"
  }
  if (as === "pAuthor") {
    classNamesVariant =
      "font-merri mb-6 text-xl text-gray-500 mt-2 font-semibold"
  }

  return <div className={` ${classNamesVariant}`}>{children}</div>
}
