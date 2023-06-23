import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/shared/components/common/Button";

const Footer = () => {
  return (
    <footer className="bg-ink-400 pb-10">
      <div className="container pt-[60px] text-ink-600 flex flex-col md:flex-row gap-10 lg:gap-20 mb-11">
        <div className="max-w-[500px]">
          <h4 className="font-semibold text-xl mb-6">Contact Us</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-sm mb-6">Integer in feugiat lorem.</p>
          <div className="grid grid-cols-2">
            <div className="text-xs mb-6">
              <p className="mb-1.5">Phone Number</p>
              <p className="font-semibold">+600 500 400</p>
            </div>
            <div className="text-xs mb-6">
              <p className="mb-1.5">Email Address</p>
              <p className="font-semibold">info@listme.ph</p>
            </div>
            <div className="text-xs mb-6">
              <p className="mb-1.5">Our Location</p>
              <p className="font-semibold">Tallinn</p>
            </div>
            <div className="text-xs mb-6">
              <p className="mb-1.5">Customer Support</p>
              <p className="font-semibold">E-R 10-19</p>
              <p className="font-semibold">L 10-16</p>
              <p className="font-semibold">P Closed</p>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <h4 className="font-semibold text-xl mb-6">Information</h4>
          <div className="flex flex-col">
            <Link href="#" className="text-sm mb-2.5">
              Terms and Conditions
            </Link>
            <Link href="#" className="text-sm mb-2.5">
              FAQ
            </Link>
            <Link href="#" className="text-sm mb-2.5">
              News
            </Link>
            <Link href="#" className="text-sm">
              About Us
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-xl mb-6">Newsletter</h4>
          <div>
            <p className="mb-6 text-sm">ListMe newsletter campaign</p>
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-7">
              <input
                className="w-full sm:w-[265px] h-[38px] bg-ink-600 px-4 py-2.5 text-ink-500 text-sm rounded-xl"
                placeholder="Email"
              />
              <Button className="w-full sm:w-auto" size="small">
                Subscribe
              </Button>
            </div>
            <p className="mb-1.5 text-sm">Follow us on social networks</p>
            <div className="flex gap-2">
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-[#3C5A99] flex justify-center items-center"
              >
                <Image
                  src="/images/icons/facebook.svg"
                  alt="facebook"
                  width={10}
                  height={16}
                />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-[#B200DE] flex justify-center items-center"
              >
                <Image
                  src="/images/icons/instagram.svg"
                  alt="instagram"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="rounded-2xl bg-ink-300 text-sm leading-6 text-ink-600 text-center py-1">
          ListMe copyright (C) 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
