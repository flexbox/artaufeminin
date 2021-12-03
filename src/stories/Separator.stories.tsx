import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Hr from "../components/hr"
import Button from "../components/button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Hr",
  component: Hr,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Hr>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hr> = (args) => {
  return (
    <>
      <Hr />
    </>
  )
}

export const Primary = Template.bind({})
