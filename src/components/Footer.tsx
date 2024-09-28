import Link from "next/link";

import { Input } from "./ui";

export default function Footer() {
  return (
    <footer className="">
      <div className="px-10 space-y-12 py-8">
        <div className="space-y-6">
          <h2 className="text-lg">Quick links</h2>
          <ul className="space-y-6 text-sm">
            <li>
              <Link href="">Bags</Link>
            </li>
            <li>
              <Link href="">Shoes</Link>
            </li>
            <li>
              <Link href="">Lookbook</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-lg">Info</h2>
          <ul className="space-y-6 text-sm">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/policy">Shipping policy</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-lg">Our mission</h2>
          <p>
            Quality materials, good designs, craftsmanship and sustainability.
          </p>
        </div>
        <div className="text-center space-y-6">
          <h2>Subscribe to our emails</h2>
          <Input className="w-60" type="text" placeholder="Email" />
        </div>
      </div>
      <div className="py-6 border-t">
        <p className="text-xs text-center">&copy; 2024, Dawn by Cong Lap</p>
      </div>
    </footer>
  );
}
