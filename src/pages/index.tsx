import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { RichText } from 'prismic-reactjs';
import React, { useEffect, useState } from 'react';

import { ContentCard } from '../components/content-card';
import { FeaturedCard } from '../components/featured-card';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { stripHtml } from '../utils/html';
import { slugify } from '../utils/slugify';

/* ─── Galerie : exposition en cours ou à venir ─────────────────── */
const EXPO = {
  title: 'Sororité',
  dates: '25 janvier – 25 février 2027',
  start: new Date('2027-01-25T00:00:00+01:00'),
  end: new Date('2027-02-25T23:59:59+01:00'),
};

type ExpoStatus = 'upcoming' | 'open' | 'closed';

function getExpoStatus(now: Date): ExpoStatus {
  if (now < EXPO.start) return 'upcoming';
  if (now <= EXPO.end) return 'open';
  return 'closed';
}

const EXPO_COPY: Record<ExpoStatus, { eyebrow: string; text: string }> = {
  upcoming: {
    eyebrow: 'Galerie 3D · Prochaine exposition',
    text: "En attendant l'ouverture, la galerie immersive est déjà ouverte à la visite, depuis votre navigateur.",
  },
  open: {
    eyebrow: 'Galerie 3D · Exposition en cours',
    text: 'À visiter dès maintenant dans la galerie immersive, depuis votre navigateur.',
  },
  closed: {
    eyebrow: 'Galerie 3D · Exposition passée',
    text: 'La galerie immersive reste ouverte à la visite, depuis votre navigateur.',
  },
};

// Le statut est recalculé dans le navigateur : le HTML statique peut dater
// du dernier déploiement, la date du jour non.
function useExpoStatus(): ExpoStatus {
  const [status, setStatus] = useState<ExpoStatus>(() =>
    getExpoStatus(new Date())
  );
  useEffect(() => setStatus(getExpoStatus(new Date())), []);
  return status;
}

