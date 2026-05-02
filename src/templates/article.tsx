import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { RichTextBlock } from 'prismic-reactjs';
import React, { ReactElement } from 'react';

import { CustomRichText } from '../components/custom-rich-text';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface PropsArticle {
  pageContext: {
    next: {
      uid: string;
      data: {
        title: { text: string };
        image: { url: string };
      };
    };
    previous: {
      uid: string;
      data: {
        image: { url: string };
        title: { text: string };
      };
    };
    node: {
      uid: string;
      data: {
        title: { text: string };
        description: { text: string };
        content: { richText: RichTextBlock[] };
        date: string;
        image: {
          url: string;
          alt: string;
          copyright: string;
          gatsbyImageData: any;
        };
      };
    };
  };
}

interface NextPrevProps {
  uid: string;
  imgUrl: string;
  title: string;
}

const OtherArticleLink = ({ uid, imgUrl, title }: NextPrevProps) => {
  return (
    <Link
      to={`/articles/${uid}`}
      className="group flex items-center gap-4 border border-neutral-200 p-4 transition-colors hover:border-neutral-400"
    >
      <div className="size-20 shrink-0 overflow-hidden bg-neutral-100">
        <img
          src={imgUrl}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <span className="font-display text-base font-light leading-snug text-neutral-900 transition-colors group-hover:text-neutral-500">
        {title}
      </span>
    </Link>
  );
};

export default function Article(props: PropsArticle): ReactElement {
  const { data } = props.pageContext.node;

  const imageHero = data.image;
  const seoTitle = data.title.text;
  const seoDescription = data.description.text;
  const nextUid = props.pageContext.next?.uid;
  const nextImgUrl = props.pageContext.next?.data.image.url;
  const nextTitle = props.pageContext.next?.data.title.text;
  const previousImgUrl = props.pageContext.previous?.data.image.url;
  const previousTitle = props.pageContext.previous?.data.title.text;
  const previousUid = props.pageContext.previous?.uid;

  return (
    <Layout>

      {/* ── HERO IMAGE ───────────────────────────────────────────── */}
      {imageHero?.url && (
        <div className="-mx-4 relative h-[55vh] min-h-[340px] overflow-hidden">
          <img
            src={imageHero.url}
            alt={imageHero.alt || seoTitle}
            className="h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 lg:px-0">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white/60">
                Article
              </p>
              <h1 className="font-display text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
                {seoTitle}
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* ── CONTENU ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-3xl px-6 lg:px-0">

        {!imageHero?.url && (
          <header className="py-16">
            <p className="mb-3 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Article
            </p>
            <h1 className="font-display text-4xl font-light leading-tight text-neutral-900 md:text-5xl lg:text-6xl">
              {seoTitle}
            </h1>
          </header>
        )}

        <div className="border-b border-neutral-200 py-8">
          <p className="font-display text-xl font-light italic leading-relaxed text-neutral-500 md:text-2xl">
            {seoDescription}
          </p>
        </div>

        <div className="prose prose-neutral my-10 max-w-none prose-p:font-light prose-p:leading-relaxed prose-p:text-neutral-600 prose-headings:font-display prose-headings:font-light prose-a:text-neutral-700 prose-a:no-underline hover:prose-a:underline prose-img:rounded-none">
          <CustomRichText render={data.content.richText} />
        </div>

        {imageHero?.copyright && (
          <p className="mb-6 text-xs font-light italic text-neutral-400">
            © {imageHero.copyright}
          </p>
        )}

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
            <p className="mb-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              À propos de l'Autrice
            </p>
            <p className="text-sm font-light leading-relaxed text-neutral-500">
              Aldjia Boughias — développeuse web orientée Art et Culture, exploratrice de l'Histoire de l'Art le reste du temps. J'ai créé ART AU FÉMININ pour donner aux femmes artistes la place qu'elles méritent dans notre mémoire collective.
            </p>
          </div>
        </section>

        {/* Mécénat */}
        <section className="my-10 border border-neutral-200 p-6">
          <p className="mb-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Mécénat
          </p>
          <h2 className="mb-3 font-display text-xl font-light text-neutral-900">
            Vous avez aimé cet article ?
          </h2>
          <p className="mb-5 text-sm font-light leading-relaxed text-neutral-500">
            Si ce contenu vous a plu, vous pouvez soutenir ART AU FÉMININ sur Tipeee.
            Chaque contribution aide à produire de nouveaux épisodes et articles.
          </p>
          <a
            href="https://fr.tipeee.com/art-au-feminin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-neutral-300 px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            Soutenir sur Tipeee
          </a>
        </section>

        <hr className="separator" />
      </div>

      {/* ── AUTRES ARTICLES ───────────────────────────────────────── */}
      {(previousUid || nextUid) && (
        <div className="mx-auto mb-20 max-w-3xl px-6 lg:px-0">
          <p className="mb-6 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Autres Articles
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {previousUid && (
              <OtherArticleLink uid={previousUid} imgUrl={previousImgUrl} title={previousTitle} />
            )}
            {nextUid && (
              <OtherArticleLink uid={nextUid} imgUrl={nextImgUrl} title={nextTitle} />
            )}
          </div>
        </div>
      )}

    </Layout>
  );
}

export const Head = (props: PropsArticle) => {
  const { text: seoTitle } = props.pageContext.node.data.title;
  const { text: seoDescription } = props.pageContext.node.data.description;
  return (
    <SEO
      title={`${seoTitle} — ART AU FÉMININ`}
      description={seoDescription}
    />
  );
};
