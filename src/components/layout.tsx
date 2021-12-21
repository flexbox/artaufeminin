import React, { ReactNode } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Newsletter from "./newsletter"
import Burger from "../components/burger"
import Cross from "../components/cross"
import "../stylesheets/styles.css"

interface LayoutProps {
  children: ReactNode
}
const activeStyles = {
  color: "black",
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

function Layout({ children }: LayoutProps) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata.title
  const [toggleNav, setToggleNav] = React.useState(false)

  return (
    <div className={`${toggleNav ? `px-8` : `px-8`}`}>
      <header className="site-head mb-8">
        <div className="site-head-container py-12 pl-2 flex leading-none">
          <button
            className="flex visible lg:hidden mt-1"
            onClick={() => setToggleNav(!toggleNav)}
          >
            {toggleNav ? <Burger /> : <Cross />}
          </button>
          <nav className="site-head-left flex w-0 md:w-1/3 justify-start text-sm text-gray-400">
            <ul className="nav flex invisible lg:visible">
              <li className="nav-home px-2 hover:text-black">
                <Link to={`/articles`} activeStyle={activeStyles}>
                  Articles
                </Link>
              </li>
              <li className="nav-home px-2 hover:text-black">
                <Link to={`/podcast`} activeStyle={activeStyles}>
                  Épisodes
                </Link>
              </li>
              <li className="nav-about px-2 hover:text-black">
                <Link to={`/about`} activeStyle={activeStyles}>
                  À propos
                </Link>
              </li>
            </ul>
          </nav>
          <div className="relative site-head-center w-full justify-center items-center md:w-1/3 flex   sm:pl-0  lg:pl-0 lg:justify-center text-2xl font-medium">
            <Link className="site-head-logo" to={`/`}>
              {siteTitle}
            </Link>
          </div>
          <HeaderRight />
        </div>
        <div className={`${toggleNav ? `visible flex-col` : `invisible h-0`}`}>
          <nav className="w-full text-3xl fo text-gray-400 bg-white">
            <ul className="nav flex-col space-y-4 ">
              <li className="nav-home hover:text-black">
                <Link to={`/articles`} activeStyle={activeStyles}>
                  Articles
                </Link>
              </li>
              <li className="nav-home  hover:text-black">
                <Link to={`/podcast`} activeStyle={activeStyles}>
                  Épisodes
                </Link>
              </li>
              <li className="nav-about  hover:text-black">
                <Link to={`/about`} activeStyle={activeStyles}>
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

      <main role="main">{children}</main>

      <Newsletter />
      <Footer title={siteTitle} />
    </div>
  )
}

export default Layout
