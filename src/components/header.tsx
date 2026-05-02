import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'gatsby';
import React, { ReactElement, useState } from 'react';

const navigation = [
  { name: 'Podcasts', href: '/podcasts' },
  { name: 'Articles', href: '/articles' },
  { name: 'Livres', href: '/livres' },
  { name: 'Citations', href: '/citations' },
  { name: 'Galerie', href: '/galerie' },
  { name: 'Contact', href: 'mailto:artaufemininlepodcast@gmail.com', isExternal: true },
];

export function Header(): ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">

      {/* ── DESKTOP ────────────────────────────────────────────── */}
      <div className="hidden lg:flex items-center justify-between px-12 h-14">
        <Link
          to="/"
          className="font-display text-xl font-light tracking-[0.05em] text-neutral-900 transition-colors hover:text-neutral-500"
        >
          ART AU FÉMININ
        </Link>

        <nav aria-label="Navigation principale" className="flex items-center gap-9">
          {navigation.map((item) =>
            item.isExternal ? (
              <a
                key={item.name}
                href={item.href}
                className="text-[0.65rem] font-normal uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-neutral-900"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="text-[0.65rem] font-normal uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-neutral-900"
                activeClassName="text-neutral-900"
                partiallyActive={true}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* ── MOBILE : logo + hamburger ───────────────────────────── */}
      <div className="flex items-center justify-between px-5 h-14 lg:hidden">
        <Link
          to="/"
          className="font-display text-lg font-light tracking-[0.05em] text-neutral-900"
        >
          ART AU FÉMININ
        </Link>
        <button
          type="button"
          className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <Bars3Icon className="size-5" aria-hidden="true" />
        </button>
      </div>

      {/* Bordure bas */}
      <div className="border-b border-neutral-200" />

      {/* ── DRAWER MOBILE ──────────────────────────────────────── */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-black/10 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-72 overflow-y-auto bg-white px-6 py-6 shadow-xl">

          <div className="flex items-center justify-between mb-10">
            <Link
              to="/"
              className="font-display text-lg font-light text-neutral-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              ART AU FÉMININ
            </Link>
            <button
              type="button"
              className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon className="size-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {navigation.map((item) =>
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-2 py-3 text-[0.7rem] font-normal uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-2 py-3 text-[0.7rem] font-normal uppercase tracking-[0.2em] text-neutral-500 hover:text-neutral-900 transition-colors"
                  activeClassName="text-neutral-900"
                  partiallyActive={true}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="mt-auto pt-16 border-t border-neutral-100">
            <p className="text-[0.65rem] uppercase tracking-widest text-neutral-300">
              Par Aldjia Boughias
            </p>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
