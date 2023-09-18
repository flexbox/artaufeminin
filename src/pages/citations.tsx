import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import LayoutSidebar from "../components/layoutSidebar"
import { QuotationProps } from "../components/quotation"
import QuotationList from "../components/quotationList"
import SEO from "../components/seo"

const QuotationPage = ({
  data,
}: {
  data: { allPrismicQuotation: { nodes: QuotationProps[] } }
}) => {
  const quotation = data.allPrismicQuotation.nodes

  return (
    <Layout withInstagram={false}>
      <LayoutSidebar withPodcast={false}>
        <QuotationList allQuotation={quotation} />
      </LayoutSidebar>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPrismicQuotation {
      nodes {
        id
        data {
          author
          quotation
        }
      }
    }
  }
`
export const Head = () => {
  return <SEO title="Citation courtes de femme artistes" />
}
export default QuotationPage
