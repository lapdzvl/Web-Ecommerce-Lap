"use client";

import { ChangeEvent, useState, type PropsWithChildren } from "react";
import { GoChevronDown } from "react-icons/go";

import { Button, Quantity } from "@/components/ui";
import { useDisclosure } from "@/hooks";
import { useCartOperations, useIsCartOpenOperations } from "@/atoms";
import { currencyFormat } from "@/utils";
import type { Product } from "@/types";

type Props = {
  product: Product;
};

export function ProductDetails({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const { openCart } = useIsCartOpenOperations();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setQuantity(+event.currentTarget.value);
  const handleDecrease = () =>
    quantity > 1 && setQuantity((state) => state - 1);
  const handleIncrease = () => setQuantity((state) => state + 1);
  const handleAddToCart = () => {
    if (!product) return;

    openCart();
    addProductToCart(product, quantity);
  };

  const { addProductToCart } = useCartOperations();

  return (
    <section className="flex flex-col md:gap-10 md:flex-row gap-5">
      <picture className="md:basis-1/2 lg:basis-2/3">
        <img src={product.image[0]} alt="" />
      </picture>

      <div className="md:basis-1/2 lg:basis-1/3 sticky h-full top-0 inset-x-0 space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-medium">{product.name}</h2>
          <div>{currencyFormat(product.price)}</div>
        </div>

        {/* Variations */}
        {/* <div className="space-y-2">
            <div className="text-sm">Color</div>
            <div className="flex flex-wrap gap-2">
              {product.color.map((color) => (
                <button className="border line-through text-gray-400 rounded-full px-5 py-1.5">
                  {color}
                </button>
              ))}
              <button className="border line-through text-gray-400 rounded-full px-5 py-1.5">
                Olive Leaf
              </button>
              <button className="border border-gray-500 hover:border-black transition-colors rounded-full px-5 py-1.5">
                Emerald
              </button>
              <button className="border border-gray-500 hover:border-black transition-colors rounded-full px-5 py-1.5">
                Chocolate
              </button>
              <button className="border border-gray-500 hover:border-black transition-colors rounded-full px-5 py-1.5">
                Latte
              </button>
              <button className="border border-gray-500 hover:border-black transition-colors rounded-full px-5 py-1.5">
                Pastel
              </button>
              <button className="border border-black bg-black text-white rounded-full px-5 py-1.5">
                Pink Cloud
              </button>
            </div>
          </div> */}

        <div className="space-y-2">
          <div className="text-sm">Số lượng</div>
          <Quantity
            value={quantity}
            handleChange={handleChange}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
          />
        </div>

        <div className="space-y-2">
          <Button
            className="w-full"
            intent="secondary"
            onClick={handleAddToCart}
          >
            Thêm vào giỏ hàng
          </Button>
          <Button className="w-full">Mua ngay</Button>
        </div>

        <p>
          A streamlined approach to daily essentials: The Puff is a super soft
          and organic clutch designed to hold your laptop and all your office
          essentials. This lightly padded, soft-as-a-pillow carry-all comes in
          two sizes: 13” and 16” to fit most laptops.
        </p>

        <div className="border-y divide-y">
          <Item label="Materials" icon="material">
            Hand-crafted from Italian nappa leather. Microsuede interior. Filled
            with soft padding to keep your laptop protected. Comes with
            detachable handle/short shoulder strap.
          </Item>
          <Item label="Shipping & Returns" icon="shipping-and-returns">
            <p>Free shipping and returns available on all orders!</p>
            <p>
              We ship all US domestic orders within{" "}
              <strong className="font-bold">5-10 business days</strong>!
            </p>
          </Item>
          <Item label="Dimensions" icon="dimensions">
            w:35 X h:23 cm (14 X 9 in)
          </Item>
          <Item label="Care Instructions" icon="care-instructions">
            Use a soft damp cloth and a drop of mild soap to remove any haze.
            Air dry.
          </Item>
        </div>
      </div>
    </section>
  );
}

type ItemProps = PropsWithChildren<{
  label: string;
  icon:
    | "material"
    | "shipping-and-returns"
    | "dimensions"
    | "care-instructions";
}>;

function Item({ label, icon, children }: ItemProps) {
  const [isOpen, { toggle }] = useDisclosure();

  return (
    <details>
      <summary
        className="flex py-3.5 cursor-pointer items-center justify-between"
        onClick={toggle}
      >
        <h2 className="flex items-center gap-3">
          <img src={`/svg/${icon}.svg`} />
          {label}
        </h2>
        <GoChevronDown className="h-4 w-4" />
      </summary>
      {isOpen && <div className="pb-4">{children}</div>}
    </details>
  );
}
