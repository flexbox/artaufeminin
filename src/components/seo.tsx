import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const OG_IMAGE =
  'https://raw.githubusercontent.com/flexbox/artaufeminin/master/src/images/logo-podcast-art-au-feminin.png';

export function SeoHead({
  title,
  metaDescription,
  image = OG_IMAGE,
}: {
  title: string;
  metaDescription: string;
  image?: string;
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta
        name="google-site-verification"
        content="_I5e7rtsxD_MXi3RnD2AsbiQopSHnXHQ_eEAKQYuLPk"
      />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="ART au féminin" />
      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </>
  );
}

function SEO({
  description,
  title,
  image,
}: {
  description: string;
  title: string;
  image?: string;
}) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);
  const metaDescription = description || site.siteMetadata.description;
  return (
    <SeoHead title={title} metaDescription={metaDescription} image={image} />
  );
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  keywords: [],
  description: ``,
};

export default SEO;
