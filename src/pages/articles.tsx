import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleList from "../components/articleListItem"
import LayoutSidebar from "../components/layoutSidebar"

const ArticlesPage = ({ data }) => {
  const allArticles = data.allPrismicBlogPost.nodes

  return (
    <Layout>
      <SEO title="Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia" />

      <LayoutSidebar withPodcast={false}>
        <ArticleList allArticles={allArticles} />
      </LayoutSidebar>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPrismicBlogPost(sort: { order: DESC, fields: data___date }) {
      nodes {
        ...PrismicPostFragment
      }
    }
  }
`

export default ArticlesPage
