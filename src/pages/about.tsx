import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function AboutPage() {
  return (
    <Layout withInstagram={false}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="-mx-4 -mt-12 border-b border-clay-200 bg-cream-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-20 lg:px-16 lg:py-28">

          {/* Texte */}
          <div className="flex-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-clay-500">
              À propos
            </p>
            <h1 className="font-display text-5xl font-semibold leading-tight text-stone-900 md:text-6xl lg:text-7xl">
              Aldjia{' '}
              <span className="italic font-light">Boughias</span>
            </h1>
            <p className="mt-4 font-display text-xl font-light italic text-stone-500 md:text-2xl">
              Développeuse web orientée art et culture · Fondatrice d'ART au féminin
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-stone-600">
              J'ai créé ART au féminin par passion pour l'histoire de l'art,
              mais aussi pour continuer d'apprendre et partager ce que je découvrais.
              Un projet né d'une curiosité simple : combien de femmes artistes connaît-on vraiment ?
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/podcasts"
                className="inline-flex items-center gap-2 rounded-full border border-clay-500 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-clay-500 transition-colors hover:bg-clay-500 hover:text-white"
              >
                Écouter le podcast
              </Link>
              <a
                href="https://aldjia.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-stone-600 transition-colors hover:border-stone-500 hover:text-stone-900"
              >
                aldjia.dev →
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="mt-16 flex justify-center lg:mt-0 lg:flex-shrink-0">
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-sm border border-clay-300/70" />
              <div className="absolute -right-8 -top-8 h-full w-full rounded-sm border border-clay-200/50" />
              <StaticImage
                src="../images/profile-picture.jpg"
                alt="Aldjia Boughias — fondatrice du podcast ART au féminin"
                width={280}
                height={350}
                className="relative rounded-sm object-cover object-top shadow-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── MON HISTOIRE ─────────────────────────────────────────── */}
      <section className="m-auto my-20 w-3/4 max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Mon histoire
        </p>
        <div className="space-y-6">
          <p className="font-display text-2xl font-light italic leading-relaxed text-stone-700">
            La réponse m'a poussée à aller plus loin.
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
      <section className="m-auto my-20 w-3/4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay-500">
              Pourquoi ce podcast ?
            </p>
            <h2 className="font-display text-3xl font-semibold leading-snug text-stone-900 md:text-4xl">
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
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-clay-500" />
                <span className="text-base leading-relaxed text-stone-600">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CE QUE VOUS TROUVEREZ ────────────────────────────────── */}
      <section className="m-auto mb-20 w-3/4">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Sur ART au féminin
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Podcast', href: '/podcasts', desc: "Des épisodes sur les femmes artistes qui ont marqué l'histoire de l'art." },
            { label: 'Articles', href: '/articles', desc: "Des textes approfondis pour explorer leurs œuvres et leurs parcours." },
            { label: 'Chroniques', href: '/livres', desc: "Des sélections de livres pour aller encore plus loin dans vos lectures." },
            { label: 'Citations', href: '/citations', desc: "Des paroles de femmes artistes qui traversent le temps." },
          ].map(({ label, href, desc }) => (
            <Link
              key={label}
              to={href}
              className="group rounded-sm border border-clay-200 bg-cream-50 p-5 transition-colors hover:border-clay-400 hover:bg-cream-100"
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-clay-500">
                {label}
              </p>
              <p className="text-sm leading-relaxed text-stone-600">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── RÉSEAUX SOCIAUX ──────────────────────────────────────── */}
      <section className="-mx-4 border-t border-clay-200 bg-cream-100 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-0">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay-500">
            Suivre ART au féminin
          </p>
          <h2 className="mb-8 font-display text-3xl font-semibold text-stone-900">
            Rejoignez la communauté
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com/artaufeminin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-clay-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition-colors hover:border-clay-500 hover:text-clay-500"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/podcastart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-clay-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition-colors hover:border-clay-500 hover:text-clay-500"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
              Facebook
            </a>
            <a
              href="https://podcasts.apple.com/us/podcast/art-au-feminin/id1493131152"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-clay-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition-colors hover:border-clay-500 hover:text-clay-500"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4a4 4 0 014 4c0 1.53-.86 2.86-2.12 3.54.08.3.12.62.12.96 0 2.21-1.79 4-4 4s-4-1.79-4-4c0-.34.04-.66.12-.96A4 4 0 018 10a4 4 0 014-4zm0 2a2 2 0 100 4 2 2 0 000-4zm0 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              Apple Podcasts
            </a>
            <a
              href="https://open.spotify.com/show/18f84r0ic2PUenYvBRr2Ps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-clay-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition-colors hover:border-clay-500 hover:text-clay-500"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 11-.277-1.215c3.809-.87 7.077-.496 9.712 1.115a.623.623 0 01.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.52-.973c3.632-1.102 8.147-.568 11.233 1.329a.78.78 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 11-.543-1.794c3.527-1.07 9.393-.863 13.105 1.345a.936.936 0 01-.945 1.606z"/>
              </svg>
              Spotify
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
      description="Je suis Aldjia Boughias, développeuse web orientée art et culture et fondatrice du podcast ART au féminin. Un projet né de ma passion pour l'histoire de l'art et l'envie de rendre visibles les femmes artistes oubliées."
    />
  );
};
