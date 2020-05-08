import React from "react"
import { Link } from "gatsby"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)

  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home" role="menuitem">
                <Link to={`/podcast`} activeClassName="nav-current">
                  Podcast
                </Link>
              </li>
              <li className="nav-about" role="menuitem">
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

      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> • Design{" "}
        <a href="https://davidl.fr" target="_blank" rel="noopener noreferrer">
          David Leuliette
        </a>
      </footer>
    </div>
  )
}

export default Layout
