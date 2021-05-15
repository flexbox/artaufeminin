import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleList from "../components/articleListItem"
import LayoutSidebar from "../components/layoutSidebar"

const ArticlesPage = ({ data }) => {
  const articles = data.prismic.allBlog_posts.edges

  return (
    <Layout>
      <SEO title="Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia" />

      <LayoutSidebar withPodcast={false}>
        <ArticleList allArticles={articles} />
      </LayoutSidebar>
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
            date
            description
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => <ArticlesPage data={data} />}
  />
)
