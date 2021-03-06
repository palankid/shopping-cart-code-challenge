import React from "react";
import classNames from "classnames";

import styles from "./Table.module.css";
import { TextAlignments, VerticalAlignments } from "./Table.types";

interface GenericType {
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
}

interface CellType {
  textAlign?: keyof typeof TextAlignments;
  verticalAlign?: keyof typeof VerticalAlignments;
  width?: string;
}

export const Table = ({ children, className, ...props }: GenericType) => {
  const tableClasses = classNames(styles.table, className);

  return (
    <table className={tableClasses} {...props}>
      {children}
    </table>
  );
};

export const TableRow = ({ children, className, ...props }: GenericType) => {
  return (
    <tr className={className} {...props}>
      {children}
    </tr>
  );
};

export const TableThCell = ({
  children,
  className,
  textAlign = TextAlignments.left,
  verticalAlign = VerticalAlignments.center,
  width,
  ...props
}: GenericType & CellType) => {
  const tableClasses = classNames(
    styles["table__th-cell"],
    styles[`table__th-cell--align-${textAlign}`],
    className
  );

  return (
    <th className={tableClasses} style={{ width, verticalAlign }} {...props}>
      {children}
    </th>
  );
};

export const TableCell = ({
  children,
  className,
  textAlign = TextAlignments.left,
  verticalAlign = VerticalAlignments.center,
  width,
  ...props
}: GenericType & CellType) => {
  const tableClasses = classNames(
    styles["table__cell"],
    styles[`table__cell--align-${textAlign}`],
    className
  );

  return (
    <td className={tableClasses} style={{ width, verticalAlign }} {...props}>
      {children}
    </td>
  );
};
