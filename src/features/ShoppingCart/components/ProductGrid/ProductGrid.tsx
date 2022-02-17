import React from "react";
import { useSelector, useDispatch } from "react-redux";

import DataGrid from "components/DataGrid";
import { ColumnType, RowType } from "components/DataGrid/DataGrid.types";
import Typography from "components/Typography";
import { formatPrice } from "utils/currency.utils";
import NumericInput from "components/NumericInput";
import ProductDisplay from "../ProductDisplay";
import { getCartItems } from "features/ShoppingCart/store/cart.selectors";
import { updateItemQuantity } from "features/ShoppingCart/store/cart.slice";

const ProductGrid = () => {
  const dispatch = useDispatch();
  const products = useSelector(getCartItems);

  const handleUpdateQuantity = (id: string) => (value: number) => {
    dispatch(updateItemQuantity({ id, value }));
  };

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
            id={row.id}
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
      cellRenderer: ({ id, quantity, maxQuantity }: RowType) => {
        return (
          <NumericInput
            value={quantity}
            max={maxQuantity}
            inputWidth="3rem"
            onInput={handleUpdateQuantity(id)}
          />
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

  return <DataGrid columns={columns} dataProvider={products} />;
};

export default ProductGrid;
