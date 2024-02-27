import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import Button from './button';
import Newsletter from './newsletter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Newsletter',
  component: Newsletter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Newsletter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Newsletter> = (args) => {
  return (
    <>
      <Newsletter />
    </>
  );
};

export const Primary = {
  render: Template,
};
