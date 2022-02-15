import { TextAlignments } from "components/Table/Table.types";

export interface RowType {
  [key: string]: any;
}

export interface DataProviderType {
  id: string;
  [key: string]: any;
}

export interface ColumnType {
  key: string;
  title: string;
  width?: string;
  align?: keyof typeof TextAlignments;
  cellRenderer?: (row: RowType, column?: ColumnType) => React.ReactElement;
}
