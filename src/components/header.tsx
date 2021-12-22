import { graphql, Link, useStaticQuery } from "gatsby"
import React, { ReactElement, useState } from "react"
import Burger from "../components/burger"
import Cross from "../components/cross"

interface Props {
  siteTitle: string
}

function HeaderRight() {
  return (
    <div className="w-0 md:w-1/3 flex justify-end text-gray-400 text-sm invisible lg:visible">
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
        <nav className="flex w-0 md:w-1/3 justify-start text-sm text-gray-400">
          <ul className="nav flex invisible lg:visible">
            <li className="nav-home px-2 hover:text-black">
              <Link
                to={`/articles`}
                activeClassName="text-black"
                className="p-2"
              >
                Articles
              </Link>
            </li>
            <li className="nav-home px-2 hover:text-black">
              <Link
                to={`/podcast`}
                activeClassName="text-black"
                className="p-2"
              >
                Épisodes
              </Link>
            </li>
            <li className="nav-about px-2 hover:text-black">
              <Link to={`/about`} activeClassName="text-black" className="p-2">
                À propos
              </Link>
            </li>
          </ul>
        </nav>
        <div className="relative site-head-center w-full justify-center items-center md:w-1/3 flex   sm:pl-0  lg:pl-0 lg:justify-center text-2xl font-medium">
          <Link className="font-bold" to={`/`}>
            {siteTitle}
          </Link>
        </div>
        <HeaderRight />
      </div>
      <div className={`${toggleNav ? `visible flex-col` : `invisible h-0`}`}>
        <nav className="w-full text-3xl fo text-gray-400 bg-white">
          <ul className="nav flex-col space-y-4 ">
            <li className="nav-home hover:text-black">
              <Link to={`/articles`} activeClassName="text-black">
                Articles
              </Link>
            </li>
            <li className="nav-home  hover:text-black">
              <Link to={`/podcast`} activeClassName="text-black">
                Épisodes
              </Link>
            </li>
            <li className="nav-about  hover:text-black">
              <Link to={`/about`} activeClassName="text-black">
                À propos
              </Link>
            </li>
            <li className="nav-about  hover:text-black">
              <div className="w-1/3 flex-col justify-end text-gray-400">
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
