import { Link } from 'gatsby';
import React, { ReactElement, useState } from 'react';

import SEO from '../components/seo';

export default function GaleriePage(): ReactElement {
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

      if (json.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-stone-950 text-white">

      <main className="mx-auto max-w-xl px-6 py-20 lg:py-28">

        {/* Eyebrow */}
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-clay-400">
          Galerie ART au féminin · Exposition « Sororité »
        </p>

        {/* Titre principal */}
        <h1 className="text-center font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Découvrez les artistes{' '}
          <span className="italic font-light text-clay-300">avant tout le monde</span>
        </h1>

        {/* Sous-titre */}
        <p className="mx-auto mt-6 max-w-md text-center text-base leading-relaxed text-stone-400">
          Je prépare une galerie d'art immersive en 3D autour du thème de la <strong className="text-stone-300 font-medium">Sororité</strong> — une vingtaine de femmes artistes réunies dans un espace numérique unique.
        </p>

        {/* Lead magnet */}
        <div className="mt-12 rounded-sm border border-clay-700/50 bg-stone-900 p-8">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-clay-400">
            Votre cadeau gratuit
          </p>
          <h2 className="font-display text-2xl font-semibold text-white lg:text-3xl">
            Le catalogue complet{' '}
            <span className="italic font-light text-clay-300">de l'exposition</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-400">
            En laissant votre email, vous recevez en avant-première le catalogue de l'exposition — toutes les artistes, leur univers, leur œuvre, et ce qui les relie autour du thème de la Sororité.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Le portrait de chacune des ~20 artistes de l'exposition",
              "La date d'ouverture de la galerie en avant-première",
              "Les coulisses de la création de l'exposition 3D",
              "Un accès VIP dès le jour J — avant le grand public",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-stone-300">
                <span className="mt-0.5 shrink-0 text-clay-400">✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Formulaire / confirmation */}
        {status === 'success' ? (
          <div className="mt-8 rounded-sm border border-clay-700/50 bg-stone-900 p-8 text-center">
            <p className="font-display text-2xl font-semibold text-clay-300">✦ Merci !</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-400">
              Votre inscription est confirmée. Vous recevrez le catalogue et la date d'ouverture en avant-première.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                aria-required="true"
                placeholder="votre@email.fr"
                className="w-full rounded-sm border border-stone-700 bg-stone-800 px-5 py-4 text-sm text-white placeholder:text-stone-500 focus:border-clay-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-sm bg-clay-500 px-6 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-clay-700 disabled:opacity-60"
              >
                {status === 'loading' ? 'Inscription en cours…' : 'Oui, je veux découvrir les artistes en avant-première →'}
              </button>
            </div>

            {status === 'error' && (
              <p className="mt-3 text-center text-xs text-red-400">
                Une erreur s'est produite. Veuillez réessayer.
              </p>
            )}

            <p className="mt-4 text-center text-xs text-stone-600">
              Pas de spam · Désabonnement à tout moment · Par Aldjia Boughias
            </p>
          </form>
        )}

      </main>

      <footer className="pb-10 text-center">
        <Link to="/" className="text-xs text-stone-700 transition-colors hover:text-stone-500">
          Revenir au site →
        </Link>
      </footer>

    </div>
  );
}

export const Head = () => (
  <SEO
    title="Galerie ART au féminin — Découvrez les artistes en avant-première"
    description="Une galerie d'art immersive en 3D dédiée aux femmes artistes. Première exposition : Sororité, ~20 artistes. Recevez le catalogue complet en vous inscrivant."
  />
);
