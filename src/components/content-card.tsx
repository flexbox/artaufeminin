import { Link } from 'gatsby';
import React from 'react';

interface ContentCardProps {
  href: string;
  imageUrl: string;
  imageAlt: string;
  meta: string;
  title: string;
  description: string;
  action: React.ReactNode;
}

export function ContentCard({
  href,
  imageUrl,
  imageAlt,
  meta,
  title,
  description,
  action,
}: ContentCardProps) {
  return (
    <article className="group flex flex-col">
      {/* Image */}
      <Link to={href} className="block overflow-hidden rounded-sm">
        <div className="aspect-square overflow-hidden bg-stone-100">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Contenu */}
      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-xs font-semibold uppercase tracking-widest text-clay-500">
          {meta}
        </p>

        <Link to={href}>
          <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-stone-900 transition-colors hover:text-clay-500">
            {title}
          </h2>
        </Link>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-500">
          {description}
        </p>

        <div className="mt-4">
          {action}
        </div>
      </div>
    </article>
  );
}
