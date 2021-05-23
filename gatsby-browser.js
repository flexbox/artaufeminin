import * as React from "react"
import { PreviewStoreProvider } from "gatsby-source-prismic"

import "typeface-merriweather"
import "./src/styles/tailwind.css"

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider initialEnabled={true}>{element}</PreviewStoreProvider>
)
