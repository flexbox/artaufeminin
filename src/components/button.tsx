import React, { ReactElement } from "react"

interface ButtonProps {
  children: any
  variant: "outline" | "solid" | "large"
  as?: string
}

export default function Button({
  variant,
  children,
  as,
  ...props
}: ButtonProps) {
  const classNamesDefault = "py-2 px-4  font-semibold rounded-lg shadow-md"

  let classNamesVariant = " text-white   font-merri m-4 text-xs"
  if (variant === "outline") {
    classNamesVariant =
      " text-blue-500 font-merri border-blue-500 border-2 border-solid m-4 hover:border-blue-600 hover:text-blue-600"
  }

  if (variant === "solid") {
    classNamesVariant =
      "  bg-blue-500 text-white font-merri text-md m-4  hover:bg-blue-600"
  }
  if (variant === "large") {
    classNamesVariant =
      "bg-blue-500 text-white font-merri text-md hover:bg-blue-600 py-4 px-8"
  }
  if (as === "a") {
    return (
      <a className={`${classNamesDefault} ${classNamesVariant}`} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={`${classNamesDefault} ${classNamesVariant}`}>
      {children}
    </button>
  )
}
