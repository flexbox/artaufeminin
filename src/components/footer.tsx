import React from "react"
import { Link } from "gatsby"
import Text from "./text"

interface FooterProps {
  title: string
}

export default function Footer({ title }: FooterProps) {
  return (
    <footer className="footer text-center pb-24 pt-12">
      <div className="flex flex-col md:flex-row">
        <div className="flex-none sm:flex-1">
          <Text as="p">
            &copy; {new Date().getFullYear()} •{" "}
            <Link to={`/`} className="text-black font-bold">
              {title}
            </Link>
          </Text>
        </div>
      </div>
    </footer>
  )
}
