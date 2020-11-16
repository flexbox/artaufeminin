import React, { ReactElement } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {}

export default function NotFoundPage({}: Props): ReactElement {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <h1>Ohoh. Il n'y a rien à voir ici.</h1>
      <p>La page que vous demandez n'existe pas.</p>
    </Layout>
  )
}
