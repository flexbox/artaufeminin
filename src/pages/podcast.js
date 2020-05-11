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
        title="🎙 Episodes • ART au feminin"
        keywords={[`episode`, `podcast`, `art`, `histoire`, `femmes`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Podcast
          </h2>
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
                <a
                  href={episode.link}
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button primary large"
                >
                  Écouter l'épisode
                </a>
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
