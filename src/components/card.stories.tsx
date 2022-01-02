import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Card from "./card"
import Button from "./button"

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => {
  return <Card title="Je suis un titre">HEY</Card>
}

const TemplateCard2: ComponentStory<typeof Card> = (args) => {
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

export const Primary = Template.bind({})
export const CardButton = TemplateCard2.bind({})
