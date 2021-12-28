import { Link } from "gatsby"
import { RichText, RichTextBlock } from "prismic-reactjs"
import React, { ReactElement } from "react"
import truncate from "lodash/truncate"
import { formatHumanDate } from "../utils/date"
import Text from "./text"

interface ArticleProps {
  uid: string
  data: {
    title: {
      raw: RichTextBlock[]
    }
    description: {
      raw: RichTextBlock[]
    }
    date: string
    image: {
      url: string
    }
  }
}
interface ArticlePropsNext {
  next: {
    uid: string
  }
  previous: {
    uid: string
  }
}

interface ArticleListItemProps {
  allArticles: ArticleProps[]
  allArticlesNext: ArticlePropsNext[]
}

function ArticleItem(
  { article }: { article: ArticleProps },
  { articleNext }: { articleNext: ArticlePropsNext }
): ReactElement {
  const slug = article.uid
  const thumbnailUrl = article.data.image.url
  const date = formatHumanDate(article.data.date)
  const title = RichText.asText(article.data.title.raw)
  const description = RichText.asText(article.data.description.raw)
  const descriptionTruncated = truncate(description, {
    length: 190,
  })
  const next = articleNext.next.uid
  const previous = articleNext.previous.uid

  return (
    <>
      <Link
        to={`/article/${slug}`}
        className="article-preview hover:no-underline"
      >
        <div className="flex flex-col md:flex-row my-6 ">
          <div className="flex-1 px-6">
            <Text as="h3Link">{title}</Text>
            <Text as="p">{descriptionTruncated}</Text>
            <Text as="p" className="italic text-gray-400">
              Publié {date}
            </Text>
          </div>
          <div className="img-parent flex-shrink-0 px-3 ">
            <div
              className="img bg-cover bg-center ease-in-out duration-300"
              style={{ backgroundImage: `url(${thumbnailUrl})` }}
            ></div>
          </div>
        </div>
      </Link>
      <hr className="separator mb-12" />
      <p>{previous}</p>
    </>
  )
}

export default function ArticleListItem({
  allArticles,
}: ArticleListItemProps): ReactElement {
  return (
    <>
      {allArticles.map((article, articleNext) => {
        return (
          <ArticleItem
            article={article}
            articleNext={articleNext}
            key={article.uid}
          />
        )
      })}
    </>
  )
}
