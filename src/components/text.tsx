import React, { ReactElement } from "react"

interface TextProps {
  as?:
    | "h1"
    | "h2"
    | "p"
    | "h3"
    | "h3Link"
    | "h2about"
    | "pAbout"
    | "pAuthor"
    | "h2episode"
    | "pEpisode"

  children: string | any
}

export default function Text({
  children,
  as,

  ...props
}: TextProps) {
  let classNamesVariant = ""

  if (as === "h1") {
    return (
      <h1 className="mb-0 text-gray-700 text-6xl font-merri font-bold leading-snug">
        {children}
      </h1>
    )
  }
  if (as === "h2") {
    return (
      <h2 className="font-merri text-xl text-gray-500 font-semibold mt-2 mb-0">
        {children}
      </h2>
    )
  }
  if (as === "h2about") {
    return (
      <h2 className="font-merri text-4xl text-black-500 font-semibold mt-2 mb-0 leading-relaxed">
        {children}
      </h2>
    )
  }
  if (as === "h2episode") {
    return (
      <h2 className="font-merri text-4xl text-black-400 font-semibold mt-2 mb-0 leading-none">
        {children}
      </h2>
    )
  }
  if (as === "h3") {
    return <h3 className="font-merri text-lg mt-2">{children}</h3>
  }
  if (as === "h3Link") {
    return <h3 className="font-merri text-lg text-blue-500 mt-2">{children}</h3>
  }

  if (as === "p") {
    return (
      <p className="font-merri mb-6 text-base text-gray-400 mt-2">{children}</p>
    )
  }
  if (as === "pAbout") {
    return (
      <p className="font-merri mb-6 text-xl text-gray-500 mt-2 font-thin">
        {children}
      </p>
    )
  }
  if (as === "pAuthor") {
    return (
      <p className="font-merri mb-6 text-xl text-gray-500 mt-2 font-semibold">
        {children}
      </p>
    )
  }
  if (as === "pEpisode") {
    return (
      <p className="font-merri mb-6 text-lg text-gray-500 mt-2 font-thin leading-relaxed">
        {children}
      </p>
    )
  }
}
