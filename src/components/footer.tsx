import React from "react"
import { Link } from "gatsby"

export default function footer(props) {
  const { title } = props

  const platforms = [
    {
      name: "Apple podcasts",
      url: "https://podcasts.apple.com/us/podcast/art-au-feminin/id1493131152",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/18f84r0ic2PUenYvBRr2Ps",
    },
    {
      name: "Google podcasts",
      url:
        "https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85NDgzZGY4L3BvZGNhc3QvcnNz",
    },
  ]

  return (
    <footer className="footer">
      <div className="row">
        <div className="col">
          <p>
            &copy; {new Date().getFullYear()} • <Link to={`/`}>{title}</Link>{" "}
          </p>
          <p>
            Design •{" "}
            <a
              href="https://davidl.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              David Leuliette
            </a>
          </p>
        </div>
        <div className="col footer-follow">
          <p>Retrouvez tous nos épisodes</p>
          <ul
            className="actions footer-follow"
            style={{
              flexDirection: "row-reverse",
              marginLeft: 0,
              paddingRight: 0,
            }}
          >
            {platforms.map((platform, index) => {
              return (
                <li key={index}>
                  <a href={platform.url}>{platform.name}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
