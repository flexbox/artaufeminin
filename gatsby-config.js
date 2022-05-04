const siteConfig = require("./siteConfig")

const { linkResolver } = require("./src/utils/linkResolver.ts")
const siteUrl = process.env.URL || `https://www.artaufeminin.fr`
module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Merriweather"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.artaufeminin.fr`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        start_url: siteConfig.prefix,
        lang: `fr`,
        background_color: `#ffffff`,
        theme_color: `#8ba28e`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/`,
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allPrismicBlogPost {
            nodes {
              last_publication_date
            }
          }
          allAnchorEpisode {
            nodes {
              pubDate
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map((page) => {
            return { ...page }
          })
        },
        serialize: ({ path, last_publication_date, pubDate }) => {
          if (path.startsWith("/article/")) {
            return {
              url: `${siteUrl}${path}`,
              lastmod: last_publication_date,
            }
          } else {
            return {
              url: `${siteUrl}${path}`,
              lastmod: pubDate,
            }
          }
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-anchor",
      options: {
        rss: siteConfig.anchorRssUrl,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "artaufeminin",
        linkResolver: (doc) => linkResolver(doc),
        schemas: {
          faq: require("./custom_types/faq.json"),
          blog_post: require("./custom_types/blog_post.json"),
          press: require("./custom_types/press.json"),
        },
      },
    },
  ],
}
