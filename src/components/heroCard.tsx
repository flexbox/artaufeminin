import { Link } from 'gatsby';
import React from 'react';

export interface HeroCardProps {
  heroLink: string;
  imageUrl: string;
  heroTitle: string;
}

export const HeroCard = ({ imageUrl, heroLink, heroTitle }: HeroCardProps) => {
  return (
    <Link to={heroLink} className="group relative block h-full overflow-hidden rounded-sm">
      <img
        src={imageUrl}
        alt={heroTitle}
        className="h-full w-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
      <h3 className="absolute bottom-0 left-0 right-0 p-5 font-display text-base font-semibold leading-snug text-white drop-shadow-sm md:text-lg">
        {heroTitle}
      </h3>
    </Link>
  );
};

export default HeroCard;
