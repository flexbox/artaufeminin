import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Newsletter from "./newsletter"
import Header from "./header"

interface LayoutProps {
  withNewsletter?: boolean
  children: ReactNode
}

function Layout({ children, withNewsletter = false }: LayoutProps) {
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
      {withNewsletter && <Newsletter />}
      <Footer siteTitle={siteTitle} />
    </div>
  )
}

export default Layout
