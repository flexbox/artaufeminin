import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Input from "../components/input"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <>
      <Input variant="rounded" />
    </>
  )
}
const Template2: ComponentStory<typeof Input> = (args) => {
  return (
    <>
      <Input variant="border" />
    </>
  )
}

export const Primary = Template.bind({})
export const Rectangle = Template2.bind({})
