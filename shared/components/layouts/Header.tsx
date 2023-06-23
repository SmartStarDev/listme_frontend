import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-5">
          <Image src="/logo.svg" alt="Logo" width={116} height={32} priority />

          <div className="hidden items-center gap-12 text-sm font-semibold md:flex">
            <Link href="/">Home</Link>
            <Link href="/">News</Link>
            <Link href="/">About Us</Link>
          </div>
          <span className="block md:hidden">
            <Image
              src="/images/icons/menu.svg"
              alt="menu"
              width={24}
              height={24}
            />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
