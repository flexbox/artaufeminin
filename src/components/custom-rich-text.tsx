import kebabCase from 'lodash/kebabCase';
import {
  Elements,
  RichText as PrismicRichText,
  RichTextBlock,
} from 'prismic-reactjs';
import React, { ReactElement } from 'react';

import Text from './text';

function customHtmlSerializer(type, element, content, children, key) {
  if (type === Elements.heading2) {
    return (
      <Text as="h2" variant="h2" key={key} id={kebabCase(children)}>
        {children}
      </Text>
    );
  }
  if (type === Elements.paragraph && element.label === 'blockquote') {
    return (
      <blockquote
        key={key}
        className="my-8 border-l-2 border-neutral-300 pl-6 font-display text-xl font-light italic leading-relaxed text-neutral-600"
      >
        {children}
      </blockquote>
    );
  }
  if (type === Elements.image) {
    const { url, alt, copyright } = element;

    return (
      <figure className="my-32 overflow-hidden bg-white">
        <div className="px-4 py-5 sm:p-6">
          <img className="mx-auto" src={url} alt={alt} />
          <figcaption className="mt-8">
            {alt} {copyright && `© ${copyright}`}
          </figcaption>
        </div>
      </figure>
    );
  }

  return null; // Returning null makes the serializer fallback to its default behavior
}

interface Props {
  render: RichTextBlock[];
}

export function CustomRichText({ render }: Props): ReactElement {
  return (
    <PrismicRichText render={render} htmlSerializer={customHtmlSerializer} />
  );
}
