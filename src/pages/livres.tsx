import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BookReviewList from "../components/bookReviewListItem"

interface LivresPageProps {
  data: {
    allPrismicBookReview: {
      nodes: [] // it should be something like PrismicBlogPost[] insteead of a simple []
    }
  }
}

const LivresPage = ({ data }: LivresPageProps) => {
  const bookReviewNodes = data.allPrismicBookReview.nodes

  return (
    <Layout withInstagram={false}>
      <SEO title="Livres" />

      <div>
        <BookReviewList allBookReviews={bookReviewNodes} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
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

export default LivresPage
