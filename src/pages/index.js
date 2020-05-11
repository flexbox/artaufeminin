import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCard from "../components/articleCard"

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const articles = data.prismic.allBlog_posts.edges
  let articleCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO title="🎙 ART au feminin : Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia" />

      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h1 className="page-head-title">
            {data.site.siteMetadata.description}
          </h1>
        </header>
      )}

      <div className="post-feed">
        {articles.map(({ node }) => {
          articleCounter++
          return (
            <ArticleCard
              key={node._meta.id}
              counter={articleCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    prismic {
      allBlog_posts {
        edges {
          node {
            image
            title
            _meta {
              id
              uid
            }
          }
        }
        totalCount
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
