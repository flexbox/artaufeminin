import { Link } from 'gatsby';
import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const books = [
  {
    id: 'vivian-maier',
    artist: 'Vivian Maier',
    title: 'Vivian Maier révélée : Enquête sur une femme libre',
    author: 'Ann Marks',
    publisher: 'Delpire éditeur',
    year: '2021',
    originalTitle: 'Vivian Maier Developed, Atria Books',
    description:
      "La biographie de référence sur Vivian Maier, fruit d'une enquête de plusieurs années. Ann Marks remet en question plusieurs mythes construits autour de la photographe et propose un portrait nuancé, documenté, d'une femme bien plus complexe que la légende.",
    articleHref: '/articles/vivian-maier',
  },
  {
    id: 'dorothea-lange-fr',
    artist: 'Dorothea Lange',
    title: "Dorothea Lange : le cœur et les raisons d'une photographe",
    author: 'Pierre Borhan',
    publisher: 'Seuil',
    year: '2002',
    originalTitle: null,
    description:
      "Une monographie en français sur Dorothea Lange qui couvre l'ensemble de sa carrière, de ses débuts en studio à la photographie documentaire de la Grande Dépression. Un point d'entrée solide et accessible pour découvrir son œuvre.",
    articleHref: '/articles/dorothea-lange',
  },
  {
    id: 'dorothea-lange-en',
    artist: 'Dorothea Lange',
    title: 'Dorothea Lange: A Life Beyond Limits',
    author: 'Linda Gordon',
    publisher: 'W.W. Norton',
    year: '2009',
    originalTitle: null,
    description:
      "La biographie complète en anglais — un travail d'historienne rigoureux qui replace l'œuvre de Lange dans le contexte politique et social de son époque. Indispensable pour comprendre sa trajectoire et son engagement.",
    articleHref: '/articles/dorothea-lange',
  },
  {
    id: 'lee-miller-penrose',
    artist: 'Lee Miller',
    title: 'The Lives of Lee Miller',
    author: 'Antony Penrose',
    publisher: 'Thames & Hudson',
    year: '1985',
    originalTitle: null,
    description:
      "Écrit par son fils après la découverte de ses 60 000 négatifs dans le grenier familial, ce livre reste la source la plus intime sur la vie de Lee Miller. Antony Penrose a eu accès à des archives que personne d'autre n'avait vues.",
    articleHref: '/articles/lee-miller',
  },
  {
    id: 'lee-miller-burke',
    artist: 'Lee Miller',
    title: 'Lee Miller: A Life',
    author: 'Carolyn Burke',
    publisher: 'Knopf',
    year: '2005',
    originalTitle: null,
    description:
      "Une biographie plus académique et plus complète que celle d'Antony Penrose, qui couvre l'ensemble de la trajectoire de Lee Miller — de ses débuts comme mannequin à son travail de photographe de guerre, en passant par ses années parisiennes avec Man Ray.",
    articleHref: '/articles/lee-miller',
  },
  {
    id: 'claude-cahun-leperlier',
    artist: 'Claude Cahun',
    title: "Claude Cahun : l'écart et la métamorphose",
    author: 'François Leperlier',
    publisher: 'Jean-Michel Place',
    year: '1992',
    originalTitle: null,
    description:
      "La monographie fondatrice qui a remis Claude Cahun au centre de l'histoire de l'art. C'est grâce au travail de Leperlier que son œuvre a été redécouverte dans les années 1990. Un livre de référence, difficile à trouver mais essentiel.",
    articleHref: '/articles/claude-cahun',
  },
  {
    id: 'claude-cahun-aveux',
    artist: 'Claude Cahun',
    title: 'Aveux non avenus',
    author: 'Claude Cahun',
    publisher: 'Mille et une nuits',
    year: '2011 (1ère éd. 1930)',
    originalTitle: 'Éditions du Carrefour, 1930',
    description:
      "L'œuvre de Cahun elle-même : un livre hybride, entre autobiographie, poésie et photomontage, publié en 1930 et réédité en 2011. Une exploration de l'identité, du genre et de la représentation qui n'a pas vieilli d'un jour.",
    articleHref: '/articles/claude-cahun',
  },
];

