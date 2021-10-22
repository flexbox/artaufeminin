import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "../components/button"
import "typeface-merriweather"

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
      <Button variant="solid">Hello</Button>
      <br />
      <Button variant="ghost">Test</Button>
      <br />
      <button className="button primary">Primary</button>
      <br />
      <button className="button">Default</button>
      <br />
      <button className="button primary large">Large</button>
      <br />
      <button className="button">Default</button>
      <br />
      <button className="button small">Small</button>
      <br />
      <button className="button primary fit">Fit</button>
      <br />
      <button className="button fit">Fit</button>
      <br />
      <button className="button primary fit small">Fit + Small</button>
      <br />
      <button className="button fit small">Fit + Small</button>
    </>
  )
}

export const Primary = Template.bind({})
