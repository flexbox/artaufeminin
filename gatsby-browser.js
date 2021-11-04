// custom typefaces
import "typeface-merriweather"

import "./src/styles/tailwind.css"

const { registerLinkResolver } = require("gatsby-source-prismic-graphql")
const { linkResolver } = require("./src/utils/linkResolver")
// Prismic

registerLinkResolver(linkResolver)
