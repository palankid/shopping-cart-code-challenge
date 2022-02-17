export interface ProductType {
  id: string;
  product: string;
  brand: string;
  image: string;
  color: string;
  size: number;
  quantity: number;
  price: number;
}

export interface ProductsSlice {
  products: ProductType[];
}
