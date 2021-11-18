const siteConfig = require("./siteConfig")

const { linkResolver } = require("./src/utils/linkResolver.ts")

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
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
        // customTypesApiToken: `${process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN}`,
        linkResolver: (doc) => linkResolver(doc),
        schemas: {
          faq: require("./custom_types/faq.json"),
          blog_post: require("./custom_types/blog_post.json"),
        },
        // required
        //schemas: {

        // pages: [
        //   {
        //     // optional
        //     type: "Blog_post", // TypeName from prismic
        //     match: "/article/:uid", // pages will be generated under this pattern
        //     previewPath: "/article", // optional path for unpublished documents
        //     component: require.resolve("./src/templates/article.tsx"),
        //     sortBy: "date_ASC", // optional, default: meta_lastPublicationDate_ASC; useful for pagination
        //   },
        // ],
        // extraPageFields: "article_type", // optional, extends pages query to pass extra fields
        // sharpKeys: [
        //   /image|photo|picture/, // (default)
        //   "profilepic",
        // ],
      },
    },

    "gatsby-plugin-image",
    // {
    //   resolve: "gatsby-source-prismic",
    //   options: {
    //     repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    //     customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
    //     linkResolver: (doc) => linkResolver(doc),
    //     schemas: {
    //       page: require("./custom_types/blog_post.json"),
    //     },
    //   },
    // },
  ],
}
