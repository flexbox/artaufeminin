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

export const Head = () => {
  return <SEO title="Critiques de livres" />
}

export default BooksPage
