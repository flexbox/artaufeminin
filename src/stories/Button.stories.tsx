import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "../components/button"
import "typeface-merriweather"
import "tailwindcss/tailwind.css"
import "../styles/css/styles.css"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      {/* <Button variant="solid">Hello</Button> */}
      {/* <br /> */}
      {/* <Button variant="ghost">Test</Button> */}
      {/* <br /> */}
      <Button variant="solid">Primary</Button>
      <br />
      <Button variant="ghost">Default</Button>
      <br />
      <Button variant="solid">Large</Button>
      <br />
      <Button variant="ghost">Default</Button>
      <br />
      <Button variant="ghost">Small</Button>
      <br />
      <Button variant="solid">Fit</Button>
      <br />
      <Button variant="ghost">Fit</Button>
      <br />
      <Button variant="solid">Fit + Small</Button>
      <br />
      <Button variant="ghost">Fit + Small</Button>
    </>
  )
}

export const Primary = Template.bind({})
