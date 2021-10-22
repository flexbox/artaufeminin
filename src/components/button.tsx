import React, { ReactElement } from "react"

interface ButtonProps {
  children: any
  variant: "ghost" | "outline" | "solid"
}

export default function Button({ variant, children }: ButtonProps) {
  console.log("🚀 ~ file: button.tsx ~ line 10 ~ Button ~ variant", variant)
  let classNames = "button primary"
  if (variant === "ghost") {
    classNames = "bg-red-500"
  }

  return <button className={classNames}>{children}</button>
}
