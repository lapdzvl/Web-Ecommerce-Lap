import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giỏ Hàng | Dawn",
  description: "",
};

import products from "@/data/products.json";
import { Button } from "@/components/ui";
import ProductList from "@/components/ProductList";
import { ProductInCartList } from "./ProductInCartList";

export default function CartPage() {
  return (
    <main className="space-y-16">
      <ProductInCartList />
      <section className="layout-x">
        <div className="space-y-6">
          <h2 className="text-xl font-medium">Có thể bạn sẽ thích</h2>
          <ProductList products={products} />
          <div className="text-center">
            <Button>Xem hết</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
