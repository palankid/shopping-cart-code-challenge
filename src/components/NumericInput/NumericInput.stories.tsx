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
      value={1234}
      max={10000}
      inputWidth="5rem"
      style={{ margin: "0.5rem" }}
      onInput={() => {}}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
