import React from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';

import HeroCard from './heroCard';

type Article = {
  uid: string;
  data: {
    image: { url: string };
    title: { richText: RichTextBlock[] };
  };
};

type ArticlesHeroProps = {
  allArticles: Article[];
};

export function ArticlesHero({ allArticles }: ArticlesHeroProps) {
  if (!allArticles || allArticles.length < 3) {
    return (
      <div className="m-auto my-12 w-3/4 text-center">
        <p className="text-sm font-light text-neutral-400">
          Aucun article disponible pour le moment.
        </p>
      </div>
    );
  }

  return (
    <div className="m-auto w-3/4">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        {allArticles.slice(0, 3).map((article) => (
          <HeroCard
            key={article.uid}
            heroLink={`/articles/${article.uid}`}
            imageUrl={article.data.image.url}
            heroTitle={RichText.asText(article.data.title.richText)}
            subtitle="Article"
          />
        ))}
      </div>

      <div className="mt-12 flex justify-end border-t border-neutral-200 pt-6">
        <a
          href="/articles"
          className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-neutral-900"
        >
          Lire tous les articles →
        </a>
      </div>
    </div>
  );
}
