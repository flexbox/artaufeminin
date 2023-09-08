import { StaticQuery, graphql } from "gatsby"
import React from "react"

import EpisodeItem from "../components/episodeItem"
import Layout from "../components/layout"
import LayoutSidebar from "../components/layoutSidebar"
import SEO from "../components/seo"

const PodcastsPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes

  return (
    <Layout>
      <SEO
        title="Tous les épisodes du podcast sur les femmes artistes."
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
    allAnchorEpisode(sort: { isoDate: DESC }) {
      nodes {
        isoDate
        ...AnchorEpisodeFragment
      }
    }
  }
`

export default () => (
  <StaticQuery
    query={episodesQuery}
    render={(data) => <PodcastsPage data={data} />}
  />
)
