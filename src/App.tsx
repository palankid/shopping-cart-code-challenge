import React from "react";
import { Provider } from "react-redux";

import store from "store";
import ProductList from "./features/ProductList";

import "./theme/theme.css";

function App() {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
}

export default App;
