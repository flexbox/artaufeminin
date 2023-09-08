import { graphql } from "gatsby"
import React from "react"

import BookList, { BookProps } from "../components/book-list"
import Layout from "../components/layout"
import LayoutSidebar from "../components/layoutSidebar"
import SEO from "../components/seo"

interface BooksPageProps {
  data: {
    allPrismicBookReview: {
      nodes: BookProps[]
    }
  }
}

const BooksPage = ({ data }: BooksPageProps) => {
  const allBooks = data.allPrismicBookReview.nodes

  return (
    <Layout withInstagram={false}>
      <SEO title="Critiques de livres" />

      <LayoutSidebar withPodcast={false}>
        <BookList allBooks={allBooks} />
      </LayoutSidebar>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPrismicBookReview {
      nodes {
        uid
        data {
          title {
            text
          }
          content {
            text
          }
        }
      }
    }
  }
`

export default BooksPage
