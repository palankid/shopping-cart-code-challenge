import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Container from "./Container";

export default {
  title: "components/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const styleFactory = (backgroundColor: string) => ({
  backgroundColor,
  color: "white",
  padding: "0.5rem 1rem",
});

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    <div style={styleFactory("red")}>Content</div>
    <div style={styleFactory("green")}>Content</div>
    <div style={styleFactory("blue")}>Content</div>
  </Container>
);

export const Default = Template.bind({});
Default.args = {};

export const WithMaxWidth = Template.bind({});
WithMaxWidth.args = { maxWidth: "sm" };
