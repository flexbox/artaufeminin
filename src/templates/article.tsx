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
      className="group flex items-center gap-4 rounded-sm border border-clay-200 bg-cream-50 p-4 transition-colors hover:border-clay-300"
    >
      <div className="size-20 shrink-0 overflow-hidden rounded-sm">
        <img
          src={imgUrl}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <span className="font-display text-base font-semibold leading-snug text-stone-900 transition-colors group-hover:text-clay-500">
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
        <div className="-mx-4 -mt-12 relative h-[55vh] min-h-[340px] overflow-hidden">
          <img
            src={imageHero.url}
            alt={imageHero.alt || seoTitle}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 lg:px-0">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay-300">
                Article
              </p>
              <h1 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
                {seoTitle}
              </h1>
            </div>
          </div>
        </div>
      )}

      {/* ── CONTENU ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-3xl px-6 lg:px-0">

        {/* Titre si pas d'image hero */}
        {!imageHero?.url && (
          <header className="py-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay-500">
              Article
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-stone-900 md:text-5xl lg:text-6xl">
              {seoTitle}
            </h1>
          </header>
        )}

        {/* Description / accroche */}
        <div className="border-b border-clay-200 py-8">
          <p className="font-display text-xl font-light italic leading-relaxed text-stone-600 md:text-2xl">
            {seoDescription}
          </p>
        </div>

        {/* Contenu riche */}
        <div
          className="prose prose-stone my-10 max-w-none prose-p:leading-relaxed prose-p:text-stone-600 prose-headings:font-display prose-headings:font-semibold prose-a:text-clay-500 prose-a:no-underline hover:prose-a:underline prose-img:rounded-sm"
        >
          <CustomRichText render={data.content.richText} />
        </div>

        {/* Copyright image */}
        {imageHero?.copyright && (
          <p className="mb-6 text-xs text-stone-400 italic">
            © {imageHero.copyright}
          </p>
        )}

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
            Vous avez aimé cet article ?
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

        <hr className="separator" />
      </div>

      {/* ── AUTRES ARTICLES ───────────────────────────────────────── */}
      {(previousUid || nextUid) && (
        <div className="mx-auto mb-20 max-w-3xl px-6 lg:px-0">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-clay-500">
            Autres articles
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {previousUid && (
              <OtherArticleLink
                uid={previousUid}
                imgUrl={previousImgUrl}
                title={previousTitle}
              />
            )}
            {nextUid && (
              <OtherArticleLink
                uid={nextUid}
                imgUrl={nextImgUrl}
                title={nextTitle}
              />
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
      title={`${seoTitle} — ART au féminin`}
      description={seoDescription}
    />
  );
};
