import { atom, useAtomValue, useSetAtom } from "jotai";

import type { Product, ProductInCart } from "@/types";

const baseAtom = atom<ProductInCart[]>([]);
const productLengthAtom = atom((get) =>
  get(baseAtom).reduce((total, item) => total + item.quantity, 0)
);
const totalBeforeTaxAtom = atom((get) =>
  get(baseAtom).reduce((total, item) => total + item.price * item.quantity, 0)
);

export const useCartAtomValue = () => useAtomValue(baseAtom);
export const useProductLengthAtomValue = () => useAtomValue(productLengthAtom);
export const useTotalCartAtomValue = () => useAtomValue(totalBeforeTaxAtom);

export const useCartOperations = () => {
  const write = useSetAtom(baseAtom);

  return {
    addProductToCart(product: Product, quantity: number) {
      write((prev) => {
        const existed = prev.some((item) => item.slug === product.slug);

        if (existed) {
          return prev.map((item) =>
            item.slug === product.slug
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }

        return [...prev, { ...product, quantity }];
      });
    },
    incrementProductQuantityInCart(slug: string) {
      write((prev) =>
        prev.map((item) =>
          item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    },
    decrementProductQuantityInCart(slug: string) {
      write((prev) =>
        prev.map((item) =>
          item.slug === slug ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    },
    updateProductQuantityInCart(slug: string, quantity: number) {
      write((prev) =>
        prev.map((item) => (item.slug === slug ? { ...item, quantity } : item))
      );
    },
    deleteProductFromCart(slug: string) {
      write((prev) => prev.filter((item) => item.slug !== slug));
    },
  };
};
