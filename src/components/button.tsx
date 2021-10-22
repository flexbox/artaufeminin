import React, { ReactElement } from "react"

interface ButtonProps {
  children: any
  variant: "ghost" | "outline" | "solid"
}

export default function Button({ variant, children }: ButtonProps) {
  const classNamesDefault = "py-2 px-4  font-semibold rounded-lg shadow-md"

  let classNamesVariant =
    "bg-indigo-500 text-white  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 font-merri "
  if (variant === "ghost") {
    classNamesVariant = "text-blue-500 font-merri"
  }
  if (variant === "outline") {
    classNamesVariant = "text-blue-500"
  }
  if (variant === "solid") {
    classNamesVariant = "bg-blue-500 text-white font-merri"
  }

  return (
    <button className={`${classNamesDefault} ${classNamesVariant}`}>
      {children}
    </button>
  )
}
