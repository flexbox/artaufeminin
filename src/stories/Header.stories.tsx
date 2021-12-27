import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Header from "../components/header"

export default {
  title: "Example/Header",
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Header>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => {
  return (
    <>
      <Header siteTitle={"Art au Féminin"} />
    </>
  )
}

export const Primary = Template.bind({})
