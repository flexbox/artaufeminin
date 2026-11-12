import kebabCase from 'lodash/kebabCase';
import {
  Elements,
  RichText as PrismicRichText,
  RichTextBlock,
} from 'prismic-reactjs';
import React, { ReactElement } from 'react';

function customHtmlSerializer(type, element, content, children, key) {
  if (type === Elements.heading2) {
    return (
      <h2
        key={key}
        id={kebabCase(children)}
        className="font-display text-2xl font-light leading-snug text-neutral-900 md:text-3xl"
      >
        {children}
      </h2>
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
      <figure key={key} className="not-prose my-12">
        <img className="mx-auto" src={url} alt={alt ?? ''} loading="lazy" />
        {(alt || copyright) && (
          <figcaption className="mt-3 text-center text-xs leading-relaxed text-neutral-500">
            {alt}
            {copyright && ` © ${copyright}`}
          </figcaption>
        )}
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
