import React, { ReactElement } from "react"
import Button from "./button"

export default function Newsletter(): ReactElement {
  return (
    <>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        Inscrivez-vous à ma newsletter
      </h3>
      <p className="mt-4 text-base text-gray-200">
        Recevez la liste des podcasts et des articles publiés directement par
        email.
      </p>

      <form
        className="mt-4 sm:flex sm:max-w-md"
        action="https://dashboard.mailerlite.com/forms/334411/96016714913810040/share"
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
          className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-blue-500"
          placeholder="Entrez votre adresse email"
        />
        <div className="mt-3 rounded-md sm:ml-3 sm:mt-0 sm:flex-shrink-0">
          <Button type="submit" variant="news" style={{ minHeight: 48 }}>
            Je m'inscris
          </Button>
        </div>
      </form>
    </>
  )
}
