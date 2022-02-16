import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShoppingBagIcon } from "../Icon";

import Button, { Sizes } from "./Button";
import { Variants } from "./Button";

export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

interface ComponentProps {
  icon: React.ReactNode;
  text: string;
  textDisabled: string;
  variant?: keyof typeof Variants;
  size?: keyof typeof Sizes;
  onClick: () => void;
}

const Component = ({
  icon,
  text,
  textDisabled,
  variant,
  size,
  onClick,
}: ComponentProps) => (
  <>
    <Button icon={icon} variant={variant} size={size} onClick={onClick}>
      {text}
    </Button>
    <Button
      disabled
      icon={icon}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {textDisabled}
    </Button>
  </>
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

export const Text = Template.bind({});
Text.args = {
  onClick: () => console.log("clicked"),
  text: "Text",
  textDisabled: "Text Disabled",
  variant: "text",
};

export const Link = Template.bind({});
Link.args = {
  onClick: () => console.log("clicked"),
  text: "Link",
  textDisabled: "Link Disabled",
  variant: "link",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  onClick: () => console.log("clicked"),
  text: "With Icon",
  textDisabled: "With Icon Disabled",
  icon: <ShoppingBagIcon />,
};

export const Big = Template.bind({});
Big.args = {
  onClick: () => console.log("clicked"),
  text: "Big Button",
  textDisabled: "Big Disabled",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  onClick: () => console.log("clicked"),
  text: "Small Button",
  textDisabled: "Small Disabled",
  size: "small",
};
