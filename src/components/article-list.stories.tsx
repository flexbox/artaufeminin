import React from 'react';

import { ArticleList } from './article-list';

export default {
  title: 'ArticleList',
  component: ArticleList,
};

const allArticles = [
  {
    uid: 'example-article-1',
    data: {
      title: {
        richText: [{ text: 'Example Article 1' }],
      },
      description: {
        richText: [{ text: 'This is an example article.' }],
      },
      date: '2021-01-01',
      image: {
        url: 'https://example.com/image.jpg',
      },
    },
  },
  {
    uid: 'example-article-2',
    data: {
      title: {
        richText: [{ text: 'Example Article 2' }],
      },
      description: {
        richText: [{ text: 'This is another example article.' }],
      },
      date: '2021-01-02',
      image: {
        url: 'https://example.com/image2.jpg',
      },
    },
  },
];

export const Default = () => <ArticleList allArticles={allArticles} />;
