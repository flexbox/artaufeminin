import React, { ReactNode } from 'react';

import Text from './text';

interface CardProps {
  title: string;
  children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="mb-12 rounded-md bg-white px-4 py-6 drop-shadow-md">
      <div className="mb-6">
        <Text as="h2" variant={'h2'}>
          {title}
        </Text>
      </div>
      {children}
    </div>
  );
}
