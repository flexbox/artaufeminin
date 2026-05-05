import { StaticImage } from 'gatsby-plugin-image';
import { RichTextBlock } from 'prismic-reactjs';
import React, { ReactElement } from 'react';

import { CustomRichText } from '../components/custom-rich-text';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface BookProps {
  pageContext: {
    node: {
      uid: string;
      data: {
        title: { text: string };
        content: {
          text: string;
          richText: RichTextBlock[];
        };
      };
    };
  };
}

export default function Book(props: BookProps): ReactElement {
  const { data } = props.pageContext.node;
  const seoTitle = data.title.text;
  const richText = data.content.richText;

  return (
    <Layout>
      {/* ── EN-TÊTE ──────────────────────────────────────────────── */}
      <div className="border-b border-neutral-200 pb-10 pt-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Chronique
          </p>
          <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
            {seoTitle}
          </h1>
        </div>
      </div>

      {/* ── CONTENU ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-3xl px-6 lg:px-0">
        <div className="prose prose-neutral my-10 max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-neutral-600 prose-headings:font-display prose-headings:font-light prose-a:text-neutral-700 prose-a:no-underline hover:prose-a:underline prose-img:rounded-none">
          <CustomRichText render={richText} />
        </div>

        <hr className="separator" />

        {/* Autrice */}
        <section className="my-10 flex items-center gap-6 border border-neutral-200 p-6">
          <div className="size-20 shrink-0 overflow-hidden rounded-full">
            <StaticImage
              src="../images/profile-picture.jpg"
              alt="Aldjia Boughias — ART AU FÉMININ"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              À propos de l'Autrice
            </p>
            <p className="text-sm font-light leading-relaxed text-neutral-500">
              Aldjia Boughias — développeuse web orientée Art et Culture, exploratrice de l'Histoire de l'Art le reste du temps. J'ai créé ART AU FÉMININ pour donner aux femmes artistes la place qu'elles méritent dans notre mémoire collective.
            </p>
          </div>
        </section>

        {/* Mécénat */}
        <section className="my-10 border border-neutral-200 p-6">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Mécénat
          </p>
          <h2 className="mb-3 font-display text-xl font-light text-neutral-900">
            Vous avez aimé cette Chronique ?
          </h2>
          <p className="mb-5 text-sm font-light leading-relaxed text-neutral-500">
            Si ce contenu vous a plu, vous pouvez soutenir ART AU FÉMININ sur Tipeee.
            Chaque contribution aide à produire de nouveaux épisodes et articles.
          </p>
          <a
            href="https://fr.tipeee.com/art-au-feminin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-300 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            Soutenir sur Tipeee
          </a>
        </section>

        <div className="mb-20" />
      </div>
    </Layout>
  );
}

export const Head = (props: BookProps) => {
  const { text: seoTitle } = props.pageContext.node.data.title;
  const { text: seoDescription } = props.pageContext.node.data.content;
  return (
    <SEO
      title={`${seoTitle} — ART AU FÉMININ`}
      description={seoDescription.substring(0, 155)}
    />
  );
};
