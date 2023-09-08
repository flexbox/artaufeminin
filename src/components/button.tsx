import React, { ButtonHTMLAttributes } from "react"

import { ApplePodcastIcon } from "./applePodcastIcon"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: any
  variant?: "outline" | "solid" | "ghost" | "news"
  as?: string
  size?: string
  href?: string
  url?: string
  alt?: string
  key?: string
}

export default function Button({
  variant = "solid",
  children,
  size,
  as,
  href,
  url,
  alt,
  key,
  ...props
}: ButtonProps) {
  const classNamesDefault = "py-2 px-4 font-semibold rounded-lg leading-none"

  let classNamesVariant = "text-white m-4 text-xs "
  let classNamesSize = ""

  if (variant === "outline") {
    classNamesVariant =
      "no-underline text-blue-500 border-blue-500 border-2 border-solid m-0 hover:border-blue-600 hover:text-blue-600"
  }
  if (variant === "solid") {
    classNamesVariant =
      "no-underline  bg-blue-500 text-white text-md m-0  hover:bg-blue-600 mt-2 sm:mt-0 md:m-0"
  }
  if (variant === "news") {
    classNamesVariant =
      "no-underline  bg-blue-500 text-white text-md m-0  hover:bg-blue-600 w-full mt-2 sm:mt-0 md:m-0"
  }
  if (variant === "ghost") {
    classNamesVariant = "flex text-black-900 text-md  py-4 px-8"
  }
  if (size === "s") {
    classNamesSize = "py-4 px-4"
  }
  if (size === "m") {
    classNamesSize = "py-5 px-5 "
  }
  if (size === "l") {
    classNamesSize = "py-6 px-6"
  }
  if (as === "a") {
    return (
      <a
        href={href}
        className={`${classNamesDefault} ${classNamesVariant}`}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }
  if (as === "iconpod") {
    return (
      <a
        {...props}
        href={`${href}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${classNamesDefault} hover:text-blue-500`}
        key={key}
      >
        <div className="flex items-center">
          <img src={url} alt={alt} className="mr-4 h-10 w-10" />
          {children}
        </div>
      </a>
    )
  }
  if (as === "icon") {
    return (
      <a {...props} href={href} target="_blank" rel="noopener noreferrer">
        <ApplePodcastIcon
          className={`${classNamesDefault} ${classNamesVariant}`}
          {...props}
          style={{ height: 57 }}
        />
        {children}
      </a>
    )
  }
  return (
    <button
      {...props}
      className={`${classNamesDefault} ${classNamesVariant} ${classNamesSize}`}
    >
      {children}
    </button>
  )
}
