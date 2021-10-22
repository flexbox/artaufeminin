import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Newsletter from "../components/newsletter"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Newsletter",
  component: Newsletter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Newsletter>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Newsletter> = (args) => <Newsletter />

export const Primary = Template.bind({})
