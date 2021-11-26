import React, { ReactElement } from "react"
import Button from "./button"

interface InputProps {
  children?: any
  variant?: "border" | "rounded"
}

export default function Input({
  children,
  variant,

  ...props
}: InputProps) {
  const classNamesDefault =
    "w-full px-5 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs"

  let classNamesVariant = ""
  if (variant === "border") {
    classNamesVariant =
      "w-full px-5 py-1 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs"
  }

  if (variant === "rounded") {
    classNamesVariant =
      "w-full px-5 py-1 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md"
  }
  return (
    <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
      <div className="mt-8 lg:mt-0 lg:ml-8">
        <form
          className="sm:flex"
          action="https://static.mailerlite.com/webforms/submit/k7i7l5"
          data-code="k7i7l5"
          method="post"
          target="_blank"
        >
          <input type="hidden" name="ml-submit" value="1" />
          <input type="hidden" name="anticsrf" value="true" />
          <label htmlFor="emailAddress" className="sr-only">
            Adresse email
          </label>
          <input
            id="emailAddress"
            autoComplete="email"
            required
            aria-label="email"
            aria-required="true"
            type="email"
            data-inputmask=""
            name="fields[email]"
            className={`${classNamesDefault} ${classNamesVariant}`}
            placeholder="Entrez votre adresse email"
          />
          <div className=" rounded-md shadow  sm:ml-3 sm:flex-shrink-0">
            <Button variant="solid" type="submit" size="s">
              Je m'inscris
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
