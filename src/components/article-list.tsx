import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import { RichText, RichTextBlock } from 'prismic-reactjs';
import React from 'react';

import { formatShortDate, splitDate, truncateWords } from '../utils/date';
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
      gatsbyImageData?: IGatsbyImageData;
    };
  };
  first_publication_date: string;
}

interface ArticleListItemProps {
  allArticles: ArticleProps[];
  isRow?: boolean;
}

function getDate(article: ArticleProps): string {
  // Date éditoriale si renseignée, sinon date de première publication
  if (article.data.date) return formatShortDate(article.data.date);
  const publishDate = splitDate(article.first_publication_date);
  return publishDate ? formatShortDate(publishDate) : '';
}

function ArticleRow({ article }: { article: ArticleProps }) {
  const slug = article.uid;
  const date = getDate(article);
  const title = RichText.asText(article.data.title.richText);
  const description = RichText.asText(article.data.description.richText);
  const descriptionTruncated = truncateWords(description, 190);
  const gatsbyImage = article.data.image.gatsbyImageData
    ? getImage(article.data.image.gatsbyImageData)
    : null;

  return (
    <article className="group border-b border-neutral-200 py-8 last:border-0">
      <Link
        to={`/articles/${slug}`}
        className="flex flex-col gap-5 sm:flex-row sm:items-start"
      >
        <div className="w-full shrink-0 overflow-hidden sm:w-40">
          <div className="aspect-square overflow-hidden bg-neutral-100">
            {gatsbyImage ? (
              <GatsbyImage
                image={gatsbyImage}
                alt={title}
                className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]"
                imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            ) : (
              <img
                src={article.data.image.url}
                alt={title}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              />
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            {date}
          </p>
          <h2 className="mt-2 font-display text-2xl font-light leading-snug text-neutral-900 transition-colors group-hover:text-neutral-500">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
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
      <div className="mx-auto w-page max-w-5xl">
        {allArticles.map((article) => (
          <ArticleRow article={article} key={article.uid} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {allArticles.map((article) => {
        const title = RichText.asText(article.data.title.richText);
        const description = RichText.asText(article.data.description.richText);
        const descriptionTruncated = truncateWords(description, 140);

        return (
          <ContentCard
            key={article.uid}
            href={`/articles/${article.uid}`}
            image={article.data.image.gatsbyImageData}
            imageUrl={article.data.image.url}
            imageAlt={title}
            meta={getDate(article)}
            title={title}
            description={descriptionTruncated}
            action={
              <Link
                to={`/articles/${article.uid}`}
                aria-label={`Lire l'article : ${title}`}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors hover:text-neutral-900"
              >
                Lire l'Article <span aria-hidden="true">→</span>
              </Link>
            }
          />
        );
      })}
    </div>
  );
}
