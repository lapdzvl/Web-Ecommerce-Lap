"use client";

import { ChangeEvent } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

import type { ProductInCart as ProductInCartType } from "@/types";

import { Quantity } from "@/components/ui";
import { useCartOperations } from "@/atoms";
import { currencyFormat } from "@/utils";

type Props = {
  product: ProductInCartType;
};

export default function ProductInCart({ product }: Props) {
  const {
    decrementProductQuantityInCart,
    incrementProductQuantityInCart,
    updateProductQuantityInCart,
    deleteProductFromCart,
  } = useCartOperations();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = +event.currentTarget.value;
    updateProductQuantityInCart(product.slug, newQuantity);
  };

  return (
    <div className="grid gap-4 grid-cols-4 grid-rows-[repeat(2,_auto)]">
      <img className="row-span-2" src={product.image[0]} alt="" />
      <div className="col-span-2 space-y-2">
        <h3>{product.name}</h3>
        <div className="text-sm text-gray-600">
          {currencyFormat(product.price)}
        </div>
        {/* <dl className="text-gray-600 space-y-1">
          <div className="">
            <dt className="inline-block">Color:</dt>
            <dd className="inline-block"> Buttermilk</dd>
          </div>
          <div className="">
            <dt className="inline-block">Size: </dt>
            <dd className="inline-block"> 40</dd>
          </div>
        </dl> */}
      </div>
      <div className="text-right">
        {currencyFormat(product.price * product.quantity)}
      </div>
      <div className="col-span-2">
        <Quantity
          value={product.quantity}
          handleChange={handleChange}
          handleDecrease={() => decrementProductQuantityInCart(product.slug)}
          handleIncrease={() => incrementProductQuantityInCart(product.slug)}
        />
      </div>
      <button onClick={() => deleteProductFromCart(product.slug)}>
        <RiDeleteBinLine />
      </button>
    </div>
  );
}
