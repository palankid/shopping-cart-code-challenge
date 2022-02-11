import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShoppingBagIcon } from "../Icon";

import Button from "./Button";
import Container from "../Container";
import { Variants } from "./Button";

export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

interface ComponentProps {
  icon: React.ReactNode;
  text: string;
  textDisabled: string;
  onClick: () => void;
  variant?: keyof typeof Variants;
}

const Component = (props: ComponentProps) => (
  <Container direction="row">
    <Button onClick={props.onClick} icon={props.icon} variant={props.variant}>
      {props.text}
    </Button>
    <Button
      onClick={props.onClick}
      disabled
      icon={props.icon}
      variant={props.variant}
    >
      {props.textDisabled}
    </Button>
  </Container>
);

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Contained = Template.bind({});
Contained.args = {
  onClick: () => console.log("clicked"),
  text: "Contained",
  textDisabled: "Contained Disabled",
};

export const Outlined = Template.bind({});
Outlined.args = {
  onClick: () => console.log("clicked"),
  text: "Outlined",
  textDisabled: "Outlined Disabled",
  variant: "outlined",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  onClick: () => console.log("clicked"),
  text: "With Icon",
  textDisabled: "With Icon Disabled",
  icon: <ShoppingBagIcon />,
};
