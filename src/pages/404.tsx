import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function NotFoundPage(): ReactElement {
  return (
    <Layout withInstagram={false}>
      <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-0">

        <p className="font-display text-[8rem] font-light leading-none text-neutral-100 md:text-[12rem]">
          404
        </p>

        <h1 className="mt-2 font-display text-3xl font-light text-neutral-900 md:text-4xl">
          Cette page n'existe pas
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-neutral-500">
          La page que vous cherchez a peut-être été déplacée ou supprimée.
          Voici quelques liens pour retrouver votre chemin.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="border border-neutral-900 bg-neutral-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-neutral-700"
          >
            Accueil
          </Link>
          <Link
            to="/podcasts"
            className="border border-neutral-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            Les Podcasts
          </Link>
          <Link
            to="/articles"
            className="border border-neutral-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:border-neutral-500 hover:text-neutral-700"
          >
            Les Articles
          </Link>
        </div>

        <hr className="separator mx-auto mt-16 max-w-xs" />

        <p className="mt-8 font-display text-lg font-light italic text-neutral-400">
          « L'Art, c'est aussi savoir se perdre pour mieux se retrouver. »
        </p>

      </div>
    </Layout>
  );
}

export const Head = () => (
  <SEO
    title="Page introuvable — ART AU FÉMININ"
    description="La page que vous cherchez n'existe pas. Découvrez le podcast ART AU FÉMININ et ses contenus sur les femmes artistes."
    noindex={true}
  />
);
