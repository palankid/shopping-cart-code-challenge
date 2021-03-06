import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icons, { Icon } from "./Icon";

import { faStar } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "components/Icons",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const style = { margin: "1rem" };

const Template: ComponentStory<typeof Icon> = () => (
  <>
    <Icons.ShoppingCartIcon style={style} />
    <Icons.ShoppingBagIcon style={style} />
    <Icons.BackIcon style={style} />
    <Icons.Icon icon={faStar} style={style} />
  </>
);

export const AllIcons = Template.bind({});
AllIcons.args = {};
