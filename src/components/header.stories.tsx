import React from "react"
import { StoryFn, Meta } from "@storybook/react"
import Header from "./header"

export default {
  title: "Example/Header",
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Header>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Header> = (args) => {
  return (
    <>
      <Header />
    </>
  )
}

export const Primary = {
  render: Template,
}
