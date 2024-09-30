"use client";

import { useState, type PropsWithChildren } from "react";
import { GoChevronDown } from "react-icons/go";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { Button } from "@/components/ui";
import products from "@/data/products.json";
import { useDisclosure } from "@/hooks";

export default function ProductSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const [quantity, setQuantity] = useState(1);

  const product = products.find((product) => product.slug === params.slug);

  const decrease = () => quantity > 1 && setQuantity((state) => state - 1);
  const increase = () => setQuantity((state) => state + 1);

  if (!product) return <p>Not found</p>;

  return (
    <main className="space-y-12 layout-x lg:space-y-20">
      <section className="flex flex-col lg:flex-row gap-5 lg:gap-10">
        <picture className="basis-2/3">
          <img src={product.image} alt="" />
        </picture>

        <div className="basis-1/3 sticky h-full top-0 inset-x-0 space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-medium">{product.name}</h2>
            <div>${product.price}</div>
          </div>

          <div className="space-y-2">
            <div className="text-sm">Color</div>
            <div className="flex flex-wrap gap-2">
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
          </div>

          <div className="space-y-2">
            <div className="text-sm">Quantity</div>
            <div className="border inline-flex items-center border-gray-500 p-3">
              <button
                className="px-3 disabled:text-gray-500 hover:disabled:cursor-not-allowed"
                onClick={decrease}
                disabled={quantity === 1}
              >
                <AiOutlineMinus />
              </button>
              <input
                className="w-12 text-center appearance-none text-gray-500"
                type="number"
                min={1}
                value={quantity}
                onChange={(event) => setQuantity(+event.currentTarget.value)}
              />
              <button className="px-3" onClick={increase}>
                <AiOutlinePlus />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Button className="w-full" intent="secondary">
              Add to cart
            </Button>
            <Button className="w-full">Buy it now</Button>
          </div>

          <p>
            A streamlined approach to daily essentials: The Puff is a super soft
            and organic clutch designed to hold your laptop and all your office
            essentials. This lightly padded, soft-as-a-pillow carry-all comes in
            two sizes: 13” and 16” to fit most laptops.
          </p>

          <div className="border-y divide-y">
            <Item label="Materials" icon="material">
              Hand-crafted from Italian nappa leather. Microsuede interior.
              Filled with soft padding to keep your laptop protected. Comes with
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

      <section className="flex flex-col lg:flex-row-reverse">
        <picture className="lg:flex-1">
          <img
            src="https://theme-dawn-demo.myshopify.com/cdn/shop/files/imgwithtext_1070x_91914dd5-dcb3-4f6b-a829-e6e75fb5813e.png?v=1642553858&width=750"
            alt=""
          />
        </picture>
        <div className="lg:flex-1 bg-gray-100">
          <div className="space-y-4 p-10 lg:p-16">
            <h2 className="text-3xl font-medium">A new kind of bag.</h2>
            <p>
              Unexpected shapes with smart details, functionality, a new luxury
              feel with a contemporary price point.
            </p>
          </div>
        </div>
      </section>

      <section className="gap-8 grid lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Free Shipping</h3>
          <p>
            We offer free worldwide express shipping on all orders. You&apos;ll
            receive your order an estimated 1–4 days after shipment.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Hassle-Free Exchanges</h3>
          <p>
            Exchanges are free. Try from the comfort of your home. We will
            collect from your home, work or an alternative address.
          </p>
        </div>
      </section>
    </main>
  );
}

type Props = PropsWithChildren<{
  label: string;
  icon:
    | "material"
    | "shipping-and-returns"
    | "dimensions"
    | "care-instructions";
}>;

function Item({ label, icon, children }: Props) {
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
