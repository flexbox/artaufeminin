import { Link } from 'gatsby';
import React from 'react';

export interface HeroCardProps {
  heroLink: string;
  imageUrl: string;
  heroTitle: string;
  subtitle?: string;
}

export const HeroCard = ({ imageUrl, heroLink, heroTitle, subtitle }: HeroCardProps) => {
  return (
    <Link to={heroLink} className="group block">
      <div className="overflow-hidden bg-neutral-100">
        <img
          src={imageUrl}
          alt={heroTitle}
          className="w-full aspect-square object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-3 space-y-1.5">
        {subtitle && (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            {subtitle}
          </p>
        )}
        <h3 className="font-display text-base font-light leading-snug text-neutral-900 transition-colors group-hover:text-neutral-500 md:text-[1.05rem]">
          {heroTitle}
        </h3>
      </div>
    </Link>
  );
};

export default HeroCard;
