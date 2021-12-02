import React, { ReactNode } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"

import "../styles/css/styles.css"
import Newsletter from "./newsletter"

interface LayoutProps {
  children: ReactNode
}
const activeStyles = {
  color: "black",
}

function HeaderRight() {
  return (
    <div className="site-head-right w-1/3 flex justify-end text-gray-400 text-sm">
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
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}px-8`}>
      <header className="site-head mb-8">
        <div className="site-head-container py-12 px-8 flex font-merri leading-none">
          <button
            className="nav-burger"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </button>
          <nav className="site-head-left flex w-1/3 justify-start text-sm text-gray-400">
            <ul className="nav flex">
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
          <div className="site-head-center w-1/3 flex justify-center text-2xl font-medium">
            <Link className="site-head-logo" to={`/`}>
              {siteTitle}
            </Link>
          </div>
          <HeaderRight />
        </div>
      </header>

      <main role="main">{children}</main>

      <Newsletter />
      <Footer title={siteTitle} />
    </div>
  )
}

export default Layout
