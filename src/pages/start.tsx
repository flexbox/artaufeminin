import React, { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface Props {}

export default function StartPage({}: Props): ReactElement {
  return (
    <Layout>
      <div className="post-content">
        <div className="post-content-body">
          <iframe
            src="https://airtable.com/embed/shrDSm33OhRdSGD0C?backgroundColor=purple"
            frameBorder="0"
            width="100%"
            height="1635"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

export const Head = ({ location }: { location: { pathname: string } }) => (
  <SEO
    title="Présentez-vous — ART AU FÉMININ"
    description="Remplissez ce formulaire pour vous présenter à la communauté ART AU FÉMININ."
    url={`https://www.artaufeminin.fr${location.pathname}`}
    noindex={true}
  />
);
