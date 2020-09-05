import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { formatDistanceToNow } from "date-fns"
import { fr } from "date-fns/locale"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/blog/author"

export default function Article(props) {
  const doc = props.data.prismic.allBlog_posts.edges.slice(0, 1).pop()
  const siteTitle = props.data.site.siteMetadata.title
  const title = RichText.asText(doc.node.title)
  console.log("Article -> title", title)
  const description = RichText.asText(doc.node.description)

  if (!doc) return null

  const datePublished = formatDistanceToNow(new Date(doc.node.date), {
    addSuffix: true,
    locale: fr,
  })

  return (
    <Layout title={siteTitle}>
      <SEO title={title} description={description} />

      <article className={`post-content`}>
        <header className="post-content-header">
          <h1 className="post-content-title">{title}</h1>
        </header>

        <div className="post-content-excerpt">
          {RichText.render(doc.node.description)}
        </div>

        {doc.node.image && (
          <div className="post-content-image">
            <img
              className="kg-image"
              src={doc.node.image.url}
              alt={doc.node.image.alt}
            />
          </div>
        )}

        <div className="post-content-body">
          {RichText.render(doc.node.content)}
          <p>Article publié {datePublished}</p>
        </div>

        <footer className="post-content-footer">
          <Author />
        </footer>
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
