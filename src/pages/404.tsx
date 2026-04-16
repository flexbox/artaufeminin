import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function NotFoundPage(): ReactElement {
  return (
    <Layout withInstagram={false}>
      <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-0">

        {/* Numéro décoratif */}
        <p className="font-display text-[8rem] font-light leading-none text-clay-200 md:text-[12rem]">
          404
        </p>

        <h1 className="mt-2 font-display text-3xl font-semibold text-stone-900 md:text-4xl">
          Cette page n'existe pas
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-stone-500">
          La page que vous cherchez a peut-être été déplacée ou supprimée.
          Voici quelques liens pour retrouver votre chemin.
        </p>

        {/* Liens principaux */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-clay-500 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-clay-700"
          >
            Accueil
          </Link>
          <Link
            to="/podcasts"
            className="rounded-full border border-clay-500 px-6 py-3 text-xs font-bold uppercase tracking-widest text-clay-500 transition-colors hover:bg-clay-500 hover:text-white"
          >
            Les podcasts
          </Link>
          <Link
            to="/articles"
            className="rounded-full border border-clay-200 px-6 py-3 text-xs font-bold uppercase tracking-widest text-stone-600 transition-colors hover:border-clay-400 hover:text-clay-500"
          >
            Les articles
          </Link>
        </div>

        {/* Séparateur */}
        <hr className="separator mx-auto mt-16 max-w-xs" />

        {/* Citation de consolation */}
        <p className="mt-8 font-display text-lg font-light italic text-stone-400">
          « L'art, c'est aussi savoir se perdre pour mieux se retrouver. »
        </p>

      </div>
    </Layout>
  );
}

export const Head = () => (
  <SEO
    title="Page introuvable — ART au féminin"
    description="La page que vous cherchez n'existe pas. Découvrez le podcast ART au féminin et ses contenus sur les femmes artistes."
  />
);
