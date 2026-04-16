import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function NewsletterPage(): ReactElement {
  return (
    <Layout withInstagram={false}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="-mx-4 -mt-12 border-b border-clay-200 bg-cream-100">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-clay-500">
            Newsletter
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-stone-900 md:text-5xl lg:text-6xl">
            L'art au féminin<br />
            <span className="italic font-light">dans votre boîte mail</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-stone-500">
            Recevez les nouveaux épisodes, articles, chroniques de livres et les
            actualités de la Galerie ART au féminin directement par email.
            Pas de spam — uniquement du contenu sur les femmes artistes.
          </p>
        </div>
      </section>

      {/* ── FORMULAIRE ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-xl px-6 py-16 lg:px-0">
        <form
          action="https://assets.mailerlite.com/jsonp/334411/forms/96016714913810040/subscribe"
          data-code=""
          method="post"
          target="_blank"
          className="rounded-sm border border-clay-200 bg-cream-50 p-8"
        >
          <input type="hidden" name="ml-submit" value="1" />
          <input type="hidden" name="anticsrf" value="true" />

          <h2 className="mb-1 font-display text-2xl font-semibold text-stone-900">
            S'abonner gratuitement
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-stone-500">
            Rejoignez les abonnées qui reçoivent la newsletter d'ART au féminin.
          </p>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold uppercase tracking-widest text-stone-600"
              >
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                name="fields[email]"
                autoComplete="email"
                required
                aria-required="true"
                placeholder="votre@email.fr"
                className="w-full rounded-sm border border-clay-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:border-clay-500 focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-sm bg-clay-500 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-clay-700"
            >
              Je m'abonne →
            </button>
          </div>

          <p className="mt-5 text-center text-xs text-stone-400">
            Désabonnement possible à tout moment · Aucun spam
          </p>
        </form>
      </section>

      {/* ── CE QUE VOUS RECEVREZ ─────────────────────────────────── */}
      <section className="mx-auto mb-8 max-w-3xl px-6 lg:px-0">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-clay-500">
          Au programme
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: '🎙',
              label: 'Les nouveaux épisodes',
              desc: 'Soyez la première informée à chaque nouvel épisode du podcast.',
            },
            {
              icon: '✍️',
              label: 'Les articles',
              desc: 'Des portraits et analyses sur les femmes artistes à travers les siècles.',
            },
            {
              icon: '📚',
              label: 'Les chroniques',
              desc: 'Des sélections de livres pour explorer l\'histoire de l\'art au féminin.',
            },
            {
              icon: '🏛',
              label: 'La Galerie 3D',
              desc: 'Les coulisses et actualités de la Galerie ART au féminin en avant-première.',
            },
          ].map(({ icon, label, desc }) => (
            <div
              key={label}
              className="rounded-sm border border-clay-200 bg-cream-50 p-5 text-center"
            >
              <span className="mb-3 block text-2xl">{icon}</span>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-clay-500">
                {label}
              </p>
              <p className="text-sm leading-relaxed text-stone-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALERIE ──────────────────────────────────────────────── */}
      <section className="-mx-4 my-16 bg-stone-900 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:flex lg:items-center lg:gap-16 lg:px-0">

          {/* Visuel orbital */}
          <div className="mb-10 flex justify-center lg:mb-0 lg:shrink-0">
            <div className="relative flex size-48 items-center justify-center">
              <div className="absolute size-48 rounded-full border border-white/5" />
              <div className="absolute size-36 rounded-full border border-white/8" />
              <div className="absolute size-24 rounded-full border border-clay-500/20" />
              <div className="relative flex size-16 items-center justify-center rounded-full border border-clay-500/40 bg-stone-800">
                <span className="font-display text-2xl font-light italic text-clay-300">✦</span>
              </div>
              {[0,1,2,3,4,5,6,7].map((i) => {
                const angle = (i / 8) * 360;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * 70;
                const y = Math.sin(rad) * 70;
                return (
                  <div
                    key={i}
                    className="absolute size-1.5 rounded-full bg-clay-400/60"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  />
                );
              })}
            </div>
          </div>

          {/* Texte */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay-300">
              Bientôt · Première exposition
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Galerie{' '}
              <span className="italic font-light text-clay-300">ART au féminin</span>
            </h2>
            <p className="mt-2 font-display text-xl font-light italic text-stone-400">
              « Sororité »
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Une galerie d'art immersive en 3D dédiée aux femmes artistes.
              La première exposition réunit une vingtaine d'artistes autour du
              thème de la sororité. Abonnez-vous pour recevoir toutes les
              actualités en avant-première — date d'ouverture, artistes invitées,
              coulisses du projet.
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-clay-500/40 bg-clay-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-clay-300">
                ✦ En préparation — restez informée
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── CITATION ─────────────────────────────────────────────── */}
      <section className="border-y border-clay-200 bg-cream-200 py-14">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-0">
          <span className="block font-display text-6xl font-light leading-none text-clay-300" aria-hidden="true">
            «
          </span>
          <p className="mt-2 font-display text-xl font-light italic leading-relaxed text-stone-700 md:text-2xl">
            Le monde regorge de femmes artistes talentueuses. Il est temps de les connaître.
          </p>
          <cite className="mt-5 block text-xs font-semibold uppercase tracking-widest text-clay-500 not-italic">
            — Aldjia Boughias
          </cite>
        </div>
      </section>

      {/* ── NAVIGATION ───────────────────────────────────────────── */}
      <section className="mx-auto mb-20 mt-12 max-w-3xl px-6 text-center lg:px-0">
        <p className="mb-6 text-sm text-stone-500">
          En attendant le prochain email, explorez le contenu du site :
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: 'Podcasts', href: '/podcasts' },
            { label: 'Articles', href: '/articles' },
            { label: 'Livres', href: '/livres' },
            { label: 'Citations', href: '/citations' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className="rounded-full border border-clay-200 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-stone-600 transition-colors hover:border-clay-500 hover:text-clay-500"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

    </Layout>
  );
}

export const Head = () => (
  <SEO
    title="Newsletter — ART au féminin, le podcast sur les femmes artistes"
    description="Abonnez-vous à la newsletter d'ART au féminin et recevez les nouveaux épisodes, articles et chroniques de livres sur les femmes artistes directement dans votre boîte mail."
  />
);
