import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { RichText } from 'prismic-reactjs';
import React, { useMemo } from 'react';

import { ContentCard } from '../components/content-card';
import { FeaturedCard } from '../components/featured-card';
import Layout from '../components/layout';
import { useAudioPlayer } from '../components/player/AudioProvider';
import { PlayButton } from '../components/player/PlayButton';
import SEO from '../components/seo';
import { EXPO, ExpoStatus, useExpoStatus } from '../utils/expo';
import { stripHtml } from '../utils/html';
import { slugify } from '../utils/slugify';

/* ─── Galerie : exposition en cours ou à venir ─────────────────── */
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

/* ─── Dernier épisode : lecture en un clic dans le lecteur du site ── */
function formatMinutes(duration?: string): string | null {
  if (!duration) return null;
  const seconds = duration.includes(':')
    ? duration
        .split(':')
        .map(Number)
        .reduce((total, part) => total * 60 + part, 0)
    : Number(duration);
  if (!seconds) return null;
  return `${Math.max(1, Math.round(seconds / 60))} min`;
}

function LatestEpisodeBar({ episode }: { episode: any }) {
  const href = `/podcasts/${slugify(episode.title)}/`;
  const audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: { src: episode.enclosure.url, type: 'audio/mpeg' },
      link: href,
    }),
    [episode, href]
  );
  const player = useAudioPlayer(audioPlayerData);
  const minutes = formatMinutes(episode.itunes.duration);

  return (
    <div className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex w-page max-w-6xl items-center gap-5 py-5 lg:w-page-lg">
        <PlayButton player={player} size="small" />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Dernier épisode
            <span className="font-normal normal-case tracking-normal">
              {' '}
              <span className="sm:hidden">
                · S{episode.itunes.season} · É{episode.itunes.episode}
              </span>
              <span className="hidden sm:inline">
                · Saison {episode.itunes.season} · Épisode 
                {episode.itunes.episode}
              </span>
              {minutes && ` · ${minutes.replace(' ', ' ')}`}
            </span>
          </p>
          <Link
            to={href}
            className="mt-1 line-clamp-2 font-display text-base font-light leading-snug text-neutral-900 transition-colors hover:text-neutral-500 sm:truncate lg:text-lg"
          >
            {episode.title}
          </Link>
        </div>
        <Link
          to={href}
          className="hidden shrink-0 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-900 md:block"
        >
          Voir l'épisode <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */
const IndexPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes;
  const allArticles = data.allPrismicBlogPost.nodes;
  const [latestEpisode, featuredEpisode, ...gridEpisodes] = allEpisodes;
  const expoStatus = useExpoStatus();

  return (
    <Layout>
      {/* ── HERO — Artemisia Gentileschi, La Pittura ───────────────── */}
      {/* Mobile : tableau au-dessus, texte en dessous (le visage n'est jamais
          recouvert). Desktop : texte posé sur la toile vide, à gauche. */}
      <section aria-labelledby="hero-heading">
        <div className="relative bg-neutral-950 lg:h-[85vh] lg:min-h-[560px]">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:absolute lg:inset-0 lg:aspect-auto">
            <StaticImage
              src="../images/hero-artemisia-gentileschi-la-pittura.jpg"
              alt="Artemisia Gentileschi, Autoportrait en allégorie de la Peinture (vers 1638–1639) : la peintre, pinceau levé, au travail devant sa toile."
              layout="fullWidth"
              objectFit="cover"
              objectPosition="70% 35%"
              loading="eager"
              fetchPriority="high"
              style={{ position: 'absolute', inset: 0, height: '100%' }}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950 to-transparent lg:hidden" />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:block" />
          </div>

          <div className="relative pb-14 lg:absolute lg:inset-0 lg:flex lg:items-center lg:pb-0">
            <div className="mx-auto w-page max-w-6xl lg:w-page-lg">
              <div className="max-w-xl">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                  Média culturel
                </p>
                <h1
                  id="hero-heading"
                  className="font-display text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
                >
                  <span className="sr-only">
                    ART AU FÉMININ, le média culturel sur les femmes artistes
                    :{' '}
                  </span>
                  Elles ont créé,{' '}
                  <span className="block italic">
                    l'Histoire les a oubliées.
                  </span>
                </h1>
                <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
                  Podcast, articles, chroniques de livres et galerie 3D pour
                  redécouvrir les femmes artistes qui ont façonné l'Art, de
                  l'Antiquité à aujourd'hui.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/podcasts"
                    className="whitespace-nowrap border border-white bg-white px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-colors hover:bg-neutral-200"
                  >
                    Écouter le Podcast <span aria-hidden="true">→</span>
                  </Link>
                  <Link
                    to="/articles"
                    className="whitespace-nowrap border border-white/60 px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-white"
                  >
                    Lire les Articles <span aria-hidden="true">→</span>
                  </Link>
                </div>

                {/* Légende de l'œuvre */}
                <p className="mt-10 text-xs leading-relaxed text-white/60">
                  <Link
                    to="/articles/artemisia-gentileschi-peintre-baroque/"
                    className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                  >
                    Artemisia Gentileschi
                  </Link>
                  ,{' '}
                  <span className="italic">
                    Autoportrait en allégorie de la Peinture
                  </span>
                  , v. 1638–1639. Royal Collection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {latestEpisode && <LatestEpisodeBar episode={latestEpisode} />}
      </section>

      {/* ── CHIFFRES CLÉS ────────────────────────────────────────── */}
      {/* 2 × 2 sur mobile, une ligne de 4 ensuite */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-neutral-200 sm:grid-cols-4">
          {[
            { number: '+100', label: 'Épisodes' },
            {
              number: String(latestEpisode?.itunes?.season ?? 6),
              label: 'Saisons',
            },
            { number: '2019', label: 'Depuis' },
            { number: '1', label: 'Galerie 3D' },
          ].map(({ number, label }) => (
            <div key={label} className="bg-white py-8 text-center">
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

        {/* Grande carte : avant-dernier épisode (le dernier est dans la bande
            de lecture sous le hero) */}
        {featuredEpisode && (
          <FeaturedCard
            href={`/podcasts/${slugify(featuredEpisode.title)}/`}
            imageUrl={featuredEpisode.itunes.image}
            imageAlt={featuredEpisode.title}
            label={`Saison ${featuredEpisode.itunes.season} · Épisode ${featuredEpisode.itunes.episode}`}
            title={featuredEpisode.title}
            description={
              featuredEpisode.itunes.summary
                ? stripHtml(featuredEpisode.itunes.summary).substring(0, 240) +
                  '…'
                : undefined
            }
            cta={
              <Link
                to={`/podcasts/${slugify(featuredEpisode.title)}/`}
                aria-label={`Écouter l'épisode : ${featuredEpisode.title}`}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-900"
              >
                Écouter l'Épisode <span aria-hidden="true">→</span>
              </Link>
            }
          />
        )}

        {/* Grille des épisodes suivants */}
        {gridEpisodes.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-neutral-200 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {gridEpisodes.map((episode: any) => (
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
    allAnchorEpisode(sort: { isoDate: DESC }, limit: 5) {
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
      title="ART AU FÉMININ — Média culturel et podcast sur les femmes artistes"
      description="Femmes artistes oubliées par l'Histoire de l'Art — redécouvrez leurs œuvres et leurs parcours avec ART AU FÉMININ : podcast, articles, portraits et chroniques présentés par Aldjia Boughias."
      url={`https://artaufeminin.fr${location.pathname}`}
      jsonLd={jsonLd}
    />
  );
};

export default IndexPage;
