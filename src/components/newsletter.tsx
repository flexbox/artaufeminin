import React, { ReactElement } from 'react';

export default function Newsletter(): ReactElement {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">
        Newsletter
      </h3>
      <p className="mt-4 font-display text-xl font-light italic text-white/90 leading-snug">
        Recevez les épisodes et articles directement par email.
      </p>

      <form
        className="mt-6"
        action="https://assets.mailerlite.com/jsonp/334411/forms/96016714913810040/subscribe"
        data-code=""
        method="post"
        target="_blank"
      >
        <input type="hidden" name="ml-submit" value="1" />
        <input type="hidden" name="anticsrf" value="true" />
        <label htmlFor="email-address" className="sr-only">
          Adresse email
        </label>

        <div className="flex gap-0">
          <input
            id="emailAddress"
            autoComplete="email"
            required
            aria-label="email"
            aria-required="true"
            type="email"
            data-inputmask=""
            name="fields[email]"
            className="min-w-0 flex-1 rounded-l-full border border-white/30 bg-white/20 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:bg-white/30 focus:outline-none transition-colors"
            placeholder="votre@email.fr"
          />
          <button
            type="submit"
            className="rounded-r-full border border-white/20 border-l-0 bg-clay-500 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-clay-700"
          >
            →
          </button>
        </div>
      </form>
    </div>
  );
}
