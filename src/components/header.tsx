import Link from "gatsby-link"
import React, { ReactElement, useState } from "react"
import Burger from "../components/burger"
import Cross from "../components/cross"

interface Props {
  siteTitle: string
}

function HeaderRight() {
  return (
    <div className="">
      <div className="social-links hover:text-black">
        <a
          href="mailto:artaufemininlepodcast@gmail.com"
          title="Envoyer un email"
          target="_blank"
          rel="noopener noreferrer"
          className="py-4 px-8"
        >
          Contacter par email
        </a>
      </div>
    </div>
  )
}

export default function Header({ siteTitle }: Props): ReactElement {
  const [toggleNav, setToggleNav] = useState<boolean>(false)

  return (
    <header className="">
      <div className="site-head-container py-12 flex">
        <button
          className="flex visible lg:hidden mt-1"
          onClick={() => setToggleNav(!toggleNav)}
        >
          {toggleNav ? <Burger /> : <Cross />}
        </button>
        <div className="flex-col m-auto w-2/3">
          <div className="text-center relative site-head-center w-full justify-center items-center  flex   sm:pl-0  lg:pl-0 lg:justify-center text-2xl font-medium">
            <Link className="font-bold" to={`/`}>
              {siteTitle}
            </Link>
          </div>
          <nav className="mt-8 flex m-auto justify-center space-x-6 text-sm text-gray-400">
            <ul className="w-full nav flex invisible lg:visible">
              <li className="nav-home px-2 hover:text-black w-1/5 text-center">
                <Link
                  to={`/articles`}
                  activeClassName="text-black"
                  className="py-4 px-8 "
                >
                  Articles
                </Link>
              </li>
              <li className="nav-home px-2 hover:text-black w-1/5 text-center">
                <Link
                  to={`/podcast`}
                  activeClassName="text-black"
                  className="py-4 px-8"
                >
                  Épisodes
                </Link>
              </li>
              <li className="nav-home px-2 hover:text-black w-1/5 text-center">
                <Link
                  to={`/press`}
                  activeClassName="text-black"
                  className="py-4 px-8"
                >
                  Presse
                </Link>
              </li>
              <li className="nav-about px-2 hover:text-black w-1/5 text-center">
                <Link
                  to={`/about`}
                  activeClassName="text-black"
                  className="py-4 px-8"
                >
                  À propos
                </Link>
              </li>
              <li className="nav-about px-2 hover:text-black w-1/5 text-center">
                <HeaderRight />
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
