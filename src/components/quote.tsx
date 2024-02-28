import React from 'react';

import { QuotationProps } from './quotation';

export function Quote({ data }: QuotationProps) {
  const { author, quotation } = data;

  return (
    <blockquote className="quote relative mb-32 mt-12 p-4 text-2xl italic text-gray-600">
      <div className="stylistic-quote-mark" aria-hidden="true">
        &ldquo;
      </div>
      <p className="mb-4">{quotation}</p>
      {author && (
        <cite className="flex items-center">
          <div className="flex flex-col items-start">
            <span className="text-md font-bold italic">— {author}</span>
          </div>
        </cite>
      )}
    </blockquote>
  );
}
