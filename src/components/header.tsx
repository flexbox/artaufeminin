import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'gatsby';
import React, { ReactElement, useState } from 'react';

const navigation = [
  { name: 'Podcasts', href: '/podcasts' },
  { name: 'Articles', href: '/articles' },
  { name: 'Livres', href: '/livres' },
  { name: 'Citations', href: '/citations' },
  { name: 'Contact', href: 'mailto:artaufemininlepodcast@gmail.com', isExternal: true },
];

export function Header(): ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-cream-100">

      {/* ── MOBILE : logo + hamburger ───────────────────────────── */}
      <div className="flex items-center justify-between px-5 py-4 lg:hidden">
        <Link
          to="/"
          className="font-display text-2xl font-semibold tracking-tight text-stone-900"
        >
          ART <span className="italic font-light">au féminin</span>
        </Link>
        <button
          type="button"
          className="p-2 text-stone-600 hover:text-clay-500 transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <Bars3Icon className="size-6" aria-hidden="true" />
        </button>
      </div>

      {/* ── DESKTOP : deux rangées ──────────────────────────────── */}
      <div className="hidden lg:block">

        {/* Rangée 1 — Logo centré */}
        <div className="py-7 text-center">
          <Link
            to="/"
            className="font-display text-5xl font-semibold tracking-tight text-stone-900 transition-colors hover:text-clay-500"
          >
            ART <span className="italic font-light">au féminin</span>
          </Link>
        </div>

        {/* Séparateur */}
        <div className="mx-auto max-w-7xl px-8">
          <div className="border-t border-clay-200" />
        </div>

        {/* Rangée 2 — Navigation centrée */}
        <nav
          aria-label="Navigation principale"
          className="flex items-center justify-center gap-10 px-8 py-4"
        >
          {navigation.map((item) =>
            item.isExternal ? (
              <a
                key={item.name}
                href={item.href}
                className="rounded-full border border-clay-400 px-5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-clay-500 transition-colors duration-200 hover:bg-clay-500 hover:text-white hover:border-clay-500"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-stone-500 transition-colors duration-200 hover:text-clay-500"
                activeClassName="text-clay-500 underline underline-offset-4 decoration-clay-300"
                partiallyActive={true}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Bordure bas */}
      <div className="border-b border-clay-200" />

      {/* ── DRAWER MOBILE ──────────────────────────────────────── */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-stone-900/20 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-80 overflow-y-auto bg-cream-100 px-6 py-8 shadow-2xl">

          {/* Fermer */}
          <div className="flex items-center justify-between mb-10">
            <Link
              to="/"
              className="font-display text-xl font-semibold tracking-tight text-stone-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              ART <span className="italic font-light">au féminin</span>
            </Link>
            <button
              type="button"
              className="p-2 text-stone-500 hover:text-clay-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon className="size-5" aria-hidden="true" />
            </button>
          </div>

          {/* Liens */}
          <nav className="flex flex-col gap-1">
            {navigation.map((item) =>
              item.isExternal ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-stone-700 hover:bg-clay-100 hover:text-clay-600 transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-stone-700 hover:bg-clay-100 hover:text-clay-600 transition-colors"
                  activeClassName="bg-clay-100 text-clay-600"
                  partiallyActive={true}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Signature en bas */}
          <div className="mt-auto pt-16 border-t border-clay-200">
            <p className="text-xs text-stone-400 tracking-wide">
              Par Aldjia Boughias
            </p>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
