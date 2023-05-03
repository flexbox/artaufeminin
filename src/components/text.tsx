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

export default function Text({
  children,
  as,
  className = "",
  ...props
}: TextProps) {
  if (as === "h1") {
    return (
      <h1
        {...props}
        className={`text-3xl font-bold tracking-tight text-gray-700 md:text-6xl ${className}`}
      >
        {children}
      </h1>
    )
  }
  if (as === "h2") {
    return (
      <h2
        {...props}
        className={`text-2xl font-bold leading-snug text-gray-700 md:text-3xl ${className}`}
      >
        {children}
      </h2>
    )
  }
  if (as === "h2about") {
    return (
      <h2
        {...props}
        className={`mb-0 mt-2 text-2xl font-bold leading-snug text-gray-700 ${className}`}
      >
        {children}
      </h2>
    )
  }
  if (as === "h2episode") {
    return (
      <h2
        {...props}
        className={`mb-0 mt-2 text-2xl font-bold leading-snug text-gray-700 ${className}`}
      >
        {children}
      </h2>
    )
  }
  if (as === "h3") {
    return (
      <h3 {...props} className={`mt-2 text-lg ${className}`}>
        {children}
      </h3>
    )
  }
  if (as === "h3Link") {
    return (
      <h3
        {...props}
        className={`mb-4 text-lg font-bold text-blue-500 ${className}`}
      >
        {children}
      </h3>
    )
  }
  if (as === "p") {
    return (
      <p
        {...props}
        className={`mb-6 text-xl text-gray-500 sm:text-base ${className}`}
      >
        {children}
      </p>
    )
  }
  if (as === "pAbout") {
    return (
      <p {...props} className={`mb-6 mt-2 text-xl text-gray-500 ${className}`}>
        {children}
      </p>
    )
  }
  if (as === "pEpisode") {
    return (
      <p
        {...props}
        className={`mb-6 mt-2 text-lg font-thin leading-relaxed text-gray-500 ${className}`}
      >
        {children}
      </p>
    )
  }

  return (
    <p {...props} className={className}>
      {children}
    </p>
  )
}
