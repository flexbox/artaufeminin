import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from "./button"
import "typeface-merriweather"

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
      <Button>Hello</Button>
      <Button variant="outline">Hello</Button>
      <Button variant="solid">Hello</Button>
      <Button variant="ghost">Hello</Button>
    </>
  )
}
const TemplateDefault: ComponentStory<typeof Button> = (args) => {
  return <Button variant="outline">Default</Button>
}
const TemplateSizes: ComponentStory<typeof Button> = (args) => {
  return (
    <>
      <Button size="s">Small</Button>
      <Button size="m">Medium</Button>
      <Button size="l">Large</Button>
    </>
  )
}
const TemplateDefaultGhost: ComponentStory<typeof Button> = (args) => {
  return <Button variant="outline">Default</Button>
}
const TemplateSmallGhost: ComponentStory<typeof Button> = (args) => {
  return <Button variant="outline">Small</Button>
}
const TemplateApplePodcast: ComponentStory<typeof Button> = (args) => {
  return <Button variant="outline" as="icon" href="http://www.google.com" />
}
const TemplatePodcast: ComponentStory<typeof Button> = (args) => {
  return (
    <Button
      variant="ghost"
      as="iconpod"
      href="http://www.google.com"
      key="spotify"
      url="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/spotify.svg"
      alt={`ART au feminin sur spotify`}
    >
      Spotify
    </Button>
  )
}
const TemplateAhrefButton: ComponentStory<typeof Button> = (args) => {
  return (
    <Button variant="outline" as="a" href="http://www.google.com">
      Href
    </Button>
  )
}

export const Primary = Template.bind({})
export const Default = TemplateDefault.bind({})
export const Large = TemplateSizes.bind({})
export const SmallGhost = TemplateSmallGhost.bind({})
export const Ahref = TemplateAhrefButton.bind({})
export const apple = TemplateApplePodcast.bind({})
export const pod = TemplatePodcast.bind({})
