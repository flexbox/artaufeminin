import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleCard from "../components/articleCard"

const ArticlesPage = ({ data }) => {
  const articles = data.prismic.allBlog_posts.edges
  const articleCounter = data.prismic.allBlog_posts.totalCount

  return (
    <Layout>
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
    prismic {
      allBlog_posts(sortBy: meta_firstPublicationDate_DESC) {
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

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <ArticlesPage location={props.location} props data={data} {...props} />
    )}
  />
)
