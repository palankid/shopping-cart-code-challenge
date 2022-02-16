import React from "react";

import { Table } from "components/Table";

import Header from "./Header";
import Body from "./Body";
import { ColumnType, DataProviderType } from "./DataGrid.types";

interface DataGridType {
  columns: ColumnType[];
  dataProvider: DataProviderType[];
}

const DataGrid = ({ columns, dataProvider }: DataGridType) => {
  return (
    <Table role="grid">
      <Header columns={columns} />
      <Body columns={columns} dataProvider={dataProvider} />
    </Table>
  );
};

export default DataGrid;
