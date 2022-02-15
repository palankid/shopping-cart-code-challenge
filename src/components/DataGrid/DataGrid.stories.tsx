import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DataGrid from "./DataGrid";
import { formatPrice } from "utils/currency.utils";
import Typography from "components/Typography";
import { ColumnType, DataProviderType, RowType } from "./DataGrid.types";

export default {
  title: "components/DataGrid",
  component: DataGrid,
} as ComponentMeta<typeof DataGrid>;

const columns: ColumnType[] = [
  {
    title: "Id",
    key: "id",
    width: "10%",
    cellRenderer: (row: RowType) => {
      return (
        <Typography variant="body2" fontWeight="400">
          {row.id}
        </Typography>
      );
    },
  },
  {
    title: "Name",
    key: "name",
    width: "20%",
    cellRenderer: (row: RowType) => {
      return (
        <Typography variant="body2" fontWeight="400">
          {row.name}
        </Typography>
      );
    },
  },
  {
    title: "Description",
    key: "description",
    width: "50%",
    cellRenderer: (row: RowType) => {
      return (
        <Typography variant="body2" fontWeight="400">
          {row.description}
        </Typography>
      );
    },
  },
  {
    title: "Price",
    key: "price",
    width: "20%",
    align: "right",
    cellRenderer: (row: RowType) => {
      return (
        <Typography variant="body2" color="orange" fontWeight="600">
          {formatPrice({ price: row.price })}
        </Typography>
      );
    },
  },
];

const dataProvider: DataProviderType[] = [
  {
    id: "id-100",
    name: "Lenovo PC",
    description: "This is the first item's description",
    price: 450,
  },
  {
    id: "id-101",
    name: "Asus Notebook",
    description: "This is the second item's description",
    price: 550,
  },
  {
    id: "id-102",
    name: "Apple MacBook Pro",
    description: "This is the third item's description",
    price: 1200,
  },
];

const Template: ComponentStory<typeof DataGrid> = () => (
  <DataGrid columns={columns} dataProvider={dataProvider} />
);

export const Default = Template.bind({});
Default.args = {};
