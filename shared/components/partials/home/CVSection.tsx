"use client";
import React from "react";
import Image from "next/image";
import { CVJourneyContextProvider } from "@/shared/provider/CVJourneyContextProvider";

import { CVJourneyOnboarding } from "@/shared/components/partials/cvjourney";

const CVSection = () => {
  return (
    <CVJourneyContextProvider>
      <div className="container py-10">
        <div className="rounded-3xl p-6 bg-ink-300 relative overflow-hidden">
          <CVJourneyOnboarding />

          <Image
            className="absolute -top-[111px] right-[68px] z-1 -rotate-[22deg] hidden lg:block brightness-75"
            src="/images/bg-pattern.png"
            alt="pattern"
            width={425}
            height={800}
          />
        </div>
      </div>
    </CVJourneyContextProvider>
  );
};

export default CVSection;
