import React, { ReactElement } from "react"
import Button from "./button"

export default function Newsletter(): ReactElement {
  return (
    <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
      <div className="lg:w-0 lg:flex-1">
        <h2 className="text-4xl text-gray-500 font-bold mt-0 mb-0 sm:text-4xl">
          Inscrivez-vous à ma newsletter
        </h2>
        <p className="mt-3 max-w-3xl text-xl text-gray-500 mb-0">
          Recevez la liste des podcasts et des articles publiés directement par
          email.
        </p>
      </div>
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
            className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md"
            placeholder="Entrez votre adresse email"
          />
          <div className=" rounded-md shadow  sm:ml-3 sm:flex-shrink-0">
            <Button variant="solid" type="submit">
              Je m'inscris
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
