import { Dialog } from "@headlessui/react"
import { Bars3Icon, EnvelopeIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Link } from "gatsby"
import React, { ReactElement, useState } from "react"

const navigation = [
  { name: "Podcasts", href: "/podcasts" },
  { name: "Articles", href: "/articles" },
  { name: "Livres", href: "/livres" },
  { name: "Citations", href: "/citations" },
]

function LinkEmail() {
  const email = "artaufemininlepodcast@gmail.com"
  const subject = "ART au féminin - Contact"
  const body = `Bonjour,

  Je vous écris aujourd'hui pour vous demander ...`

  const subjectBody = encodeURIComponent(subject)
  const encodedBody = encodeURIComponent(body)
  const encodedURL = `mailto:${email}?subject=${subjectBody}&body=${encodedBody}`

  return (
    <a
      href={encodedURL}
      className="text-sm font-semibold leading-6 text-gray-900 inline-flex"
      title="Envoyer un email"
      target="_blank"
      rel="noopener noreferrer"
    >
      Contact
      <EnvelopeIcon className="h-6 w-6 text-gray-400 ml-2" aria-hidden="true" />
    </a>
  )
}

export function Header(): ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <Link to="/" className="-m-1.5 p-1.5 text-xl font-bold text-gray-700">
          <span className="sr-only">ART au féminin</span>
          ART <span className="italic tracking-tighter">au féminin</span>
        </Link>
        <div className="flex flex-1 justify-end">
          <LinkEmail />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ART au féminin</span>
              ART <span className="italic tracking-tighter">au féminin</span>
            </a>
            <div className="flex flex-1 justify-end">
              <LinkEmail />
            </div>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
