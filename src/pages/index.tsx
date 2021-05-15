import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ApplePodcastIcon from "../components/applePodacstIcon"
import Hero from "../components/hero"
import EpisodeItem from "../components/episodeItem"
import ArticleList from "../components/articleListItem"

const IndexPage = ({ data }) => {
  const siteDescription = data.site.siteMetadata.description
  const logoUrl = data.logo.childImageSharp.fixed
  const reviewsUrl = data.reviews.childImageSharp.fixed
  const allEpisodes = data.allAnchorEpisode.nodes
  const allArticles = data.prismic.allBlog_posts.edges

  return (
    <Layout>
      <SEO title="🎙 Un podcast sur l’histoire des femmes dans le monde artistique présenté par Aldjia" />

      <div style={{ maxWidth: "80em", margin: "0 auto" }}>
        <Hero
          heroTitle={siteDescription}
          imageUrlFixed={logoUrl}
          imageAlt={"Logo podcast ART au feminin"}
        >
          <div className="flex flex-col sm:flex-row mt-12">
            <div className="flex-initial px-4 pl-0 mb-6">
              <Link to={"/links"} className="button primary large">
                Écouter et s’abonner
              </Link>
            </div>
            <div className="flex-initial sm:px-4">
              <a
                href="https://podcasts.apple.com/fr/podcast/art-au-feminin/id1493131152"
                target="_blank"
                rel="noopener noreferrer"
                className="flex button large"
              >
                <ApplePodcastIcon style={{ height: 46 }} />
              </a>
            </div>
          </div>
        </Hero>

        <div className="max-w-6xl mb-64">
          <h2 className="text-4xl">Épisodes récents</h2>
          <hr className="separator mt-16" />
          {allEpisodes.map((episode) => {
            return (
              <EpisodeItem
                key={episode.id}
                episode={episode}
                isSummaryTruncate={true}
              />
            )
          })}
          <Link to={"/podcast"} className="button">
            Voir tous les épisodes
          </Link>
        </div>

        <ArticleList allArticles={allArticles} />

        <div className="max-w-6xl">
          <h2 className="text-4xl">Ce que les auditeurs en disent</h2>
          <p>
            ⭐ Moyenne de 5/5 étoiles sur{" "}
            <a
              href="https://podcasts.apple.com/fr/podcast/art-au-feminin/id1493131152#see-all/reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Podcast
            </a>
            .
          </p>
          <Image
            fixed={reviewsUrl}
            alt={"5 étoiles pour ART au feminin sur Apple podcast"}
          />
          <h2 className="text-4xl">Laissez moi une évaluation</h2>
          <p>
            Si vous aimez l’émission, la meilleure façon de la soutenir est de
            me laisser une évaluation sur Apple Podcast.
          </p>
          <a
            href="https://podcasts.apple.com/fr/podcast/art-au-feminin/id1493131152"
            className="button"
          >
            Cliquez ici pour 5 ⭐ sur Apple Podcast
          </a>
        </div>
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
    reviews: file(absolutePath: { regex: "/reviews.png/" }) {
      childImageSharp {
        fixed(width: 990, height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allAnchorEpisode(limit: 3) {
      nodes {
        ...AnchorEpisodeFragment
      }
    }

    prismic {
      allBlog_posts(sortBy: date_DESC, first: 3) {
        edges {
          node {
            _meta {
              uid
            }
            title
            description
            date
            image
          }
        }
      }
    }
  }

  fragment AnchorEpisodeFragment on AnchorEpisode {
    id
    guid
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

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <IndexPage location={props.location} props data={data} {...props} />
    )}
  />
)
