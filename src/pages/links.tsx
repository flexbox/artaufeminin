import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

interface Props {}

interface LinkButtonProps {
  platform: {
    name: string
    url: string
    imageUrl: string
  }
}

export const allPodcastPlatforms = [
  {
    name: "Anchor",
    url: "https://anchor.fm/artaufeminin/",
    imageUrl:
      "https://raw.githubusercontent.com/flexbox/artaufeminin/master/src/images/logo-links.svg",
  },
  {
    name: "Apple podcasts",
    url: "https://podcasts.apple.com/us/podcast/art-au-feminin/id1493131152",
    imageUrl:
      "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/itunes_podcasts.svg",
  },
  {
    name: "Deezer",
    url: "https://www.deezer.com/us/show/2157592",
    imageUrl:
      "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/deezer.svg",
  },
  {
    name: "Google podcasts",
    url: "https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85NDgzZGY4L3BvZGNhc3QvcnNz",
    imageUrl:
      "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/google_podcasts.svg",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/18f84r0ic2PUenYvBRr2Ps",
    imageUrl:
      "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/spotify.svg",
  },
]

const allSocialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/artaufeminin",
    imageUrl:
      "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/instagram.svg",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/podcastart",
    imageUrl:
      "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/facebook.svg",
  },
]

const allMoreLinks = [
  {
    name: "Site internet",
    url: "https://artaufeminin.fr",
    imageUrl:
      "https://raw.githubusercontent.com/flexbox/artaufeminin/master/src/images/logo-links.svg",
  },
  {
    name: "Articles",
    url: "https://artaufeminin.fr/articles",
    imageUrl:
      "https://raw.githubusercontent.com/flexbox/artaufeminin/master/src/images/logo-links.svg",
  },
]
const allSponsorPlatforms = [
  {
    name: "Tipeee",
    url: "https://fr.tipeee.com/art-au-feminin",
    imageUrl:
      "https://raw.githubusercontent.com/flexbox/artaufeminin/master/src/images/logo-tipeee.svg",
  },
]

function LinkButton({ platform }: LinkButtonProps) {
  return (
    <a href={platform.url} className="button large min-w-full mb-8">
      <div className="flex p-4">
        <img
          src={platform.imageUrl}
          alt={`ART au feminin sur ${platform.name}`}
          className="w-16 h-16 mr-4"
        />
        <div className="min-w-full text-left pl-16 sm:pl-4">
          {platform.name}
        </div>
      </div>
    </a>
  )
}

export default function LinksPage({ data }: Props): ReactElement {
  const logoUrl = data.logo.childImageSharp.fixed

  return (
    <div className="p-8">
      <div className="max-w-5xl m-auto">
        <div className="flex justify-center mb-8">
          <StaticImage
            className="rounded-full"
            src="../images/logo-podcast-art-au-feminin.png"
            alt={"Logo femmes artistes"}
          />
        </div>
        <p className="text-center">@artaufeminin</p>
        <h2 className="mt-0">Soutenir ART au féminin</h2>
        {allSponsorPlatforms.map((platform) => {
          return <LinkButton platform={platform} />
        })}
        <h2 className="mt-0">Écouter le podcast</h2>
        {allPodcastPlatforms.map((platform) => {
          return <LinkButton platform={platform} />
        })}
        <h2>Les coulisses de l’émission</h2>
        {allSocialLinks.map((platform) => {
          return <LinkButton platform={platform} />
        })}
        <h2>ART au féminin le site</h2>
        {allMoreLinks.map((platform) => {
          return <LinkButton platform={platform} />
        })}
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    logo: file(absolutePath: { regex: "/logo-podcast-art-au-feminin.png/" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
