import React from 'react';

import Button from './button';
import Card from './card';

export default {
  title: 'Card',
  component: Card,
};

export const Default = () => {
  return <Card title="Je suis un titre">HEY</Card>;
};

export const CardButton = () => {
  return (
    <>
      <Card title="Je suis un titre">
        HEY
        <div className="mt-4">
          <Button variant="outline">Default</Button>
        </div>
      </Card>
    </>
  );
};
