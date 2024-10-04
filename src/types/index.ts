export type Product = {
  slug: string;
  name: string;
  image: string[];
  price: number;
  color: string[];
};

export type ProductInCart = Product & {
  quantity: number;
};
