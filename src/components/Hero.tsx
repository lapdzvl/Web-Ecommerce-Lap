import { Button } from "./ui";

export default function Hero() {
  return (
    <section className="text-center relative lg:h-[700px]">
      <img
        className="w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1683121263622-664434494177?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="py-20 flex flex-col justify-center items-center text-white space-y-5 bg-black/50 absolute inset-0">
        <h2 className="text-4xl font-medium">
          Thiết kế trẻ trung <br /> cùng thời trang.
        </h2>
        <p className="text-white">Thời trang trẻ trung</p>
        <Button className="bg-transparent" intent="inverse">
          Mua ngay
        </Button>
      </div>
    </section>
  );
}
