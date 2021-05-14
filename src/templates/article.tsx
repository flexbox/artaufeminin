import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/blog/author"
import CustomRichText from "../components/blog/customRichText"
import { formatHumanDate } from "../utils/date"

export default function Article(props) {
  const doc = props.data.prismic.allBlog_posts.edges.slice(0, 1).pop()

  if (!doc) return null

  const title = RichText.asText(doc.node.title)
  const description = RichText.asText(doc.node.description)
  const datePublished = formatHumanDate(doc.node.date)

  const { image } = doc.node

  return (
    <Layout>
      <SEO title={title} description={description} />

      <article className="post-content">
        <header className="post-content-header">
          <h1 className="post-content-title">{title}</h1>
        </header>

        <div className="post-content-excerpt">{description}</div>

        {image && (
          <div className="text-center mb-10">
            <figure className="post-content-figure">
              <img className="mx-auto" src={image.url} alt={image.alt} />
              <figcaption className="mt-8">
                {image.alt} {image.copyright && `© ${image.copyright}`}
              </figcaption>
            </figure>
          </div>
        )}

        <div className="post-content-body">
          <div className="mb-20">
            <CustomRichText render={doc.node.content} />
          </div>

          <p className="text-gray-500 mb-20">
            Vous avez aimé cet article ?{" "}
            <a
              href="https://fr.tipeee.com/art-au-feminin"
              title="Sponsoriser les épisodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devenez mécène sur tipeee m’aide beaucoup.
            </a>
            <br />
            <em>Publié {datePublished}</em>
          </p>
        </div>

        <Author />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ArticleQuery($uid: String) {
    site {
      siteMetadata {
        title
      }
    }
    prismic {
      allBlog_posts(uid: $uid) {
        edges {
          node {
            _meta {
              uid
            }
            title
            description
            image
            content
            date
          }
        }
      }
    }
  }
`
