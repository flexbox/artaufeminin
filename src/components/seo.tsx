import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export function SeoHead({
  title,
  metaDescription,
}: {
  title: string;
  metaDescription: string;
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta
        name="google-site-verification"
        content="_I5e7rtsxD_MXi3RnD2AsbiQopSHnXHQ_eEAKQYuLPk"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
    </>
  );
}

function SEO({ description, title }: { description: string; title: string }) {
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
  return <SeoHead title={title} metaDescription={metaDescription} />;
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  keywords: [],
  description: ``,
};

export default SEO;
