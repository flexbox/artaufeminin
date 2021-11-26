import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Text from "./text"

function Author() {
  return (
    <StaticQuery
      query={authorQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata
        return (
          <section className="flex p-8 bg-white shadow-md items-center">
            <div className="flex-2 pr-12">
              <StaticImage
                src="../images/profile-picture.jpg"
                alt={author}
                width={120}
                height={120}
              />
            </div>
            <div className="flex-10">
              <Text as="pAuthor">
                Aldjia
                <span>
                  {" "}
                  <span>•</span> Créatrice et animatrice de podcasts
                </span>
              </Text>
              <p className="mb-0 font-merri">
                À tout de suite sur{" "}
                <a className="text-blue-500 " href={social.instagramUrl}>
                  Instagram
                </a>{" "}
                ou{" "}
                <a className="text-blue-500 " href={social.facebookUrl}>
                  Facebook
                </a>{" "}
                !
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
