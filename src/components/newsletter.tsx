import { Link } from 'gatsby';
import React, { ReactElement, useState } from 'react';

export default function Newsletter(): ReactElement {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
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
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">
        Newsletter
      </h3>
      <p className="mt-4 font-display text-xl font-light italic text-white/90 leading-snug">
        Recevez les épisodes et articles directement par email.
      </p>

      {status === 'success' ? (
        <p className="mt-6 text-sm text-white/80">
          ✦ Merci ! Vous recevrez le prochain email très bientôt.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex gap-0">
            <label htmlFor="newsletter-email" className="sr-only">
              Adresse email
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              aria-required="true"
              placeholder="votre@email.fr"
              className="min-w-0 flex-1 rounded-l-full border border-white/30 bg-white/20 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:bg-white/30 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading' || !consent}
              aria-label={status === 'loading' ? 'Envoi en cours…' : "S'inscrire à la newsletter"}
              className="rounded-r-full border border-white/20 border-l-0 bg-clay-500 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-clay-700 disabled:opacity-40"
            >
              <span aria-hidden="true">{status === 'loading' ? '…' : '→'}</span>
            </button>
          </div>

          <div className="mt-3 flex items-start gap-2">
            <input
              id="newsletter-consent"
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              aria-required="true"
              className="mt-0.5 size-3.5 shrink-0 accent-clay-500 cursor-pointer"
            />
            <label htmlFor="newsletter-consent" className="text-xs font-light leading-relaxed text-white/40 cursor-pointer">
              J'accepte de recevoir la newsletter d'ART AU FÉMININ et je reconnais avoir lu la{' '}
              <Link
                to="/politique-confidentialite"
                className="text-white/60 underline underline-offset-2 hover:text-white/90"
              >
                politique de confidentialité
              </Link>.
              Désinscription possible à tout moment.
            </label>
          </div>

          {status === 'error' && (
            <p className="mt-2 text-xs text-red-300" role="alert">
              Une erreur s'est produite. Veuillez réessayer.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
