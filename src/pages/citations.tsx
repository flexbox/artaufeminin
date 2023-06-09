import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import QuotationList from "../components/quotationListItem"
import LayoutSidebar from "../components/layoutSidebar"
import { QuotationProps } from "../components/quotation" // Importing QuotationProps from quotation.d.ts

const QuotationPage = ({
  data,
}: {
  data: { allPrismicQuotation: { nodes: QuotationProps[] } }
}) => {
  const quotation = data.allPrismicQuotation.nodes

  return (
    <Layout withInstagram={false}>
      <SEO title="Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia" />

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

export default QuotationPage
