import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DiscountDisplay from "./DiscountDisplay";

export default {
  title: "components/DiscountDisplay",
  component: DiscountDisplay,
} as ComponentMeta<typeof DiscountDisplay>;

const Template: ComponentStory<typeof DiscountDisplay> = () => (
  <DiscountDisplay
    discount={10}
    value={-150}
    message="As a first time shopper you get discount on your first order."
  />
);

export const Default = Template.bind({});
Default.args = {};
