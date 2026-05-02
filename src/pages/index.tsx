import { Link, graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import heroImage from '../images/instagram/votre-image.jpg';

/* ─── Grande card featured (image gauche + texte droite) ────────── */
function FeaturedItem({
  href,
  imageUrl,
  imageAlt,
  label,
  title,
  description,
  cta,
  imageRight = false,
}: {
  href: string;
  imageUrl: string;
  imageAlt: string;
  label: string;
  title: string;
  description?: string;
  cta: string;
  imageRight?: boolean;
}) {
  const image = (
    <Link to={href} className="block overflow-hidden bg-neutral-100">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        style={{ aspectRatio: '16/9', minHeight: 320 }}
      />
    </Link>
  );

  const text = (
    <div className={`flex flex-col justify-end border-t border-neutral-200 pt-6 lg:border-t-0 lg:px-10 lg:pb-8 lg:pt-0 ${imageRight ? 'lg:border-r' : 'lg:border-l'}`}>
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
        {label}
      </p>
      <Link to={href}>
        <h3 className="mt-3 font-display text-2xl font-light leading-snug text-neutral-900 transition-colors group-hover:text-neutral-500 lg:text-3xl xl:text-4xl">
          {title}
        </h3>
      </Link>
      {description && (
        <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400 line-clamp-5">
          {description}
        </p>
      )}
      <Link
        to={href}
        className="mt-6 inline-block text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-colors hover:text-neutral-900"
      >
        {cta} →
      </Link>
    </div>
  );

  return (
    <article className={`group grid grid-cols-1 ${imageRight ? 'lg:grid-cols-[2fr_3fr]' : 'lg:grid-cols-[3fr_2fr]'}`}>
      {imageRight ? text : image}
      {imageRight ? image : text}
    </article>
  );
}

/* ─── Petite card (grille secondaire) ──────────────────────────── */
function ContentItem({
  href,
  imageUrl,
  imageAlt,
  label,
  title,
  detail,
}: {
  href: string;
  imageUrl: string;
  imageAlt: string;
  label: string;
  title: string;
  detail?: string;
}) {
  return (
    <article className="group">
      <Link to={href} className="block overflow-hidden bg-neutral-100">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full aspect-video object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </Link>
      <div className="mt-3 border-t border-neutral-200 pt-3">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
          {label}
        </p>
        <Link to={href}>
          <h3 className="mt-1.5 font-display text-base font-light leading-snug text-neutral-900 transition-colors group-hover:text-neutral-500 lg:text-lg">
            {title}
          </h3>
        </Link>
        {detail && (
          <p className="mt-1 text-[0.6rem] font-light text-neutral-400">{detail}</p>
        )}
      </div>
    </article>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */
const IndexPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes;
  const allArticles = data.allPrismicBlogPost.nodes;
  const latestEpisode = allEpisodes[0];

  return (
    <Layout withInstagram={false}>

      {/* ── HERO — image plein cadre + strip "Now Open" ─────────── */}
      <section className="-mx-4">

        {/* Image pleine hauteur */}
        <div
          className="relative w-full overflow-hidden bg-neutral-100"
          style={{ height: '85vh', minHeight: 520 }}
        >
          <img
            src={heroImage}
            alt="ART AU FÉMININ"
            className="h-full w-full object-cover object-[center_30%]"
          />
          {/* Gradient + phrase d'accroche */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white/50">
              Art au Féminin
            </p>
            <h2 className="max-w-3xl font-display text-4xl font-light leading-tight text-white lg:text-6xl xl:text-7xl">
              Elles ont créé,{' '}
              <span className="italic">l'Histoire les a oubliées.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-white/60">
              Un podcast pour redécouvrir les femmes artistes qui ont façonné l'Art — de l'Antiquité à aujourd'hui.
            </p>
          </div>
        </div>

        {/* Strip "Now Open" — titre de l'épisode sur une seule ligne */}
        {latestEpisode && (
          <div className="border-b border-neutral-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-5 lg:px-16">
              <span className="shrink-0 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Dernier Épisode
              </span>
              <span className="hidden h-3 w-px shrink-0 bg-neutral-200 sm:block" />
              <span className="flex-1 truncate font-display text-sm font-light text-neutral-900 lg:text-base">
                {latestEpisode.title}
              </span>
              <span className="hidden shrink-0 text-[0.6rem] font-light text-neutral-400 sm:block">
                Saison {latestEpisode.itunes.season} · Épisode {latestEpisode.itunes.episode}
              </span>
              <Link
                to={`/podcasts/${latestEpisode.guid}`}
                className="shrink-0 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-colors hover:text-neutral-900"
              >
                Écouter →
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* ── ÉPISODES ─────────────────────────────────────────────── */}
      <section className="mx-auto mt-16 w-11/12 max-w-7xl">

        {/* En-tête de section */}
        <div className="mb-10 flex items-baseline justify-between border-b border-neutral-200 pb-4">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-900">
            Épisodes
          </span>
          <Link
            to="/podcasts"
            className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-colors hover:text-neutral-900"
          >
            Voir Tous →
          </Link>
        </div>

        {/* Grande card featured — dernier épisode */}
        {allEpisodes[0] && (
          <FeaturedItem
            href={`/podcasts/${allEpisodes[0].guid}`}
            imageUrl={allEpisodes[0].itunes.image}
            imageAlt={allEpisodes[0].title}
            label={`Saison ${allEpisodes[0].itunes.season} · Épisode ${allEpisodes[0].itunes.episode}`}
            title={allEpisodes[0].title}
            description={
              allEpisodes[0].itunes.summary
                ? allEpisodes[0].itunes.summary.replace(/<[^>]*>/g, '').substring(0, 240) + '…'
                : undefined
            }
            cta="Écouter l'Épisode"
          />
        )}

        {/* Grille des épisodes suivants */}
        {allEpisodes.length > 1 && (
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-neutral-200 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {allEpisodes.slice(1).map((episode: any) => (
              <ContentItem
                key={episode.guid}
                href={`/podcasts/${episode.guid}`}
                imageUrl={episode.itunes.image}
                imageAlt={episode.title}
                label={`Saison ${episode.itunes.season} · Épisode ${episode.itunes.episode}`}
                title={episode.title}
                detail={episode.itunes.duration || undefined}
              />
            ))}
          </div>
        )}
      </section>

      {/* ── SÉPARATEUR ───────────────────────────────────────────── */}
      <div className="mx-auto my-20 w-11/12 max-w-7xl border-t border-neutral-200" />

      {/* ── ARTICLES ─────────────────────────────────────────────── */}
      <section className="mx-auto w-11/12 max-w-7xl">

        <div className="mb-10 flex items-baseline justify-between border-b border-neutral-200 pb-4">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-900">
            Articles
          </span>
          <Link
            to="/articles"
            className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400 transition-colors hover:text-neutral-900"
          >
            Voir Tous →
          </Link>
        </div>

        {/* Grande card featured — dernier article */}
        {allArticles[0] && (() => {
          const art = allArticles[0];
          const title = RichText.asText(art.data.title.richText);
          const description = art.data.description?.richText
            ? RichText.asText(art.data.description.richText)
            : undefined;
          return (
            <FeaturedItem
              href={`/articles/${art.uid}`}
              imageUrl={art.data.image.url}
              imageAlt={art.data.image.alt || title}
              label="Article · À la Une"
              title={title}
              description={description ? description.substring(0, 240) + '…' : undefined}
              cta="Lire l'Article"
              imageRight
            />
          );
        })()}

        {/* Grille des articles suivants */}
        {allArticles.length > 1 && (
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-neutral-200 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {allArticles.slice(1).map((article: any) => {
              const title = RichText.asText(article.data.title.richText);
              return (
                <ContentItem
                  key={article.uid}
                  href={`/articles/${article.uid}`}
                  imageUrl={article.data.image.url}
                  imageAlt={article.data.image.alt || title}
                  label="Article"
                  title={title}
                />
              );
            })}
          </div>
        )}
      </section>

      {/* ── GALERIE ───────────────────────────────────────────────── */}
      <section className="-mx-4 mt-24 border-t border-neutral-200 bg-neutral-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-20">
          <div className="max-w-lg">
            <p className="mb-3 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white/40">
              Bientôt Disponible · Première Exposition
            </p>
            <h2 className="font-display text-4xl font-light leading-tight text-white lg:text-5xl">
              Galerie ART AU FÉMININ
            </h2>
            <p className="mt-2 font-display text-xl font-light italic text-white/40">
              « Sororité »
            </p>
            <p className="mt-5 text-sm font-light leading-relaxed text-white/50">
              Une galerie d'Art immersive en 3D dédiée aux femmes artistes.
              La première exposition réunit une vingtaine d'artistes autour du thème
              de la Sororité — ce lien puissant entre femmes qui traverse l'Histoire de l'Art.
            </p>
          </div>
          <a
            href="/galerie"
            className="shrink-0 border border-white/20 px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors hover:border-white/60 hover:text-white"
          >
            Découvrir la Galerie →
          </a>
        </div>
      </section>

      {/* ── APPLE PODCASTS ────────────────────────────────────────── */}
      <section className="mx-auto my-20 w-11/12 max-w-7xl">
        <div className="flex flex-col gap-6 border-t border-neutral-200 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Soutenez le Podcast
            </p>
            <p className="mt-2 font-display text-2xl font-light text-neutral-900">
              Vous aimez ART AU FÉMININ ?
            </p>
          </div>
          <a
            href="https://podcasts.apple.com/fr/podcast/art-au-feminin/id1493131152"
            className="shrink-0 border border-neutral-300 px-6 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            Laisser 5 ★ sur Apple Podcasts
          </a>
        </div>
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
    allAnchorEpisode(limit: 4) {
      nodes {
        ...AnchorEpisodeFragment
      }
    }
    allPrismicBlogPost(limit: 4, sort: { first_publication_date: DESC }) {
      nodes {
        ...PrismicBlogPostFragment
      }
    }
  }

  fragment PrismicBlogPostFragment on PrismicBlogPost {
    uid
    data {
      date
      title { richText }
      description { richText }
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

export const Head = () => (
  <SEO
    title="ART AU FÉMININ — Le podcast sur les femmes artistes et l'Histoire de l'Art"
    description="Un podcast présenté par Aldjia Boughias pour redécouvrir les femmes artistes qui ont marqué l'Histoire de l'Art. Épisodes, portraits et articles à écouter et à lire."
  />
);

export default IndexPage;
