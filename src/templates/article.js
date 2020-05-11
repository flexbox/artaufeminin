import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Author from "../components/blog/author"

export default function Article(props) {
  const siteTitle = props.data.site.siteMetadata.title
  const doc = props.data.prismic.allBlog_posts.edges.slice(0, 1).pop()
  console.log("Article -> doc", doc)

  if (!doc) return null

  return (
    <Layout title={siteTitle}>
      <SEO title="Article" />

      <article className={`post-content`}>
        <header className="post-content-header">
          <h1 className="post-content-title">
            {RichText.asText(doc.node.title)}
          </h1>
        </header>

        <p class="post-content-excerpt">
          {RichText.render(doc.node.description)}
        </p>

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
          <p>{doc.node.date}</p>
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
