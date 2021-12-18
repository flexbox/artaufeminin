import React from "react"

interface QuoteProps {
  quote: string
  cite: string
}

export default function Quote({ quote }: QuoteProps) {
  return (
    <blockquote className="relative p-4 text-xl italic text-gray-600 quote mt-4 mb-4">
      <div className="stylistic-quote-mark" aria-hidden="true">
        &ldquo;
      </div>
      <p className="mb-4">{quote}</p>
      <cite className="flex items-center">
        <div className="flex flex-col items-start">
          <span className="mb-1 text-sm italic font-bold">nickd</span>
          <a
            href="..."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            Draft
          </a>
        </div>
      </cite>
    </blockquote>
  )
}
