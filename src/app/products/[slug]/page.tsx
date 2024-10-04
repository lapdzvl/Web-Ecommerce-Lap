export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getData(params.slug);

  return {
    title: `${product?.name} | Sản Phẩm | Dawn`,
    description: "",
  };
}

import products from "@/data/products.json";
import { CartPanel } from "./CartPanel";
import { ProductDetails } from "./ProductDetails";

async function getData(slug: string) {
  return products.find((product) => product.slug === slug);
}

export default async function ProductSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getData(params.slug);

  if (!product) return <p>Not found</p>;

  return (
    <main className="lg:space-y-20 space-y-12 layout-x relative">
      <CartPanel product={product} />
      <ProductDetails product={product} />
      <section className="flex flex-col md:flex-row-reverse">
        <picture className="lg:flex-1">
          <img
            className="w-full"
            src="https://theme-dawn-demo.myshopify.com/cdn/shop/files/imgwithtext_1070x_91914dd5-dcb3-4f6b-a829-e6e75fb5813e.png?v=1642553858&width=750"
            alt=""
          />
        </picture>
        <div className="lg:flex-1 bg-gray-100">
          <div className="space-y-4 p-10 lg:p-16">
            <h2 className="text-3xl font-medium">Một thiết kế mới.</h2>
            <p>
              Thiết kế thông minh với các chi tiết và chức năng thông minh, mang
              lại cảm giác sang trọng mới với mức giá hiện đại.
            </p>
          </div>
        </div>
      </section>

      <section className="gap-8 grid lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Giao hàng miễn phí</h3>
          <p>
            Chúng tôi cung cấp dịch vụ giao hàng nhanh miễn phí trên toàn thế
            giới cho tất cả các đơn hàng. Bạn sẽ nhận được đơn hàng của mình
            khoảng 1–4 ngày kể từ ngày giao hàng.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Đổi trả dễ dàng</h3>
          <p>
            Đổi trả miễn phí. Hãy thoải mái thử đồ tại nhà của bạn. Chúng tôi sẽ
            đến lấy hàng tại nhà, nơi làm việc hoặc một địa chỉ thay thế khác
            của bạn.
          </p>
        </div>
      </section>
    </main>
  );
}