export default function LivresFemmesPhotographesPage() {
  return (
    <Layout withInstagram={false}>
      {/* ── EN-TÊTE ───────────────────────────────────────────────── */}
      <section className="-mx-4 border-b border-neutral-200">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Sélection · Série Femmes derrière l'objectif
          </p>
          <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Livres sur les femmes photographes
          </h1>
          <p className="mt-4 font-display text-xl font-light italic text-neutral-500">
            Notre sélection pour aller plus loin
          </p>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-neutral-500">
            Pour chacune des quatre photographes de la série de septembre 2026,
            une sélection de livres vérifiés — biographies, monographies, et
            l'œuvre de Cahun elle-même. Des lectures pour aller bien au-delà du
            portrait.
          </p>
        </div>
      </section>

      {/* ── CONTENU ───────────────────────────────────────────────── */}
      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-0">
        {/* Intro */}
        <p className="mb-10 text-sm font-light leading-relaxed text-neutral-500">
          Ces livres ont été sélectionnés pour leur fiabilité et leur
          accessibilité. Les titres en anglais sont signalés. Pour les livres
          dont l'édition française n'a pas été confirmée, nous indiquons
          l'édition originale.
        </p>

        {/* Liste par artiste */}
        {['Vivian Maier', 'Dorothea Lange', 'Lee Miller', 'Claude Cahun'].map(
          (artist) => {
            const artistBooks = books.filter((b) => b.artist === artist);
            const articleHref = artistBooks[0]?.articleHref;
            return (
              <section key={artist} className="mb-12">
                <div className="mb-6 flex items-baseline justify-between border-b border-neutral-200 pb-3">
                  <h2 className="font-display text-2xl font-light text-neutral-900">
                    {artist}
                  </h2>
                  {articleHref && (
                    <Link
                      to={articleHref}
                      className="text-xs font-light text-neutral-400 underline underline-offset-2 hover:text-neutral-700"
                    >
                      Lire le portrait <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
                <div className="space-y-6">
                  {artistBooks.map((book) => (
                    <div
                      key={book.id}
                      className="border border-neutral-200 p-6"
                    >
                      <p className="mb-1 font-display text-lg font-light text-neutral-900">
                        {book.title}
                      </p>
                      <p className="mb-3 text-xs font-light text-neutral-400">
                        {book.author} — {book.publisher}, {book.year}
                        {book.originalTitle && (
                          <span className="ml-1 italic">
                            (titre original : {book.originalTitle})
                          </span>
                        )}
                      </p>
                      <p className="text-sm font-light leading-relaxed text-neutral-600">
                        {book.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          }
        )}

        {/* ── SÉRIE ────────────────────────────────────────────────── */}
        <div className="mt-4 border border-neutral-200 p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            La Série
          </p>
          <h2 className="mb-6 font-display text-2xl font-light text-neutral-900">
            Femmes derrière l'objectif
          </h2>
          <div className="space-y-3">
            {[
              {
                num: '00',
                name: 'Introduction',
                sub: "Elles ont tenu l'appareil",
                href: '/articles/femmes-derriere-l-objectif',
              },
              {
                num: '01',
                name: 'Vivian Maier',
                sub: 'La nourrice aux 100 000 négatifs',
                href: '/articles/vivian-maier',
              },
              {
                num: '02',
                name: 'Dorothea Lange',
                sub: 'Migrant Mother',
                href: '/articles/dorothea-lange',
              },
              {
                num: '03',
                name: 'Lee Miller',
                sub: 'Sortir du cadre',
                href: '/articles/lee-miller',
              },
              {
                num: '04',
                name: 'Claude Cahun',
                sub: 'Se photographier contre',
                href: '/articles/claude-cahun',
              },
            ].map(({ num, name, sub, href }) => (
              <Link
                key={num}
                to={href}
                className="group flex items-center gap-4 border border-neutral-100 p-4 transition-colors hover:border-neutral-300"
              >
                <span className="font-display text-2xl font-light text-neutral-200 group-hover:text-neutral-300">
                  {num}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-light text-neutral-900">{name}</p>
                  <p className="text-xs font-light text-neutral-400">{sub}</p>
                </div>
                <span
                  className="text-neutral-300 group-hover:text-neutral-600"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── NEWSLETTER ────────────────────────────────────────────── */}
        <section className="mt-10 border border-neutral-200 bg-neutral-50 p-6">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Newsletter
          </p>
          <h2 className="mb-2 font-display text-xl font-light text-neutral-900">
            Des chroniques de livres chaque mois
          </h2>
          <p className="mb-5 text-sm font-light leading-relaxed text-neutral-500">
            Un email par mois : un portrait de femme artiste oubliée, les
            nouveaux épisodes, les chroniques de livres et les actualités du
            projet. Gratuit, sans spam.
          </p>
          <Link
            to="/newsletter"
            className="inline-block border border-neutral-900 bg-neutral-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-neutral-700"
          >
            S'abonner Gratuitement <span aria-hidden="true">→</span>
          </Link>
        </section>

        <div className="mb-20" />
      </div>
    </Layout>
  );
}

export const Head = ({ location }: { location: { pathname: string } }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Les meilleurs livres sur les femmes photographes — notre sélection',
    description:
      "Biographies de Vivian Maier, Dorothea Lange, Lee Miller, et œuvres de Claude Cahun : notre sélection de livres vérifiés pour aller plus loin dans la découverte des femmes photographes oubliées par l'histoire de l'art.",
    url: `https://www.artaufeminin.fr${location.pathname}`,
    inLanguage: 'fr',
    author: {
      '@type': 'Person',
      name: 'Aldjia Boughias',
      url: 'https://www.artaufeminin.fr/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ART AU FÉMININ',
      url: 'https://www.artaufeminin.fr',
    },
  };

  return (
    <SEO
      title="Livres sur les femmes photographes : notre sélection — ART AU FÉMININ"
      description="Biographies de Vivian Maier, Dorothea Lange, Lee Miller et œuvres de Claude Cahun : notre sélection de livres pour découvrir les femmes photographes oubliées par l'histoire de l'art."
      url={`https://www.artaufeminin.fr${location.pathname}`}
      jsonLd={jsonLd}
    />
  );
};
