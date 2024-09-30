import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

import { Input } from "./ui";

export default function Footer() {
  return (
    <footer className="space-y-10">
      <section className="layout-x">
        <div className="grid md:grid-cols-3 gap-12 py-8 px-6">
          <div className="space-y-6">
            <h2 className="text-lg">Quick links</h2>
            <ul className="space-y-6 text-sm text-gray-600">
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
            <ul className="space-y-6 text-sm text-gray-600">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping policy</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-lg">Our mission</h2>
            <p className="text-gray-600">
              Quality materials, good designs, craftsmanship and sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="layout-x flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="text-center space-y-6">
          <h2 className="md:text-lg">Subscribe to our emails</h2>
          <Input className="w-60 md:w-96" type="text" placeholder="Email" />
        </div>
        <div className="md:self-end">
          <ul className="flex justify-center gap-6">
            <li>
              {/* <img className="h-4 w-4" src="/svg/facebook.svg" alt="" /> */}
              <FaFacebook className="h-5 w-5" />
            </li>
            <li>
              {/* <img className="h-4 w-4" src="/svg/instagram.svg" alt="" /> */}
              <FaInstagram className="h-5 w-5" />
            </li>
            <li>
              <FaYoutube className="h-5 w-5" />
              {/* <img className="h-4 w-4" src="/svg/youtube.svg" alt="" /> */}
            </li>
            <li>
              <FaTiktok className="h-5 w-5" />
              {/* <img className="h-4 w-4" src="/svg/tiktok.svg" alt="" /> */}
            </li>
            <li>
              <FaTwitter className="h-5 w-5" />
              {/* <img className="h-4 w-4" src="/svg/x.svg" alt="" /> */}
            </li>
          </ul>
        </div>
      </section>

      <div className="py-6 space-y-6 border-t">
        <ul className="flex gap-2 justify-center">
          <li>
            <img src="/svg/visa.svg" alt="" />
          </li>
          <li>
            <img src="/svg/master.svg" alt="" />
          </li>
          <li>
            <img src="/svg/american-express.svg" alt="" />
          </li>
          <li>
            <img src="/svg/paypal.svg" alt="" />
          </li>
          <li>
            <img src="/svg/diners-club.svg" alt="" />
          </li>
          <li>
            <img src="/svg/discover.svg" alt="" />
          </li>
        </ul>
        <p className="text-xs text-center">&copy; 2024, Dawn by Cong Lap</p>
      </div>
    </footer>
  );
}
