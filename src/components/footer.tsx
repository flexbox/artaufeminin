import React from "react"
import { Link } from "gatsby"
import Text from "./text"

interface FooterProps {
  title: string
}

export default function Footer({ title }: FooterProps) {
  return (
    <footer
      className="footer text-center pb-24 pt-12"
      style={{ backgroundColor: "#8ba28f" }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex-none sm:flex-1">
          <Text className="text-white">
            &copy; {new Date().getFullYear()} •{" "}
            <Link to={`/`} className="text-white font-bold">
              {title}
            </Link>
          </Text>
        </div>
      </div>
    </footer>
  )
}
