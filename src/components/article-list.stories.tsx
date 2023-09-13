import { Meta, StoryFn, storiesOf } from "@storybook/react"
import React from "react"

import { ArticleList, ArticleProps } from "./article-list"

export default {
  title: "Example/ArticleList",
  component: ArticleList,
} as Meta<typeof ArticleList>

const allArticles: ArticleProps[] = [
  {
    uid: "article1",
    data: {
      title: {
        richText: [{ type: "paragraph", text: "Article 1 Title" }],
      },
      description: {
        richText: [{ type: "paragraph", text: "Article 1 Description" }],
      },
      date: "2023-09-13",
      image: {
        url: "article1.jpg",
      },
    },
  },
  {
    uid: "article2",
    data: {
      title: {
        richText: [{ type: "paragraph", text: "Article 2 Title" }],
      },
      description: {
        richText: [{ type: "paragraph", text: "Article 2 Description" }],
      },
      date: "2023-09-14",
      image: {
        url: "article2.jpg",
      },
    },
  },
  {
    uid: "article3",
    data: {
      title: {
        richText: [{ type: "paragraph", text: "Article 3 Title" }],
      },
      description: {
        richText: [{ type: "paragraph", text: "Article 3 Description" }],
      },
      date: "2023-09-15",
      image: {
        url: "article3.jpg",
      },
    },
  },
]

const Template: StoryFn<typeof ArticleList> = (args) => {
  return <ArticleList allArticles={allArticles} />
}

export const Primary = {
  render: Template,
}
