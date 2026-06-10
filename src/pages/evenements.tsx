import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function EvenementsPage(): ReactElement {
  return (
    <Layout withInstagram={false}>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="-mx-4 border-b border-neutral-200">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Événements
          </p>
          <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Rencontrer, <span className="italic">écouter,</span>
            <br />
            questionner
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed text-neutral-500">
            ART AU FÉMININ prend vie en dehors des écrans. Des rencontres en
            présentiel pour aller plus loin avec celles qui font vivre l'Art au
            féminin aujourd'hui.
          </p>
        </div>
      </section>

      {/* ── BIENTÔT ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-0">
        <div className="border border-neutral-200 p-10 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Prochainement
          </p>
          <h2 className="font-display text-3xl font-light leading-snug text-neutral-900 md:text-4xl">
            Les premiers événements arrivent
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-sm font-light leading-relaxed text-neutral-500">
            Des soirées, des discussions et des rencontres autour des femmes
            dans le monde de l'Art — en présentiel, dans un cadre intime.
          </p>
          <div className="mt-8 inline-block border border-neutral-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Annonces à venir
          </div>
        </div>
      </section>

      {/* ── FORMAT ───────────────────────────────────────────────── */}
      <section className="mx-auto mb-6 max-w-3xl px-6 lg:px-0">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Le Format
        </p>
        <div className="grid grid-cols-1 gap-px bg-neutral-200 border border-neutral-200 sm:grid-cols-3">
          {[
            {
              label: 'Rencontrer',
              desc: "Échanger en personne avec des directrices de musées, conservatrices, historiennes de l'Art et artistes.",
            },
            {
              label: 'Écouter',
              desc: "Des prises de parole sincères sur leur parcours, leur regard sur l'Art et la place des femmes dans ce monde.",
            },
            {
              label: 'Questionner',
              desc: "Un format ouvert pour poser les questions que l'on n'ose pas toujours poser — et repartir avec de nouvelles curiosités.",
            },
          ].map(({ label, desc }) => (
            <div key={label} className="bg-white p-8 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                {label}
              </p>
              <p className="text-sm font-light leading-relaxed text-neutral-500">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA NEWSLETTER ───────────────────────────────────────── */}
      <section className="-mx-4 my-16 border-y border-neutral-200 bg-neutral-900 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Rester Informée
          </p>
          <h2 className="font-display text-3xl font-light leading-tight text-white md:text-4xl">
            Soyez la première à savoir
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm font-light leading-relaxed text-white/50">
            Les dates, lieux et inscriptions aux événements seront annoncés en
            exclusivité dans la newsletter d'ART AU FÉMININ.
          </p>
          <div className="mt-8">
            <Link
              to="/newsletter"
              className="inline-block border border-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-neutral-900"
            >
              S'abonner à la Newsletter <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CITATION ─────────────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-14">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-0">
          <span
            className="block font-display text-6xl font-light leading-none text-neutral-200"
            aria-hidden="true"
          >
            «
          </span>
          <p className="mt-2 font-display text-xl font-light italic leading-relaxed text-neutral-600 md:text-2xl">
            Le monde regorge de femmes artistes talentueuses. Il est temps de
            les connaître.
          </p>
          <cite className="mt-5 block text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 not-italic">
            — Aldjia Boughias
          </cite>
        </div>
      </section>

      {/* ── EXPLORER ─────────────────────────────────────────────── */}
      <section className="mx-auto mb-20 mt-12 max-w-3xl px-6 text-center lg:px-0">
        <p className="mb-6 text-sm font-light text-neutral-400">
          En attendant les événements, explorez le contenu du site :
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
              className="border border-neutral-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:border-neutral-900 hover:text-neutral-900"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="Événements — ART AU FÉMININ, rencontres autour des femmes artistes"
    description="ART AU FÉMININ organise des rencontres en présentiel pour échanger avec des directrices de musées, conservatrices, historiennes de l'Art et artistes. Les premiers événements arrivent bientôt."
    url={`https://www.artaufeminin.fr${location.pathname}`}
  />
);
