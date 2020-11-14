// custom typefaces
import "typeface-merriweather"

// Prismic
const {
  registerLinkResolver,
} = require("@prismicio/gatsby-source-prismic-graphql")
const { linkResolver } = require("./src/utils/linkResolver")

registerLinkResolver(linkResolver)
