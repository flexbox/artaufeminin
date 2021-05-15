import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EpisodeItem from "../components/episodeItem"
import LayoutSidebar from "../components/layoutSidebar"

const PodcastPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes

  return (
    <Layout>
      <SEO
        title="🎙 Tous les épisodes du podcast sur les femmes artistes"
        description=""
      />

      <LayoutSidebar>
        {allEpisodes.map((episode) => {
          return (
            <EpisodeItem
              key={episode.id}
              episode={episode}
              isSummaryTruncate={true}
            />
          )
        })}
      </LayoutSidebar>
    </Layout>
  )
}

const episodesQuery = graphql`
  query {
    allAnchorEpisode {
      nodes {
        ...AnchorEpisodeFragment
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={episodesQuery}
    render={(data) => <PodcastPage data={data} />}
  />
)
