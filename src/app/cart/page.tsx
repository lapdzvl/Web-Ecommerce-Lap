import Link from "next/link";

import products from "@/data/products.json";
import { Button } from "@/components/ui";
import ProductList from "@/components/ProductList";

export default function CartPage() {
  return (
    <main className="space-y-16">
      <section className="space-y-8 layout-x">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-medium">Your cart</h2>
          <Link href={"/"} className="underline underline-offset-4">
            Continue shopping
          </Link>
        </div>
        <div className="flex justify-between pb-4 border-b border-b-gray-300">
          <div className="uppercase text-gray-500 text-xs">Product</div>
          <div className="uppercase text-gray-500 text-xs">Total</div>
        </div>
        <div className="space-y-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="grid gap-4 grid-cols-4 grid-rows-[repeat(2,_auto)]"
            >
              <img className="row-span-2" src={product.image} alt="" />
              <div className="col-span-2 space-y-2">
                <h3>{product.name}</h3>
                <div className="text-sm text-gray-600">${product.price}</div>
                <dl className="text-gray-600 space-y-1">
                  <div className="">
                    <dt className="inline-block">Color:</dt>
                    <dd className="inline-block"> Buttermilk</dd>
                  </div>
                  <div className="">
                    <dt className="inline-block">Size: </dt>
                    <dd className="inline-block"> 40</dd>
                  </div>
                </dl>
              </div>
              <div className="text-right">$ total</div>
              <div className="col-span-2">quantity</div>
              <button>d</button>
            </div>
          ))}
        </div>
        <div className="space-y-4 lg:text-right">
          <div className="grid grid-cols-2 gap-4 lg:inline-grid lg:gap-0">
            <div className="text-right text-lg">Estimated total</div>
            <div className="text-xl">$395 USD</div>
          </div>
          <p className="text-sm text-center lg:text-right">
            Taxes, discounts and shipping calculated at checkout
          </p>
          <Button className="w-full lg:w-80">Check out</Button>
        </div>
      </section>

      <section className="layout-x">
        <div className="space-y-6">
          <h2 className="text-xl font-medium">You may also like</h2>
          <ProductList products={products} />
          <div className="text-center">
            <Button>View all</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
