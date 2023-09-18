import React, { ReactElement } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function NotFoundPage(): ReactElement {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl">
        <div className="my-32">
          <h1>Ohoh. Il n'y a rien à voir ici.</h1>
          <p>La page que vous demandez n'existe pas.</p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => {
  return (
    <SEO
      title="404: Not Found"
      description="Découvrez l'univers de l'art sur ART au féminin. Bien que cette page puisse être une impasse, nos trésors artistiques vous attendent juste au coin de la rue. Explorez notre collection diversifiée et laissez la créativité guider votre parcours."
    />
  )
}
