import { Link } from 'gatsby';
import React, { ReactElement, useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function NewsletterPage(): ReactElement {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    try {
      const body = new FormData();
      body.append('fields[email]', email);
      body.append('ml-submit', '1');
      body.append('anticsrf', 'true');
      const res = await fetch(
        'https://assets.mailerlite.com/jsonp/334411/forms/96016714913810040/subscribe',
        { method: 'POST', body }
      );
      const json = await res.json();
      setStatus(json.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <Layout withInstagram={false}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="-mx-4 border-b border-neutral-200">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Newsletter
          </p>
          <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
            L'Art au Féminin<br />
            <span className="italic">dans votre boîte mail</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed text-neutral-500">
            Recevez les nouveaux épisodes, articles, chroniques de livres et les
            actualités de la Galerie ART AU FÉMININ directement par email.
            Pas de spam — uniquement du contenu sur les femmes artistes.
          </p>
        </div>
      </section>

      {/* ── FORMULAIRE ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-xl px-6 py-16 lg:px-0">
        <div className="border border-neutral-200 p-8">
          <h2 className="mb-1 font-display text-2xl font-light text-neutral-900">
            S'abonner Gratuitement
          </h2>
          <p className="mb-8 text-sm font-light leading-relaxed text-neutral-400">
            Rejoignez les abonnées qui reçoivent la newsletter d'ART AU FÉMININ.
          </p>

          {status === 'success' ? (
            <div className="border border-neutral-200 bg-neutral-50 px-6 py-8 text-center">
              <p className="font-display text-xl font-light text-neutral-700">Merci !</p>
              <p className="mt-2 text-sm font-light leading-relaxed text-neutral-500">
                Votre inscription est confirmée. À très vite dans votre boîte mail !
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500"
                >
                  Adresse Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  aria-required="true"
                  placeholder="votre@email.fr"
                  className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-300 focus:border-neutral-500 focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full border border-neutral-900 bg-neutral-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-neutral-700 disabled:opacity-60"
              >
                {status === 'loading' ? 'Inscription en cours…' : "Je m'abonne →"}
              </button>

              {status === 'error' && (
                <p className="text-center text-xs text-red-500">
                  Une erreur s'est produite. Veuillez réessayer.
                </p>
              )}

              <p className="text-center text-xs font-light text-neutral-400">
                Désabonnement possible à tout moment · Aucun spam
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── CE QUE VOUS RECEVREZ ─────────────────────────────────── */}
      <section className="mx-auto mb-8 max-w-3xl px-6 lg:px-0">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Au Programme
        </p>
        <div className="grid grid-cols-1 gap-px bg-neutral-200 border border-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Les Nouveaux Épisodes', desc: 'Soyez la première informée à chaque nouvel épisode du podcast.' },
            { label: 'Les Articles', desc: 'Des portraits et analyses sur les femmes artistes à travers les siècles.' },
            { label: 'Les Chroniques', desc: "Des sélections de livres pour explorer l'Histoire de l'Art au féminin." },
            { label: 'La Galerie 3D', desc: 'Les coulisses et actualités de la Galerie ART AU FÉMININ en avant-première.' },
          ].map(({ label, desc }) => (
            <div key={label} className="bg-white p-6 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                {label}
              </p>
              <p className="text-sm font-light leading-relaxed text-neutral-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALERIE ──────────────────────────────────────────────── */}
      <section className="-mx-4 my-16 border-y border-neutral-200 bg-neutral-900 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:flex lg:items-center lg:gap-16 lg:px-0">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
              Bientôt · Première Exposition
            </p>
            <h2 className="font-display text-3xl font-light leading-tight text-white md:text-4xl">
              Galerie ART AU FÉMININ
            </h2>
            <p className="mt-2 font-display text-xl font-light italic text-white/50">
              « Sororité »
            </p>
            <p className="mt-4 text-sm font-light leading-relaxed text-white/40">
              Une galerie d'Art immersive en 3D dédiée aux femmes artistes.
              La première exposition réunit une vingtaine d'artistes autour du
              thème de la Sororité. Abonnez-vous pour recevoir toutes les
              actualités en avant-première.
            </p>
            <div className="mt-6">
              <span className="inline-block border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                En préparation — restez informée
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CITATION ─────────────────────────────────────────────── */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-14">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-0">
          <span className="block font-display text-6xl font-light leading-none text-neutral-200" aria-hidden="true">
            «
          </span>
          <p className="mt-2 font-display text-xl font-light italic leading-relaxed text-neutral-600 md:text-2xl">
            Le monde regorge de femmes artistes talentueuses. Il est temps de les connaître.
          </p>
          <cite className="mt-5 block text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 not-italic">
            — Aldjia Boughias
          </cite>
        </div>
      </section>

      {/* ── NAVIGATION ───────────────────────────────────────────── */}
      <section className="mx-auto mb-20 mt-12 max-w-3xl px-6 text-center lg:px-0">
        <p className="mb-6 text-sm font-light text-neutral-400">
          En attendant le prochain email, explorez le contenu du site :
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: 'Podcasts', href: '/podcasts' },
            { label: 'Articles', href: '/articles' },
            { label: 'Livres', href: '/livres' },
            { label: 'Citations', href: '/citations' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className="border border-neutral-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:border-neutral-900 hover:text-neutral-900"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

    </Layout>
  );
}

export const Head = () => (
  <SEO
    title="Newsletter — ART AU FÉMININ, le podcast sur les femmes artistes"
    description="Abonnez-vous à la newsletter d'ART AU FÉMININ et recevez les nouveaux épisodes, articles et chroniques de livres sur les femmes artistes directement dans votre boîte mail."
  />
);
