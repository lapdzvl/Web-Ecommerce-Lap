import { Button, Input, Textarea } from "@/components/ui";

export default function ContactPage() {
  return (
    <main className="space-y-16">
      <section className="layout-x space-y-8">
        <h2 className="text-5xl font-medium">Contact us</h2>
        <div className="space-y-4">
          <p>Trade name: Your Business Name Inc.</p>
          <p>Phone number: +1 123-456-789</p>
          <p>Email: yourbusinessemail@address.com</p>
          <p>Physical address: 3 Industrial Pkwy S, Aurora Ontario L4G 3V9</p>
          <p>VAT number: FRXX999999999</p>
          <p>Trade number: 123456789</p>
        </div>
      </section>

      <section className="layout-x">
        <form className="space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <Input
              className="w-full"
              type="text"
              name="name"
              placeholder="Name"
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
            placeholder="Phone number"
          />
          <Textarea
            className="w-full"
            name="comment"
            placeholder="Comment"
            rows={4}
          />
          <Button className="w-32" type="submit">
            Send
          </Button>
        </form>
      </section>
    </main>
  );
}
