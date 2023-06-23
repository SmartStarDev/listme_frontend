import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/shared/components/common/Button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-primary pt-20 pb-10">
      <div className="container flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-header text-ink-600 mb-4">
            ListMe - your gateway to Europe.
          </h1>
          <div className="text-sm font-semibold mb-6 leading-6">
            <p>
              Get your CV application out there and find the job of your dreams.
            </p>
            <p>
              Use ListMe and give the journey of your life the jumpstart you
              deserve!
            </p>
          </div>
          <Button>Send job application</Button>

          <div className="flex items-center gap-5 pt-12">
            <Link href="#">
              <Image
                src="/images/sites/amazon.svg"
                alt="amazon"
                width={76.5}
                height={23}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/sites/skype.svg"
                alt="skype"
                width={51}
                height={23}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/sites/adidas.svg"
                alt="adidas"
                width={56}
                height={31}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/sites/giassi.svg"
                alt="giassi"
                width={78}
                height={23}
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/sites/bosch.svg"
                alt="bosch"
                width={85.5}
                height={19}
              />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <Image src="/images/woman.png" alt="woman" width={525} height={373} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
