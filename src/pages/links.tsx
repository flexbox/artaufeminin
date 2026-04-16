import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';

import SEO from '../components/seo';

// Exported for use in episode.tsx platform list
export const allPodcastPlatforms = [
  {
    name: 'Anchor',
    url: 'https://anchor.fm/artaufeminin/',
    imageUrl:
      'https://raw.githubusercontent.com/flexbox/artaufeminin/master/src/images/logo-links.svg',
  },
  {
    name: 'Apple podcasts',
    url: 'https://podcasts.apple.com/us/podcast/art-au-feminin/id1493131152',
    imageUrl:
      'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/itunes_podcasts.svg',
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/us/show/2157592',
    imageUrl:
      'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/deezer.svg',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/show/18f84r0ic2PUenYvBRr2Ps',
    imageUrl:
      'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/spotify.svg',
  },
];

interface LinkItem {
  name: string;
  url: string;
  imageUrl?: string;
  description?: string;
}

function LinkRow({ item }: { item: LinkItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-sm border border-clay-200 bg-cream-50 px-5 py-4 transition-all hover:border-clay-400 hover:bg-cream-100 hover:shadow-sm"
    >
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.name}
          className="size-7 shrink-0 object-contain"
        />
      )}
      <div className="flex-1">
        <span className="text-sm font-semibold text-stone-800 transition-colors group-hover:text-clay-500">
          {item.name}
        </span>
        {item.description && (
          <p className="mt-0.5 text-xs text-stone-400">{item.description}</p>
        )}
      </div>
      <span className="text-clay-300 transition-transform group-hover:translate-x-0.5 group-hover:text-clay-500">
        →
      </span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay-500">
      {children}
    </p>
  );
}

export default function LinksPage(): ReactElement {
  return (
    <div className="min-h-screen bg-cream-100 px-4 py-12">
      <div className="mx-auto max-w-sm">

        {/* ── PROFIL ───────────────────────────────────────────────── */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 size-24 overflow-hidden rounded-full border-2 border-clay-200">
            <StaticImage
              src="../images/logo-podcast-art-au-feminin.png"
              alt="ART au féminin"
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="font-display text-2xl font-semibold text-stone-900">
            ART <span className="italic font-light">au féminin</span>
          </h1>
          <p className="mt-1 text-sm text-stone-500">@artaufeminin</p>
          <p className="mx-auto mt-3 max-w-xs text-xs leading-relaxed text-stone-400">
            Un podcast sur les femmes artistes qui ont façonné l'histoire de l'art.
            Par Aldjia Boughias.
          </p>
        </div>

        {/* ── GALERIE — annonce mise en avant ──────────────────────── */}
        <div className="mb-8 overflow-hidden rounded-sm bg-stone-900">
          <div className="p-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-clay-300">
              Bientôt · Première exposition
            </p>
            <p className="font-display text-lg font-semibold text-white">
              Galerie{' '}
              <span className="italic font-light text-clay-300">ART au féminin</span>
            </p>
            <p className="mt-0.5 font-display text-base font-light italic text-stone-400">
              « Sororité » — ~20 artistes
            </p>
            <p className="mt-3 text-xs leading-relaxed text-stone-400">
              Une galerie d'art immersive en 3D dédiée aux femmes artistes.
              Abonnez-vous à la newsletter pour suivre les coulisses et recevoir
              la date d'ouverture en avant-première.
            </p>
            <a
              href="/newsletter"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-clay-500/50 bg-clay-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-clay-300 transition-colors hover:bg-clay-500/20"
            >
              ✦ Être informée en avant-première
            </a>
          </div>
        </div>

        {/* ── ÉCOUTER ──────────────────────────────────────────────── */}
        <div className="mb-8">
          <SectionLabel>Écouter le podcast</SectionLabel>
          <div className="space-y-2">
            {allPodcastPlatforms
              .filter((p) => p.name !== 'Anchor')
              .map((platform) => (
                <LinkRow key={platform.name} item={platform} />
              ))}
          </div>
        </div>

        {/* ── CONTENU ──────────────────────────────────────────────── */}
        <div className="mb-8">
          <SectionLabel>Explorer le contenu</SectionLabel>
          <div className="space-y-2">
            {[
              {
                name: 'Tous les épisodes',
                url: 'https://artaufeminin.fr/podcasts',
                description: 'Parcourez tous les épisodes du podcast',
              },
              {
                name: 'Articles',
                url: 'https://artaufeminin.fr/articles',
                description: 'Des portraits de femmes artistes',
              },
              {
                name: 'Livres & chroniques',
                url: 'https://artaufeminin.fr/livres',
                description: 'Sélections de lectures sur l\'art au féminin',
              },
              {
                name: 'Citations',
                url: 'https://artaufeminin.fr/citations',
                description: 'Des paroles de femmes artistes qui traversent le temps',
              },
            ].map((item) => (
              <LinkRow key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* ── COMMUNAUTÉ ───────────────────────────────────────────── */}
        <div className="mb-8">
          <SectionLabel>Communauté</SectionLabel>
          <div className="space-y-2">
            {[
              {
                name: 'Instagram',
                url: 'https://instagram.com/artaufeminin',
                imageUrl:
                  'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/instagram.svg',
                description: '@artaufeminin',
              },
              {
                name: 'Facebook',
                url: 'https://www.facebook.com/podcastart',
                imageUrl:
                  'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/facebook.svg',
              },
              {
                name: 'Newsletter',
                url: 'https://artaufeminin.fr/newsletter',
                description: 'Recevez les épisodes directement par email',
              },
            ].map((item) => (
              <LinkRow key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* ── SOUTENIR ─────────────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel>Soutenir le podcast</SectionLabel>
          <a
            href="https://fr.tipeee.com/art-au-feminin"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-sm border border-clay-300 bg-clay-100 px-5 py-4 transition-all hover:border-clay-500 hover:bg-clay-200"
          >
            <div>
              <span className="text-sm font-semibold text-clay-700">
                Soutenir sur Tipeee
              </span>
              <p className="mt-0.5 text-xs text-clay-500">
                Chaque contribution aide à produire de nouveaux épisodes
              </p>
            </div>
            <span className="text-clay-400 transition-transform group-hover:translate-x-0.5 group-hover:text-clay-600">
              →
            </span>
          </a>
        </div>

        {/* ── PIED DE PAGE ─────────────────────────────────────────── */}
        <p className="text-center text-xs text-stone-400">
          © {new Date().getFullYear()} ART au féminin · Par{' '}
          <a
            href="https://aldjia.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline hover:text-clay-500"
          >
            Aldjia Boughias
          </a>
        </p>

      </div>
    </div>
  );
}

export const Head = () => (
  <SEO
    title="ART au féminin — Tous les liens"
    description="Retrouvez ART au féminin sur Apple Podcasts, Spotify, Deezer, Instagram, et découvrez la future Galerie immersive 3D dédiée aux femmes artistes."
  />
);
