import Link from "gatsby-link"
import React, { ReactElement, useState } from "react"
import Burger from "../components/burger"
import Cross from "../components/cross"

const HeaderLink = ({ to, title }: { to: string; title: string }) => {
  return (
    <li className="px-4">
      <Link
        to={to}
        activeClassName="text-lime-700 relative"
        className="py-4 px-8 hover:text-lime-700 font-extrabold text-lg"
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
      <div className="">
        <button
          className="flex visible lg:hidden mt-1"
          onClick={() => setToggleNav(!toggleNav)}
        >
          {toggleNav ? <Burger /> : <Cross />}
        </button>

        <div className="m-auto">
          <Link
            className="font-bold text-gray-700 hover:text-lime-700 text-2xl sm:text-5xl p-12 flex justify-center transition duration-300 ease-in-out"
            to={`/`}
          >
            ART <span className="italic tracking-tighter ml-2">au féminin</span>
          </Link>

          <nav className="my-8 flex m-auto justify-center text-gray-400">
            <ul className="flex invisible lg:visible">
              <HeaderLink to="/podcast" title="Podcast" />
              <HeaderLink to="/articles" title="Articles" />

              <li className="px-4">
                <a
                  href="mailto:artaufemininlepodcast@gmail.com"
                  title="Envoyer un email"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-8 hover:text-lime-500 font-extrabold text-lg"
                >
                  Me contacter par email
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={`${toggleNav ? `visible flex-col` : `invisible h-0`}`}>
        <nav className="w-full py-4 text-3xl fo text-gray-400">
          <ul className="nav flex-col space-y-4 ">
            <li className="hover:text-black py-2 ">
              <Link to={`/articles`} activeClassName="text-black">
                Articles
              </Link>
            </li>
            <li className="hover:text-black py-2">
              <Link to={`/podcast`} activeClassName="text-black">
                Épisodes
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
