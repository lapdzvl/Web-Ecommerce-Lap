import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

import products from "@/data/products.json";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <section className="text-center py-20 space-y-4">
        <h2 className="text-3xl font-medium">
          Obsessive Attention. Intelligent Effort.
        </h2>
        <p>
          Functional handbags made of luxurious materials to improve peoples
          lives in small but mighty ways.
        </p>
      </section>
      <ProductList products={products} />
    </>
  );
}
