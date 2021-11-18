import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleList from "../components/articleListItem"
import LayoutSidebar from "../components/layoutSidebar"

const ArticlesPage = ({ data }) => {
  // const articles = data.allBlog_posts.edges
  console.log("file: articles.tsx ~ line 11 ~ ArticlesPage ~ data", data)

  return (
    <Layout>
      <SEO title="Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia" />

      <LayoutSidebar withPodcast={false}>
        <h1>ICIIIII</h1>
        {/* <ArticleList allArticles={articles} /> */}
      </LayoutSidebar>
    </Layout>
  )
}

export const query = graphql`
  {
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
`

export default ArticlesPage
