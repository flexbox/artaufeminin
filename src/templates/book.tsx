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
        title: {
          text: string;
        };
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
      <div className="border-b border-clay-200 pb-10 pt-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay-500">
            Critique littéraire
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-stone-900 md:text-5xl lg:text-6xl">
            {seoTitle}
          </h1>
        </div>
      </div>

      {/* ── CONTENU ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-3xl px-6 lg:px-0">
        <div
          className="prose prose-stone my-10 max-w-none prose-p:leading-relaxed prose-p:text-stone-600 prose-headings:font-display prose-headings:font-semibold prose-a:text-clay-500 prose-a:no-underline hover:prose-a:underline prose-img:rounded-sm"
        >
          <CustomRichText render={richText} />
        </div>

        <hr className="separator" />

        {/* Autrice */}
        <section className="my-10 flex items-center gap-6 rounded-sm border border-clay-200 bg-cream-50 p-6">
          <div className="size-20 shrink-0 overflow-hidden rounded-full">
            <StaticImage
              src="../images/profile-picture.jpg"
              alt="Aldjia Boughias — ART au féminin"
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-clay-500">
              À propos de l'autrice
            </p>
            <p className="text-sm leading-relaxed text-stone-600">
              Bonjour, je suis Aldjia, créatrice et animatrice du podcast ART au féminin.
              Je suis également l'autrice de ce blog — ravie de vous rencontrer !
            </p>
          </div>
        </section>

        {/* Mécénat */}
        <section className="my-10 rounded-sm border border-clay-200 bg-cream-50 p-6">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-clay-500">
            Mécénat
          </p>
          <h2 className="mb-3 font-display text-xl font-semibold text-stone-900">
            Vous avez aimé cette critique ?
          </h2>
          <p className="mb-5 text-sm leading-relaxed text-stone-500">
            Si ce contenu vous a plu, vous pouvez soutenir ART au féminin sur Tipeee.
            Chaque contribution aide à produire de nouveaux épisodes et articles.
          </p>
          <a
            href="https://fr.tipeee.com/art-au-feminin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-clay-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-clay-500 transition-colors hover:bg-clay-500 hover:text-white"
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
      title={`${seoTitle} — ART au féminin`}
      description={seoDescription.substring(0, 155)}
    />
  );
};
