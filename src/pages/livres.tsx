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
  const book = data.allPrismicBookReview.nodes[0]
  const { title, content } = book.data

  const slug = book.uid

  return (
    <Layout withInstagram={false}>
      <SEO title="Critiques de livres" />

      <LayoutSidebar withPodcast={false}>
        <BookList
          allBooks={[{ title: title.text, content: content.text, uid: slug }]}
        />
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
