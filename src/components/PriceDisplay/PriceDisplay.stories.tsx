import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PriceDisplay from "./PriceDisplay";

export default {
  title: "components/PriceDisplay",
  component: PriceDisplay,
} as ComponentMeta<typeof PriceDisplay>;

const Template: ComponentStory<typeof PriceDisplay> = () => (
  <>
    <PriceDisplay price={2000} variant="body1" />
    <PriceDisplay price={2000} variant="body2" />
    <PriceDisplay price={2000} variant="body2" color="red" fontWeight="700" />
  </>
);

export const Default = Template.bind({});
Default.args = {};
