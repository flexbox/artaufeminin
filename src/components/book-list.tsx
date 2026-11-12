import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

export interface BookProps {
  uid: string;
  data: {
    title: {
      text: string;
    };
    description: {
      text: string;
    };
    content: {
      text: string;
    };
  };
}

interface BookListItemProps {
  allBooks: BookProps[];
}

const SPINE_COLORS = [
  'bg-neutral-300',
  'bg-neutral-900',
  'bg-neutral-500',
  'bg-neutral-200',
  'bg-neutral-700',
  'bg-neutral-400',
];

function BookItem({ book, index }: { book: BookProps; index: number }) {
  const slug = book.uid;
  const title = book.data.title.text;
  const excerpt =
    book.data.description?.text ??
    book.data.content?.text?.substring(0, 160) ??
    '';
  const spineColor = SPINE_COLORS[index % SPINE_COLORS.length];

  return (
    <Link
      to={`/livres/${slug}`}
      className="group flex overflow-hidden border border-neutral-200 bg-white transition-colors hover:border-neutral-900"
    >
      {/* Dos du livre */}
      <div
        className={`w-3 shrink-0 ${spineColor} transition-all duration-300 group-hover:w-4`}
      />

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-display text-2xl font-light leading-snug text-neutral-900 transition-colors group-hover:text-neutral-500">
          {title}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
          {excerpt}
        </p>
        <span className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 transition-colors group-hover:text-neutral-900">
          Lire la chronique <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

export default function BookList({
  allBooks,
}: BookListItemProps): ReactElement {
  return (
    <div className="mx-auto mb-20 grid w-page max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
      {allBooks.map((book, index) => (
        <BookItem book={book} key={book.uid} index={index} />
      ))}
    </div>
  );
}
