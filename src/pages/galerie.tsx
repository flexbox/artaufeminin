import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

import SEO from '../components/seo';

export default function GaleriePage(): ReactElement {
  return (
    <div className="min-h-screen bg-stone-900">

      {/* ── LOGO ─────────────────────────────────────────────────── */}
      <div className="flex justify-center pt-10">
        <Link
          to="/"
          className="font-display text-xl font-semibold tracking-tight text-white/60 transition-colors hover:text-white"
        >
          ART <span className="italic font-light">au féminin</span>
        </Link>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <main className="mx-auto max-w-2xl px-6 py-16 text-center lg:py-24">

        {/* Visuel orbital */}
        <div className="mb-12 flex justify-center">
          <div className="relative flex items-center justify-center" style={{ width: 180, height: 180 }}>
            <div className="absolute size-44 rounded-full border border-white/5" />
            <div className="absolute size-36 rounded-full border border-white/8" />
            <div className="absolute size-24 rounded-full border border-clay-500/25" />
            <div className="relative flex size-14 items-center justify-center rounded-full border border-clay-500/50 bg-stone-800">
              <span className="font-display text-2xl font-light italic text-clay-300">✦</span>
            </div>
            {[0,1,2,3,4,5,6,7].map((i) => {
              const angle = (i / 8) * 360;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * 72;
              const y = Math.sin(rad) * 72;
              return (
                <div key={i} className="absolute size-1.5 rounded-full bg-clay-400/60"
                  style={{ transform: `translate(${x}px, ${y}px)` }} />
              );
            })}
          </div>
        </div>

        {/* Eyebrow */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-clay-400">
          Bientôt disponible · Première exposition
        </p>

        {/* Titre principal */}
        <h1 className="font-display text-5xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
          Galerie{' '}
          <span className="italic font-light text-clay-300">ART au féminin</span>
        </h1>

        {/* Sous-titre exposition */}
        <p className="mt-4 font-display text-2xl font-light italic text-stone-400 md:text-3xl">
          « Sororité »
        </p>

        {/* Description courte */}
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-stone-400">
          Une galerie d'art immersive en 3D dédiée aux femmes artistes.
          Une vingtaine d'artistes réunies autour du thème de la sororité.
        </p>

        {/* Séparateur */}
        <div className="mx-auto my-10 w-12 border-t border-clay-700" />

        {/* Proposition de valeur */}
        <p className="mx-auto mb-8 max-w-sm text-sm font-semibold leading-relaxed text-stone-300">
          Laissez votre email pour recevoir la date d'ouverture
          en avant-première et les coulisses du projet.
        </p>

        {/* ── FORMULAIRE ───────────────────────────────────────────── */}
        <form
          action="https://assets.mailerlite.com/jsonp/334411/forms/96016714913810040/subscribe"
          method="post"
          target="_blank"
          className="mx-auto max-w-sm"
        >
          <input type="hidden" name="ml-submit" value="1" />
          <input type="hidden" name="anticsrf" value="true" />

          <div className="flex flex-col gap-3">
            <input
              type="email"
              name="fields[email]"
              autoComplete="email"
              required
              aria-required="true"
              placeholder="votre@email.fr"
              className="w-full rounded-sm border border-stone-700 bg-stone-800 px-5 py-4 text-sm text-white placeholder:text-stone-500 focus:border-clay-500 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full rounded-sm bg-clay-500 px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-clay-700"
            >
              Je veux être informée en avant-première →
            </button>
          </div>

          <p className="mt-4 text-xs text-stone-600">
            Pas de spam · Désabonnement à tout moment
          </p>
        </form>

        {/* Bénéfices */}
        <div className="mx-auto mt-12 grid max-w-sm grid-cols-3 gap-4 text-center">
          {[
            { value: '~20', label: 'artistes' },
            { value: '3D', label: 'immersif' },
            { value: '100%', label: 'gratuit' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-2xl font-semibold text-clay-300">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-stone-500">{label}</p>
            </div>
          ))}
        </div>

      </main>

      {/* ── PIED ─────────────────────────────────────────────────── */}
      <footer className="pb-10 text-center">
        <p className="text-xs text-stone-700">
          © {new Date().getFullYear()} ART au féminin ·{' '}
          <Link to="/" className="text-stone-600 transition-colors hover:text-stone-400">
            Retour au site
          </Link>
        </p>
      </footer>

    </div>
  );
}

export const Head = () => (
  <SEO
    title="Galerie ART au féminin — Exposition « Sororité » bientôt disponible"
    description="Une galerie d'art immersive en 3D dédiée aux femmes artistes. Première exposition : Sororité, ~20 artistes. Inscrivez-vous pour recevoir la date d'ouverture en avant-première."
  />
);
