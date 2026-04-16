import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function AboutPage() {
  return (
    <Layout withInstagram={false}>

      {/* ── EN-TÊTE ──────────────────────────────────────────────── */}
      <section className="m-auto mb-16 mt-8 w-3/4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Mon histoire
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
          Aldjia Boughias
        </h1>
        <p className="mt-3 font-display text-xl font-light italic text-stone-500">
          Développeuse web orientée art et culture · Fondatrice d'ART au féminin
        </p>
      </section>

      {/* ── PORTRAIT + INTRO ─────────────────────────────────────── */}
      <section className="m-auto mb-16 w-3/4">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">

          {/* Photo */}
          <div className="shrink-0 md:w-64">
            <div className="overflow-hidden rounded-sm">
              <StaticImage
                src="../images/profile-picture.jpg"
                alt="Aldjia Boughias — fondatrice du podcast ART au féminin"
                width={320}
                height={400}
                className="w-full object-cover object-top"
              />
            </div>
            <div className="mt-4 rounded-sm border border-clay-200 bg-cream-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-clay-500">
                Lille, France
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Développeuse web · Art &amp; culture · Podcast
              </p>
            </div>
          </div>

          {/* Texte */}
          <div className="flex-1 space-y-6">
            <p className="font-display text-2xl font-light italic leading-relaxed text-stone-700">
              Je suis Aldjia Boughias, développeuse web spécialisée dans le secteur
              de l'art et de la culture, et fondatrice du podcast ART au féminin.
            </p>
            <p className="text-base leading-relaxed text-stone-600">
              J'ai créé ART au féminin par <strong className="font-semibold text-stone-800">passion pour l'histoire de l'art</strong>,
              mais aussi pour continuer d'apprendre et partager ce que je découvrais.
              Un projet né d'une curiosité simple : combien de femmes artistes
              connaît-on vraiment ? La réponse m'a poussée à aller plus loin.
            </p>
            <p className="text-base leading-relaxed text-stone-600">
              Avec ce podcast sur les <strong className="font-semibold text-stone-800">femmes artistes</strong>,
              j'invite des directrices de musées, des conservatrices et des
              historiennes de l'art à nous parler de ces femmes qui ont marqué
              l'histoire mais ont été, pour la plupart, oubliées.
            </p>
            <p className="text-base leading-relaxed text-stone-600">
              J'invite aussi des{' '}
              <strong className="font-semibold text-stone-800">femmes artistes d'aujourd'hui</strong>{' '}
              à témoigner de leur parcours, de leur travail et de leur regard
              sur la place des femmes dans le monde de l'art contemporain.
            </p>
            <p className="text-base leading-relaxed text-stone-600">
              ART au féminin, c'est un podcast, des articles, des chroniques de
              livres et des citations — tout ce qui permet de retracer et de
              célébrer l'<strong className="font-semibold text-stone-800">histoire des femmes dans l'art</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── CITATION BEAUVOIR ────────────────────────────────────── */}
      <section className="border-y border-clay-200 bg-cream-200 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-0">
          <span
            className="block font-display text-8xl font-light leading-none text-clay-300"
            aria-hidden="true"
          >
            «
          </span>
          <blockquote className="mt-2">
            <p className="font-display text-xl font-light italic leading-relaxed text-stone-700 md:text-2xl">
              Nous commencerons par discuter les points de vue pris sur la femme
              par la biologie, la psychanalyse, le matérialisme historique. Nous
              essaierons de montrer ensuite positivement comment la réalité féminine
              s'est constituée, pourquoi la femme a été définie comme l'Autre et
              quelles en ont été les conséquences du point de vue des hommes.
            </p>
            <footer className="mt-6">
              <cite className="text-xs font-semibold uppercase tracking-widest text-clay-500 not-italic">
                — Simone de Beauvoir, Le Deuxième Sexe
              </cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── POURQUOI ─────────────────────────────────────────────── */}
      <section className="m-auto my-16 w-3/4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay-500">
              Pourquoi ce podcast sur les femmes artistes ?
            </p>
            <h2 className="mb-6 font-display text-3xl font-semibold leading-snug text-stone-900">
              Apprendre, partager et rendre visibles celles que l'histoire a trop souvent ignorées.
            </h2>
          </div>

          <ul className="space-y-4">
            {[
              "Par passion pour l'art et l'envie de continuer à apprendre.",
              "Pour partager des découvertes qui méritent d'être connues de tous.",
              "Parce qu'on parle trop peu des femmes artistes dans les musées et les livres d'histoire.",
              "Parce que le monde regorge de femmes artistes talentueuses dont les noms ont été effacés.",
              "Parce que connaître leur histoire nous enrichit culturellement et nous inspire.",
            ].map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-clay-500" />
                <span className="text-base leading-relaxed text-stone-600">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CE QUE VOUS TROUVEREZ ────────────────────────────────── */}
      <section className="m-auto mb-16 w-3/4">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Sur ART au féminin
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Podcast', desc: "Des épisodes sur les femmes artistes qui ont marqué l'histoire de l'art." },
            { label: 'Articles', desc: "Des textes approfondis pour explorer leurs œuvres et leurs parcours." },
            { label: 'Chroniques', desc: "Des sélections de livres pour aller encore plus loin dans vos lectures." },
            { label: 'Citations', desc: "Des paroles de femmes artistes qui traversent le temps." },
          ].map(({ label, desc }) => (
            <div key={label} className="rounded-sm border border-clay-200 bg-cream-50 p-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-clay-500">
                {label}
              </p>
              <p className="text-sm leading-relaxed text-stone-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="m-auto mb-20 w-3/4">
        <div className="flex flex-col gap-4 rounded-sm border border-clay-200 bg-cream-50 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-clay-500">
              Commencer l'aventure
            </p>
            <p className="font-display text-xl font-semibold text-stone-900">
              Écoutez le podcast ART au féminin
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/podcasts"
              className="inline-flex items-center gap-2 rounded-full border border-clay-500 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-clay-500 transition-colors hover:bg-clay-500 hover:text-white"
            >
              Tous les épisodes
            </a>
            <a
              href="/articles"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-stone-600 transition-colors hover:border-stone-500 hover:text-stone-900"
            >
              Les articles
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export const Head = () => {
  return (
    <SEO
      title="Aldjia Boughias — Fondatrice du podcast ART au féminin"
      description="Je suis Aldjia Boughias, développeuse web et fondatrice du podcast ART au féminin. Un projet né de ma passion pour l'histoire de l'art et l'envie de rendre visibles les femmes artistes oubliées."
    />
  );
};
