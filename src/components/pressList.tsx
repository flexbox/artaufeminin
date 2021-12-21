import { graphql, useStaticQuery } from "gatsby"
import { RichTextBlock } from "prismic-reactjs"
import React, { ReactElement } from "react"

interface PressProps {
  id: string
  data: {
    description: {
      raw: RichTextBlock[]
    }
    sitename: {
      text: string
    }
    url: {
      url: string
    }
  }
}

function PressItem({ press }: { press: PressProps }): ReactElement {
  const siteName = press.data.sitename.text
  const description = press.data.description.raw
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
          id
          data {
            description {
              raw
            }
            sitename {
              text
            }
            url {
              url
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
      yo
      {/* {allPress.map((press: PressProps) => {
        return <PressItem press={press} key={press.id} />
      })} */}
    </>
  )
}
