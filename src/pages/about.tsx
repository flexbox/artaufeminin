import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function AboutPage() {
  return (
    <Layout withInstagram={false}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="-mx-4 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-20 lg:px-16 lg:py-28">

          <div className="flex-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              À Propos
            </p>
            <h1 className="font-display text-5xl font-light leading-tight text-neutral-900 md:text-6xl lg:text-7xl">
              Aldjia{' '}
              <span className="italic">Boughias</span>
            </h1>
            <p className="mt-4 font-display text-xl font-light italic text-neutral-500 md:text-2xl">
              Développeuse web orientée Art et Culture · Fondatrice d'ART AU FÉMININ
            </p>
            <p className="mt-6 max-w-lg text-sm font-light leading-relaxed text-neutral-500">
              J'ai créé ART AU FÉMININ par passion pour l'Histoire de l'Art,
              mais aussi pour continuer d'apprendre et partager ce que je découvrais.
              Un projet né d'une curiosité simple : combien de femmes artistes connaît-on vraiment ?
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/podcasts"
                className="border border-neutral-300 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900"
              >
                Écouter le Podcast
              </Link>
              <a
                href="https://aldjia.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visiter aldjia.dev (ouvre un nouvel onglet)"
                className="border border-neutral-200 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:border-neutral-500 hover:text-neutral-700"
              >
                aldjia.dev <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="mt-16 flex justify-center lg:mt-0 lg:flex-shrink-0">
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full border border-neutral-200" />
              <div className="absolute -right-8 -top-8 h-full w-full border border-neutral-100" />
              <StaticImage
                src="../images/profile-picture.jpg"
                alt="Aldjia Boughias — fondatrice du podcast ART AU FÉMININ"
                width={280}
                height={350}
                className="relative object-cover object-top shadow-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── MON HISTOIRE ─────────────────────────────────────────── */}
      <section className="m-auto my-20 w-3/4 max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Mon Histoire
        </p>
        <div className="space-y-6">
          <p className="font-display text-2xl font-light italic leading-relaxed text-neutral-600">
            La réponse m'a poussée à aller plus loin.
          </p>
          <p className="text-sm font-light leading-relaxed text-neutral-500">
            Avec ce podcast sur les <strong className="font-medium text-neutral-700">femmes artistes</strong>,
            j'invite des directrices de musées, des conservatrices et des
            historiennes de l'Art à nous parler de ces femmes qui ont marqué
            l'Histoire mais ont été, pour la plupart, oubliées.
          </p>
          <p className="text-sm font-light leading-relaxed text-neutral-500">
            J'invite aussi des{' '}
            <strong className="font-medium text-neutral-700">femmes artistes d'aujourd'hui</strong>{' '}
            à témoigner de leur parcours, de leur travail et de leur regard
            sur la place des femmes dans le monde de l'Art contemporain.
          </p>
          <p className="text-sm font-light leading-relaxed text-neutral-500">
            ART AU FÉMININ, c'est un podcast, des articles, des chroniques de
            livres et des citations — tout ce qui permet de retracer et de
            célébrer l'<strong className="font-medium text-neutral-700">histoire des femmes dans l'Art</strong>.
          </p>
        </div>
      </section>

      {/* ── CITATION BEAUVOIR ────────────────────────────────────── */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-0">
          <span
            className="block font-display text-8xl font-light leading-none text-neutral-200"
            aria-hidden="true"
          >
            «
          </span>
          <blockquote className="mt-2">
            <p className="font-display text-xl font-light italic leading-relaxed text-neutral-600 md:text-2xl">
              Nous commencerons par discuter les points de vue pris sur la femme
              par la biologie, la psychanalyse, le matérialisme historique. Nous
              essaierons de montrer ensuite positivement comment la réalité féminine
              s'est constituée, pourquoi la femme a été définie comme l'Autre et
              quelles en ont été les conséquences du point de vue des hommes.
            </p>
            <footer className="mt-6">
              <cite className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 not-italic">
                — Simone de Beauvoir, Le Deuxième Sexe
              </cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── POURQUOI ─────────────────────────────────────────────── */}
      <section className="m-auto my-20 w-3/4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Pourquoi ce Podcast ?
            </p>
            <h2 className="font-display text-3xl font-light leading-snug text-neutral-900 md:text-4xl">
              Apprendre, partager et rendre visibles celles que l'Histoire a trop souvent ignorées.
            </h2>
          </div>
          <ul className="space-y-4">
            {[
              "Par passion pour l'Art et l'envie de continuer à apprendre.",
              "Pour partager des découvertes qui méritent d'être connues de tous.",
              "Parce qu'on parle trop peu des femmes artistes dans les musées et les livres d'Histoire.",
              "Parce que le monde regorge de femmes artistes talentueuses dont les noms ont été effacés.",
              "Parce que connaître leur Histoire nous enrichit culturellement et nous inspire.",
            ].map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="mt-2 size-1 shrink-0 bg-neutral-400" />
                <span className="text-sm font-light leading-relaxed text-neutral-500">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CE QUE VOUS TROUVEREZ ────────────────────────────────── */}
      <section className="m-auto mb-20 w-3/4">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Sur ART AU FÉMININ
        </p>
        <div className="grid grid-cols-1 gap-px bg-neutral-200 border border-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Podcast', href: '/podcasts', desc: "Des épisodes sur les femmes artistes qui ont marqué l'Histoire de l'Art." },
            { label: 'Articles', href: '/articles', desc: "Des textes approfondis pour explorer leurs œuvres et leurs parcours." },
            { label: 'Chroniques', href: '/livres', desc: "Des sélections de livres pour aller encore plus loin dans vos lectures." },
            { label: 'Citations', href: '/citations', desc: "Des paroles de femmes artistes qui traversent le temps." },
          ].map(({ label, href, desc }) => (
            <Link
              key={label}
              to={href}
              className="group bg-white p-6 transition-colors hover:bg-neutral-50"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-colors group-hover:text-neutral-700">
                {label}
              </p>
              <p className="text-sm font-light leading-relaxed text-neutral-500">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── RÉSEAUX SOCIAUX ──────────────────────────────────────── */}
      <section className="-mx-4 border-t border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-0">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Suivre ART AU FÉMININ
          </p>
          <h2 className="mb-8 font-display text-3xl font-light text-neutral-900">
            Rejoignez la Communauté
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Instagram', href: 'https://instagram.com/artaufeminin' },
              { name: 'Facebook', href: 'https://www.facebook.com/podcastart' },
              { name: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/art-au-feminin/id1493131152' },
              { name: 'Spotify', href: 'https://open.spotify.com/show/18f84r0ic2PUenYvBRr2Ps' },
            ].map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-neutral-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}

export const Head = () => {
  return (
    <SEO
      title="Aldjia Boughias — Fondatrice du podcast ART AU FÉMININ"
      description="Je suis Aldjia Boughias, développeuse web orientée art et culture et fondatrice du podcast ART AU FÉMININ. Un projet né de ma passion pour l'histoire de l'art et l'envie de rendre visibles les femmes artistes oubliées."
    />
  );
};
