import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';

import { ApplePodcastIcon } from './applePodcastIcon';

export const buttonVariants = cva(
  ['font-semibold', 'no-underline', 'rounded-lg', 'leading-none'],
  {
    variants: {
      variant: {
        outline: [
          'border-2',
          'border-solid',
          'border-gray-900',
          'text-gray-900',
          'hover:border-gray-900',
          'hover:bg-gray-900',
          'hover:text-white',
        ],
        solid: ['bg-blue-500', 'text-white', 'text-base', 'hover:bg-blue-600'],
        news: [
          'bg-blue-500',
          'text-white',
          'text-base',
          'w-full',
          'hover:bg-blue-600',
        ],
        ghost: [
          'flex',
          'text-gray-900',
          'text-base',
          'py-4',
          'px-8',
          'hover:bg-gray-100',
        ],
      },
      size: {
        xs: ['p-2'],
        s: ['p-3'],
        sm: ['p-4'],
        md: ['p-5'],
        lg: ['p-6'],
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  withIconPodcast?: boolean;
  withIcon?: boolean;
  url?: string;
  alt?: string;
  type?: string;
}

export const Button: React.FC<ButtonProps> = ({
  as: Element = 'button',
  className,
  variant,
  children,
  size,
  withIconPodcast = false,
  withIcon = false,
  url,
  alt,
  type,
  ...rest
}) => {
  if (withIconPodcast) {
    return (
      <Element
        {...rest}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonVariants({ variant, size, className })} flex items-center`}
      >
        <img src={url} alt={alt} className="mr-4 size-10 rounded-full" />
        {children}
      </Element>
    );
  }

  if (withIcon) {
    return (
      <Element {...rest} target="_blank" rel="noopener noreferrer">
        <ApplePodcastIcon
          className={buttonVariants({ variant, size, className })}
          {...rest}
          style={{ height: 57 }}
        />
        {children}
      </Element>
    );
  }

  return (
    <Element
      {...rest}
      className={buttonVariants({ variant, size, className })}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Button;
