import React from "react"
import { Link } from "gatsby"

export default function footer({ title }) {
  return (
    <footer className="footer text-center pb-24 pt-12">
      <div className="flex flex-col md:flex-row">
        <div className="flex-none sm:flex-1">
          <p>
            &copy; {new Date().getFullYear()} •{" "}
            <Link to={`/`} className="text-black">
              {title}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
