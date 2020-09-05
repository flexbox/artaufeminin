import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Author() {
  return (
    <StaticQuery
      query={authorQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <section className="row section-author">
            <div className="col-2">
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                imgStyle={{
                  borderRadius: `100%`,
                }}
              />
            </div>
            <div className="col-10">
              <p>
                J’ai pour prénom <strong>Aldjia</strong> et{" "}
                <strong>je suis passionée d’art</strong>.<br />
                J’enregistre des podcats pour vous faire découvrir les femmes
                artistes qui ont marqué l’histoire.
              </p>
              <a href={`https://instagram.com/${social.instagram}`}>
                Suivre sur instagram
              </a>
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
          instagram
        }
      }
    }
  }
`

export default Author
