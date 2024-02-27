import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { type VariantProps, cva } from 'class-variance-authority';
import { Link } from 'gatsby';
import React from 'react';

import Text from './text';

export const heroCardVariants = cva(['primary'], {
  variants: {
    size: {
      md: ['bg-cover', 'bg-center', 'h-52', 'md:h-1/2', 'overflow-hidden'],
      lg: ['flex-1', 'mb-4', 'md:mb-0', 'h-52', 'md:h-full', 'overflow-hidden'],
    },
  },

  defaultVariants: {
    size: 'lg',
  },
});

export interface HeroCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heroCardVariants> {
  heroLink: string;
  imageUrl: string;
  heroTitle: string;
}

export const HeroCard = ({
  className,
  imageUrl,
  size,
  heroLink,
  heroTitle,
}: HeroCardProps) => {
  return (
    <Link to={heroLink} className={heroCardVariants({ className, size })}>
      <div
        className="bg-cover bg-center h-full ease-in-out transition-all duration-300 flex items-end bg-no-repeat hover:scale-105 overflow-hidden bg-gray-200"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <Text
          as="h3"
          className="text-white bg-black items-end flex mb-6 mx-auto p-2 w-5/6 text-left"
        >
          {heroTitle}
        </Text>
      </div>
    </Link>
  );
};

export default HeroCard;
