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
      title="Écoutez des discussions inspirantes sur les femmes artistes et leur travail avec notre podcast."
      description="Explorez l'art au féminin d'une manière tout à fait unique grâce à notre collection de podcasts stimulants. Notre série de podcasts vous offre un accès privilégié à des récits captivants sur la créativité, l'histoire de l'art et l'influence des femmes artistes. Écoutez, apprenez et laissez-vous inspirer par les voix éclairées de l'art au féminin."
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
