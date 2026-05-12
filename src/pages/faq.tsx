import { graphql } from 'gatsby';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import React, { ReactElement, useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface FaqPageProps {
  data: {
    allPrismicFaq: {
      nodes: {
        data: {
          question: { text: string };
          answer: { richText: RichTextBlock[] };
        };
      }[];
    };
  };
}

function QuestionItem({ question, defaultOpen = false }: { question: FaqPageProps['data']['allPrismicFaq']['nodes'][0]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        className="flex w-full items-start justify-between gap-6 py-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-display text-lg font-light leading-snug text-neutral-900">
          {question.data.question.text}
        </span>
        <span
          className="mt-0.5 shrink-0 text-neutral-400 transition-transform duration-200 text-lg"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>

      {open && (
        <div className="prose prose-neutral mb-6 max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-neutral-600 prose-a:text-neutral-700 prose-a:no-underline hover:prose-a:underline">
          {RichText.render(question.data.answer.richText)}
        </div>
      )}
    </div>
  );
}

export default function FaqPage({ data }: FaqPageProps): ReactElement {
  const questions = data.allPrismicFaq.nodes;

  return (
    <Layout withInstagram={false}>

      <section className="m-auto mb-12 mt-8 w-3/4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Aide
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
          Questions Fréquentes
        </h1>
        <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-neutral-500">
          Vous avez une question sur le podcast ou sur ART AU FÉMININ ?
          Retrouvez les réponses ci-dessous.
        </p>
      </section>

      <div className="m-auto mb-16 w-3/4 border border-neutral-200 px-8">
        {questions.map((question, index) => (
          <QuestionItem key={index} question={question} defaultOpen={index === 0} />
        ))}
      </div>

      <section className="m-auto mb-20 w-3/4">
        <div className="flex flex-col gap-4 border border-neutral-200 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Vous ne trouvez pas votre réponse ?
            </p>
            <p className="font-display text-xl font-light text-neutral-900">
              Contactez-nous directement
            </p>
          </div>
          <a
            href="mailto:artaufemininlepodcast@gmail.com"
            className="inline-block border border-neutral-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            Envoyer un Email <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allPrismicFaq {
      nodes {
        data {
          question { text }
          answer { raw richText }
        }
      }
    }
  }
`;

export const Head = ({
  data,
  location,
}: FaqPageProps & { location: { pathname: string } }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.allPrismicFaq.nodes.map((q) => ({
      '@type': 'Question',
      name: q.data.question.text,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.data.answer.richText
          .map((block: any) => block.text)
          .filter(Boolean)
          .join(' '),
      },
    })),
  };

  return (
    <SEO
      title="Questions Fréquentes — ART AU FÉMININ"
      description="Toutes les réponses à vos questions sur le podcast ART AU FÉMININ — comment écouter, participer, soutenir le projet et en savoir plus sur les femmes artistes."
      url={`https://www.artaufeminin.fr${location.pathname}`}
      jsonLd={jsonLd}
    />
  );
};
