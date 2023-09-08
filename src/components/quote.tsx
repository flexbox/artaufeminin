import React from "react"

import { QuotationProps } from "./quotation"

export function Quote({ data }: QuotationProps) {
  const author = data.author
  const quote = data.quotation

  return (
    <blockquote className="quote relative mb-4 mt-4 p-4 text-xl italic text-gray-600">
      <div className="stylistic-quote-mark" aria-hidden="true">
        &ldquo;
      </div>
      <p className="mb-4">{quote}</p>
      {author && (
        <cite className="flex items-center">
          <div className="flex flex-col items-start">
            <span className="mb-1 text-sm font-bold italic">— {author}</span>
          </div>
        </cite>
      )}
    </blockquote>
  )
}
