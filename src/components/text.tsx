import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';

export const TextVariants = cva(['primary'], {
  variants: {
    variant: {
      h1: [
        'text-3xl',
        'font-semibold',
        'tracking-tight',
        'text-stone-900',
        'md:text-6xl',
      ],
      h2: [
        'text-2xl',
        'font-semibold',
        'leading-snug',
        'text-stone-800',
        'md:text-3xl',
      ],
      h2about: [
        'mb-0',
        'mt-2',
        'text-2xl',
        'font-semibold',
        'leading-snug',
        'text-stone-800',
      ],
      h2episode: [
        'mb-0',
        'mt-2',
        'text-2xl',
        'font-semibold',
        'leading-snug',
        'text-stone-800',
      ],
      h3: ['mt-2', 'text-lg'],
      h3Link: ['mb-4', 'text-lg', 'font-bold', 'text-stone-900'],
      p: ['mb-6', 'text-xl', 'text-stone-500', 'sm:text-base'],
      pAbout: ['mb-6', 'mt-2', 'text-xl', 'text-stone-500'],
      pEpisode: [
        'mb-6',
        'mt-2',
        'text-lg',
        'font-thin',
        'leading-relaxed',
        'text-stone-500',
      ],
      default: ['text-md', 'text-stone-500'],
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof TextVariants> {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: string;
}

export const Button: React.FC<TextProps> = ({
  as: Element = 'text',
  className,
  variant,
  children,
  ...rest
}) => {
  return (
    <Element className={TextVariants({ variant, className })} {...rest}>
      {children}
    </Element>
  );
};

export default Button;
