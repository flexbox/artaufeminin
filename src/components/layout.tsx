import React, { ReactNode } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"

import "../styles/tailwind.css"
import "../styles/css/styles.css"

interface LayoutProps {
  children: ReactNode
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
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head mb-8">
        <div className="site-head-container">
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
          <nav className="site-head-left">
            <ul className="nav">
              <li className="nav-home">
                <Link to={`/articles`} activeClassName="nav-current">
                  Articles
                </Link>
              </li>
              <li className="nav-home">
                <Link to={`/podcast`} activeClassName="nav-current">
                  Épisodes
                </Link>
              </li>
              <li className="nav-about">
                <Link to={`/about`} activeClassName="nav-current">
                  À propos
                </Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {siteTitle}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://instagram.com/artaufeminin"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://anchor.fm/artaufeminin/message"
                title="Envoyer un message audio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="site-main" className="site-main">
        <div className="transition-fade">{children}</div>
      </main>

      <Footer title={siteTitle} />
    </div>
  )
}

export default Layout
