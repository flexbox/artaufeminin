import React, { ReactElement } from "react"
import Button from "./button"
import Input from "./input"
import Text from "./text"

export default function Newsletter(): ReactElement {
  return (
    <>
      <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
        Inscrivez-vous à ma newsletter
      </h3>
      <p className="mt-4 text-base text-gray-200">
        Recevez la liste des podcasts et des articles publiés directement par
        email.
      </p>

      <form
        className="mt-4 sm:flex sm:max-w-md"
        action="https://static.mailerlite.com/webforms/submit/k7i7l5"
        data-code="k7i7l5"
        method="post"
        target="_blank"
      >
        <input type="hidden" name="ml-submit" value="1" />
        <input type="hidden" name="anticsrf" value="true" />
        <label htmlFor="email-address" className="sr-only">
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
          className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-400"
          placeholder="Entrez votre adresse email"
        />
        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <Button type="submit" variant="news" style={{ minHeight: 48 }}>
            Je m'inscris
          </Button>
        </div>
      </form>
    </>
  )
}
