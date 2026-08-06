import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import React from 'react';

interface ContentCardProps {
  href: string;
  image?: IGatsbyImageData;
  imageUrl?: string;
  imageAlt: string;
  meta: string;
  title: string;
  description: string;
  action: React.ReactNode;
}

export function ContentCard({
  href,
  image,
  imageUrl,
  imageAlt,
  meta,
  title,
  description,
  action,
}: ContentCardProps) {
  const gatsbyImage = image ? getImage(image) : null;

  return (
    <article className="group flex flex-col">
      <Link
        to={href}
        tabIndex={-1}
        aria-hidden="true"
        className="block overflow-hidden bg-neutral-100"
      >
        <div className="aspect-square overflow-hidden">
          {gatsbyImage ? (
            <GatsbyImage
              image={gatsbyImage}
              alt={imageAlt}
              className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]"
              imgStyle={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          ) : (
            <img
              src={imageUrl}
              alt={imageAlt}
              width={400}
              height={400}
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            />
          )}
        </div>
      </Link>

      <div className="mt-3 flex flex-1 flex-col">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          {meta}
        </p>

        <Link to={href}>
          <h2 className="mt-2 font-display text-xl leading-snug text-neutral-900 transition-colors group-hover:text-neutral-500">
            {title}
          </h2>
        </Link>

        <p className="mt-2 flex-1 text-base leading-relaxed text-neutral-600">
          {description}
        </p>

        <div className="mt-4">{action}</div>
      </div>
    </article>
  );
}
