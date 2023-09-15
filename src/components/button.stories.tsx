import { Meta, StoryFn } from "@storybook/react"
import React from "react"
import "typeface-merriweather"

import Button from "./button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => {
  return (
    <>
      <Button>Hello</Button>
      <Button variant="outline">Hello</Button>
      <Button variant="solid">Hello</Button>
      <Button variant="ghost">Hello</Button>
    </>
  )
}
const TemplateDefault: StoryFn<typeof Button> = (args) => {
  return <Button variant="outline">Default</Button>
}
const TemplateSizes: StoryFn<typeof Button> = (args) => {
  return (
    <>
      <Button size="s">Small</Button>
      <Button size="sm">Medium</Button>
      <Button size="lg">Large</Button>
    </>
  )
}
const TemplateDefaultGhost: StoryFn<typeof Button> = (args) => {
  return <Button variant="outline">Default</Button>
}
const TemplateSmallGhost: StoryFn<typeof Button> = (args) => {
  return <Button variant="outline">Small</Button>
}
const TemplateApplePodcast: StoryFn<typeof Button> = (args) => {
  return <Button variant="outline" isIcon href="http://www.google.com" />
}
const TemplatePodcast: StoryFn<typeof Button> = (args) => {
  return (
    <Button
      variant="ghost"
      isIconpod
      href="http://www.google.com"
      key="spotify"
      url="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/spotify.svg"
      alt={`ART au feminin sur spotify`}
    >
      Spotify
    </Button>
  )
}
const TemplateAhrefButton: StoryFn<typeof Button> = (args) => {
  return (
    <Button variant="outline" as="a" href="http://www.google.com">
      Href
    </Button>
  )
}

export const Primary = {
  render: Template,
}
export const Default = {
  render: TemplateDefault,
}
export const Large = {
  render: TemplateSizes,
}
export const SmallGhost = {
  render: TemplateSmallGhost,
}
export const Ahref = {
  render: TemplateAhrefButton,
}
export const apple = {
  render: TemplateApplePodcast,
}
export const pod = {
  render: TemplatePodcast,
}
