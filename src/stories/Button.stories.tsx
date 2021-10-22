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
  return <Button variant="solid">Primary</Button>
}
const TemplateDefault: ComponentStory<typeof Button> = (args) => {
  return <Button variant="outline">Default</Button>
}
const TemplateLarge: ComponentStory<typeof Button> = (args) => {
  return <Button variant="large">Large</Button>
}
const TemplateDefaultGhost: ComponentStory<typeof Button> = (args) => {
  return <Button variant="outline">Default</Button>
}
const TemplateSmallGhost: ComponentStory<typeof Button> = (args) => {
  return <Button variant="outline">Small</Button>
}
const TemplateFit: ComponentStory<typeof Button> = (args) => {
  return <Button variant="solid">Fit</Button>
}
const TemplateFitGhost: ComponentStory<typeof Button> = (args) => {
  return <Button variant="outline">Fit</Button>
}
const TemplateFitSmall: ComponentStory<typeof Button> = (args) => {
  return <Button variant="outline">Fit + Small</Button>
}
const TemplateFitSmallGhost: ComponentStory<typeof Button> = (args) => {
  return <Button variant="outline">Fit + Small</Button>
}

export const Primary = Template.bind({})
export const Default = TemplateDefault.bind({})
export const Large = TemplateLarge.bind({})
export const DefaultGhost = TemplateDefaultGhost.bind({})
export const SmallGhost = TemplateSmallGhost.bind({})
export const Fit = TemplateFit.bind({})
export const FitGhost = TemplateFitGhost.bind({})
export const FitSmall = TemplateFitSmall.bind({})
export const FitSmallGhost = TemplateFitSmallGhost.bind({})
