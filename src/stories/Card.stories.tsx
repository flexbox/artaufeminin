import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Card from "../components/card"
import Button from "../components/button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => {
  return (
    <>
      <Card title="Je suis un titre">HEY</Card>
      <Card title="Je suis un titre">
        HEY{" "}
        <div>
          <Button variant="outline">Default</Button>
        </div>
      </Card>
    </>
  )
}

export const Primary = Template.bind({})
