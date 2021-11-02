import React, { ButtonHTMLAttributes, ReactElement } from "react"
import ApplePodcastIcon from "./applePodacstIcon"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any
  variant?: "outline" | "solid" | "ghost"
  as?: string
  size?: string
  href?: string
}

export default function Button({
  variant = "solid",
  children,
  size,
  as,
  href,
  ...props
}: ButtonProps) {
  const classNamesDefault = "py-2 px-4  font-semibold rounded-lg no-underline"

  let classNamesVariant = " text-white   font-merri m-4 text-xs no-underline"
  let classNamesSize = ""
  if (variant === "outline") {
    classNamesVariant =
      "hover:no-underline text-blue-500 font-merri border-blue-500 border-2 border-solid m-0 hover:border-blue-600 hover:text-blue-600"
  }

  if (variant === "solid") {
    classNamesVariant =
      "no-underline  bg-blue-500 text-white font-merri text-md m-0  hover:bg-blue-600"
  }
  if (variant === "ghost") {
    classNamesVariant =
      "no-underline bg-blue-500 text-white font-merri text-md hover:bg-blue-600 py-4 px-8"
  }
  if (size === "s") {
    classNamesSize = "py-4 px-4"
  }
  if (size === "m") {
    classNamesSize = "py-5 px-5"
  }
  if (size === "l") {
    classNamesSize = "py-6 px-6"
  }
  if (as === "a") {
    return (
      <a
        href={`${href}`}
        className={`${classNamesDefault} ${classNamesVariant}`}
        {...props}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
  if (as === "icon") {
    return (
      <>
        <a href={`${href}`} target="_blank" rel="noopener noreferrer">
          <ApplePodcastIcon
            className={`${classNamesDefault} ${classNamesVariant}`}
            {...props}
            style={{ height: 50 }}
          />
          {children}
        </a>
      </>
    )
  }
  return (
    <button
      className={`${classNamesDefault} ${classNamesVariant} ${classNamesSize}`}
    >
      {children}
    </button>
  )
}
