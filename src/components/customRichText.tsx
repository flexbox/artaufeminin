import React, { ReactElement } from "react"
import {
  RichText as PrismicRichText,
  Elements,
  RichTextBlock,
} from "prismic-reactjs"

import kebabCase from "lodash/kebabCase"
import Text from "./text"

function customHtmlSerializer(type, element, content, children, key) {
  if (type === Elements.heading2) {
    return (
      <Text as="h2" key={key} id={kebabCase(children)}>
        {children}
      </Text>
    )
  }
  if (type === Elements.image) {
    const { url, alt, copyright } = element

    return (
      <figure className="bg-white overflow-hidden my-32">
        <div className="px-4 py-5 sm:p-6">
          <img className="mx-auto" src={url} alt={alt} />
          <figcaption className="mt-8">
            {alt} {copyright && `© ${copyright}`}
          </figcaption>
        </div>
      </figure>
    )
  }

  return null // Returning null makes the serializer fallback to its default behavior
}

interface Props {
  render: RichTextBlock[]
}

export default function RichText({ render }: Props): ReactElement {
  return (
    <PrismicRichText render={render} htmlSerializer={customHtmlSerializer} />
  )
}
