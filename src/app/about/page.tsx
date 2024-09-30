export default function AboutPage() {
  return (
    <main className="space-y-12">
      <section className="grid lg:grid-cols-3 gap-y-1 layout-x lg:gap-x-2">
        <img
          className="w-full h-full object-cover"
          src="https://theme-dawn-demo.myshopify.com/cdn/shop/files/Screen_Shot_2021-07-26_at_9.55_2_1420x_37337844-84ad-4c3b-97de-6e6821dde246.png?v=1642620619&width=1000"
          alt=""
        />
        <img
          className="w-full h-full object-cover"
          src="https://theme-dawn-demo.myshopify.com/cdn/shop/files/Screen_Shot_2021-06-10_at_1.04_17_1420x_54862fc8-048f-4227-8f0a-aa9cacade5db.png?v=1642620682&width=1000"
          alt=""
        />
        <img
          className="w-full h-full object-cover"
          src="https://theme-dawn-demo.myshopify.com/cdn/shop/files/Screen_Shot_2021-06-10_at_1.07_1420x_c8bb7818-f914-4f44-90d9-cdec7c3f1a69.png?v=1642620705&width=1000"
          alt=""
        />
      </section>

      <section className="space-y-8 layout-px mx-auto max-w-screen-sm">
        <h2 className="text-4xl font-medium">About</h2>
        <p>
          Mlouye’s founder and creative director Meb Rure hails from an
          industrial design background. In 2015, Meb decided to change gears and
          turn her energy towards Mlouye, a collection of exceptional handbags.
          Focusing on quality material, good design, craftsmanship and
          sustainability, Mlouye reflects the epitome of quality over quantity.
        </p>
        <p>
          Meb was highly inspired by the Bauhaus Movement&apos;s artists and
          architects. From Mies van der Rohe&apos;s works to Kandinsky&apos;s
          paintings, to Aalto&apos;s furniture, she acquired a rationalist
          vision of design by gleaning how they served a utilitarian purpose in
          a cleverly simple way. Mlouye merges industrial design and fashion,
          creating functional handbags made of luxurious and honest materials to
          improve people&apos;s lives in small but important ways.
        </p>
        <p>
          Innovation being the key factor alongside aesthetic, Mlouye has
          brought unexpected shapes with smart details, functionality and a new
          luxury feel with a contemporary price point.
        </p>
        <p>
          Istanbul is where Mlouye was born, the company&apos;s headquarters is
          now split between the US, and Turkey.
        </p>
      </section>

      <section className="layout-x">
        <div className="bg-gray-100 text-center p-12 space-y-6">
          <h2 className="text-xl font-medium">Our quality promise</h2>
          <p>
            Quality is never an accident. It is always the result of intelligent
            effort. We spend most of our time and energy for good design and to
            achieve high quality. Every single detail from material to technique
            is thought through with obsessive attention. If our product
            doesn&apos;t satisfy you, we&apos;ll take it back.
          </p>
        </div>
      </section>
    </main>
  );
}
