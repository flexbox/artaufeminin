import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import EpisodeItem from "../components/podcast/episodeItem"

const PodcastPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes
  const imageUrlFixed = data.benchAccounting.childImageSharp.fixed

  return (
    <Layout>
      <SEO
        title="🎙 Tous les épisodes du podcast sur les femmes artistes"
        description=""
      />

      <Hero
        heroTitle={"Tous les épisodes du podcast ART au féminin"}
        imageUrlFixed={imageUrlFixed}
        imageAlt={"Photo by Matt Botsford on Unsplash"}
      />

      <div className="max-w-6xl">
        {allEpisodes.map(episode => {
          return <EpisodeItem key={episode.id} episode={episode} />
        })}
      </div>
    </Layout>
  )
}

const episodesQuery = graphql`
  query {
    benchAccounting: file(relativePath: { eq: "art-au-feminin-podcast.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allAnchorEpisode {
      nodes {
        ...AnchorEpisodeFragment
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
