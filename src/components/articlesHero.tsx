import React from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';

import Button from './button';
import HeroCard from './heroCard';
import Text from './text';

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
        <Text as="p" variant="p" className="text-stone-500">
          Aucun article disponible pour le moment.
        </Text>
      </div>
    );
  }

  return (
    <div className="m-auto w-3/4">
      <div className="flex flex-col gap-3 md:flex-row">

        {/* Grande carte */}
        <div className="h-72 md:h-[520px] md:flex-[2]">
          <HeroCard
            heroLink={`/articles/${allArticles[0].uid}`}
            imageUrl={allArticles[0].data.image.url}
            heroTitle={RichText.asText(allArticles[0].data.title.richText)}
          />
        </div>

        {/* Deux petites cartes empilées */}
        <div className="flex flex-col gap-3 md:flex-1">
          <div className="h-48 md:h-[254px]">
            <HeroCard
              heroLink={`/articles/${allArticles[1].uid}`}
              imageUrl={allArticles[1].data.image.url}
              heroTitle={RichText.asText(allArticles[1].data.title.richText)}
            />
          </div>
          <div className="h-48 md:h-[254px]">
            <HeroCard
              heroLink={`/articles/${allArticles[2].uid}`}
              imageUrl={allArticles[2].data.image.url}
              heroTitle={RichText.asText(allArticles[2].data.title.richText)}
            />
          </div>
        </div>

      </div>

      <div className="mt-6 flex justify-end">
        <Button as="a" href="/articles" variant="outlineDark" size="s">
          Lire tous les articles
        </Button>
      </div>
    </div>
  );
}
