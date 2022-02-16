import React from "react";

import { TableRow, TableCell } from "components/Table";
import { ColumnType, DataProviderType, RowType } from "./DataGrid.types";

import styles from "./DataGrid.module.css";

interface BodyType {
  columns: ColumnType[];
  dataProvider: DataProviderType[];
}

const Body = ({ columns, dataProvider }: BodyType) => (
  <tbody>
    {dataProvider.map(
      (row: RowType): React.ReactElement => (
        <TableRow key={`row-${row.id}`}>
          {columns
            .filter(({ visible = true }: ColumnType) => visible)
            .map((column: ColumnType): React.ReactElement => {
              const key = `cell-${row.id}-${column.key}`;
              const element = column.cellRenderer
                ? column.cellRenderer(row, column)
                : row[column.key];

              return (
                <TableCell
                  className={styles["data-grid__cell"]}
                  key={key}
                  textAlign={column.align}
                  verticalAlign={column.verticalAlign}
                  width={column.width}
                >
                  {element}
                </TableCell>
              );
            })}
        </TableRow>
      )
    )}
  </tbody>
);

export default Body;
