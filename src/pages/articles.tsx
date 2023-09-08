import { graphql } from "gatsby"
import React from "react"

import ArticleList from "../components/articleListItem"
import Layout from "../components/layout"
import LayoutSidebar from "../components/layoutSidebar"
import SEO from "../components/seo"

interface ArticlesPageProps {
  data: {
    allPrismicBlogPost: {
      nodes: [] // it should be something like PrismicBlogPost[] insteead of a simple []
    }
  }
}

const ArticlesPage = ({ data }: ArticlesPageProps) => {
  const articles = data.allPrismicBlogPost.nodes

  return (
    <Layout withInstagram={false}>
      <SEO title="Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia" />

      <LayoutSidebar withPodcast={false}>
        <ArticleList allArticles={articles} />
      </LayoutSidebar>
    </Layout>
  )
}

export const query = graphql`
  query allBlogPosts {
    allPrismicBlogPost(sort: { first_publication_date: DESC }) {
      nodes {
        ...PrismicBlogPostFragment
      }
    }
  }
`

export default ArticlesPage
