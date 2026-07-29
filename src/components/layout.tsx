import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';

import Footer from './footer';
import { Header } from './header';
import Instagram from './instagram';
import { AudioPlayer } from './player/AudioPlayer';

interface LayoutProps {
  children: ReactNode;
  withInstagram?: boolean;
}

function Layout({ children, withInstagram = false }: LayoutProps) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const siteTitle = data.site.siteMetadata.title;

  return (
    <div className="bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-neutral-900 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
      >
        Passer au contenu principal
      </a>
      <Header />
      <main id="main-content" role="main" className="px-4">
        {children}
      </main>
      {withInstagram && <Instagram />}
      <div className="lg:left-112 xl:left-120 fixed inset-x-0 bottom-0 z-10">
        <AudioPlayer />
      </div>
      <Footer siteTitle={siteTitle} />
    </div>
  );
}

export default Layout;
