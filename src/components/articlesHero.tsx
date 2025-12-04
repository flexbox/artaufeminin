import React from 'react';
import { RichText, RichTextBlock } from 'prismic-reactjs';

import Button from './button';
import HeroCard from './heroCard';
import Text from './text';

type Article = {
  uid: string;
  data: {
    image: {
      url: string;
    };
    title: {
      richText: RichTextBlock[];
    };
  };
};

type ArticlesHeroProps = {
  allArticles: Article[];
};

export function ArticlesHero({ allArticles }: ArticlesHeroProps) {
  // Empty state si on n'a pas assez d'articles
  if (!allArticles || allArticles.length < 3) {
    return (
      <div className="m-auto my-12 w-3/4 text-center">
        <Text as="p" variant="p" className="text-gray-600">
          Aucun article disponible pour le moment.
        </Text>
      </div>
    );
  }

  return (
    <div className="m-auto -mb-32 h-screen w-3/4 md:-mb-48">
      <div className="h-2/3 flex-col gap-4 overflow-hidden md:flex md:flex-row">
        <HeroCard
          heroLink={`/articles/${allArticles[0].uid}`}
          imageUrl={allArticles[0].data.image.url}
          heroTitle={RichText.asText(allArticles[0].data.title.richText)}
          size="lg"
        />
        <div className="flex flex-1 flex-col gap-4 overflow-hidden">
          <HeroCard
            heroLink={`/articles/${allArticles[1].uid}`}
            imageUrl={allArticles[1].data.image.url}
            heroTitle={RichText.asText(allArticles[1].data.title.richText)}
            size="md"
          />
          <HeroCard
            heroLink={`/articles/${allArticles[2].uid}`}
            imageUrl={allArticles[2].data.image.url}
            heroTitle={RichText.asText(allArticles[2].data.title.richText)}
            size="md"
          />
        </div>
      </div>

      <div className="mt-12 flex justify-end md:mt-8">
        <Button
          as="a"
          href="/articles"
          variant="outlineDark"
          size="s"
        >
          Lire tous les articles
        </Button>
      </div>
    </div>
  );
}

