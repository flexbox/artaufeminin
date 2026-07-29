import { Link, graphql } from 'gatsby';
import React, { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { stripHtml } from '../utils/html';
import { slugify } from '../utils/slugify';

export default function CommencerPage({ data }): ReactElement {
  const episodes = data.allAnchorEpisode.nodes;

  return (
    <Layout withInstagram={false}>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="-mx-4 border-b border-neutral-200">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Vous découvrez ART AU FÉMININ ?
          </p>
          <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
            Par où <span className="italic">commencer ?</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-neutral-500">
            ART AU FÉMININ est un podcast et un média dédié aux femmes artistes
            — celles que l'Histoire de l'Art a trop souvent ignorées. Voici le
            meilleur point d'entrée pour découvrir le projet.
          </p>
        </div>
      </section>

      {/* ── LE PROJET EN 3 POINTS ────────────────────────────────── */}
      <section className="mx-auto my-16 w-11/12 max-w-3xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Le Projet
        </p>
        <div className="grid grid-cols-1 gap-px border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
          {[
            {
              number: '01',
              label: 'Un Podcast',
              desc: "Des épisodes sur les femmes artistes qui ont marqué l'Histoire — de l'Antiquité à aujourd'hui. Avec des historiennes, conservatrices et artistes.",
            },
            {
              number: '02',
              label: 'Un Média',
              desc: 'Des articles, des chroniques de livres et des citations pour aller plus loin. Tout le contenu est gratuit et accessible à toutes.',
            },
            {
              number: '03',
              label: 'Une Communauté',
              desc: 'Une newsletter mensuelle, une galerie 3D en préparation et des événements en présentiel pour celles qui veulent aller encore plus loin.',
            },
          ].map(({ number, label, desc }) => (
            <div key={number} className="bg-white p-8">
              <p className="mb-3 font-display text-3xl font-light text-neutral-200">
                {number}
              </p>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                {label}
              </p>
              <p className="text-sm font-light leading-relaxed text-neutral-500">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ÉPISODES POUR COMMENCER ───────────────────────────────── */}
      <section className="mx-auto mb-16 w-11/12 max-w-3xl">
        <div className="mb-8 flex items-baseline justify-between border-b border-neutral-200 pb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900">
            Épisodes pour commencer
          </p>
          <Link
            to="/podcasts"
            aria-label="Voir tous les épisodes"
            className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-colors hover:text-neutral-900"
          >
            Tous les épisodes <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="space-y-4">
          {episodes.map((episode: any, index: number) => {
            const summary = episode.itunes.summary
              ? stripHtml(episode.itunes.summary).substring(0, 140) + '…'
              : '';
            return (
              <Link
                key={episode.guid}
                to={`/podcasts/${slugify(episode.title)}/`}
                aria-label={`Écouter l'épisode : ${episode.title}`}
                className="group flex items-start gap-6 border border-neutral-200 p-6 transition-colors hover:border-neutral-400"
              >
                <span className="shrink-0 font-display text-2xl font-light text-neutral-200 transition-colors group-hover:text-neutral-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    Saison {episode.itunes.season} · Épisode{' '}
                    {episode.itunes.episode}
                  </p>
                  <p className="font-display text-lg font-light leading-snug text-neutral-900 transition-colors group-hover:text-neutral-600">
                    {episode.title}
                  </p>
                  {summary && (
                    <p className="mt-2 text-sm font-light leading-relaxed text-neutral-400">
                      {summary}
                    </p>
                  )}
                </div>
                <span
                  className="mt-1 shrink-0 text-neutral-300 transition-colors group-hover:text-neutral-600"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── EXPLORER ─────────────────────────────────────────────── */}
      <section className="mx-auto mb-16 w-11/12 max-w-3xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Explorer le Contenu
        </p>
        <div className="grid grid-cols-2 gap-px border border-neutral-200 bg-neutral-200 lg:grid-cols-4">
          {[
            {
              label: 'Podcasts',
              href: '/podcasts',
              desc: '+100 épisodes sur les femmes artistes.',
            },
            {
              label: 'Articles',
              href: '/articles',
              desc: 'Portraits et analyses approfondis.',
            },
            {
              label: 'Livres',
              href: '/livres',
              desc: 'Chroniques et sélections de lecture.',
            },
            {
              label: 'Citations',
              href: '/citations',
              desc: 'Paroles de femmes artistes à travers les siècles.',
            },
          ].map(({ label, href, desc }) => (
            <Link
              key={label}
              to={href}
              className="group bg-white p-6 transition-colors hover:bg-neutral-50"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-colors group-hover:text-neutral-700">
                {label}
              </p>
              <p className="text-sm font-light leading-relaxed text-neutral-500">
                {desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────────── */}
      <section className="-mx-4 border-y border-neutral-200 bg-neutral-900 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
            Newsletter Mensuelle
          </p>
          <h2 className="font-display text-3xl font-light leading-tight text-white md:text-4xl">
            Restez dans la boucle
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm font-light leading-relaxed text-white/50">
            Un email par mois : un portrait de femme artiste, les nouveaux
            épisodes et les actualités du projet. Gratuit, sans spam.
          </p>
          <Link
            to="/newsletter"
            className="mt-8 inline-block border border-white px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-neutral-900"
          >
            S'abonner à la Newsletter <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── À PROPOS ─────────────────────────────────────────────── */}
      <section className="mx-auto mb-20 mt-12 max-w-3xl px-6 lg:px-0">
        <div className="flex flex-col gap-6 border-t border-neutral-200 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Le projet
            </p>
            <p className="mt-2 font-display text-xl font-light text-neutral-900">
              Créé par Aldjia Boughias
            </p>
            <p className="mt-2 max-w-sm text-sm font-light leading-relaxed text-neutral-500">
              Développeuse web orientée Art et Culture, exploratrice de
              l'Histoire de l'Art le reste du temps.
            </p>
          </div>
          <Link
            to="/about"
            className="shrink-0 border border-neutral-300 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            En savoir plus <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allAnchorEpisode(sort: { isoDate: DESC }, limit: 3) {
      nodes {
        guid
        title
        itunes {
          summary
          episode
          season
        }
      }
    }
  }
`;

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="Par où commencer ? — ART AU FÉMININ, le podcast sur les femmes artistes"
    description="Vous découvrez ART AU FÉMININ ? Voici le meilleur point d'entrée : le podcast, les articles, les chroniques de livres et la newsletter mensuelle sur les femmes artistes oubliées par l'Histoire de l'Art."
    url={`https://www.artaufeminin.fr${location.pathname}`}
  />
);
