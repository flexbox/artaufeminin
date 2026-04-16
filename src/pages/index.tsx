import { Link, graphql } from 'gatsby';
import React from 'react';

import Button from '../components/button';
import { Hero } from '../components/hero';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Text from '../components/text';
import { ArticlesHero } from '../components/articlesHero';

const IndexPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes;
  const allArticles = data.allPrismicBlogPost.nodes;
  const latestEpisode = allEpisodes[0];

  return (
    <Layout withInstagram={true}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="-mx-4 -mt-12 overflow-hidden border-b border-clay-200 bg-cream-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-20 lg:px-16 lg:py-32">

          {/* Texte éditorial */}
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-clay-500">
              Un podcast par Aldjia Boughias
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.1] tracking-tight text-stone-900 sm:text-6xl lg:text-[5rem]">
              Les femmes artistes<br />
              <span className="italic font-light">qui ont façonné</span><br />
              l'histoire de l'art
            </h1>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-stone-500 lg:mx-0 lg:text-lg">
              Un podcast pour redécouvrir les créatrices qui ont marqué l'art à travers les siècles. Trop souvent oubliées — enfin racontées.
            </p>
            <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row lg:justify-start justify-center">
              <Button as="a" href="/podcasts" variant="outlineDark" size="sm">
                Écouter les podcasts
              </Button>
              <Link
                to="/articles"
                className="text-sm font-semibold uppercase tracking-widest text-stone-400 hover:text-clay-500 transition-colors"
              >
                Lire les articles →
              </Link>
            </div>
          </div>

          {/* Pochette du dernier épisode */}
          {latestEpisode && (
            <div className="mt-16 flex justify-center lg:mt-0 lg:flex-shrink-0">
              <div className="relative">
                {/* Cadres décoratifs décalés */}
                <div className="absolute -right-5 -top-5 h-full w-full rounded border border-clay-300/70" />
                <div className="absolute -right-10 -top-10 h-full w-full rounded border border-clay-200/50" />

                <Link to={`/podcasts/${latestEpisode.guid}`} className="block">
                  <img
                    src={latestEpisode.itunes.image}
                    alt={latestEpisode.title}
                    className="relative w-56 rounded shadow-2xl lg:w-72 aspect-square object-cover"
                  />
                </Link>

                {/* Info épisode sous la pochette */}
                <div className="mt-5 text-center lg:text-left">
                  <p className="text-xs font-semibold uppercase tracking-widest text-clay-500">
                    Dernier épisode · S{latestEpisode.itunes.season} E{latestEpisode.itunes.episode}
                  </p>
                  <p className="mt-1 font-display text-sm font-medium leading-snug text-stone-600 max-w-xs">
                    {latestEpisode.title}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── PODCASTS ─────────────────────────────────────────────── */}
      <section className="m-auto mb-4 mt-20 w-3/4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Derniers épisodes
        </p>
        <Text
          as="h2"
          variant="h1"
          className="mb-8 text-4xl leading-tight md:text-5xl"
        >
          Podcasts sur les femmes artistes
        </Text>
      </section>

      <Hero allEpisodes={allEpisodes} />

      <div className="m-auto w-3/4">
        <hr className="separator m-auto my-4" />
      </div>

      {/* ── ARTICLES ─────────────────────────────────────────────── */}
      <section className="m-auto mb-4 w-3/4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Derniers articles
        </p>
        <Text
          as="h2"
          variant="h1"
          className="mb-8 text-4xl leading-tight md:text-5xl"
        >
          Articles sur les femmes artistes
        </Text>
      </section>

      <ArticlesHero allArticles={allArticles} />

      {/* ── GALERIE 3D ───────────────────────────────────────────── */}
      <section className="-mx-4 my-24 overflow-hidden bg-stone-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-20 lg:px-16 lg:py-28">

          {/* Texte */}
          <div className="flex-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-clay-300">
              Bientôt disponible · Première exposition
            </p>
            <h2 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Galerie{' '}
              <span className="italic font-light text-clay-300">ART au féminin</span>
            </h2>
            <p className="mt-4 font-display text-2xl font-light italic text-stone-300 md:text-3xl">
              « Sororité »
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone-400">
              Une galerie d'art immersive en 3D dédiée aux femmes artistes.
              La première exposition réunit une vingtaine d'artistes autour du thème de
              la sororité — ce lien puissant entre femmes qui traverse l'histoire de l'art.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="/galerie"
                className="inline-flex items-center gap-2 rounded-full border border-clay-500/50 bg-clay-500/10 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-clay-300 transition-colors hover:bg-clay-500/20"
              >
                ✦ Découvrir la galerie →
              </a>
            </div>
          </div>

          {/* Visuel décoratif */}
          <div className="mt-16 flex-shrink-0 lg:mt-0">
            <div className="relative flex items-center justify-center">
              {/* Cercles concentriques évoquant l'espace 3D */}
              <div className="absolute size-72 rounded-full border border-white/5" />
              <div className="absolute size-56 rounded-full border border-white/8" />
              <div className="absolute size-40 rounded-full border border-clay-500/20" />

              {/* Centre */}
              <div className="relative flex size-28 items-center justify-center rounded-full border border-clay-500/40 bg-stone-800">
                <span className="font-display text-4xl font-light italic text-clay-300">
                  ✦
                </span>
              </div>

              {/* Points orbitaux représentant les ~20 artistes */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                const angle = (i / 8) * 360;
                const rad = (angle * Math.PI) / 180;
                const r = 110;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                  <div
                    key={i}
                    className="absolute size-2 rounded-full bg-clay-400/60"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  />
                );
              })}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
                const angle = (i / 12) * 360 + 15;
                const rad = (angle * Math.PI) / 180;
                const r = 140;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                  <div
                    key={i}
                    className="absolute size-1.5 rounded-full bg-stone-500/60"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  />
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA APPLE PODCAST ────────────────────────────────────── */}
      <section className="m-auto my-24 w-11/12 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Soutenez le podcast
        </p>
        <Text
          as="h3"
          variant="h2"
          className="mb-4 text-2xl leading-snug md:text-3xl"
        >
          Vous aimez le podcast ?
        </Text>
        <Text as="p" variant="p" className="mb-8 text-stone-500">
          La meilleure façon de soutenir ART au féminin est de laisser une évaluation sur Apple Podcasts. Cela prend une minute et aide énormément.
        </Text>
        <Button
          as="a"
          href="https://podcasts.apple.com/fr/podcast/art-au-feminin/id1493131152"
          variant="outlineDark"
          size="s"
          className="mx-auto"
        >
          Laisser 5 ⭐ sur Apple Podcasts
        </Button>
      </section>

    </Layout>
  );
};

export const indexPageQuery = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
    allAnchorEpisode(limit: 3) {
      nodes {
        ...AnchorEpisodeFragment
      }
    }
    allPrismicBlogPost(limit: 3, sort: { first_publication_date: DESC }) {
      nodes {
        ...PrismicBlogPostFragment
      }
    }
  }

  fragment PrismicBlogPostFragment on PrismicBlogPost {
    uid
    data {
      date
      title {
        richText
      }
      description {
        richText
      }
      image {
        alt
        copyright
        url
        gatsbyImageData
      }
    }
  }

  fragment AnchorEpisodeFragment on AnchorEpisode {
    id
    guid
    link
    title
    itunes {
      summary
      image
      episode
      season
      duration
    }
    enclosure {
      url
    }
  }
`;

export const Head = () => {
  return (
    <SEO
      title="ART au féminin — Le podcast sur les femmes artistes et l'histoire de l'art"
      description="Un podcast présenté par Aldjia Boughias pour redécouvrir les femmes artistes qui ont marqué l'histoire de l'art. Épisodes, portraits et articles à écouter et à lire."
    />
  );
};

export default IndexPage;
