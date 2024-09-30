import Link from "next/link";

type Props = {
  products: {
    slug: string;
    name: string;
    price: number;
    image: string;
  }[];
};

export default function ProductList({ products }: Props) {
  return (
    <section className="grid grid-cols-2 gap-x-1 lg:gap-x-2 gap-y-4 lg:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.name}
          className="group"
          href={`/products/${product.slug}`}
        >
          <img
            className="block transition-all duration-500 group-hover:shadow-lg"
            src={product.image}
            alt=""
          />
          <span className="text-sm inline-block mt-2 mb-1">{product.name}</span>
          <span className="block text-lg">${product.price}</span>
        </Link>
      ))}
    </section>
  );
}
