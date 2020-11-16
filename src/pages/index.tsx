import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ApplePodcastIcon from "../components/applePodacstIcon"
import Hero from "../components/hero"
import EpisodeItem from "../components/podcast/episodeItem"

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
          return <EpisodeItem episode={episode} />
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
    enclosure {
      url
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
