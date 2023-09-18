import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import EpisodeItem from "../components/episodeItem"
import Layout from "../components/layout"
import LayoutSidebar from "../components/layoutSidebar"
import SEO from "../components/seo"

const PodcastsPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes

  return (
    <Layout>
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

export const Head = () => {
  return (
    <SEO
      title="Tous les épisodes du podcast sur les femmes artistes."
      description=""
    />
  )
}

export default function PodcastQuery() {
  const data = useStaticQuery(graphql`
    query {
      allAnchorEpisode(sort: { isoDate: DESC }) {
        nodes {
          isoDate
          ...AnchorEpisodeFragment
        }
      }
    }
  `)

  return <PodcastsPage data={data} />
}
