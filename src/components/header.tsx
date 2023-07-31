import { Link } from "gatsby-link"
import React, { ReactElement, useState } from "react"
import Burger from "../components/burger"
import Cross from "../components/cross"

const HeaderLink = ({ to, title }: { to: string; title: string }) => {
  return (
    <li className="px-4">
      <Link
        to={to}
        activeClassName="text-black relative"
        className="rounded-md px-8 py-4 text-lg font-extrabold hover:bg-white hover:text-gray-600"
      >
        <span className="relative">{title}</span>
      </Link>
    </li>
  )
}

export default function Header(): ReactElement {
  const [toggleNav, setToggleNav] = useState<boolean>(false)

  return (
    <header>
      <div>
        <div className="visible relative lg:hidden">
          <div className="absolute left-6 top-6">
            <button className="" onClick={() => setToggleNav(!toggleNav)}>
              {toggleNav ? <Burger /> : <Cross />}
            </button>
          </div>
        </div>

        <div className="m-auto flex justify-center ">
          <nav className="invisible h-0 sm:h-auto lg:visible">
            <ul className="my-8 flex text-gray-400">
              <HeaderLink to="/podcast" title="Podcast" />
              <HeaderLink to="/articles" title="Articles" />
            </ul>
          </nav>
          <Link
            className="flex pb-0 pt-6 text-xl font-bold text-gray-700 transition duration-300 ease-in-out hover:text-black sm:text-3xl"
            to={`/`}
          >
            ART <span className="ml-2 italic tracking-tighter">au féminin</span>
          </Link>
          <nav className="invisible h-0 sm:h-auto lg:visible">
            <ul className="my-8 flex text-gray-400">
              <li className="px-4">
                <a
                  href="mailto:artaufemininlepodcast@gmail.com"
                  title="Envoyer un email"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-lg font-extrabold hover:text-black"
                >
                  Contacter par email
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={`${toggleNav ? `visible flex-col` : `invisible h-0`}`}>
        <nav className="w-full px-4 text-3xl font-bold text-gray-400">
          <ul className="nav space-y-4">
            <li className="py-2 hover:text-black ">
              <Link to="/articles" activeClassName="text-lime-700">
                Articles
              </Link>
            </li>
            <li className="py-2 hover:text-black">
              <Link to="/podcast" activeClassName="text-lime-700">
                Épisodes
              </Link>
            </li>
            <li className="py-2 hover:text-black">
              <Link to="/citations" activeClassName="text-lime-700">
                Citations
              </Link>
            </li>
            <li className="nav-about  py-2 hover:text-black">
              <div className="flex-col justify-end text-gray-400">
                <div className="hover:text-black">
                  <a
                    href="mailto:artaufemininlepodcast@gmail.com"
                    title="Envoyer un email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contacter par email
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <hr className="separator" />
        </nav>
      </div>
    </header>
  )
}
