import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Episodes = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const allEpisodes = data.allAnchorEpisode.nodes
  console.log("Episodes -> allEpisodes", allEpisodes)

  return (
    <Layout title={siteTitle}>
      <SEO
        title="🎙 Episodes • ART au feminin"
        keywords={[`episode`, `podcast`, `art`, `histoire`, `femmes`]}
      />
      <header className="page-head">
        <h1 className="page-head-title">Episodes</h1>
      </header>
      <div>
        {allEpisodes.map(episode => {
          return (
            <div key={episode.id}>
              <h2>{episode.title}</h2>
              <p>{episode.itunes.summary}</p>
            </div>
          )
        })}
      </div>
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
    allAnchorEpisode {
      nodes {
        id
        title
        pubDate
        itunes {
          summary
          duration
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
      <Episodes location={props.location} props data={data} {...props} />
    )}
  />
)
