import React from "react"
import { graphql } from "gatsby"

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

export const query = graphql`
  query {
    prismic {
      allBlog_posts(sortBy: date_DESC) {
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

export default ArticlesPage
