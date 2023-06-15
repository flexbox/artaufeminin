import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BookList from "../components/bookListItem"
import LayoutSidebar from "../components/layoutSidebar"

interface BooksPageProps {
  data: {
    allPrismicBookReview: {
      nodes: Book[]
    }
  }
}

interface Book {
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
  const books = data.allPrismicBookReview.nodes.map((node: Book) => ({
    title: node.data.title.text,
    content: node.data.content.text,
  }))

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
  query {
    allPrismicBookReview {
      nodes {
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
