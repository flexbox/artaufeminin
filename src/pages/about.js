import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="À propos" />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Moins de 4% des artistes dans la section art moderne sont des
            femmes, mais 76% des nus sont des femmes.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure>
          <h3>Mon histoire</h3>
          <p>
            J'ai pour prénom <strong>Aldjia</strong> et je{" "}
            <strong>suis fan d'art</strong>.
          </p>
          <p>
            À travers cette passion, j'ai souvent entendu parler d'hommes
            artistes…
            <br />
            …moins souvent des <strong>femmes artistes</strong>.
          </p>
          <hr />
          <blockquote>
            Pourtant, le monde de l'art regorge de talentuseuses artistes.
          </blockquote>
          <hr />
          <p>
            J'enregistre des podcats pour vous{" "}
            <strong>faire découvrir les femmes artistes</strong> qui ont marqué{" "}
            <strong>l'histoire de l'art</strong>. Ce projet me tient à coeur.
          </p>
          <p>
            <em>
              Car on en parle jamais trop, car ça va nous permettre de de nous
              enrichir culturellement.
            </em>
          </p>
          <p>
            <em>Bonjour, et bienvenue dans ART au feminin</em>
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
