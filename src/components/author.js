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
          <section>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Written by <strong>{author}</strong> who lives and works in San
              Francisco building useful things.
              {` `}
              <a href={`https://instagram.com/${social.instagram}`}>
                You should follow him on Twitter
              </a>
            </p>
          </section>
        )
      }}
    />
  )
}

const authorQuery = graphql`
  query AuthorQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
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
