import React, { ReactElement } from "react"

interface ButtonProps {
  children: any
  variant?: "outline" | "solid" | "ghost"
  as?: string
  size?: string
}

export default function Button({
  variant = "solid",
  children,
  size,
  as,
  ...props
}: ButtonProps) {
  const classNamesDefault = "py-2 px-4 my-4 font-semibold rounded-lg"

  let classNamesVariant = " text-white   font-merri m-4 text-xs"
  let classNamesSize = ""
  if (variant === "outline") {
    classNamesVariant =
      " text-blue-500 font-merri border-blue-500 border-2 border-solid m-0 hover:border-blue-600 hover:text-blue-600"
  }

  if (variant === "solid") {
    classNamesVariant =
      "  bg-blue-500 text-white font-merri text-md m-0  hover:bg-blue-600"
  }
  if (variant === "ghost") {
    classNamesVariant =
      "bg-blue-500 text-white font-merri text-md hover:bg-blue-600 py-4 px-8"
  }
  if (size === "s") {
    classNamesSize = "py-12 px-12"
  }
  if (size === "m") {
    classNamesSize = "py-24 px-24"
  }
  if (size === "l") {
    classNamesSize = "py-48 px-48"
  }
  if (as === "a") {
    return (
      <a className={`${classNamesDefault} ${classNamesVariant}`} {...props}>
        {children}
      </a>
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
