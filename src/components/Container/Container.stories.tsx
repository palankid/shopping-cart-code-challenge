import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Container from "./Container";

export default {
  title: "components/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const styleFactory = (
  backgroundColor: string,
  color: string,
  padding: string
) => ({
  backgroundColor,
  color,
  padding,
});

const Template: ComponentStory<typeof Container> = ({ direction }) => (
  <Container direction={direction} style={{ backgroundColor: "lightGray" }}>
    <div style={styleFactory("red", "white", "0.5rem 1rem")}>Content</div>
    <div style={styleFactory("green", "white", "0.5rem 1rem")}>Content</div>
    <div style={styleFactory("blue", "white", "0.5rem 1rem")}>Content</div>
  </Container>
);

export const Row = Template.bind({});
Row.args = { direction: "row" };

export const Column = Template.bind({});
Column.args = { direction: "column" };
