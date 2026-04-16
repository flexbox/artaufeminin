import React from 'react';

import { QuotationProps } from './quotation';

export function Quote({ data }: QuotationProps) {
  const { author, quotation } = data;

  return (
    <figure className="flex flex-col rounded-sm border border-clay-200 bg-cream-50 p-6 transition-shadow hover:shadow-md">
      {/* Guillemet décoratif */}
      <span
        className="mb-2 font-display text-6xl font-light leading-none text-clay-200"
        aria-hidden="true"
      >
        «
      </span>

      {/* Citation */}
      <blockquote className="flex-1">
        <p className="font-display text-lg font-light italic leading-relaxed text-stone-700">
          {quotation}
        </p>
      </blockquote>

      {/* Autrice */}
      {author && (
        <figcaption className="mt-5 border-t border-clay-200 pt-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-clay-500">
            — {author}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
