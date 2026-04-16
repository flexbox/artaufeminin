import { Link } from 'gatsby';
import React from 'react';

import Newsletter from './newsletter';

interface FooterProps {
  siteTitle: string;
}

const navigation = {
  contenu: [
    { name: 'Podcasts', href: '/podcasts' },
    { name: 'Articles', href: '/articles' },
    { name: 'Livres & chroniques', href: '/livres' },
    { name: 'Citations', href: '/citations' },
    { name: 'Galerie 3D', href: '/galerie' },
  ],
  podcast: [
    { name: 'Toutes les plateformes', href: '/links' },
    { name: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/art-au-feminin/id1493131152', external: true },
    { name: 'Spotify', href: 'https://open.spotify.com/show/18f84r0ic2PUenYvBRr2Ps', external: true },
    { name: 'Deezer', href: 'https://www.deezer.com/us/show/2157592', external: true },
    { name: 'Participer', href: '/start' },
  ],
  apropos: [
    { name: 'Mon histoire', href: '/about' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Questions fréquentes', href: '/faq' },
    { name: 'Presse', href: '/press' },
    { name: 'Nous soutenir', href: 'https://fr.tipeee.com/art-au-feminin', external: true },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://instagram.com/artaufeminin',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/podcastart',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer({ siteTitle }: FooterProps) {
  return (
    <footer aria-labelledby="footer-heading" className="pb-24" style={{ backgroundColor: '#8ba28f' }}>
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Zone marque ────────────────────────────────────── */}
        <div className="border-b border-white/20 py-14 lg:py-20">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <Link to="/" className="group inline-block">
                <span className="font-display text-4xl font-semibold tracking-tight text-white lg:text-5xl">
                  ART{' '}
                  <span className="italic font-light text-white/70 transition-colors group-hover:text-clay-300">
                    au féminin
                  </span>
                </span>
              </Link>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                Un podcast par Aldjia Boughias — célébrer les femmes artistes qui ont façonné l'histoire de l'art.
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-8 flex items-center gap-5 lg:mt-0">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-white/30 text-white/80 transition-all hover:border-white hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Zone navigation + newsletter ───────────────────── */}
        <div className="py-14 lg:grid lg:grid-cols-4 lg:gap-10">

          {/* Contenu */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/70">
              Contenu
            </h3>
            <ul role="list" className="mt-5 space-y-3">
              {navigation.contenu.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/90 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Le podcast */}
          <div className="mt-10 lg:mt-0">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/70">
              Le podcast
            </h3>
            <ul role="list" className="mt-5 space-y-3">
              {navigation.podcast.map((item) => (
                <li key={item.name}>
                  {'external' in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/90 transition-colors hover:text-white"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm text-white/90 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* À propos */}
          <div className="mt-10 lg:mt-0">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/70">
              À propos
            </h3>
            <ul role="list" className="mt-5 space-y-3">
              {navigation.apropos.map((item) => (
                <li key={item.name}>
                  {'external' in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/90 transition-colors hover:text-white"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm text-white/90 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mt-10 lg:mt-0">
            <Newsletter />
          </div>
        </div>

        {/* ── Bas de page ─────────────────────────────────────── */}
        <div className="border-t border-white/20 py-8 lg:flex lg:items-center lg:justify-between">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} {siteTitle} — Tous droits réservés.
          </p>
          <p className="mt-2 text-xs text-white/40 lg:mt-0">
            Fait avec passion par{' '}
            <a
              href="https://aldjia.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              Aldjia Boughias
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