function GallerySection({
  status,
  className,
}: {
  status: ExpoStatus;
  className: string;
}) {
  const copy = EXPO_COPY[status];

  return (
    <section
      className={`bg-neutral-950 ${className}`}
      aria-labelledby="section-galerie"
    >
      <div className="mx-auto grid w-page max-w-6xl grid-cols-1 gap-12 pt-16 lg:w-page-lg lg:grid-cols-[5fr_4fr] lg:gap-16 lg:pt-24">
        <div className="lg:pb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            {copy.eyebrow}
          </p>
          <h2
            id="section-galerie"
            className="mt-4 font-display text-6xl font-light italic leading-none text-white lg:text-7xl"
          >
            {EXPO.title}
          </h2>
          <p className="mt-5 font-display text-xl font-light text-white/70 lg:text-2xl">
            {EXPO.dates}
          </p>
          <p className="mt-8 text-base leading-relaxed text-white/70">
            Quinze artistes réunies autour de la sororité, ce lien entre femmes
            qui traverse l'histoire de l'art. {copy.text}
          </p>
          <dl className="mt-8 grid grid-cols-3 border-y border-white/10 py-5">
            {[
              ['15', 'Artistes'],
              ['3D', 'Immersive'],
              ['31', 'Jours'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl font-light text-white">
                  {value}
                </dd>
                <dd
                  aria-hidden="true"
                  className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
                >
                  {label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://galerie.artaufeminin.fr"
              className="whitespace-nowrap border border-white bg-white px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-colors hover:bg-neutral-200"
            >
              {status === 'open'
                ? "Voir l'exposition"
                : 'Entrer dans la galerie'}{' '}
              <span aria-hidden="true">→</span>
            </a>
            {status === 'upcoming' && (
              <Link
                to="/galerie"
                className="whitespace-nowrap border border-white/40 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-white"
              >
                M'avertir de l'ouverture
              </Link>
            )}
          </div>
        </div>

        {/* Façade posée sur le bas du bandeau, comme une entrée */}
        <a
          href="https://galerie.artaufeminin.fr"
          tabIndex={-1}
          aria-hidden="true"
          className="-mx-6 block self-end opacity-80 transition-opacity duration-500 hover:opacity-100 lg:-mr-16 lg:ml-0"
        >
          <StaticImage
            src="../images/galerie-facade-trait.png"
            alt=""
            placeholder="none"
            width={800}
            quality={90}
          />
        </a>
      </div>
    </section>
  );
}

/* ─── Soutien : plateformes d'écoute ───────────────────────────── */
const SUPPORT_PLATFORMS = [
  {
    name: 'Apple Podcasts',
    action: 'Laisser une note',
    href: 'https://podcasts.apple.com/fr/podcast/art-au-feminin/id1493131152',
  },
  {
    name: 'Spotify',
    action: 'Laisser une note',
    href: 'https://open.spotify.com/show/18f84r0ic2PUenYvBRr2Ps',
  },
  {
    name: 'Deezer',
    action: "S'abonner",
    href: 'https://www.deezer.com/fr/show/2157592',
  },
];

/* ─── Page ──────────────────────────────────────────────────────── */
const IndexPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes;
  const allArticles = data.allPrismicBlogPost.nodes;
  const latestEpisode = allEpisodes[0];
  const expoStatus = useExpoStatus();

  return (
    <Layout>
      {/* ── HERO — image plein cadre + strip "Now Open" ─────────── */}
      <section aria-labelledby="hero-heading">
        <h1 id="hero-heading" className="sr-only">
          ART AU FÉMININ — Le podcast sur les femmes artistes et l'Histoire de
          l'Art
        </h1>

        {/* Image pleine hauteur */}
        <div
          className="relative w-full overflow-hidden bg-neutral-100"
          style={{ height: '85vh', minHeight: 520 }}
        >
          <StaticImage
            src="../images/instagram/votre-image.jpg"
            alt="ART AU FÉMININ"
            layout="fullWidth"
            objectFit="cover"
            objectPosition="center 30%"
            loading="eager"
            fetchPriority="high"
            style={{ position: 'absolute', inset: 0, height: '100%' }}
          />
          {/* Gradient + phrase d'accroche */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Art au Féminin
            </p>
            <h2 className="max-w-3xl font-display text-4xl font-light leading-tight text-white lg:text-6xl xl:text-7xl">
              Elles ont créé,{' '}
              <span className="italic">l'Histoire les a oubliées.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80">
              Un podcast pour redécouvrir les femmes artistes qui ont façonné
              l'Art — de l'Antiquité à aujourd'hui.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/podcasts"
                className="border border-white/80 bg-white/10 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Écouter le Podcast <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/newsletter"
                className="border border-white/30 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:border-white/60 hover:text-white"
              >
                S'abonner à la Newsletter
              </Link>
            </div>
          </div>
        </div>

        {/* Strip "Now Open" — titre de l'épisode sur une seule ligne */}
        {latestEpisode && (
          <div className="border-b border-neutral-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-5 lg:px-16">
              <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Dernier Épisode
              </span>
              <span className="hidden h-3 w-px shrink-0 bg-neutral-200 sm:block" />
              <span className="flex-1 truncate font-display text-sm font-light text-neutral-900 lg:text-base">
                {latestEpisode.title}
              </span>
              <span className="hidden shrink-0 text-xs text-neutral-500 sm:block">
                Saison {latestEpisode.itunes.season} · Épisode{' '}
                {latestEpisode.itunes.episode}
              </span>
              <Link
                to={`/podcasts/${slugify(latestEpisode.title)}/`}
                aria-label={`Écouter : ${latestEpisode.title}`}
                className="shrink-0 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-900"
              >
                Écouter <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* ── CHIFFRES CLÉS ────────────────────────────────────────── */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-7xl divide-x divide-neutral-200">
          {[
            { number: '+100', label: 'Épisodes' },
            { number: '6', label: 'Saisons' },
            { number: '2019', label: 'Depuis' },
            { number: '1', label: 'Galerie 3D' },
          ].map(({ number, label }) => (
            <div key={label} className="flex-1 py-8 text-center">
              <p className="font-display text-3xl font-light text-neutral-900">
                {number}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ÉPISODES ─────────────────────────────────────────────── */}
      <section
        className="mx-auto mt-16 w-page max-w-6xl lg:w-page-lg"
        aria-labelledby="section-episodes"
      >
        {/* En-tête de section */}
        <div className="mb-10 flex items-baseline justify-between border-b border-neutral-200 pb-4">
          <h2
            id="section-episodes"
            className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Épisodes
          </h2>
          <Link
            to="/podcasts"
            aria-label="Voir tous les épisodes"
            className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-900"
          >
            Voir Tous <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Grande card featured — dernier épisode */}
        {allEpisodes[0] && (
          <FeaturedCard
            href={`/podcasts/${slugify(allEpisodes[0].title)}/`}
            imageUrl={allEpisodes[0].itunes.image}
            imageAlt={allEpisodes[0].title}
            label={`Saison ${allEpisodes[0].itunes.season} · Épisode ${allEpisodes[0].itunes.episode}`}
            title={allEpisodes[0].title}
            description={
              allEpisodes[0].itunes.summary
                ? stripHtml(allEpisodes[0].itunes.summary).substring(0, 240) +
                  '…'
                : undefined
            }
            cta={
              <Link
                to={`/podcasts/${slugify(allEpisodes[0].title)}/`}
                aria-label={`Écouter l'épisode : ${allEpisodes[0].title}`}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-900"
              >
                Écouter l'Épisode <span aria-hidden="true">→</span>
              </Link>
            }
          />
        )}

        {/* Grille des épisodes suivants */}
        {allEpisodes.length > 1 && (
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-neutral-200 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {allEpisodes.slice(1).map((episode: any) => (
              <ContentCard
                key={episode.guid}
                href={`/podcasts/${slugify(episode.title)}/`}
                imageUrl={episode.itunes.image}
                imageAlt={episode.title}
                meta={`Saison ${episode.itunes.season} · Épisode ${episode.itunes.episode}`}
                title={episode.title}
                description={
                  episode.itunes.summary
                    ? stripHtml(episode.itunes.summary).substring(0, 120) + '…'
                    : ''
                }
                action={
                  <Link
                    to={`/podcasts/${slugify(episode.title)}/`}
                    aria-label={`Écouter : ${episode.title}`}
                    className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-900"
                  >
                    Écouter l'Épisode <span aria-hidden="true">→</span>
                  </Link>
                }
              />
            ))}
          </div>
        )}
      </section>

      {/* ── GALERIE (exposition à venir ou en cours) ──────────────── */}
      {expoStatus !== 'closed' ? (
        <GallerySection status={expoStatus} className="my-20" />
      ) : (
        <div className="mx-auto my-20 w-page max-w-6xl border-t border-neutral-200 lg:w-page-lg" />
      )}

      {/* ── ARTICLES ─────────────────────────────────────────────── */}
      <section
        className="mx-auto w-page max-w-6xl lg:w-page-lg"
        aria-labelledby="section-articles"
      >
        <div className="mb-10 flex items-baseline justify-between border-b border-neutral-200 pb-4">
          <h2
            id="section-articles"
            className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-neutral-900"
          >
            Articles
          </h2>
          <Link
            to="/articles"
            aria-label="Voir tous les articles"
            className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-900"
          >
            Voir Tous <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Grande card featured — dernier article */}
        {allArticles[0] &&
          (() => {
            const art = allArticles[0];
            const title = RichText.asText(art.data.title.richText);
            const description = art.data.description?.richText
              ? RichText.asText(art.data.description.richText)
              : undefined;
            return (
              <FeaturedCard
                href={`/articles/${art.uid}`}
                image={art.data.image.gatsbyImageData}
                imageUrl={art.data.image.url}
                imageAlt={art.data.image.alt || title}
                label="Article · À la Une"
                title={title}
                description={
                  description ? description.substring(0, 240) + '…' : undefined
                }
                imageRight
                cta={
                  <Link
                    to={`/articles/${art.uid}`}
                    aria-label={`Lire l'article : ${title}`}
                    className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-900"
                  >
                    Lire l'Article <span aria-hidden="true">→</span>
                  </Link>
                }
              />
            );
          })()}

        {/* Grille des articles suivants */}
        {allArticles.length > 1 && (
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-neutral-200 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {allArticles.slice(1).map((article: any) => {
              const title = RichText.asText(article.data.title.richText);
              const description = article.data.description?.richText
                ? RichText.asText(article.data.description.richText).substring(
                    0,
                    120
                  ) + '…'
                : '';
              return (
                <ContentCard
                  key={article.uid}
                  href={`/articles/${article.uid}`}
                  image={article.data.image.gatsbyImageData}
                  imageUrl={article.data.image.url}
                  imageAlt={article.data.image.alt || title}
                  meta="Article"
                  title={title}
                  description={description}
                  action={
                    <Link
                      to={`/articles/${article.uid}`}
                      aria-label={`Lire : ${title}`}
                      className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-900"
                    >
                      Lire le Portrait <span aria-hidden="true">→</span>
                    </Link>
                  }
                />
              );
            })}
          </div>
        )}
      </section>

      {/* ── GALERIE (exposition passée : redescend en bas de page) ── */}
      {expoStatus === 'closed' && (
        <GallerySection status={expoStatus} className="mt-24" />
      )}

      {/* ── SOUTENIR LE PODCAST ────────────────────────────────────── */}
      <section
        className="mx-auto my-24 w-page max-w-4xl text-center"
        aria-labelledby="section-soutien"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Soutenez le Podcast
        </p>
        <h2
          id="section-soutien"
          className="mt-3 font-display text-3xl font-light leading-snug text-neutral-900 md:text-4xl"
        >
          Vous aimez ART AU FÉMININ ?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
          Une note ou un abonnement sur votre plateforme d'écoute aide d'autres
          personnes à découvrir ces artistes.
        </p>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {SUPPORT_PLATFORMS.map((platform) => (
            <li key={platform.name}>
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center border border-neutral-200 bg-white px-6 py-8 transition-colors hover:border-neutral-900"
              >
                <span className="font-display text-2xl font-light text-neutral-900">
                  {platform.name}
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors group-hover:text-neutral-900">
                  {platform.action} <span aria-hidden="true">→</span>
                </span>
                <span className="sr-only">(ouvre un nouvel onglet)</span>
              </a>
            </li>
          ))}
        </ul>
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
    allAnchorEpisode(sort: { isoDate: DESC }, limit: 4) {
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

export const Head = ({ location }: { location: { pathname: string } }) => {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'ART AU FÉMININ',
      url: 'https://artaufeminin.fr',
      description:
        "Le podcast et le média dédié aux femmes artistes — portraits, histoire de l'art et ressources pour redécouvrir celles que l'Histoire a oubliées.",
      inLanguage: 'fr',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'ART AU FÉMININ',
      url: 'https://artaufeminin.fr',
      description:
        "Média dédié aux femmes artistes : podcast, articles, livres et citations pour rendre visible l'histoire des femmes dans l'Art.",
      logo: 'https://raw.githubusercontent.com/flexbox/artaufeminin/master/src/images/logo-podcast-art-au-feminin.png',
      sameAs: [
        'https://instagram.com/artaufeminin',
        'https://www.facebook.com/podcastart',
        'https://www.linkedin.com/in/art-au-f%C3%A9minin-81106b217/',
        'https://podcasts.apple.com/fr/podcast/art-au-feminin/id1493131152',
        'https://open.spotify.com/show/18f84r0ic2PUenYvBRr2Ps',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'PodcastSeries',
      name: 'ART AU FÉMININ',
      description:
        "Un podcast pour redécouvrir les femmes artistes qui ont façonné l'Art — de l'Antiquité à aujourd'hui.",
      keywords: [
        'femmes artistes',
        'artistes femmes',
        "histoire de l'art",
        'podcast art',
        "femmes dans l'art",
        'artistes oubliées',
        'histoire des femmes',
        'art au féminin',
      ],
      url: 'https://artaufeminin.fr/podcasts',
      inLanguage: 'fr',
      author: {
        '@type': 'Person',
        name: 'Aldjia Boughias',
        url: 'https://artaufeminin.fr/about',
      },
    },
  ];

  return (
    <SEO
      title="ART AU FÉMININ — Le podcast sur les femmes artistes et l'Histoire de l'Art"
      description="Femmes artistes oubliées par l'Histoire de l'Art — redécouvrez leurs œuvres et leurs parcours avec ART AU FÉMININ : podcast, articles, portraits et chroniques présentés par Aldjia Boughias."
      url={`https://artaufeminin.fr${location.pathname}`}
      jsonLd={jsonLd}
    />
  );
};

export default IndexPage;
