import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BookList from "../components/bookListItem"
import LayoutSidebar from "../components/layoutSidebar"

interface BooksPageProps {
  data: {
    allPrismicBook: {
      nodes: Book[]
    }
  }
}

interface Book {
  uid: string
  data: {
    title: {
      text: string
    }
    content: {
      text: string
    }
  }
}

const BooksPage = ({ data }: BooksPageProps) => {
  const books = data.allPrismicBook.nodes

  return (
    <Layout withInstagram={false}>
      <SEO title="Critiques de livres" />

      <LayoutSidebar withPodcast={false}>
        <BookList allBooks={books} />
      </LayoutSidebar>
    </Layout>
  )
}

export const query = graphql`
  query allBooks {
    allPrismicBook {
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
