import React from "react";

import DataGrid from "components/DataGrid";
import {
  ColumnType,
  DataProviderType,
  RowType,
} from "components/DataGrid/DataGrid.types";
import Typography from "components/Typography";
import { formatPrice } from "utils/currency.utils";
import NumericInput from "components/NumericInput";
import ProductDisplay from "../ProductDisplay";

const columns: ColumnType[] = [
  {
    key: "id",
    title: "",
    visible: false,
  },
  {
    key: "product",
    title: "Product",
    width: "50%",
    align: "left",
    cellRenderer: (row: RowType) => {
      return (
        <ProductDisplay
          product={row.product}
          brand={row.brand}
          image={row.image}
          color={row.color}
          size={row.size}
        />
      );
    },
  },
  {
    key: "quantity",
    title: "Quantity",
    width: "20%",
    align: "center",
    verticalAlign: "top",
    cellRenderer: ({ quantity }: RowType) => {
      return (
        <NumericInput value={quantity} inputWidth="3rem" onInput={() => {}} />
      );
    },
  },
  {
    key: "price",
    title: "Price",
    width: "30%",
    align: "right",
    verticalAlign: "top",
    cellRenderer: ({ price }: RowType) => {
      return (
        <Typography variant="body2" fontWeight="400">
          {formatPrice({ price })}
        </Typography>
      );
    },
  },
];

const dataProvider: DataProviderType[] = [
  {
    id: "100",
    product: "Oversize Blazer",
    brand: "Nike",
    image:
      "https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png",
    color: "red",
    size: 36,
    quantity: 1,
    price: 1720,
  },
  {
    id: "101",
    product: "Default Blazer",
    brand: "Adidas",
    image:
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    color: "orange",
    size: "32",
    quantity: 2,
    price: 1920,
  },
];

const ProductGrid = () => {
  return <DataGrid columns={columns} dataProvider={dataProvider} />;
};

export default ProductGrid;
