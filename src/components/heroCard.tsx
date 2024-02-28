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
        className="flex h-full items-end overflow-hidden bg-gray-200 bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out hover:scale-105"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <Text
          as="h3"
          className="mx-auto mb-6 flex w-5/6 items-end bg-black p-2 text-left text-white"
        >
          {heroTitle}
        </Text>
      </div>
    </Link>
  );
};

export default HeroCard;
