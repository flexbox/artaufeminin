import { Link } from 'gatsby';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import React from 'react';

import { formatHumanDate, splitDate } from '../utils/date';
import { ContentCard } from './content-card';

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

function getDate(article: ArticleProps): string {
  const articleDate = formatHumanDate(article.data.date);
  const publishDate = formatHumanDate(splitDate(article.first_publication_date));
  return articleDate !== 'jeudi 1 janvier 1970' ? articleDate : publishDate;
}

function ArticleRow({ article }: { article: ArticleProps }) {
  const slug = article.uid;
  const thumbnailUrl = article.data.image.url;
  const date = getDate(article);
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
          <div className="aspect-square overflow-hidden bg-stone-100">
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
      {allArticles.map((article) => {
        const title = RichText.asText(article.data.title.richText);
        const description = RichText.asText(article.data.description.richText);
        const descriptionTruncated =
          description.length > 140 ? description.substring(0, 140) + '…' : description;

        return (
          <ContentCard
            key={article.uid}
            href={`/articles/${article.uid}`}
            imageUrl={article.data.image.url}
            imageAlt={title}
            meta={getDate(article)}
            title={title}
            description={descriptionTruncated}
            action={
              <Link
                to={`/articles/${article.uid}`}
                className="text-xs font-semibold uppercase tracking-widest text-clay-500 transition-colors hover:text-clay-700"
              >
                Lire l'article →
              </Link>
            }
          />
        );
      })}
    </div>
  );
}
