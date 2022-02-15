import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Table, TableRow, TableThCell, TableCell } from "./Table";
import { TextAlignments } from "./Table.types";

export default {
  title: "components/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

interface ComponentType {
  textAlign?: keyof typeof TextAlignments;
}

const Component = ({ textAlign }: ComponentType) => (
  <Table>
    <thead>
      <TableRow>
        <TableThCell textAlign={textAlign}>Id</TableThCell>
        <TableThCell textAlign={textAlign}>Name</TableThCell>
        <TableThCell textAlign={textAlign}>Price</TableThCell>
      </TableRow>
    </thead>
    <tbody>
      <TableRow>
        <TableCell textAlign={textAlign}>100</TableCell>
        <TableCell textAlign={textAlign}>Apple</TableCell>
        <TableCell textAlign={textAlign}>10 SEK</TableCell>
      </TableRow>
      <TableRow>
        <TableCell textAlign={textAlign}>101</TableCell>
        <TableCell textAlign={textAlign}>Pear</TableCell>
        <TableCell textAlign={textAlign}>8 SEK</TableCell>
      </TableRow>
      <TableRow>
        <TableCell textAlign={textAlign}>102</TableCell>
        <TableCell textAlign={textAlign}>Cucumber</TableCell>
        <TableCell textAlign={textAlign}>15 SEK</TableCell>
      </TableRow>
    </tbody>
  </Table>
);

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const CenterAligned = Template.bind({});
CenterAligned.args = { textAlign: "center" };

export const RightAligned = Template.bind({});
RightAligned.args = { textAlign: "right" };
