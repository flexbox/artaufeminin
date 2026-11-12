import React from 'react';

import { QuotationProps } from './quotation';

export function Quote({ data }: QuotationProps) {
  const { author, quotation } = data;

  return (
    <figure className="flex flex-col border border-neutral-200 bg-white p-6">
      {/* Guillemet décoratif */}
      <span
        className="mb-2 font-display text-6xl font-light leading-none text-neutral-300"
        aria-hidden="true"
      >
        «
      </span>

      {/* Citation */}
      <blockquote className="flex-1">
        <p className="font-display text-xl font-light italic leading-relaxed text-neutral-800">
          {quotation}
        </p>
      </blockquote>

      {/* Autrice */}
      {author && (
        <figcaption className="mt-5 border-t border-neutral-200 pt-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            — {author}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
