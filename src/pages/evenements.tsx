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
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Événements
          </p>
          <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Rencontrer, <span className="italic">écouter,</span>
            <br />
            questionner
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-neutral-600">
            ART AU FÉMININ prend vie en dehors des écrans. Des rencontres en
            présentiel pour aller plus loin avec celles qui font vivre l'Art au
            féminin aujourd'hui.
          </p>
        </div>
      </section>

      {/* ── ÉVÉNEMENT À VENIR ────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-0">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Prochain événement
        </p>

        <div className="border border-neutral-200">
          {/* En-tête date */}
          <div className="border-b border-neutral-200 bg-neutral-900 px-8 py-5 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Nov.
                </p>
                <p className="font-display text-5xl font-light leading-none text-white">
                  06
                </p>
              </div>
              <div className="border-l border-white/20 pl-5">
                <p className="text-sm font-semibold text-white">
                  Vendredi 6 novembre 2026
                </p>
                <p className="mt-0.5 text-xs text-white/60">
                  18 h 00 – 21 h 30
                </p>
              </div>
            </div>
            <span className="mt-4 inline-block border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 sm:mt-0">
              25 places · 10 €
            </span>
          </div>

          {/* Corps */}
          <div className="px-8 py-8">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Les Rencontres Art au Féminin #1
            </p>
            <h2 className="font-display text-3xl font-light leading-snug text-neutral-900 md:text-4xl">
              Adjugé&nbsp;!
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-neutral-600">
              Il y a ce moment suspendu, juste avant le coup de marteau. Une
              salle qui retient son souffle, un objet qui change de mains, une
              histoire qui continue ailleurs.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Pour sa toute première rencontre en public, Art au Féminin vous
              ouvre les coulisses d'une maison de ventes, avec deux
              commissaires-priseuses de{' '}
              <span className="font-medium text-neutral-800">
                Mirabili Enchères
              </span>{' '}
              :
            </p>

            <ul className="mt-4 space-y-2 border-l-2 border-neutral-200 pl-5">
              <li className="text-sm leading-relaxed text-neutral-700">
                <span className="font-medium">Sophie Tiercelin</span> —
                spécialiste de l'histoire de la mode, du bijou et des textiles
              </li>
              <li className="text-sm leading-relaxed text-neutral-700">
                <span className="font-medium">Héloïse de Baudus</span> —
                spécialiste des arts décoratifs du XX<sup>e</sup> siècle, de la
                photographie et des arts du feu
              </li>
            </ul>

            <div className="mt-6 grid grid-cols-1 gap-px bg-neutral-100 border border-neutral-100 sm:grid-cols-3">
              {[
                {
                  icon: '🎙',
                  label: 'Enregistrement live',
                  desc: "L'interview est captée devant vous pour un prochain épisode du podcast.",
                },
                {
                  icon: '💬',
                  label: 'Vos questions',
                  desc: "Un temps d'échange libre avec Sophie et Héloïse. Les questions naïves sont les bienvenues.",
                },
                {
                  icon: '🥂',
                  label: 'Un verre',
                  desc: "Rencontrer d'autres passionné·es d'art, échanger, repartir avec des idées.",
                },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="bg-white p-5">
                  <p className="mb-2 text-base">{icon}</p>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    {label}
                  </p>
                  <p className="text-xs leading-relaxed text-neutral-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Lieu + CTA */}
            <div className="mt-8 sm:flex sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  Lieu
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800">
                  Espace Out of the Blue
                </p>
                <p className="text-xs text-neutral-500">
                  104 Rue de l'Hôpital Militaire, 59800 Lille
                </p>
              </div>
              <a
                href="https://luma.com/zqr5va17"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-neutral-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-neutral-700 sm:mt-0"
              >
                Obtenir un billet — 10 € <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMAT ───────────────────────────────────────────────── */}
      <section className="mx-auto mb-6 max-w-3xl px-6 lg:px-0">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
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
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                {label}
              </p>
              <p className="text-sm leading-relaxed text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA NEWSLETTER ───────────────────────────────────────── */}
      <section className="-mx-4 my-16 border-y border-neutral-200 bg-neutral-900 py-16">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Rester Informée
          </p>
          <h2 className="font-display text-3xl font-light leading-tight text-white md:text-4xl">
            Soyez la première à savoir
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-white/70">
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
          <cite className="mt-5 block text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500 not-italic">
            — Aldjia Boughias
          </cite>
        </div>
      </section>

      {/* ── EXPLORER ─────────────────────────────────────────────── */}
      <section className="mx-auto mb-20 mt-12 max-w-3xl px-6 text-center lg:px-0">
        <p className="mb-6 text-sm text-neutral-600">
          Explorez le contenu du site en attendant le 6 novembre :
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
    url={`https://artaufeminin.fr${location.pathname}`}
    noindex={false}
  />
);
