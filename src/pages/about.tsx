import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="👩‍🎨 À propos" />

      <article className="post-content no-image">
        <div className="post-content-header">
          <h1 className="post-content-title">
            Moins de 4% des artistes dans la section art moderne sont des
            femmes, mais 76% des nus sont des femmes.
          </h1>
        </div>
        <div className="post-content-body">
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Photo de Flipboard sur Unsplash</figcaption>
          </figure>
          <h2>Mon histoire</h2>
          <p>
            J’ai pour prénom <strong>Aldjia</strong> et je{" "}
            <strong>suis fan d’art</strong>.
          </p>
          <p>
            À travers cette passion, j’ai souvent entendu parler d’hommes
            artistes…
            <br />
            …moins souvent des <strong>femmes artistes</strong>.
          </p>
          <hr />
          <blockquote>
            Pourtant, le monde de l’art regorge de talentuseuses artistes.
          </blockquote>
          <hr />
          <p>
            J’enregistre des podcats pour vous{" "}
            <strong>faire découvrir les femmes artistes</strong> qui ont marqué{" "}
            <strong>l’histoire de l’art</strong>. Ce projet me tient à coeur.
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
        <div className="post-content-body">
          <hr />
          <p>
            P.S. Voici quelques pages de ce site qui ne sont pas incluses dans
            la navigation principale, mais qui pourraient vous intéresser :
          </p>
          <ul>
            <li>
              <Link to="/faq">Questions fréquentes</Link>
            </li>
          </ul>
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
      relativePath: { eq: "flipboard-Ylus81fS7q4-unsplash.jpg" }
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
