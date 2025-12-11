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
        ghost: ['flex', 'text-black', 'text-base', 'py-4', 'px-8'],
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
  const classNamesVariant = 'text-white m-4 text-xs';
  if (isIconpod) {
    return (
      <Element
        {...rest}
        target="_blank"
        rel="noopener noreferrer"
        className={classNamesVariant}
      >
        <div className="flex items-center">
          <img src={url} alt={alt} className="mr-4 size-10" />
          {children}
        </div>
      </Element>
    );
  }
  if (isIcon) {
    return (
      <Element {...rest} target="_blank" rel="noopener noreferrer">
        <ApplePodcastIcon
          className={classNamesVariant}
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
