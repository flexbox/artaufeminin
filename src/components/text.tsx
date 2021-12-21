import React, { HTMLAttributes } from "react"

interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string | any
  className?: string
  as?:
    | "h1"
    | "h2"
    | "h2about"
    | "h2episode"
    | "h3"
    | "h3Link"
    | "p"
    | "pAbout"
    | "pEpisode"
}

export default function Text({ children, as, className, ...props }: TextProps) {
  if (as === "h1") {
    return (
      <h1
        {...props}
        className={`text-gray-700 md:text-6xl font-bold leading-snug text-3xl tracking-tight ${className}`}
      >
        {children}
      </h1>
    )
  }
  if (as === "h2") {
    return (
      <h2
        {...props}
        className="text-gray-700 md:text-4xl font-bold mt-4 leading-snug text-2xl"
      >
        {children}
      </h2>
    )
  }
  if (as === "h2about") {
    return (
      <h2
        {...props}
        className="text-gray-700 font-bold mt-2 mb-0 leading-snug text-2xl"
      >
        {children}
      </h2>
    )
  }
  if (as === "h2episode") {
    return (
      <h2
        {...props}
        className="text-gray-700 font-bold mt-2 mb-0 leading-snug text-2xl"
      >
        {children}
      </h2>
    )
  }
  if (as === "h3") {
    return (
      <h3 {...props} className="text-lg mt-2">
        {children}
      </h3>
    )
  }
  if (as === "h3Link") {
    return (
      <h3 {...props} className="text-lg text-blue-500 mt-2">
        {children}
      </h3>
    )
  }

  if (as === "p") {
    return (
      <p {...props} className="mb-6 text-xl sm:text-base text-gray-500">
        {children}
      </p>
    )
  }
  if (as === "pAbout") {
    return (
      <p {...props} className="mb-6 text-xl text-gray-500 mt-2">
        {children}
      </p>
    )
  }
  if (as === "pEpisode") {
    return (
      <p
        {...props}
        className="mb-6 text-lg text-gray-500 mt-2 font-thin leading-relaxed"
      >
        {children}
      </p>
    )
  }

  return <p {...props}>{children}</p>
}
