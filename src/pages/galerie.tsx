import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

import SEO from '../components/seo';

export default function GaleriePage(): ReactElement {
  return (
    <div className="min-h-screen bg-stone-950 text-white">

      {/* ── SQUEEZE PAGE — zéro navigation, objectif unique : l'email ── */}

      <main className="mx-auto max-w-xl px-6 py-20 lg:py-28">

        {/* Eyebrow */}
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-clay-400">
          Galerie ART au féminin · Exposition « Sororité »
        </p>

        {/* Titre principal */}
        <h1 className="text-center font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Découvrez les artistes{' '}
          <span className="italic font-light text-clay-300">avant tout le monde</span>
        </h1>

        {/* Sous-titre */}
        <p className="mx-auto mt-6 max-w-md text-center text-base leading-relaxed text-stone-400">
          Je prépare une galerie d'art immersive en 3D autour du thème de la <strong className="text-stone-300 font-medium">Sororité</strong> — une vingtaine de femmes artistes réunies dans un espace numérique unique.
        </p>

        {/* Lead magnet — ce qu'ils reçoivent */}
        <div className="mt-12 rounded-sm border border-clay-700/50 bg-stone-900 p-8">

          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-clay-400">
            Votre cadeau gratuit
          </p>
          <h2 className="font-display text-2xl font-semibold text-white lg:text-3xl">
            Le catalogue complet{' '}
            <span className="italic font-light text-clay-300">de l'exposition</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-400">
            En laissant votre email, vous recevez en avant-première le catalogue de l'exposition — toutes les artistes, leur univers, leur œuvre, et ce qui les relie autour du thème de la Sororité.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Le portrait de chacune des ~20 artistes de l'exposition",
              "La date d'ouverture de la galerie en avant-première",
              "Les coulisses de la création de l'exposition 3D",
              "Un accès VIP dès le jour J — avant le grand public",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-stone-300">
                <span className="mt-0.5 shrink-0 text-clay-400">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Formulaire */}
        <form
          action="https://assets.mailerlite.com/jsonp/334411/forms/96016714913810040/subscribe"
          method="post"
          target="_blank"
          className="mt-8"
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
              Oui, je veux découvrir les artistes en avant-première →
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-stone-600">
            Pas de spam · Désabonnement à tout moment · Par Aldjia Boughias
          </p>
        </form>

      </main>

      <footer className="pb-10 text-center">
        <Link to="/" className="text-xs text-stone-700 transition-colors hover:text-stone-500">
          Revenir au site →
        </Link>
      </footer>

    </div>
  );
}

export const Head = () => (
  <SEO
    title="Galerie ART au féminin — Découvrez les artistes en avant-première"
    description="Une galerie d'art immersive en 3D dédiée aux femmes artistes. Première exposition : Sororité, ~20 artistes. Recevez 3 portraits exclusifs d'artistes en vous inscrivant."
  />
);
