import React from "react"
import { StoryFn, Meta } from "@storybook/react"
import Card from "./card"
import Button from "./button"

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Card>

const Template: StoryFn<typeof Card> = (args) => {
  return <Card title="Je suis un titre">HEY</Card>
}

const TemplateCard2: StoryFn<typeof Card> = (args) => {
  return (
    <>
      <Card title="Je suis un titre">
        HEY
        <div className="mt-4">
          <Button variant="outline">Default</Button>
        </div>
      </Card>
    </>
  )
}

export const Primary = {
  render: Template,
}
export const CardButton = {
  render: TemplateCard2,
}
