import React from "react"
import { Link } from "gatsby"

export default function footer({ title }) {
  const platforms = [
    {
      name: "Apple podcasts",
      url: "https://podcasts.apple.com/us/podcast/art-au-feminin/id1493131152",
    },
    {
      name: "Google podcasts",
      url:
        "https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85NDgzZGY4L3BvZGNhc3QvcnNz",
    },
    {
      name: "Deezer",
      url: "https://www.deezer.com/us/show/2157592",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/18f84r0ic2PUenYvBRr2Ps",
    },
  ]

  return (
    <footer className="footer">
      <div className="flex flex-col md:flex-row">
        <div className="flex-none sm:flex-1">
          <p>
            &copy; {new Date().getFullYear()} • <Link to={`/`}>{title}</Link>
          </p>
        </div>
        <div className="flex-none sm:flex-1 sm:text-align-center">
          <p className="pl-12">Écoutez le podcast</p>
          <div className="grid grid-flow-col md:grid-flow-col grid-cols-4 text-center items-center">
            {platforms.map((platform, index) => {
              return (
                <div key={index}>
                  <a href={platform.url} className="p-5">
                    {platform.name}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
