import React, { ReactElement } from "react"

interface ButtonProps {
  children: any
  variant: "ghost" | "solid"
}

export default function Button({ variant, children }: ButtonProps) {
  const classNamesDefault = "py-2 px-4  font-semibold rounded-lg shadow-md"

  let classNamesVariant = " text-white   font-merri m-4 text-xs"
  if (variant === "ghost") {
    classNamesVariant =
      "text-blue-500 font-merri border-blue-500 border-2 border-solid m-4 hover:border-blue-600 hover:text-blue-600"
  }

  if (variant === "solid") {
    classNamesVariant =
      "bg-blue-500 text-white font-merri text-md m-4 p-4 hover:bg-blue-600"
  }

  return (
    <button className={`${classNamesDefault} ${classNamesVariant}`}>
      {children}
    </button>
  )
}
