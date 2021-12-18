import { graphql, useStaticQuery } from "gatsby"
import React, { ReactElement } from "react"

interface PressProps {
  slug: string
  data: {
    siteName: {
      text: string
    }
    description: {
      text: string
    }
    url: {
      url: string
    }
  }
}

function PressItem({ press }: { press: PressProps }): ReactElement {
  const siteName = press.data.siteName.text
  const description = press.data.description.text
  const url = press.data.url.url

  return (
    <>
      <li>
        <a href={url}>{siteName}</a>:{description}
      </li>
    </>
  )
}
export default function pressList(): ReactElement {
  const allPress = useStaticQuery(graphql`
    {
      allPrismicPress {
        nodes {
          data {
            description {
              text
              html
              raw
            }
            sitename {
              text
              html
              raw
            }
            url {
              id
            }
          }
        }
      }
    }
  `)

  console.log(
    "file: pressList.tsx ~ line 66 ~ {allPress.map ~ allPress",
    allPress
  )
  return (
    <>
      {allPress.map((press) => {
        return <PressItem press={press} key={press.slug} />
      })}
    </>
  )
}
