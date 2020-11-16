import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ApplePodcastIcon from "../components/applePodacstIcon"
import PlayIcon from "../components/playIcon"
import { dutationToString } from "../utils/dutationToString"
import Hero from "../components/hero"

const IndexPage = ({ data }) => {
  const siteDescription = data.site.siteMetadata.description
  const logoUrl = data.logo.childImageSharp.fixed
  const allEpisodes = data.allAnchorEpisode.nodes

  return (
    <Layout>
      <SEO title="🎙 Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia" />

      <Hero
        heroTitle={siteDescription}
        imageUrlFixed={logoUrl}
        imageAlt={"Logo podcast ART au feminin"}
      >
        <div className="flex">
          <div className="flex-initial px-4 pl-0">
            <a
              href="https://podcasts.apple.com/us/podcast/art-au-feminin/id1493131152"
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
              style={{ width: 164, height: 40 }}
            >
              <ApplePodcastIcon />
            </a>
          </div>
          <div className="flex-initial px-4">
            <Link to={"/links"} className="button primary">
              Écouter et s’abonner
            </Link>
          </div>
        </div>
      </Hero>

      <div className="max-w-6xl">
        <h2 className="text-4xl">Épisodes récents</h2>
        <hr className="mt-16" />
        {allEpisodes.map(episode => {
          const duration = dutationToString(episode.itunes.duration)
          const summary = episode.itunes.summary.substring(0, 250)

          return (
            <div key={episode.id}>
              <div className="flex">
                <div className="flex-none">
                  <PlayIcon className="fill-current text-gray-500 inline-block w-24 h-24" />
                </div>

                <div className="flex-1 px-6">
                  <h3 className="text-3xl text-gray-700 font-bold mt-0">
                    {episode.title}
                  </h3>
                  <div dangerouslySetInnerHTML={{ __html: summary }} />
                  <p className="text-gray-500">
                    <em>Saison {episode.itunes.season}</em>
                    <span className="mx-4">•</span>
                    <em>Épisode {episode.itunes.episode}</em>
                    <span className="mx-4">•</span>
                    <em>{duration}</em>
                  </p>
                </div>
                <div className="flex-none">
                  <img
                    className="w-48 h-48"
                    src={episode.itunes.image}
                    alt={`ART au feminin S${episode.itunes.season} E${episode.itunes.episode}`}
                  />
                </div>
              </div>
              <hr />
            </div>
          )
        })}
        <Link to={"/podcast"} className="button">
          Voir tous les épisodes
        </Link>
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    logo: file(absolutePath: { regex: "/logo-podcast-art-au-feminin.png/" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allAnchorEpisode(limit: 3) {
      nodes {
        ...AnchorEpisodeFragment
      }
    }
  }

  fragment AnchorEpisodeFragment on AnchorEpisode {
    id
    link
    title
    itunes {
      summary
      image
      episode
      season
      duration
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <IndexPage location={props.location} props data={data} {...props} />
    )}
  />
)
