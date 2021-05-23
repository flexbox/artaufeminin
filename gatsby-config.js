const {
  prismicRepo,
  releaseID,
  accessToken,
} = require("./prismic-configuration")

const linkResolver = require("./src/utils/linkResolver")
const siteConfig = require("./siteConfig")

const reponame = process.env.PRISMIC_REPO_NAME || prismicRepo
const apiKey = process.env.PRISMIC_API_KEY || accessToken
const prismicReleaseID = process.env.PRISMIC_RELEASE_ID || releaseID

const postSchema = require("./custom_types/blog_post.json")
const faqSchema = require("./custom_types/faq.json")

const gastbySourcePrismicConfig = {
  resolve: "gatsby-source-prismic",
  options: {
    repositoryName: reponame,
    accessToken: apiKey,
    releaseID: prismicReleaseID,
    prismicToolbar: true,
    linkResolver: () => (doc) => linkResolver(doc),
    schemas: {
      post: postSchema,
      faqSchema: faqSchema,
    },
  },
}

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    gastbySourcePrismicConfig,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-easy-import")(),
          require("postcss-custom-properties")({
            preserve: false,
          }),
          require("postcss-color-function")(),
        ],
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
      resolve: "gatsby-source-anchor",
      options: {
        rss: siteConfig.anchorRssUrl,
      },
    },
  ],
}
