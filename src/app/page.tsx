import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

import products from "@/data/products.json";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <section className="text-center py-20 space-y-4 layout-x lg:max-w-xl">
        <h2 className="text-3xl font-medium">
          Ám ảnh với chi tiết. <br className="lg:hidden" />
          Thiết kế thông minh.
        </h2>
        <p>
          Những bộ quần áo tiện dụng làm từ chất liệu sang trọng giúp cải thiện
          cuộc sống của mọi người theo những cách nhỏ bé nhưng mạnh mẽ.
        </p>
      </section>
      <section className="layout-x">
        <ProductList products={products} />
      </section>
    </>
  );
}
