import React, { ReactElement } from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import PressList from "../components/pressList"
import Text from "../components/text"
import { Link } from "gatsby"

interface PressProps {}

export default function press({}: PressProps): ReactElement {
  return (
    <Layout>
      <SEO title="page presse" description="" />
      <Text as="h1" className="text-center text-3xl mb-12 m-auto pt-12">
        Ces articles parlent d'ART au féminin
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
      <Text as="h2" className="text-center my-8">
        Logos
      </Text>
      <div className="m-auto text-center">SVG</div>
      <ul className="flex space-x-4 m-auto justify-center py-12">
        <li>
          <StaticImage
            src="../images/logo/logo-black.svg"
            alt="Logo Noir ART au féminin"
            width={200}
          />
        </li>

        <li>
          <StaticImage
            width={200}
            src="../images/logo/logo-green.svg"
            alt="Logo Vert ART au féminin"
          />
        </li>

        <li>
          <StaticImage
            width={200}
            src="../images/logo/logo-white.svg"
            alt="Logo Blanc ART au féminin"
          />
        </li>
      </ul>
      <div className="m-auto text-center">PNG</div>
      <ul className="flex space-x-4 m-auto justify-center py-12">
        <li>
          <StaticImage
            src="../images/logo/logo-black.png"
            alt="Logo Noir ART au féminin"
            width={200}
          />
        </li>

        <li>
          <StaticImage
            width={200}
            src="../images/logo/logo-green.png"
            alt="Logo Vert ART au féminin"
          />
        </li>

        <li>
          <StaticImage
            width={200}
            src="../images/logo/logo-white.png"
            alt="Logo Blanc ART au féminin"
          />
        </li>
      </ul>
    </Layout>
  )
}
