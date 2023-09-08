import { Meta, StoryFn } from "@storybook/react"
import React from "react"

import Input from "./input"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Input>

export const InputStory = () => {
  return (
    <>
      <Input variant="rounded" />
    </>
  )
}
