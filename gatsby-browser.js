// custom typefaces
import "typeface-merriweather"

import "./src/styles/tailwind.css"

// Prismic
const { registerLinkResolver } = require("@prismicio/gatsby-source-prismic")
const { linkResolver } = require("./src/utils/linkResolver")

registerLinkResolver(linkResolver)
