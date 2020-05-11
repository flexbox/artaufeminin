// custom typefaces
import "typeface-merriweather"

// Prismic
const { registerLinkResolver } = require("gatsby-source-prismic-graphql")
const { linkResolver } = require("./src/utils/linkResolver")

registerLinkResolver(linkResolver)
