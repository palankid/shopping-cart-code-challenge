import React from "react";

import { TableRow, TableThCell } from "components/Table";
import { ColumnType } from "./DataGrid.types";

import styles from "./DataGrid.module.css";

interface HeaderType {
  columns: ColumnType[];
}

const Header = ({ columns }: HeaderType) => (
  <thead>
    <TableRow>
      {columns
        .filter(({ visible = true }: ColumnType) => visible)
        .map((column: ColumnType): React.ReactElement => {
          return (
            <TableThCell
              className={styles["data-grid__th-cell"]}
              role="cell"
              key={column.key}
              textAlign={column.align}
              width={column.width}
            >
              {column.title}
            </TableThCell>
          );
        })}
    </TableRow>
  </thead>
);

export default Header;
