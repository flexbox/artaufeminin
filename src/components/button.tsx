import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';

import { ApplePodcastIcon } from './applePodcastIcon';

export const buttonVariants = cva(['primary'], {
  variants: {
    variant: {
      outline: [
        'font-semibold',
        'rounded-lg',
        'leading-none',
        'no-underline',
        'text-blue-500',
        'border-blue-500',
        'border-2',
        'border-solid',
        'm-0',
        'hover:border-blue-600',
        'hover:text-blue-600',
      ],
      solid: [
        'font-semibold',
        'rounded-lg',
        'leading-none',
        'no-underline',
        'bg-blue-500',
        'text-white',
        'text-md',
        'm-0',
        'hover:bg-blue-600',
        'mt-2',
        'sm:mt-0',
        'md:m-0',
      ],
      news: [
        'font-semibold',
        'rounded-lg',
        'leading-none',
        'no-underline',
        'bg-blue-500',
        'text-white',
        'text-md',
        'm-0',
        'hover:bg-blue-600',
        'w-full',
        'mt-2',
        'sm:mt-0',
        'md:m-0',
      ],
      ghost: [
        'font-semibold',
        'rounded-lg',
        'leading-none',
        'flex',
        'text-black-900',
        'text-md',
        'py-4',
        'px-8',
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
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  isIconpod?: boolean;
  isIcon?: boolean;
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
  isIconpod = false,
  isIcon = false,
  url,
  alt,
  type,
  ...rest
}) => {
  const classNamesDefault = 'py-2 px-4 font-semibold rounded-lg leading-none';
  const classNamesVariant = 'text-white m-4 text-xs';
  if (isIconpod) {
    return (
      <Element
        {...rest}
        target="_blank"
        rel="noopener noreferrer"
        className={`${classNamesDefault} hover:text-blue-500`}
      >
        <div className="flex items-center">
          <img src={url} alt={alt} className="mr-4 h-10 w-10" />
          {children}
        </div>
      </Element>
    );
  }
  if (isIcon) {
    return (
      <Element {...rest} target="_blank" rel="noopener noreferrer">
        <ApplePodcastIcon
          className={`${classNamesDefault} ${classNamesVariant}`}
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
