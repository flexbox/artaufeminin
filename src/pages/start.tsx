import React, { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface Props {}

export default function StartPage({}: Props): ReactElement {
  return (
    <Layout withInstagram={false}>
      <section className="mx-auto mb-10 mt-8 w-3/4 max-w-3xl border-b border-neutral-200 pb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Communauté
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Présentez-vous
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600">
          Remplissez ce formulaire pour vous présenter à la communauté ART AU
          FÉMININ.
        </p>
      </section>

      <div className="mx-auto mb-20 w-3/4 max-w-3xl">
        <iframe
          src="https://airtable.com/embed/shrDSm33OhRdSGD0C?backgroundColor=purple"
          title="Formulaire de présentation communauté ART AU FÉMININ"
          frameBorder={0}
          width="100%"
          height="1635"
          className="border-0"
        />
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
