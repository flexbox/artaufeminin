import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Newsletter from "./newsletter"
import Header from "./header"

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata.title

  return (
    <div className="bg-gray-50 p-4">
      <Header siteTitle={siteTitle} />
      <main role="main">{children}</main>
      <Newsletter />
      <Footer title={siteTitle} />
    </div>
  )
}

export default Layout
