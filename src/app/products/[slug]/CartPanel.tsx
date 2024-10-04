"use client";

import Link from "next/link";
import clsx from "clsx";
import { IoCloseOutline, IoCheckmark } from "react-icons/io5";

import { Button } from "@/components/ui";
import {
  useIsCartOpenAtomValue,
  useIsCartOpenOperations,
  useProductLengthAtomValue,
} from "@/atoms";

import { Product } from "@/types";

type Props = {
  product: Product;
};

export function CartPanel({ product }: Props) {
  const isCartOpen = useIsCartOpenAtomValue();
  const { closeCart } = useIsCartOpenOperations();
  const productLengthInCart = useProductLengthAtomValue();

  return (
    <section
      className={clsx(
        "border border-t-0 z-10 space-y-6 p-8 absolute top-0 right-0 bg-white transition lg:max-w-md w-full",
        isCartOpen ? "translate-y-0" : "-translate-y-full hidden"
      )}
    >
      <button className="absolute right-0 top-0 p-4" onClick={closeCart}>
        <IoCloseOutline className="w-5 h-5" />
      </button>
      <div className="flex items-center gap-2 !mt-0">
        <IoCheckmark className="h-4 w-4" />
        <p className="text-sm">Đã thêm vào giỏ hàng</p>
      </div>
      <div className="flex gap-4">
        <picture className="w-20">
          <img src={product.image[0]} alt="" />
        </picture>
        <div>
          <p>{product.name}</p>
          <p className="text-gray-500">Color: Oyster</p>
        </div>
      </div>
      <div className="space-y-3">
        <Button className="w-full" intent="secondary" onClick={closeCart}>
          <Link className="block" href="/cart">
            Xem giỏ hàng ({productLengthInCart})
          </Link>
        </Button>
        <Button className="w-full">Thanh toán</Button>
        <div className="text-center">
          <button className="underline underline-offset-4" onClick={closeCart}>
            Tiếp tục mua hàng
          </button>
        </div>
      </div>
    </section>
  );
}
