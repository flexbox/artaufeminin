import React, { ReactElement, useState } from 'react';

export default function Newsletter(): ReactElement {
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
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              aria-required="true"
              aria-label="Adresse email"
              placeholder="votre@email.fr"
              className="min-w-0 flex-1 rounded-l-full border border-white/30 bg-white/20 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:bg-white/30 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-r-full border border-white/20 border-l-0 bg-clay-500 px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-clay-700 disabled:opacity-60"
            >
              {status === 'loading' ? '…' : '→'}
            </button>
          </div>
          {status === 'error' && (
            <p className="mt-2 text-xs text-red-300">
              Une erreur s'est produite. Veuillez réessayer.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
