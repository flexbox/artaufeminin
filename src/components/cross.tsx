import * as React from "react"

function cross() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />

      <div
        className="hamburger hamburger--collapse"
        aria-label="Menu"
        aria-controls="navigation"
      >
        <div className="hamburger-box">
          <div className="hamburger-inner" />
        </div>
      </div>
    </svg>
  )
}

export default cross
