import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCard from "../components/articleCard"
import ApplePodcastIcon from "../components/applePodacstIcon"

const ArticlesPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const articles = data.prismic.allBlog_posts.edges
  const articleCounter = data.prismic.allBlog_posts.totalCount

  return (
    <Layout title={siteTitle}>
      <SEO title="Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia" />

      <div className="post-feed">
        {articles.map(({ node }) => {
          return (
            <ArticleCard
              key={node._meta.id}
              counter={articleCounter}
              node={node}
              postClass="post"
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
      <ArticlesPage location={props.location} props data={data} {...props} />
    )}
  />
)
