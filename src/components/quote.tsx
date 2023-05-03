import React from "react"

interface QuoteProps {
  quote: string
  cite?: string
}

export default function Quote({ quote, cite }: QuoteProps) {
  return (
    <blockquote className="quote relative mb-4 mt-4 p-4 text-xl italic text-gray-600">
      <div className="stylistic-quote-mark" aria-hidden="true">
        &ldquo;
      </div>
      <p className="mb-4">{quote}</p>
      {cite && (
        <cite className="flex items-center">
          <div className="flex flex-col items-start">
            <span className="mb-1 text-sm font-bold italic">— {cite}</span>
          </div>
        </cite>
      )}
    </blockquote>
  )
}
