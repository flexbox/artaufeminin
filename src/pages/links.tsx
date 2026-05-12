import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';

import SEO from '../components/seo';

export const allPodcastPlatforms = [
  {
    name: 'Anchor',
    url: 'https://anchor.fm/artaufeminin/',
    imageUrl: 'https://raw.githubusercontent.com/flexbox/artaufeminin/master/src/images/logo-links.svg',
  },
  {
    name: 'Apple podcasts',
    url: 'https://podcasts.apple.com/us/podcast/art-au-feminin/id1493131152',
    imageUrl: 'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/itunes_podcasts.svg',
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/us/show/2157592',
    imageUrl: 'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/deezer.svg',
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/show/18f84r0ic2PUenYvBRr2Ps',
    imageUrl: 'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/spotify.svg',
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
      className="group flex items-center gap-4 border border-neutral-200 bg-white px-5 py-4 transition-all hover:border-neutral-400"
    >
      {item.imageUrl && (
        <img src={item.imageUrl} alt={item.name} className="size-7 shrink-0 object-contain" />
      )}
      <div className="flex-1">
        <span className="text-sm font-light text-neutral-700 transition-colors group-hover:text-neutral-900">
          {item.name}
        </span>
        {item.description && (
          <p className="mt-0.5 text-xs font-light text-neutral-400">{item.description}</p>
        )}
      </div>
      <span className="text-neutral-300 transition-transform group-hover:translate-x-0.5 group-hover:text-neutral-600">
        →
      </span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
      {children}
    </p>
  );
}

export default function LinksPage(): ReactElement {
  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="mx-auto max-w-sm">

        {/* ── PROFIL ───────────────────────────────────────────────── */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-5 size-24 overflow-hidden border border-neutral-200">
            <StaticImage
              src="../images/logo-podcast-art-au-feminin.png"
              alt="ART AU FÉMININ"
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="font-display text-2xl font-light text-neutral-900">
            ART AU FÉMININ
          </h1>
          <p className="mt-1 text-sm font-light text-neutral-400">@artaufeminin</p>
          <p className="mx-auto mt-3 max-w-xs text-xs font-light leading-relaxed text-neutral-400">
            Un podcast sur les femmes artistes qui ont façonné l'Histoire de l'Art.
            Par Aldjia Boughias.
          </p>
        </div>

        {/* ── GALERIE ──────────────────────────────────────────────── */}
        <div className="mb-8 border border-neutral-900 bg-neutral-900">
          <div className="p-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Bientôt · Première Exposition
            </p>
            <p className="font-display text-lg font-light text-white">
              Galerie ART AU FÉMININ
            </p>
            <p className="mt-0.5 font-display text-base font-light italic text-white/40">
              « Sororité » — ~20 artistes
            </p>
            <p className="mt-3 text-xs font-light leading-relaxed text-white/40">
              Une galerie d'Art immersive en 3D dédiée aux femmes artistes.
              Abonnez-vous à la newsletter pour suivre les coulisses et recevoir
              la date d'ouverture en avant-première.
            </p>
            <a
              href="/newsletter"
              className="mt-4 inline-block border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors hover:border-white/50 hover:text-white/80"
            >
              Être informée en avant-première
            </a>
          </div>
        </div>

        {/* ── ÉCOUTER ──────────────────────────────────────────────── */}
        <div className="mb-8">
          <SectionLabel>Écouter le Podcast</SectionLabel>
          <div className="space-y-px border border-neutral-200">
            {allPodcastPlatforms
              .filter((p) => p.name !== 'Anchor')
              .map((platform) => (
                <LinkRow key={platform.name} item={platform} />
              ))}
          </div>
        </div>

        {/* ── CONTENU ──────────────────────────────────────────────── */}
        <div className="mb-8">
          <SectionLabel>Explorer le Contenu</SectionLabel>
          <div className="space-y-px border border-neutral-200">
            {[
              { name: 'Tous les Épisodes', url: 'https://artaufeminin.fr/podcasts', description: 'Parcourez tous les épisodes du podcast' },
              { name: 'Articles', url: 'https://artaufeminin.fr/articles', description: 'Des portraits de femmes artistes' },
              { name: 'Livres & Chroniques', url: 'https://artaufeminin.fr/livres', description: "Sélections de lectures sur l'Art au féminin" },
              { name: 'Citations', url: 'https://artaufeminin.fr/citations', description: 'Des paroles de femmes artistes qui traversent le temps' },
            ].map((item) => (
              <LinkRow key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* ── COMMUNAUTÉ ───────────────────────────────────────────── */}
        <div className="mb-8">
          <SectionLabel>Communauté</SectionLabel>
          <div className="space-y-px border border-neutral-200">
            {[
              { name: 'Instagram', url: 'https://instagram.com/artaufeminin', imageUrl: 'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/instagram.svg', description: '@artaufeminin' },
              { name: 'Facebook', url: 'https://www.facebook.com/podcastart', imageUrl: 'https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/facebook.svg' },
              { name: 'Newsletter', url: 'https://artaufeminin.fr/newsletter', description: 'Recevez les épisodes directement par email' },
            ].map((item) => (
              <LinkRow key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* ── SOUTENIR ─────────────────────────────────────────────── */}
        <div className="mb-10">
          <SectionLabel>Soutenir le Podcast</SectionLabel>
          <a
            href="https://fr.tipeee.com/art-au-feminin"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border border-neutral-300 bg-neutral-50 px-5 py-4 transition-all hover:border-neutral-900"
          >
            <div>
              <span className="text-sm font-light text-neutral-700">
                Soutenir sur Tipeee
              </span>
              <p className="mt-0.5 text-xs font-light text-neutral-400">
                Chaque contribution aide à produire de nouveaux épisodes
              </p>
            </div>
            <span className="text-neutral-300 transition-transform group-hover:translate-x-0.5 group-hover:text-neutral-600">
              →
            </span>
          </a>
        </div>

        <p className="text-center text-xs font-light text-neutral-300">
          © {new Date().getFullYear()} ART AU FÉMININ · Par{' '}
          <a href="https://aldjia.dev" target="_blank" rel="noopener noreferrer" className="text-neutral-400 underline hover:text-neutral-700">
            Aldjia Boughias
          </a>
        </p>

      </div>
    </div>
  );
}

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="ART AU FÉMININ — Tous les Liens"
    description="Retrouvez ART AU FÉMININ sur Apple Podcasts, Spotify, Deezer, Instagram, et découvrez la future Galerie immersive 3D dédiée aux femmes artistes."
    url={`https://www.artaufeminin.fr${location.pathname}`}
  />
);
