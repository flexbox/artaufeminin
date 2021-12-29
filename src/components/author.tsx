import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import StaticImage from "gatsby-plugin-image"
import Text from "./text"
import { StaticImage } from "gatsby-plugin-image"

function Author() {
  return (
    <StaticQuery
      query={authorQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata
        return (
          <section className="flex p-8 bg-white shadow-md items-center my-12">
            <div className="flex-2 pr-12">
              <StaticImage
                src="../images/profile-picture.jpg"
                alt={author}
                width={120}
                height={120}
              />
            </div>
            <div className="flex-10">
              <Text as="p" className="mt-2 font-semibold">
                Aldjia <span>•</span> Créatrice et animatrice de podcasts
              </Text>
              <p className="mb-0">
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
