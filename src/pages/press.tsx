import React, { ReactElement } from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import PressList from "../components/pressList"
import Text from "../components/text"

interface PressProps {}

export default function press({}: PressProps): ReactElement {
  return (
    <Layout>
      <SEO title="page presse" description="" />
      <Text as="h1" className="text-center text-3xl mb-12 m-auto pt-12">
        Ces articles parlent d'Art au Féminin
      </Text>
      <PressList />
      <ul className="flex  m-auto justify-center py-12">
        <li>
          <StaticImage
            src="../images/logo-panthere-premiere.png"
            alt="Logo Premier Panthere"
          />
        </li>
        <li>
          <StaticImage src="../images/logo-podtail.png" alt="Logo Podtail" />
        </li>
        <li>
          <StaticImage
            src="../images/logo-google-podcast.png"
            alt="Logo Google Podcast"
          />
        </li>
        <li>
          <StaticImage src="../images/logo-cultea.png" alt="Logo Cultea" />
        </li>
        <li>
          <StaticImage
            src="../images/logo-francetv.png"
            alt="Logo France Info"
          />
        </li>

        <li>
          <StaticImage src="../images/logo-amylee.png" alt="Logo Amylee" />
        </li>
      </ul>
    </Layout>
  )
}
