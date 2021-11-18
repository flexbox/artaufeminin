import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleList from "../components/articleListItem"
import LayoutSidebar from "../components/layoutSidebar"

interface ArticlesPageProps {
  data: {
    allPrismicBlogPost: {
      nodes: [] // it should be something like PrismicBlogPost[]
    }
  }
}

const ArticlesPage = ({ data }: ArticlesPageProps) => {
  const articles = data.allPrismicBlogPost.nodes

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
            raw
          }
          description {
            raw
          }
        }
      }
    }
  }
`

export default ArticlesPage
