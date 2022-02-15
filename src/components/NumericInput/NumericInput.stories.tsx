import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NumericInput from "./NumericInput";

export default {
  title: "components/NumericInput",
  component: NumericInput,
} as ComponentMeta<typeof NumericInput>;

const Template: ComponentStory<typeof NumericInput> = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
    }}
  >
    <NumericInput
      value={5}
      inputWidth="5rem"
      onInput={() => {}}
      style={{ margin: "0.5rem" }}
    />
    <NumericInput
      value={1}
      max={100}
      inputWidth="5rem"
      style={{ margin: "0.5rem" }}
      onInput={() => {}}
    />
    <NumericInput
      value={100}
      max={100}
      inputWidth="5rem"
      style={{ margin: "0.5rem" }}
      onInput={() => {}}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
