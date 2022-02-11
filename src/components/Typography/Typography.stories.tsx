import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "./Typography";
import Container from "../Container";

export default {
  title: "components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => (
  <Container direction="column">
    <Typography variant="h1">h1. heading</Typography>
    <Typography variant="h2">h2. heading</Typography>
    <Typography variant="h3">h3. heading</Typography>
    <Typography variant="h4">h4. heading</Typography>
    <Typography variant="h5">h5. heading</Typography>
    <Typography variant="subheading1">subheading 1</Typography>
    <Typography variant="subheading2">subheading 2</Typography>
    <Typography variant="body1">body text 1</Typography>
    <Typography variant="body2">body text 2</Typography>
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
