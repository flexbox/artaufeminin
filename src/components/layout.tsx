import React, { ReactNode } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"

interface LayoutProps {
  children: ReactNode
}

function HeaderRight() {
  return (
    <div className="site-head-right">
      <div className="social-links">
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
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head mb-8">
        <div className="site-head-container py-6">
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
          <HeaderRight />
        </div>
      </header>

      <main role="main">{children}</main>

      <Footer title={siteTitle} />
    </div>
  )
}

export default Layout
