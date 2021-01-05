import React, { ReactElement } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

interface Props {}

interface LinkButtonProps {
  platform: {
    name: string
    url: string
    imageUrl: string
  }
}

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

  const allPodcastPlatforms = [
    {
      name: "Apple podcasts",
      url: "https://podcasts.apple.com/us/podcast/art-au-feminin/id1493131152",
      imageUrl:
        "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/itunes_podcasts.svg",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/18f84r0ic2PUenYvBRr2Ps",
      imageUrl:
        "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/spotify.svg",
    },
    {
      name: "Google podcasts",
      url:
        "https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy85NDgzZGY4L3BvZGNhc3QvcnNz",
      imageUrl:
        "https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/google_podcasts.svg",
    },
    {
      name: "Anchor",
      url: "https://anchor.fm/artaufeminin/",
      imageUrl:
        "https://raw.githubusercontent.com/flexbox/artaufeminin/master/content/assets/logo-links.svg",
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
    {
      name: "Site internet",
      url: "https://artaufeminin.fr",
      imageUrl:
        "https://raw.githubusercontent.com/flexbox/artaufeminin/master/content/assets/logo-links.svg",
    },
    {
      name: "Articles",
      url: "https://artaufeminin.fr/articles",
      imageUrl:
        "https://raw.githubusercontent.com/flexbox/artaufeminin/master/content/assets/logo-links.svg",
    },
  ]

  return (
    <div className="p-8">
      <div className="max-w-5xl m-auto">
        <div className="flex justify-center mb-8">
          <Image className="rounded-full" fixed={logoUrl} alt={"imageAlt"} />
        </div>
        <p className="text-center">@artaufeminin</p>
        <h2 className="mt-0">Écouter le podcast</h2>
        {allPodcastPlatforms.map(platform => {
          return <LinkButton platform={platform} />
        })}
        <h2>Les coulisses de l’émission</h2>
        {allSocialLinks.map(platform => {
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
