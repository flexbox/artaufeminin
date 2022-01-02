import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
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
    <div className="bg-gray-50">
      <Header />
      <main role="main" className="mt-12 px-4">
        {children}
      </main>
      <Footer siteTitle={siteTitle} />
    </div>
  )
}

export default Layout
