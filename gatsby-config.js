const siteConfig = require("./siteConfig")

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
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
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        printRejected: false,
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        start_url: siteConfig.prefix,
        background_color: `#ffffff`,
        theme_color: `#8ba28e`,
        display: `minimal-ui`,
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
      resolve: "@prismicio/gatsby-source-prismic-graphql",
      options: {
        repositoryName: "artaufeminin",
        defaultLang: "fr-fr",
        pages: [
          {
            type: "Blog_post",
            match: "/article/:uid",
            component: require.resolve("./src/templates/article.tsx"), // pages will be generated under this pattern
          },
        ],
        sharpKeys: [
          /image|photo|picture/, // (default)
          "profilepic",
        ],
      },
    },
    "gatsby-plugin-typescript",
  ],
}
