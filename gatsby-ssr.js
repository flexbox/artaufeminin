import React from "react"
import { AudioProvider } from "./src/components/player/AudioProvider"

export const wrapRootElement = ({ element }) => (
  <AudioProvider>{element}</AudioProvider>
)

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="gf-preconnect"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="gf-preconnect-static"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="gf-cormorant"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&display=swap"
    />,
  ])
}
