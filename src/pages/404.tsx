import React, { ReactElement } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

export default function NotFoundPage({ data }: Props): ReactElement {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Ohoh. Il n'y a rien à voir ici.</h1>
      <p>La page que vous demandez n'existe pas.</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
