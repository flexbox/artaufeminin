import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"

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

      <article className="post-content">
        <div className="post-content-body">
          {allEpisodes.map(episode => {
            return (
              <div key={episode.id}>
                <h2>{episode.title}</h2>
                <p className="text-gray-500">
                  <em>Saison {episode.itunes.season}</em>
                  <span className="mx-3">•</span>
                  <em>Épisode {episode.itunes.episode}</em>
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: episode.itunes.summary }}
                />
                <div className="flex">
                  <div className="flex-1 px-4 pl-0">
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
                  <div className="flex-1 px-4 pr-0">
                    <a
                      href="https://instagram.com/artaufeminin"
                      title="Contacter sur instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button large fit"
                    >
                      Réagir à l’épisode sur Instagram
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
