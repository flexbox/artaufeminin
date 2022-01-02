import React, { ReactElement } from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"
import PressList from "../components/pressList"
import Text from "../components/text"

const PressLogoList = () => (
  <ul className="flex m-auto justify-center py-2">
    <li>
      <StaticImage
        src="../images/logo-panthere-premiere.png"
        alt="Logo Premier Panthere"
        placeholder="blurred"
      />
    </li>
    <li>
      <StaticImage
        src="../images/logo-podtail.png"
        alt="Logo Podtail"
        placeholder="blurred"
      />
    </li>
    <li>
      <StaticImage
        src="../images/logo-google-podcast.png"
        alt="Logo Google Podcast"
        placeholder="blurred"
      />
    </li>
    <li>
      <StaticImage
        src="../images/logo-cultea.png"
        alt="Logo Cultea"
        placeholder="blurred"
      />
    </li>
    <li>
      <StaticImage
        src="../images/logo-francetv.png"
        alt="Logo France Info"
        placeholder="blurred"
      />
    </li>
    <li>
      <StaticImage
        src="../images/logo-amylee.png"
        alt="Logo Amylee"
        placeholder="blurred"
      />
    </li>
  </ul>
)

export default function pressPage(): ReactElement {
  return (
    <Layout>
      <SEO
        title="Espace Presse"
        description="Le podcast nouvelle génération qui nous raconte l'histoire des femmes artistes d'hier et d'aujoud'hui"
      />
      <div className="max-w-2xl m-auto">
        <Text as="h1" className="mb-4">
          Presse
        </Text>
        <Text as="p" className="">
          Contact presse : artaufemininlepodcast@gmail.com
        </Text>
        <PressLogoList />
        <PressList />
      </div>

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
