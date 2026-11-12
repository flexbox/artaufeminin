import React from 'react';

import { ArticleList, ArticleProps } from './article-list';

export default {
  title: 'ArticleList',
  component: ArticleList,
};

// Données d'exemple : le format RichText de Prismic est simplifié ici
const allArticles = [
  {
    uid: 'example-article-1',
    first_publication_date: '2021-01-01T00:00:00+0000',
    data: {
      title: {
        richText: [{ type: 'paragraph', text: 'Example Article 1', spans: [] }],
      },
      description: {
        richText: [
          { type: 'paragraph', text: 'This is an example article.', spans: [] },
        ],
      },
      date: '2021-01-01',
      image: {
        url: 'https://example.com/image.jpg',
      },
    },
  },
  {
    uid: 'example-article-2',
    first_publication_date: '2021-01-01T00:00:00+0000',
    data: {
      title: {
        richText: [{ type: 'paragraph', text: 'Example Article 2', spans: [] }],
      },
      description: {
        richText: [
          {
            type: 'paragraph',
            text: 'This is another example article.',
            spans: [],
          },
        ],
      },
      date: '2021-01-02',
      image: {
        url: 'https://example.com/image2.jpg',
      },
    },
  },
];

export const Default = () => (
  <ArticleList allArticles={allArticles as unknown as ArticleProps[]} />
);
