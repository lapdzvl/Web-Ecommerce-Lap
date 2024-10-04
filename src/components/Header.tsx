"use client";

import clsx from "clsx";
import Link from "next/link";
import { CiMenuBurger, CiShoppingCart } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

import { useDisclosure } from "@/hooks";
import { useProductLengthAtomValue } from "@/atoms";

export default function Header() {
  const [isOpen, { toggle }] = useDisclosure();

  const productLength = useProductLengthAtomValue();

  return (
    <header className="border-b relative z-20">
      <div className="py-2.5 text-center text-xs tracking-widest border-b">
        Giao hàng miễn phí cho tất cả đơn hàng!
      </div>
      <div className="grid grid-cols-3 py-3.5 px-4 items-center layout-x lg:grid-cols-2">
        <button className="lg:hidden" onClick={toggle}>
          {isOpen ? (
            <IoCloseOutline className="h-6 w-6" />
          ) : (
            <CiMenuBurger className="h-6 w-6" />
          )}
        </button>
        <Link className="text-center lg:text-left" href="/">
          DAWN
        </Link>
        <div className="space-x-4 text-right">
          <Link className="relative inline-block" href="/cart">
            <CiShoppingCart className="h-8 w-8" />
            {productLength > 0 && (
              <span className="absolute right-0 top-0 inline-flex justify-center items-center text-white bg-black text-xs rounded-full h-4 w-4">
                {productLength}
              </span>
            )}
          </Link>
        </div>
      </div>
      <div
        className={clsx(
          "transition-all px-4 z-10 absolute inset-x-0 h-full bg-white",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div>Bags</div>
        <div>Shoes</div>
      </div>
    </header>
  );
}
