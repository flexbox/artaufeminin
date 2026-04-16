import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function GaleriePage(): ReactElement {
  return (
    <Layout withInstagram={false}>

      {/* ── HERO SOMBRE ──────────────────────────────────────────── */}
      <section className="-mx-4 -mt-12 bg-stone-900">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-20 lg:px-16 lg:py-36">

          {/* Texte */}
          <div className="flex-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-clay-300">
              Bientôt disponible
            </p>
            <h1 className="font-display text-5xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
              Galerie{' '}
              <span className="italic font-light text-clay-300">
                ART au féminin
              </span>
            </h1>
            <p className="mt-4 font-display text-2xl font-light italic text-stone-400 md:text-3xl">
              Première exposition — « Sororité »
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-stone-400">
              Une galerie d'art immersive en 3D entièrement dédiée aux femmes
              artistes. Explorez les œuvres, découvrez les parcours, ressentez
              l'art — depuis chez vous.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/newsletter"
                className="inline-flex items-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-clay-700"
              >
                Être informée en avant-première →
              </Link>
            </div>
          </div>

          {/* Visuel orbital */}
          <div className="mt-16 flex justify-center lg:mt-0 lg:shrink-0">
            <div className="relative flex items-center justify-center" style={{ width: 320, height: 320 }}>
              <div className="absolute size-80 rounded-full border border-white/5" />
              <div className="absolute size-64 rounded-full border border-white/8" />
              <div className="absolute size-48 rounded-full border border-clay-500/20" />
              <div className="absolute size-32 rounded-full border border-clay-500/30" />

              <div className="relative flex size-20 items-center justify-center rounded-full border border-clay-500/50 bg-stone-800">
                <span className="font-display text-3xl font-light italic text-clay-300">✦</span>
              </div>

              {[0,1,2,3,4,5,6,7].map((i) => {
                const angle = (i / 8) * 360;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * 90;
                const y = Math.sin(rad) * 90;
                return (
                  <div key={i} className="absolute size-2 rounded-full bg-clay-400/70"
                    style={{ transform: `translate(${x}px, ${y}px)` }} />
                );
              })}
              {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => {
                const angle = (i / 12) * 360 + 15;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * 118;
                const y = Math.sin(rad) * 118;
                return (
                  <div key={i} className="absolute size-1.5 rounded-full bg-stone-500/60"
                    style={{ transform: `translate(${x}px, ${y}px)` }} />
                );
              })}
              {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((i) => {
                const angle = (i / 20) * 360 + 7;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * 148;
                const y = Math.sin(rad) * 148;
                return (
                  <div key={i} className="absolute size-1 rounded-full bg-stone-600/50"
                    style={{ transform: `translate(${x}px, ${y}px)` }} />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONCEPT ──────────────────────────────────────────────── */}
      <section className="mx-auto my-20 max-w-3xl px-6 lg:px-0">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Le projet
        </p>
        <h2 className="mb-8 font-display text-3xl font-semibold leading-snug text-stone-900 md:text-4xl">
          Une galerie virtuelle pour rendre visibles les femmes artistes
        </h2>
        <div className="space-y-5 text-base leading-relaxed text-stone-600">
          <p>
            La Galerie ART au féminin est une galerie d'art immersive en 3D,
            conçue pour faire découvrir les œuvres de femmes artistes au plus
            grand nombre. Une expérience culturelle accessible à toutes,
            partout dans le monde, sans barrière géographique.
          </p>
          <p>
            Chaque exposition réunit des artistes autour d'un thème commun.
            On y explore leurs œuvres, on lit leurs histoires, on comprend
            leur démarche — comme dans une vraie galerie, mais en ligne.
          </p>
        </div>
      </section>

      {/* ── EXPOSITION SORORITÉ ───────────────────────────────────── */}
      <section className="border-y border-clay-200 bg-cream-200 py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-0">
          <div className="lg:flex lg:items-start lg:gap-16">

            <div className="lg:w-1/2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay-500">
                Première exposition
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
                « Sororité »
              </h2>
              <p className="mt-4 font-display text-xl font-light italic leading-relaxed text-stone-600">
                Ce lien puissant entre femmes qui traverse l'histoire de l'art
                depuis des siècles — enfin mis en lumière.
              </p>
              <p className="mt-5 text-base leading-relaxed text-stone-600">
                La première exposition de la Galerie ART au féminin réunit
                une vingtaine d'artistes autour du thème de la sororité —
                ces liens de solidarité, d'entraide et de reconnaissance
                mutuelle entre femmes créatrices.
              </p>
            </div>

            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '~20 artistes', desc: 'De différentes époques et origines' },
                  { label: 'Immersif 3D', desc: 'Une expérience de visite unique' },
                  { label: 'Gratuit', desc: 'Accessible à toutes et à tous' },
                  { label: 'En ligne', desc: 'Sans frontières géographiques' },
                ].map(({ label, desc }) => (
                  <div key={label} className="rounded-sm border border-clay-200 bg-cream-50 p-5">
                    <p className="font-display text-2xl font-semibold text-stone-900">{label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-stone-500">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER CTA ───────────────────────────────────────── */}
      <section className="mx-auto my-20 max-w-xl px-6 text-center lg:px-0">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Restez informée
        </p>
        <h2 className="mb-4 font-display text-3xl font-semibold text-stone-900">
          Recevoir la date d'ouverture en avant-première
        </h2>
        <p className="mb-8 text-base leading-relaxed text-stone-500">
          Abonnez-vous à la newsletter pour recevoir toutes les actualités
          de la galerie — artistes invitées, coulisses du projet et date
          d'ouverture en exclusivité.
        </p>
        <Link
          to="/newsletter"
          className="inline-flex items-center gap-2 rounded-full border border-clay-500 px-6 py-3 text-xs font-bold uppercase tracking-widest text-clay-500 transition-colors hover:bg-clay-500 hover:text-white"
        >
          S'abonner à la newsletter →
        </Link>
      </section>

      {/* ── LIENS ────────────────────────────────────────────────── */}
      <section className="mx-auto mb-20 max-w-3xl px-6 lg:px-0">
        <p className="mb-6 text-center text-sm text-stone-500">
          En attendant l'ouverture, explorez le podcast et les articles :
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: 'Podcasts', href: '/podcasts' },
            { label: 'Articles', href: '/articles' },
            { label: 'Mon histoire', href: '/about' },
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
    title="Galerie ART au féminin — Exposition virtuelle immersive 3D"
    description="Une galerie d'art immersive en 3D dédiée aux femmes artistes. Première exposition : « Sororité », une vingtaine d'artistes autour du thème de la sororité. Bientôt disponible."
  />
);
