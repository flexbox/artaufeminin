import { Link } from 'gatsby';
import React, { ReactNode } from 'react';

interface FeaturedCardProps {
  href: string;
  imageUrl: string;
  imageAlt: string;
  label: string;
  title: string;
  description?: string;
  cta?: ReactNode;
  imageRight?: boolean;
}

export function FeaturedCard({
  href,
  imageUrl,
  imageAlt,
  label,
  title,
  description,
  cta,
  imageRight = false,
}: FeaturedCardProps) {
  const image = (
    <Link to={href} tabIndex={-1} aria-hidden="true" className="block overflow-hidden bg-neutral-100">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        style={{ aspectRatio: '16/9', minHeight: 320 }}
      />
    </Link>
  );

  const text = (
    <div
      className={`flex flex-col justify-end border-t border-neutral-200 pt-6 lg:border-t-0 lg:px-10 lg:pb-8 lg:pt-0 ${
        imageRight ? 'lg:border-r' : 'lg:border-l'
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
        {label}
      </p>
      <Link to={href}>
        <h2 className="mt-3 font-display text-2xl font-light leading-snug text-neutral-900 transition-colors group-hover:text-neutral-500 lg:text-3xl xl:text-4xl">
          {title}
        </h2>
      </Link>
      {description && (
        <p className="mt-4 text-sm font-light leading-relaxed text-neutral-400 line-clamp-5">
          {description}
        </p>
      )}
      {cta && <div className="mt-6">{cta}</div>}
    </div>
  );

  return (
    <article
      className={`group grid grid-cols-1 ${
        imageRight ? 'lg:grid-cols-[2fr_3fr]' : 'lg:grid-cols-[3fr_2fr]'
      }`}
    >
      {imageRight ? text : image}
      {imageRight ? image : text}
    </article>
  );
}
