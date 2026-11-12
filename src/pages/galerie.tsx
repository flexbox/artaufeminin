import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement, useState } from 'react';

import SEO from '../components/seo';
import { EXPO, ExpoStatus, useExpoStatus } from '../utils/expo';

const EXPO_CARD: Record<ExpoStatus, { eyebrow: string; text: string }> = {
  upcoming: {
    eyebrow: 'Première exposition · À venir',
    text: `La galerie ouvrira ses portes à l'exposition le ${EXPO.opening}.`,
  },
  open: {
    eyebrow: 'Exposition en cours',
    text: `À voir dans la galerie jusqu'au ${EXPO.closing}.`,
  },
  closed: {
    eyebrow: 'Exposition passée',
    text: `L'exposition s'est achevée le ${EXPO.closing}.`,
  },
};

export default function GaleriePage(): ReactElement {
  const expoStatus = useExpoStatus();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

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
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="flex items-center justify-between px-6 py-5 lg:px-12">
        <Link
          to="/"
          className="font-display text-lg font-light tracking-[0.05em] text-white/60 transition-colors hover:text-white"
        >
          ART AU FÉMININ
        </Link>
        <Link
          to="/podcasts"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
        >
          Le Podcast
        </Link>
      </div>

      <main className="mx-auto max-w-xl px-6 py-12 lg:py-20">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
          Galerie 3D · Ouverte à la visite
        </p>

        <h1 className="text-center font-display text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
          Une galerie d'Art{' '}
          <span className="italic">dédiée aux femmes artistes</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-center text-base leading-relaxed md:text-lg text-white/70">
          Une galerie immersive en 3D, à visiter dès maintenant depuis votre
          navigateur, sur ordinateur comme sur téléphone.
        </p>

        <div className="mt-8 text-center">
          <a
            href="https://galerie.artaufeminin.fr"
            className="inline-block whitespace-nowrap border border-white bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-colors hover:bg-neutral-200"
          >
            Entrer dans la galerie <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Façade au trait, plus large que la colonne de texte */}
        <a
          href="https://galerie.artaufeminin.fr"
          tabIndex={-1}
          aria-hidden="true"
          className="ml-[calc(50%-min(50vw,28rem))] mt-12 block w-[min(100vw,56rem)] opacity-80 transition-opacity duration-500 hover:opacity-100"
        >
          <StaticImage
            src="../images/galerie-facade-trait.png"
            alt=""
            placeholder="none"
            width={900}
            quality={90}
            loading="eager"
          />
        </a>

        <div className="mt-16 border border-white/10 bg-neutral-900 p-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            {EXPO_CARD[expoStatus].eyebrow}
          </p>
          <h2 className="font-display text-2xl font-light text-white lg:text-3xl">
            « {EXPO.title} »{' '}
            <span className="italic text-white/70">{EXPO.dates}</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Quinze femmes artistes réunies autour du thème de la{' '}
            <strong className="font-normal text-white/80">Sororité</strong>, ce
            lien puissant entre femmes qui traverse l'Histoire de l'Art.{' '}
            {EXPO_CARD[expoStatus].text}
          </p>
        </div>

        <div className="mt-6 border border-white/10 bg-neutral-900 p-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Votre Cadeau Gratuit
          </p>
          <h2 className="font-display text-2xl font-light text-white lg:text-3xl">
            Le Catalogue Complet{' '}
            <span className="italic text-white/70">de l'Exposition</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            En laissant votre email, vous recevez en avant-première le catalogue
            de l'exposition — toutes les artistes, leur univers, leur œuvre, et
            ce qui les relie autour du thème de la Sororité.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Le portrait de chacune des 15 artistes de l'exposition",
              ...(expoStatus === 'upcoming'
                ? [
                    `Un rappel le jour de l'ouverture, le ${EXPO.opening}`,
                    `Les coulisses de la préparation de « ${EXPO.title} »`,
                  ]
                : [`Les coulisses de « ${EXPO.title} »`]),
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-white/70"
              >
                <span
                  className="mt-0.5 shrink-0 text-white/40"
                  aria-hidden="true"
                >
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {status === 'success' ? (
          <div className="mt-8 border border-white/10 bg-neutral-900 p-8 text-center">
            <p className="font-display text-2xl font-light text-white">
              Merci !
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Votre inscription est confirmée. Vous recevrez le catalogue de «{' '}
              {EXPO.title} »
              {expoStatus === 'upcoming' &&
                ` et un rappel à l'ouverture, le ${EXPO.opening}`}
              .
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col gap-3">
              <label htmlFor="galerie-email" className="sr-only">
                Adresse email
              </label>
              <input
                id="galerie-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                aria-required="true"
                placeholder="votre@email.fr"
                className="w-full border border-white/30 bg-white/10 px-5 py-4 text-sm text-white placeholder:text-white/60 transition-colors focus:border-white focus:bg-white/20 focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full border border-white bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-colors hover:bg-neutral-200 disabled:opacity-60"
              >
                {status === 'loading' ? (
                  'Inscription en cours…'
                ) : (
                  <>
                    Recevoir le catalogue de « {EXPO.title} »{' '}
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </button>
            </div>

            {status === 'error' && (
              <p role="alert" className="mt-3 text-center text-xs text-red-400">
                Une erreur s'est produite. Veuillez réessayer.
              </p>
            )}

            <p className="mt-4 text-center text-xs text-white/50">
              Pas de spam · Désabonnement à tout moment · Par Aldjia Boughias
            </p>
          </form>
        )}
      </main>

      <footer className="pb-10 text-center">
        <Link
          to="/"
          className="text-xs text-white/50 transition-colors hover:text-white/80"
        >
          Revenir au site <span aria-hidden="true">→</span>
        </Link>
      </footer>
    </div>
  );
}

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="Galerie ART AU FÉMININ — Galerie d'Art 3D dédiée aux femmes artistes"
    description="Visitez la galerie d'Art immersive en 3D dédiée aux femmes artistes. Première exposition « Sororité » du 25 janvier au 25 février 2027."
    url={`https://artaufeminin.fr${location.pathname}`}
  />
);
