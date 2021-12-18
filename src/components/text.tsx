import React from "react"

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

export default function Text({ children, as, ...props }: TextProps) {
  if (as === "h1") {
    return (
      <h1
        {...props}
        className="mb-0 text-gray-700 md:text-6xl font-merri font-bold leading-snug text-2xl"
      >
        {children}
      </h1>
    )
  }
  if (as === "h2") {
    return (
      <h2
        {...props}
        className="font-merri text-xl text-gray-500 font-semibold mt-4 mb-0"
      >
        {children}
      </h2>
    )
  }
  if (as === "h2about") {
    return (
      <h2
        {...props}
        className="font-merri text-3xl text-black-500 font-semibold mt-2 mb-0 leading-relaxed"
      >
        {children}
      </h2>
    )
  }
  if (as === "h2episode") {
    return (
      <h2
        {...props}
        className="font-merri text-4xl text-black-400 font-semibold mt-2 mb-0 leading-none"
      >
        {children}
      </h2>
    )
  }
  if (as === "h3") {
    return (
      <h3 {...props} className="font-merri text-lg mt-2">
        {children}
      </h3>
    )
  }
  if (as === "h3Link") {
    return (
      <h3 {...props} className="font-merri text-lg text-blue-500 mt-2">
        {children}
      </h3>
    )
  }

  if (as === "p") {
    return (
      <p {...props} className="font-merri mb-6 text-base text-gray-400 mt-2">
        {children}
      </p>
    )
  }
  if (as === "pAbout") {
    return (
      <p
        {...props}
        className="font-merri mb-6 text-xl text-gray-500 mt-2 font-thin"
      >
        {children}
      </p>
    )
  }
  if (as === "pAuthor") {
    return (
      <p
        {...props}
        className="font-merri mb-6 text-xl text-gray-500 mt-2 font-semibold"
      >
        {children}
      </p>
    )
  }
  if (as === "pEpisode") {
    return (
      <p
        {...props}
        className="font-merri mb-6 text-lg text-gray-500 mt-2 font-thin leading-relaxed"
      >
        {children}
      </p>
    )
  }

  return <p {...props}>{children}</p>
}
