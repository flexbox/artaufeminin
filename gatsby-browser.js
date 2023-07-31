import React from "react"
import "./src/stylesheets/global.css"
import "typeface-merriweather"

import { AudioProvider } from "./src/components/player/AudioProvider"

export const wrapRootElement = ({ element }) => (
  <AudioProvider>{element}</AudioProvider>
)
