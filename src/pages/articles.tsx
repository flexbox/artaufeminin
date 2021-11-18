import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleList from "../components/articleListItem"
import LayoutSidebar from "../components/layoutSidebar"

const ArticlesPage = ({ data }) => {
  const articles = data.allPrismicBlogPost.nodes
  console.log("file: articles.tsx ~ line 11 ~ ArticlesPage ~ data", data)

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
  query allBlogPosts {
    allPrismicBlogPost {
      nodes {
        uid
        data {
          date
          image {
            alt
            copyright
            url
            gatsbyImageData
          }
          title {
            text
            html
            richText
            raw
          }
          description {
            text
            html
            richText
            raw
          }
        }
      }
    }
  }
`

export default ArticlesPage
