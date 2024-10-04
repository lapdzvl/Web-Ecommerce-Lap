import { Button, Input, Textarea } from "@/components/ui";

export default function ContactPage() {
  return (
    <main className="space-y-16">
      <section className="layout-x space-y-8">
        <h2 className="text-5xl font-medium">Liên hệ chúng tôi</h2>
        <div className="space-y-4">
          <p>Tên công ty: Your Business Name Inc.</p>
          <p>Số điện thoại: +1 123-456-789</p>
          <p>Email: yourbusinessemail@address.com</p>
          <p>Địa chỉ: 3 Industrial Pkwy S, Aurora Ontario L4G 3V9</p>
          <p>Số giao dịch: 123456789</p>
        </div>
      </section>

      <section className="layout-x">
        <form className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <Input
              className="w-full"
              type="text"
              name="name"
              placeholder="Tên"
            />
            <Input
              className="w-full"
              type="email"
              name="email"
              placeholder="Email *"
            />
          </div>
          <Input
            className="w-full"
            type="text"
            name="phone"
            placeholder="Số điện thoại"
          />
          <Textarea
            className="w-full"
            name="comment"
            placeholder="Lời nhắn"
            rows={4}
          />
          <Button className="w-32" type="submit">
            Gửi
          </Button>
        </form>
      </section>
    </main>
  );
}
