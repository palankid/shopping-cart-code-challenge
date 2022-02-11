import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ShoppingBagIcon, BackIcon, ShoppingCartIcon } from "../Icon";

import Button from "./Button";
import Container from "../Container";

export default {
  title: "components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Container direction="row">
    <Button {...args} icon={<ShoppingBagIcon />}>
      Contained
    </Button>
    <Button {...args} disabled icon={<ShoppingCartIcon />}>
      Contained Disabled
    </Button>
    <Button {...args} variant="outlined" icon={<BackIcon />}>
      Outlined
    </Button>
    <Button {...args} variant="outlined" disabled>
      Outlined Disabled
    </Button>
  </Container>
);

export const Contained = Template.bind({});
Contained.args = {
  onClick: () => console.log("clicked"),
};
