import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'gatsby';
import React, { ReactElement, useState } from 'react';

const navigation = [
  { name: 'Podcasts', href: '/podcasts' },
  { name: 'Articles', href: '/articles' },
  { name: 'Livres', href: '/livres' },
  { name: 'Citations', href: '/citations' },
  { name: 'Contact', href: 'mailto:artaufemininlepodcast@gmail.com' },
];

export function Header(): ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      {/* BARRE PRINCIPALE */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8 lg:py-5">
        {/* Logo à gauche */}
        <Link
          to="/"
          className="text-3xl lg:text-5xl font-extrabold tracking-tight text-gray-900"
        >
          ART <span className="italic tracking-tighter">au féminin</span>
        </Link>

        {/* Menu desktop */}
        <nav
          className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.18em] lg:flex"
          aria-label="Navigation principale"
        >
          {navigation.map((item) => {
            const isContact = item.name === 'Contact';

            if (isContact) {
              // lien mailto pour Contact sous forme de bouton discret
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-full border border-gray-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 hover:bg-gray-900 hover:text-white transition"
                >
                  {item.name}
                </a>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-900 hover:underline transition-colors"
                activeClassName="underline"
                partiallyActive={true}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bouton menu mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* MENU MOBILE (DRAWER) */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-20 w-full overflow-y-auto bg-white p-6">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>

            <Link
              to="/"
              className="-m-1.5 p-1.5 text-xl font-bold text-gray-900"
            >
              ART <span className="italic tracking-tighter">au féminin</span>
            </Link>
          </div>

          <div className="mt-6 space-y-2">
            {navigation.map((item) => {
              const isContact = item.name === 'Contact';

              if (isContact) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
