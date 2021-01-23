import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Author() {
  return (
    <StaticQuery
      query={authorQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata
        return (
          <section className="flex p-8 rounded-2xl bg-white shadow-lg items-center">
            <div className="flex-2 pr-8">
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                className="rounded-full"
              />
            </div>
            <div className="flex-10">
              <p className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-3">
                Aldjia
              </p>
              <p className="text-2xl sm:text-3xl mb-3">
                Créatrice et animatrice de podcasts
              </p>
              <p className="mb-0">
                À tout de suite sur <a href={social.instagramUrl}>Instagram</a>{" "}
                ou <a href={social.facebookUrl}>Facebook</a> !
              </p>
            </div>
          </section>
        )
      }}
    />
  )
}

const authorQuery = graphql`
  query AuthorQuery {
    avatar: file(absolutePath: { regex: "/profile-picture.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          instagramUrl
          facebookUrl
        }
      }
    }
  }
`

export default Author
