import React, { ReactElement } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

export default function StartPage({ data }: Props): ReactElement {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Présentez vous" />
      <div className="post-content">
        <div className="post-content-body">
          <iframe
            src="https://airtable.com/embed/shrDSm33OhRdSGD0C?backgroundColor=purple"
            frameBorder="0"
            width="100%"
            height="1635"
          ></iframe>
        </div>
      </div>
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
