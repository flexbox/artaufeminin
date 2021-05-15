// custom typefaces
import "typeface-merriweather"

import "./src/styles/tailwind.css"
import "./src/styles/css/styles.css"

// Prismic
const {
  registerLinkResolver,
} = require("@prismicio/gatsby-source-prismic-graphql")
const { linkResolver } = require("./src/utils/linkResolver")

registerLinkResolver(linkResolver)
