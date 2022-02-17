import { render, screen } from "@testing-library/react";
import Typography from "components/Typography";

import DataGrid from "./DataGrid";
import { ColumnType, DataProviderType, RowType } from "./DataGrid.types";

const columns: ColumnType[] = [
  {
    title: "Id",
    key: "id",
    visible: false,
  },
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Email",
    key: "email",
    cellRenderer: (row: RowType) => {
      return <Typography variant="h1">{row.email}</Typography>;
    },
  },
];

const data: DataProviderType[] = [
  { id: "100", name: "John Smith", email: "john@gmail.com" },
  { id: "101", name: "Jane Doe", email: "jane@gmail.com" },
];

describe("DataGrid", () => {
  beforeEach(() => {
    render(<DataGrid columns={columns} dataProvider={data} />);
  });

  test("identifiers should not be visible", () => {
    const text = screen.queryByText("100");

    expect(text).not.toBeInTheDocument();
  });

  test("both name cells are populated", () => {
    const name1 = screen.queryByText("John Smith");
    const name2 = screen.queryByText("Jane Doe");

    expect(name1).toBeInTheDocument();
    expect(name2).toBeInTheDocument();
  });

  test("email cells are populated", () => {
    const email1 = screen.queryByText("john@gmail.com");
    const email2 = screen.queryByText("jane@gmail.com");

    expect(email1).toBeInTheDocument();
    expect(email2).toBeInTheDocument();
  });
});
