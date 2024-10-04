"use client";

import Link from "next/link";

import { Button } from "@/components/ui";
import ProductInCart from "./ProductInCart";
import { useCartAtomValue, useTotalCartAtomValue } from "@/atoms";
import { currencyFormat } from "@/utils";

export function ProductInCartList() {
  const cart = useCartAtomValue();
  const totalBeforeTax = useTotalCartAtomValue();

  return (
    <section className="space-y-8 layout-x">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-medium">Giỏ hàng của bạn</h2>
        <Link href={"/"} className="underline underline-offset-4">
          Tiếp tục mua hàng
        </Link>
      </div>
      <div className="flex justify-between pb-4 border-b border-b-gray-300">
        <div className="uppercase text-gray-500 text-xs">Sản phẩm</div>
        <div className="uppercase text-gray-500 text-xs">Tổng</div>
      </div>
      <div className="space-y-8">
        {cart.map((product) => (
          <ProductInCart key={product.slug} product={product} />
        ))}
      </div>
      <div className="space-y-4 lg:text-right">
        <div className="grid grid-cols-2 gap-4 lg:inline-grid">
          <div className="text-right text-lg">Tính tạm</div>
          <div className="text-xl">{currencyFormat(totalBeforeTax)}</div>
        </div>
        <p className="text-sm text-center lg:text-right">
          Thuế, chiết khấu và phí vận chuyển sẽ được tính khi thanh toán
        </p>
        <Button className="w-full lg:w-80">Thanh toán</Button>
      </div>
    </section>
  );
}
