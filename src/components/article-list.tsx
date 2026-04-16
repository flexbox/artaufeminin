import { Link } from 'gatsby';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import React from 'react';

import { formatHumanDate, splitDate } from '../utils/date';

interface ArticleProps {
  uid: string;
  data: {
    title: {
      richText: RichTextBlock[];
    };
    description: {
      richText: RichTextBlock[];
    };
    date: string;
    image: {
      url: string;
    };
  };
  first_publication_date: string;
}

interface ArticleListItemProps {
  allArticles: ArticleProps[];
  isRow?: boolean;
}

function ArticleCard({ article }: { article: ArticleProps }) {
  const slug = article.uid;
  const thumbnailUrl = article.data.image.url;
  const articleDate = formatHumanDate(article.data.date);
  const publishDate = formatHumanDate(splitDate(article.first_publication_date));
  const date =
    articleDate !== 'jeudi 1 janvier 1970' ? articleDate : publishDate;

  const title = RichText.asText(article.data.title.richText);
  const description = RichText.asText(article.data.description.richText);
  const descriptionTruncated =
    description.length > 140 ? description.substring(0, 140) + '…' : description;

  return (
    <article className="group flex flex-col">
      {/* Image */}
      <Link
        to={`/articles/${slug}`}
        className="block overflow-hidden rounded-sm"
      >
        <div className="aspect-[4/3] overflow-hidden bg-stone-100">
          <img
            src={thumbnailUrl}
            alt={title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Contenu */}
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-xs font-semibold uppercase tracking-widest text-clay-500">
          {date}
        </p>

        <Link to={`/articles/${slug}`}>
          <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-stone-900 transition-colors hover:text-clay-500">
            {title}
          </h2>
        </Link>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">
          {descriptionTruncated}
        </p>

        <Link
          to={`/articles/${slug}`}
          className="mt-4 text-xs font-semibold uppercase tracking-widest text-clay-500 transition-colors hover:text-clay-700"
        >
          Lire l'article →
        </Link>
      </div>
    </article>
  );
}

function ArticleRow({ article }: { article: ArticleProps }) {
  const slug = article.uid;
  const thumbnailUrl = article.data.image.url;
  const articleDate = formatHumanDate(article.data.date);
  const publishDate = formatHumanDate(splitDate(article.first_publication_date));
  const date =
    articleDate !== 'jeudi 1 janvier 1970' ? articleDate : publishDate;

  const title = RichText.asText(article.data.title.richText);
  const description = RichText.asText(article.data.description.richText);
  const descriptionTruncated =
    description.length > 190 ? description.substring(0, 190) + '…' : description;

  return (
    <article className="group border-b border-clay-200 py-8 last:border-0">
      <Link
        to={`/articles/${slug}`}
        className="flex flex-col gap-5 sm:flex-row sm:items-start"
      >
        <div className="w-full shrink-0 overflow-hidden rounded-sm sm:w-40">
          <div className="aspect-[4/3] overflow-hidden bg-stone-100 sm:aspect-square">
            <img
              src={thumbnailUrl}
              alt={title}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-xs font-semibold uppercase tracking-widest text-clay-500">
            {date}
          </p>
          <h2 className="mt-1 font-display text-xl font-semibold leading-snug text-stone-900 transition-colors group-hover:text-clay-500">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-stone-500">
            {descriptionTruncated}
          </p>
        </div>
      </Link>
    </article>
  );
}

export function ArticleList({ allArticles, isRow }: ArticleListItemProps) {
  if (isRow) {
    return (
      <div className="m-auto w-3/4">
        {allArticles.map((article) => (
          <ArticleRow article={article} key={article.uid} />
        ))}
      </div>
    );
  }

  return (
    <div className="m-auto mb-20 grid w-3/4 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {allArticles.map((article) => (
        <ArticleCard article={article} key={article.uid} />
      ))}
    </div>
  );
}
