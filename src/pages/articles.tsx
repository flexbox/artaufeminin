import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleList from "../components/articleListItem"
import LayoutSidebar from "../components/layoutSidebar"

interface ArticlesPageProps {
  data: {
    allPrismicBlogPost: {
      nodes: []
      edges: [] // it should be something like PrismicBlogPost[] insteead of a simple []
    }
  }
}

const ArticlesPage = ({ data }: ArticlesPageProps) => {
  const articles = data.allPrismicBlogPost.nodes
  const articlesNext = data.allPrismicBlogPost.edges

  return (
    <Layout>
      <SEO title="Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia" />

      <LayoutSidebar withPodcast={false}>
        <ArticleList allArticles={articles} allArticlesNext={articlesNext} />
      </LayoutSidebar>
    </Layout>
  )
}

export const query = graphql`
  query allBlogPosts {
    allPrismicBlogPost(sort: { fields: first_publication_date, order: DESC }) {
      nodes {
        ...PrismicBlogPostFragment
      }
      edges {
        next {
          uid
        }
        previous {
          uid
        }
      }
    }
  }
`

export default ArticlesPage
