import { Link } from 'gatsby';
import React from 'react';

import Button from './button';
import HeroCard from './heroCard';
import { RichText, RichTextBlock } from 'prismic-reactjs';

type ArticlesHeroProps = {
  allArticles: [
    {
      uid: string;
      data: {
        image: {
          url: string;
        };
        title: {
          richText: RichTextBlock[];
        };
      };
    },
  ];
};

export function ArticlesHero({ allArticles }: ArticlesHeroProps) {
  return (
    <div className="m-auto -mb-32 h-screen w-3/4 md:-mb-48">
      <div className="h-2/3 flex-col gap-4 overflow-hidden md:flex md:flex-row">
        <HeroCard
          heroLink={`/articles/${allArticles[0].uid}`}
          imageUrl={allArticles[0].data.image.url}
          heroTitle={RichText.asText(allArticles[0].data.title.richText)}
          size={'lg'}
        />
        <div className="flex flex-1 flex-col gap-4 overflow-hidden">
          <HeroCard
            heroLink={`/articles/${allArticles[1].uid}`}
            imageUrl={allArticles[1].data.image.url}
            heroTitle={RichText.asText(allArticles[1].data.title.richText)}
            size={'md'}
          />
          <HeroCard
            heroLink={`/articles/${allArticles[2].uid}`}
            imageUrl={allArticles[2].data.image.url}
            heroTitle={RichText.asText(allArticles[2].data.title.richText)}
            size={'md'}
          />
        </div>
      </div>
      <div className="mt-12 flex justify-end md:mt-8">
        <Link to={'/articles'}>
          <Button variant="outline" size="s">
            Lire tous les articles
          </Button>
        </Link>
      </div>
    </div>
  );
}
