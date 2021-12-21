import React from "react"

interface QuoteProps {
  quote: string
  cite?: string
}

export default function Quote({ quote, cite }: QuoteProps) {
  return (
    <blockquote className="relative p-4 text-xl italic text-gray-600 quote mt-4 mb-4">
      <div className="stylistic-quote-mark" aria-hidden="true">
        &ldquo;
      </div>
      <p className="mb-4">{quote}</p>
      {cite && (
        <cite className="flex items-center">
          <div className="flex flex-col items-start">
            <span className="mb-1 text-sm italic font-bold">— {cite}</span>
          </div>
        </cite>
      )}
    </blockquote>
  )
}
