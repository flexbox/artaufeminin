import Link from "gatsby-link"
import React, { ReactElement, useState } from "react"
import Burger from "../components/burger"
import Cross from "../components/cross"

interface Props {
  siteTitle: string
}

export default function Header({ siteTitle }: Props): ReactElement {
  const [toggleNav, setToggleNav] = useState<boolean>(false)

  return (
    <header className="">
      <div className="site-head-container sm:py-6">
        <button
          className="flex visible lg:hidden mt-1"
          onClick={() => setToggleNav(!toggleNav)}
        >
          {toggleNav ? <Burger /> : <Cross />}
        </button>
        <div className="flex-col m-auto w-2/3 text-center">
          <Link className="font-bold text-2xl sm:text-4xl" to={`/`}>
            {siteTitle}
          </Link>

          <nav className="my-8 flex m-auto justify-center text-gray-400">
            <ul className="flex invisible lg:visible">
              <li className="px-2">
                <Link
                  to={`/articles`}
                  activeClassName="text-gray-700 border-b-2 border-blue-300"
                  className="py-4 px-8 hover:text-black font-extrabold text-lg"
                >
                  Articles
                </Link>
              </li>
              <li className="px-2">
                <Link
                  to={`/podcast`}
                  activeClassName="text-gray-700 border-b-2 border-blue-300"
                  className="py-4 px-8 hover:text-black font-extrabold text-lg"
                >
                  Podcast
                </Link>
              </li>
              {/* <li className="px-2">
                <Link
                  to={`/press`}
                  activeClassName="text-gray-700 border-b-2 border-blue-300"
                  className="py-4 px-8 hover:text-black font-extrabold text-lg"
                >
                  Presse
                </Link>
              </li>
              <li className="px-2">
                <Link
                  to={`/about`}
                  activeClassName="text-gray-700 border-b-2 border-blue-300"
                  className="py-4 px-8 hover:text-black font-extrabold text-lg"
                >
                  À propos
                </Link>
              </li> */}
              <li className="px-2">
                <a
                  href="mailto:artaufemininlepodcast@gmail.com"
                  title="Envoyer un email"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-8 hover:text-black font-extrabold text-lg"
                >
                  Me contacter par email
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={`${toggleNav ? `visible flex-col` : `invisible h-0`}`}>
        <nav className="w-full py-4 text-3xl fo text-gray-400 bg-white">
          <ul className="nav flex-col space-y-4 ">
            <li className="nav-home hover:text-black py-2 ">
              <Link to={`/articles`} activeClassName="text-black">
                Articles
              </Link>
            </li>
            <li className="nav-home  hover:text-black py-2">
              <Link to={`/podcast`} activeClassName="text-black">
                Épisodes
              </Link>
            </li>
            <li className="nav-home  hover:text-black py-2">
              <Link to={`/press`} activeClassName="text-black">
                Presse
              </Link>
            </li>
            <li className="nav-about  hover:text-black py-2">
              <Link to={`/about`} activeClassName="text-black">
                À propos
              </Link>
            </li>
            <li className="nav-about  hover:text-black py-2">
              <div className="flex-col justify-end text-gray-400">
                <div className="social-links hover:text-black">
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
        </nav>
      </div>
    </header>
  )
}
