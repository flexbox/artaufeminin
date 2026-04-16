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

function BookItem({ book, index }: { book: BookProps; index: number }) {
  const slug = book.uid;
  const title = book.data.title.text;
  const content = book.data.content.text;
  const excerpt =
    content.length > 200 ? content.substring(0, 200) + '…' : content;

  return (
    <article className="group border-b border-clay-200 py-8 last:border-0">
      <Link to={`/livres/${slug}`} className="flex items-start gap-6">
        {/* Numéro */}
        <span className="mt-1 shrink-0 font-display text-3xl font-light text-clay-200 transition-colors group-hover:text-clay-300">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Contenu */}
        <div className="flex-1">
          <h2 className="font-display text-2xl font-semibold leading-snug text-stone-900 transition-colors group-hover:text-clay-500">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-500">
            {excerpt}
          </p>
          <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-clay-500 transition-colors group-hover:text-clay-700">
            Lire la critique →
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function BookList({ allBooks }: BookListItemProps): ReactElement {
  return (
    <div className="m-auto mb-20 w-3/4">
      {allBooks.map((book, index) => (
        <BookItem book={book} key={book.uid} index={index} />
      ))}
    </div>
  );
}
