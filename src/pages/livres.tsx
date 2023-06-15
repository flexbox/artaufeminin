import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BookList from "../components/bookListItem"
import LayoutSidebar from "../components/layoutSidebar"

interface BooksPageProps {
  data: {
    allPrismicBook: {
      nodes: Book[] // Définissez une interface pour représenter la structure de vos livres
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
    allPrismicBook(sort: { fields: first_publication_date, order: DESC }) {
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
