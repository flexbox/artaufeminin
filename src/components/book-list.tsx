import { Link } from 'gatsby';
import React, { ReactElement } from 'react';

export interface BookProps {
  uid: string;
  data: {
    title: {
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
  'bg-clay-300',
  'bg-sage-300',
  'bg-gold-300',
  'bg-clay-200',
  'bg-sage-500',
  'bg-gold-500',
  'bg-clay-500',
  'bg-sage-300',
];

function BookItem({ book, index }: { book: BookProps; index: number }) {
  const slug = book.uid;
  const title = book.data.title.text;
  const content = book.data.content.text;
  const excerpt =
    content.length > 160 ? content.substring(0, 160) + '…' : content;
  const spineColor = SPINE_COLORS[index % SPINE_COLORS.length];

  return (
    <Link
      to={`/livres/${slug}`}
      className="group flex overflow-hidden rounded-sm border border-clay-200 bg-cream-50 transition-shadow hover:shadow-md"
    >
      {/* Dos du livre */}
      <div className={`w-3 shrink-0 ${spineColor} transition-all duration-300 group-hover:w-4`} />

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="font-display text-xl font-semibold leading-snug text-stone-900 transition-colors group-hover:text-clay-500">
          {title}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-500">
          {excerpt}
        </p>
        <span className="mt-5 text-xs font-semibold uppercase tracking-widest text-clay-500 transition-colors group-hover:text-clay-700">
          Lire la chronique →
        </span>
      </div>
    </Link>
  );
}

export default function BookList({ allBooks }: BookListItemProps): ReactElement {
  return (
    <div className="m-auto mb-20 grid w-3/4 grid-cols-1 gap-6 sm:grid-cols-2">
      {allBooks.map((book, index) => (
        <BookItem book={book} key={book.uid} index={index} />
      ))}
    </div>
  );
}
