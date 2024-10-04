"use client";

import { ChangeEvent, useState, type PropsWithChildren } from "react";
import { GoChevronDown } from "react-icons/go";
import { IoCloseOutline, IoCheckmark } from "react-icons/io5";

import { Button, Quantity } from "@/components/ui";
import products from "@/data/products.json";
import { useDisclosure } from "@/hooks";
import {
  useCartOperations,
  useIsCartOpenAtomValue,
  useIsCartOpenOperations,
  useProductLengthAtomValue,
} from "@/atoms";
import Link from "next/link";
import clsx from "clsx";
import { currencyFormat } from "@/utils";

export default function ProductSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const [quantity, setQuantity] = useState(1);
  const isCartOpen = useIsCartOpenAtomValue();
  const { open: openCart, close: closeCart } = useIsCartOpenOperations();
  const productLengthInCart = useProductLengthAtomValue();

  const product = products.find((product) => product.slug === params.slug);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setQuantity(+event.currentTarget.value);
  const handleDecrease = () =>
    quantity > 1 && setQuantity((state) => state - 1);
  const handleIncrease = () => setQuantity((state) => state + 1);
  const handleAddToCart = () => {
    if (!product) return;

    openCart();
    addProductToCart(product, quantity);
  };

  const { addProductToCart } = useCartOperations();

  if (!product) return <p>Not found</p>;

  return (
    <main className="space-y-12 layout-x lg:space-y-20 relative">
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
            <button
              className="underline underline-offset-4"
              onClick={closeCart}
            >
              Tiếp tục mua hàng
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-5 lg:fgap-10">
        <picture className="basis-2/3">
          <img src={product.image[0]} alt="" />
        </picture>

        <div className="basis-1/3 sticky h-full top-0 inset-x-0 space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-medium">{product.name}</h2>
            <div>{currencyFormat(product.price)}</div>
          </div>

          {/* Variations */}
          {/* <div className="space-y-2">
            <div className="text-sm">Color</div>
            <div className="flex flex-wrap gap-2">
              {product.color.map((color) => (
                <button className="border line-through text-gray-400 rounded-full px-5 py-1.5">
                  {color}
                </button>
              ))}
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
          </div> */}

          <div className="space-y-2">
            <div className="text-sm">Số lượng</div>
            <Quantity
              value={quantity}
              handleChange={handleChange}
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
            />
          </div>

          <div className="space-y-2">
            <Button
              className="w-full"
              intent="secondary"
              onClick={handleAddToCart}
            >
              Thêm vào giỏ hàng
            </Button>
            <Button className="w-full">Mua ngay</Button>
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
