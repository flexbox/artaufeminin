import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PodcastPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const allEpisodes = data.allAnchorEpisode.nodes

  return (
    <Layout title={siteTitle}>
      <SEO
        title="🎙 Tous les épisodes du podcast sur les femmes artistes"
        description=""
      />

      <article className="post-content no-image">
        <div className="post-content-header">
          <h1 className="post-content-title">Liste des épisodes du podcast</h1>
        </div>
        <div className="post-content-body">
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Photo by Matt Botsford on Unsplash</figcaption>
          </figure>

          {allEpisodes.map(episode => {
            return (
              <div key={episode.id}>
                <h2>{episode.title}</h2>
                <p className="text-center">
                  <em>Saison {episode.itunes.season}</em> •{" "}
                  <em>Épisode {episode.itunes.episode}</em>
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: episode.itunes.summary }}
                />
                <div className="row">
                  <div className="col">
                    <a
                      href={episode.link}
                      title="Écouter sur anchor.fm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button primary large fit"
                    >
                      Écouter l'épisode
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://instagram.com/artaufeminin"
                      title="Contacter sur instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button large fit"
                    >
                      Envie de réagir à l'épisode ?
                    </a>
                  </div>
                </div>

                <hr />
              </div>
            )
          })}
        </div>
      </article>
    </Layout>
  )
}

const episodesQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    benchAccounting: file(relativePath: { eq: "art-au-feminin-podcast.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allAnchorEpisode {
      nodes {
        id
        title
        link
        itunes {
          summary
          episode
          season
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={episodesQuery}
    render={data => (
      <PodcastPage location={props.location} props data={data} {...props} />
    )}
  />
)
