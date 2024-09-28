"use client";

import clsx from "clsx";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

import { useDisclosure } from "@/hooks";

export default function Header() {
  const [isOpen, { toggle }] = useDisclosure();

  return (
    <header className="divide-y border-b">
      <div className="py-2.5 text-center text-xs tracking-widest">
        Free shipping available on all orders!
      </div>
      <div className="grid grid-cols-3 py-5 px-4">
        <button className="place-self-start" onClick={toggle}>
          {isOpen ? (
            <IoCloseOutline className="h-6 w-6" />
          ) : (
            <CiMenuBurger className="h-6 w-6" />
          )}
        </button>
        <Link className="text-center" href="/">
          DAWN
        </Link>
        <div className="space-x-4 place-self-end">
          <button>Search</button>
          <button>Cart</button>
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
