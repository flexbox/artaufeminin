import React, { ReactElement } from 'react';

import Button from '../components/button';
import Layout from '../components/layout';
import SEO from '../components/seo';

// ── Helpers ────────────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-20">
      <div className="mb-8 border-b border-clay-200 pb-4">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Design System
        </p>
        <h2 className="font-display text-3xl font-semibold text-stone-900">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Token({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-16 w-full rounded-sm ${className}`} />
      <p className="text-xs font-semibold text-stone-700">{label}</p>
      <p className="text-xs text-stone-400 font-mono">{value}</p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function DesignSystemPage(): ReactElement {
  return (
    <Layout withInstagram={false}>
      {/* En-tête */}
      <div className="mb-16 border-b border-clay-200 pb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay-500">
          ART au féminin
        </p>
        <h1 className="font-display text-5xl font-semibold leading-tight text-stone-900 md:text-6xl">
          Design System
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-500">
          Référentiel visuel du site — couleurs, typographie, composants et patterns.
          Toute modification du système doit passer par cette page.
        </p>
      </div>

      {/* ── COULEURS ────────────────────────────────────────────── */}
      <Section title="Couleurs">
        <div className="space-y-10">

          {/* Cream */}
          <div>
            <p className="mb-4 text-sm font-semibold text-stone-600">Cream — arrière-plans</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <Token label="cream-50" value="#fdfcfa" className="bg-cream-50 border border-stone-200" />
              <Token label="cream-100" value="#faf7f2" className="bg-cream-100 border border-stone-200" />
              <Token label="cream-200" value="#f3ece3" className="bg-cream-200" />
              <Token label="cream-300" value="#e9ddd4" className="bg-cream-300" />
            </div>
          </div>

          {/* Clay */}
          <div>
            <p className="mb-4 text-sm font-semibold text-stone-600">Clay — couleur principale / accents</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
              <Token label="clay-100" value="#f5ede8" className="bg-clay-100" />
              <Token label="clay-200" value="#e8c5b4" className="bg-clay-200" />
              <Token label="clay-300" value="#d4a090" className="bg-clay-300" />
              <Token label="clay-500" value="#9d6b53" className="bg-clay-500" />
              <Token label="clay-700" value="#6b3d2a" className="bg-clay-700" />
            </div>
          </div>

          {/* Sage */}
          <div>
            <p className="mb-4 text-sm font-semibold text-stone-600">Sage — footer</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Token label="sage-300" value="#b5c9b8" className="bg-sage-300" />
              <Token label="sage-500" value="#8ba28f" className="bg-sage-500" />
              <Token label="sage-700" value="#5f7d64" className="bg-sage-700" />
            </div>
          </div>

          {/* Gold */}
          <div>
            <p className="mb-4 text-sm font-semibold text-stone-600">Gold — décoratif</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <Token label="gold-300" value="#e4cc9a" className="bg-gold-300" />
              <Token label="gold-500" value="#c9a96e" className="bg-gold-500" />
            </div>
          </div>

          {/* Stone */}
          <div>
            <p className="mb-4 text-sm font-semibold text-stone-600">Stone (Tailwind) — textes</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
              <Token label="stone-400" value="#a8a29e" className="bg-stone-400" />
              <Token label="stone-500" value="#78716c" className="bg-stone-500" />
              <Token label="stone-600" value="#57534e" className="bg-stone-600" />
              <Token label="stone-700" value="#44403c" className="bg-stone-700" />
              <Token label="stone-900" value="#1c1917" className="bg-stone-900" />
            </div>
          </div>
        </div>
      </Section>

      {/* ── TYPOGRAPHIE ─────────────────────────────────────────── */}
      <Section title="Typographie">
        <div className="space-y-12">

          {/* Display */}
          <div>
            <p className="mb-6 text-sm font-semibold text-stone-600">
              Cormorant Garamond — <code className="rounded bg-cream-200 px-1 py-0.5 text-xs font-mono">font-display</code> — titres et accroches
            </p>
            <div className="space-y-6 rounded-sm border border-clay-200 bg-cream-50 p-8">
              <div>
                <p className="mb-1 text-xs font-mono text-stone-400">text-6xl font-semibold</p>
                <p className="font-display text-6xl font-semibold leading-tight text-stone-900">
                  ART <span className="italic font-light">au féminin</span>
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-mono text-stone-400">text-5xl font-semibold</p>
                <p className="font-display text-5xl font-semibold leading-tight text-stone-900">
                  Pourquoi n'y a-t-il pas eu de grandes artistes femmes ?
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-mono text-stone-400">text-3xl font-semibold</p>
                <p className="font-display text-3xl font-semibold text-stone-900">
                  Titre de section ou d'article
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-mono text-stone-400">text-xl font-light italic</p>
                <p className="font-display text-xl font-light italic text-stone-600">
                  Recevez les épisodes et articles directement par email.
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div>
            <p className="mb-6 text-sm font-semibold text-stone-600">
              Système — corps de texte
            </p>
            <div className="space-y-4 rounded-sm border border-clay-200 bg-cream-50 p-8">
              <div>
                <p className="mb-1 text-xs font-mono text-stone-400">text-base leading-relaxed — paragraphe standard</p>
                <p className="text-base leading-relaxed text-stone-600">
                  Avant de devenir historienne de l'art, professeure d'université et théoricienne, elle obtient en 1951 un baccalauréat en philosophie tout en se formant aux études grecques et à l'histoire de l'art.
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-mono text-stone-400">text-sm leading-relaxed text-stone-500 — méta / descriptions</p>
                <p className="text-sm leading-relaxed text-stone-500">
                  Saison 3 · Épisode 12 · 42 minutes — Peintre, sculpteure, graveuse… découvrez son parcours exceptionnel.
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-mono text-stone-400">text-xs uppercase tracking-widest text-clay-500 — eyebrow / label</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-clay-500">
                  Tous les épisodes
                </p>
              </div>
            </div>
          </div>

          {/* Prose */}
          <div>
            <p className="mb-6 text-sm font-semibold text-stone-600">
              Prose — contenu riche (articles, épisodes)
            </p>
            <div className="rounded-sm border border-clay-200 bg-cream-50 p-8">
              <div className="prose prose-stone max-w-none prose-p:leading-relaxed prose-p:text-stone-600 prose-headings:font-display prose-headings:font-semibold prose-a:text-clay-500 prose-a:no-underline hover:prose-a:underline">
                <h2>Titre dans le contenu riche</h2>
                <p>
                  Avant de devenir historienne de l'art, professeure d'université et théoricienne de l'art, elle obtient en 1951 un baccalauréat. Lisez <a href="#">cet article sur le sujet</a> pour en savoir plus.
                </p>
                <blockquote>
                  L'art n'a pas de sexe, mais l'histoire de l'art, elle, en a eu un pendant trop longtemps.
                </blockquote>
                <p>
                  Un second paragraphe avec du <strong>texte en gras</strong> et du <em>texte en italique</em>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── BOUTONS ─────────────────────────────────────────────── */}
      <Section title="Boutons">
        <div className="space-y-8 rounded-sm border border-clay-200 bg-cream-50 p-8">

          <div>
            <p className="mb-4 text-xs font-mono text-stone-400">variant="outlineDark" — bouton principal du site</p>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href="#" variant="outlineDark" size="s">
                Écouter le podcast
              </Button>
              <Button as="a" href="#" variant="outlineDark" size="sm">
                Lire tous les articles
              </Button>
              <Button as="a" href="#" variant="outlineDark" size="md">
                Découvrir
              </Button>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-mono text-stone-400">variant="outline" — secondaire (fond clair)</p>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href="#" variant="outline" size="s">
                Outline small
              </Button>
              <Button as="a" href="#" variant="outline" size="sm">
                Outline medium
              </Button>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-mono text-stone-400">inline-flex rounded-full — CTA artisanaux (episode, article)</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-clay-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-clay-500 transition-colors hover:bg-clay-500 hover:text-white"
              >
                @artaufeminin
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-clay-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-clay-500 transition-colors hover:bg-clay-500 hover:text-white"
              >
                Soutenir sur Tipeee
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ── CARDS ───────────────────────────────────────────────── */}
      <Section title="Cards">
        <div className="space-y-10">

          {/* Card épisode / article — grille */}
          <div>
            <p className="mb-6 text-sm font-semibold text-stone-600">
              Card épisode / article — grille 3 colonnes
            </p>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <article key={i} className="group flex flex-col">
                  <div className="block overflow-hidden rounded-sm">
                    <div className="aspect-square overflow-hidden bg-stone-100">
                      <div className="h-full w-full bg-gradient-to-br from-cream-200 to-clay-200 transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-1 flex-col">
                    <p className="text-xs font-semibold uppercase tracking-widest text-clay-500">
                      Saison 3 · Épisode {i}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-stone-900 transition-colors hover:text-clay-500">
                      Titre de l'épisode ou de l'article
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">
                      Courte description tronquée à 140 caractères pour donner envie de lire ou d'écouter…
                    </p>
                    <div className="mt-4">
                      <span className="text-xs font-semibold uppercase tracking-widest text-clay-500">
                        Lire l'article →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Panel bas — episode / article */}
          <div>
            <p className="mb-6 text-sm font-semibold text-stone-600">
              Panel bas — 3 colonnes (épisode, article)
            </p>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {[
                { label: 'Écouter sur', title: 'Toutes les plateformes' },
                { label: 'Communauté', title: 'Suivez ART au féminin' },
                { label: 'Mécénat', title: 'Soutenez le podcast' },
              ].map(({ label, title }) => (
                <div key={label} className="rounded-sm border border-clay-200 bg-cream-50 p-6">
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-clay-500">
                    {label}
                  </p>
                  <h3 className="mb-3 font-display text-xl font-semibold text-stone-900">
                    {title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-stone-500">
                    Texte d'accompagnement court et informatif.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-clay-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-clay-500 transition-colors hover:bg-clay-500 hover:text-white"
                  >
                    Action →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Card autrice */}
          <div>
            <p className="mb-6 text-sm font-semibold text-stone-600">
              Card autrice / bio
            </p>
            <div className="max-w-xl rounded-sm border border-clay-200 bg-cream-50 p-6">
              <div className="flex items-center gap-6">
                <div className="size-20 shrink-0 overflow-hidden rounded-full bg-clay-200" />
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-clay-500">
                    À propos de l'autrice
                  </p>
                  <p className="text-sm leading-relaxed text-stone-600">
                    Bonjour, je suis Aldjia, créatrice et animatrice du podcast ART au féminin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── SÉPARATEURS ─────────────────────────────────────────── */}
      <Section title="Séparateurs & bordures">
        <div className="space-y-10 rounded-sm border border-clay-200 bg-cream-50 p-8">
          <div>
            <p className="mb-4 text-xs font-mono text-stone-400">hr.separator — entre les sections de contenu</p>
            <hr className="separator" />
          </div>
          <div>
            <p className="mb-4 text-xs font-mono text-stone-400">border-clay-200 — bordure légère entre éléments</p>
            <div className="border-b border-clay-200 pb-4">
              <p className="text-sm text-stone-500">Ligne avec bordure inférieure clay-200</p>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-mono text-stone-400">border-y border-clay-200 bg-cream-200 — bande de séparation (section Instagram)</p>
            <div className="border-y border-clay-200 bg-cream-200 py-6 text-center text-sm text-stone-500">
              Section pleine largeur avec fond cream-200
            </div>
          </div>
        </div>
      </Section>

      {/* ── HERO PATTERN ────────────────────────────────────────── */}
      <Section title="Hero pleine largeur">
        <div>
          <p className="mb-6 text-sm font-semibold text-stone-600">
            Pattern réutilisé sur l'épisode et l'article — image + dégradé + titre en overlay
          </p>
          <div className="relative h-[320px] overflow-hidden rounded-sm">
            <div className="h-full w-full bg-gradient-to-br from-clay-300 to-stone-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay-300">
                Saison 3 · Épisode 12 · 42 min
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                Titre de l'épisode ou de l'article
              </h2>
            </div>
          </div>
          <p className="mt-3 text-xs font-mono text-stone-400">
            Classes : -mx-4 -mt-12 relative h-[55vh] min-h-[340px] overflow-hidden
          </p>
        </div>
      </Section>

      {/* ── NEWSLETTER ──────────────────────────────────────────── */}
      <Section title="Newsletter (footer)">
        <div className="max-w-sm rounded-sm p-8" style={{ backgroundColor: '#8ba28f' }}>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">
            Newsletter
          </h3>
          <p className="mt-4 font-display text-xl font-light italic text-white/90 leading-snug">
            Recevez les épisodes et articles directement par email.
          </p>
          <div className="mt-6 flex gap-0">
            <input
              type="email"
              className="min-w-0 flex-1 rounded-l-full border border-white/30 bg-white/20 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none"
              placeholder="votre@email.fr"
              readOnly
            />
            <button className="rounded-r-full border border-white/20 border-l-0 bg-clay-500 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white">
              →
            </button>
          </div>
        </div>
      </Section>

    </Layout>
  );
}

export const Head = () => {
  return <SEO title="Design System — ART au féminin" description="Référentiel visuel du site artaufeminin.fr" />;
};
