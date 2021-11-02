import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/author"
import CustomRichText from "../components/customRichText"
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

      <article className="prose-2xl w-1/2 m-auto">
        <header className="">
          <h1 className="">{title}</h1>
        </header>

        <div className="">{description}</div>

        {image && (
          <div className="">
            <figure className="">
              <img className="mx-auto" src={image.url} alt={image.alt} />
              <figcaption className="mt-8">
                {image.alt} {image.copyright && `© ${image.copyright}`}
              </figcaption>
            </figure>
          </div>
        )}

        <div className="">
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
