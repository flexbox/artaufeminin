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
    <div className="border-b border-clay-200 last:border-0">
      <button
        className="flex w-full items-start justify-between gap-6 py-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h2 className="font-display text-lg font-semibold leading-snug text-stone-900">
          {question.data.question.text}
        </h2>
        <span className="mt-0.5 shrink-0 text-clay-400 transition-transform duration-200" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          +
        </span>
      </button>

      {open && (
        <div className="prose prose-stone mb-6 max-w-none prose-p:leading-relaxed prose-p:text-stone-600 prose-a:text-clay-500 prose-a:no-underline hover:prose-a:underline">
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

      {/* En-tête */}
      <section className="m-auto mb-12 mt-8 w-3/4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-clay-500">
          Aide
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
          Questions fréquentes
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-500">
          Vous avez une question sur le podcast ou sur ART au féminin ?
          Retrouvez les réponses ci-dessous.
        </p>
      </section>

      {/* Liste des questions */}
      <div className="m-auto mb-16 w-3/4 rounded-sm border border-clay-200 bg-cream-50 px-8">
        {questions.map((question, index) => (
          <QuestionItem key={index} question={question} defaultOpen={index === 0} />
        ))}
      </div>

      {/* CTA contact */}
      <section className="m-auto mb-20 w-3/4">
        <div className="flex flex-col gap-4 rounded-sm border border-clay-200 bg-cream-50 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-clay-500">
              Vous ne trouvez pas votre réponse ?
            </p>
            <p className="font-display text-xl font-semibold text-stone-900">
              Contactez-nous directement
            </p>
          </div>
          <a
            href="mailto:artaufemininlepodcast@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-clay-500 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-clay-500 transition-colors hover:bg-clay-500 hover:text-white"
          >
            Envoyer un email →
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
          question {
            text
          }
          answer {
            raw
            richText
          }
        }
      }
    }
  }
`;

export const Head = () => (
  <SEO
    title="Questions fréquentes — ART au féminin"
    description="Toutes les réponses à vos questions sur le podcast ART au féminin — comment écouter, participer, soutenir le projet et en savoir plus sur les femmes artistes."
  />
);
