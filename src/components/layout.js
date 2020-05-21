import React from "react"
import { Link } from "gatsby"
import Footer from "./footer"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
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
          <nav id="swup" className="site-head-left">
            <ul className="nav">
              <li className="nav-home">
                <Link to={`/`} activeClassName="nav-current">
                  Articles
                </Link>
              </li>
              <li className="nav-home">
                <Link to={`/podcast`} activeClassName="nav-current">
                  Podcasts
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
              {title}
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
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>

      <Footer title={title} />
    </div>
  )
}

export default Layout
