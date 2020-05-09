import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function article() {
  const doc = props.data.prismic.allBlog_posts.edges.slice(0, 1).pop()

  if (!doc) return null

  return (
    <Layout>
      <SEO title="Article" />
      <article className={`post-content`}>
        <header className="post-content-header">
          <h1 className="post-content-title">
            {RichText.render(doc.node.title)}
          </h1>
        </header>

        <p class="post-content-excerpt">description</p>

        {/* {post.frontmatter.thumbnail && (
            <div className="post-content-image">
              <Img
                className="kg-image"
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
          )} */}

        {/* <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          /> */}

        <footer className="post-content-footer">
          footer
          {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
        </footer>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageQuery($uid: String) {
    prismic {
      allBlog_posts(uid: $uid) {
        edges {
          node {
            image
            title
            _meta {
              uid
            }
            date
            content
          }
        }
      }
    }
  }
`
