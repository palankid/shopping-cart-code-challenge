import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "./Typography";

export default {
  title: "components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <>
    <Typography {...args} variant="h1">
      h1. heading
    </Typography>
    <Typography {...args} variant="h2">
      h2. heading
    </Typography>
    <Typography {...args} variant="h3">
      h3. heading
    </Typography>
    <Typography {...args} variant="h4">
      h4. heading
    </Typography>
    <Typography {...args} variant="h5">
      h5. heading
    </Typography>
    <Typography {...args} variant="subheading1">
      subheading 1
    </Typography>
    <Typography {...args} variant="subheading2">
      subheading 2
    </Typography>
    <Typography {...args} variant="body1">
      body text 1
    </Typography>
    <Typography {...args} variant="body2">
      body text 2
    </Typography>
    <Typography {...args} variant="caption">
      caption
    </Typography>
  </>
);

export const Default = Template.bind({});
Default.args = {};

export const Bold = Template.bind({});
Bold.args = { fontWeight: "700" };

export const Colorful = Template.bind({});
Colorful.args = { color: "red" };
