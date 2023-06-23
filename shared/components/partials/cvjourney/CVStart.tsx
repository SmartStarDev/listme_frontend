import Image from "next/image";
import React, { useContext } from "react";
import { CVJourneyContext } from "@/shared/provider/CVJourneyContextProvider";
import { CVJourneySteps } from "@/shared/types";

const CVStart = () => {
  const { setStep } = useContext(CVJourneyContext);

  return (
    <>
      <div className="mb-9">
        <h3 className="text-subTitle text-ink-600 mb-2">
          Start your journey by creating your CV
        </h3>
        <p className="text-sm font-semibold">
          Use ListMe and give the journey of your life the jumpstart you
          deserve!
        </p>
      </div>

      <div
        className="relative overflow-hidden rounded-3xl border-4 border-primary bg-secondary py-6 pl-7 pr-12 flex items-center flex-col sm:flex-row justify-between max-w-[612px] min-h-[164px] cursor-pointer"
        onClick={() => setStep(CVJourneySteps.HEADER)}
      >
        <div className="relative z-10 flex items-center mb-12">
          <div className="mr-2.5">
            <h3 className="text-subTitle text-primary mb-1.5">Create new CV</h3>
            <p className="text-sm text-primary text-light -mt-1">
              Our CV builder will help you!
            </p>
          </div>
          <Image
            src="/images/cv-paper.png"
            alt="cv-paper"
            width={80}
            height={50}
          />
        </div>

        <div className="relative z-10 w-[66px] h-[66px] flex-shrink-0 rounded-full shadow-button flex items-center justify-center bg-primary">
          <Image
            src="/images/icons/plus.svg"
            alt="plus"
            width={22}
            height={22}
            priority
          />
        </div>

        <Image
          className="absolute -top-[196px] right-[110px] rotate-[67deg] brightness-75 hidden md:block"
          src="/images/bg-pattern.png"
          alt="pattern"
          width={270}
          height={600}
        />
      </div>
    </>
  );
};

export default CVStart;
