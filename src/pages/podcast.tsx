import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EpisodeItem from "../components/podcast/episodeItem"
import Subscribe from "../components/subscribe"
import SubscribeInstagram from "../components/subscribeInstagram"
import SubscribeTipeee from "../components/subscribeTipeee"

const PodcastPage = ({ data }) => {
  const allEpisodes = data.allAnchorEpisode.nodes

  return (
    <Layout>
      <SEO
        title="🎙 Tous les épisodes du podcast sur les femmes artistes"
        description=""
      />

      <div style={{ maxWidth: "80em", margin: "0 auto" }}>
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Subscribe />
            <div className="hidden md:flex">
              <SubscribeInstagram />
            </div>
            <div className="hidden md:flex">
              <SubscribeTipeee />
            </div>
          </div>

          <div className="md:col-span-8">
            {allEpisodes.map((episode) => {
              return (
                <EpisodeItem
                  key={episode.id}
                  episode={episode}
                  isSummaryTruncate={true}
                />
              )
            })}
          </div>
        </div>
      </div>
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
