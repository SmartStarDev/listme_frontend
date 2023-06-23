"use client";
import React, { useContext } from "react";
import Stepper, { Step } from "@/shared/components/modules/Stepper";
import HeaderStep from "@/shared/components/partials/cvjourney/HeaderStep";
import ExperienceStep from "@/shared/components/partials/cvjourney/experienceSteps";
import EducationStep from "@/shared/components/partials/cvjourney/EducationStep";
import SkillStep from "@/shared/components/partials/cvjourney/SkillStep";
import SummaryStep from "@/shared/components/partials/cvjourney/SummaryStep";
import LanguageStep from "@/shared/components/partials/cvjourney/LanguageStep";
import FinalizeStep from "@/shared/components/partials/cvjourney/FinalizeStep";
import { CVJourneyContext } from "@/shared/provider/CVJourneyContextProvider";
import { CVJourneySteps } from "@/shared/types";
import CVStart from "@/shared/components/partials/cvjourney/CVStart";

const Steps: Step[] = [
  {
    key: 1,
    label: "Header",
  },
  {
    key: 2,
    label: "Experience",
  },
  {
    key: 3,
    label: "Education",
  },
  {
    key: 4,
    label: "Skills",
  },
  {
    key: 5,
    label: "Summary",
  },
  {
    key: 6,
    label: "Finalize",
  },
];

export const CVJourneyOnboarding = () => {
  const { step } = useContext(CVJourneyContext);

  return step === CVJourneySteps.START ? (
    <CVStart />
  ) : (
    <div className="fade-in relative z-10">
      <div className="p-0 md:p-4 pt-5 md:pt-10">
        <div className="w-full mx-auto lg:w-4/6">
          <Stepper steps={Steps} currentStep={step} />
        </div>

        {step === CVJourneySteps.HEADER && <HeaderStep />}
        {step === CVJourneySteps.EXPERIENCE && <ExperienceStep />}
        {step === CVJourneySteps.EDUCATION && <EducationStep />}
        {step === CVJourneySteps.SKILL && <SkillStep />}
        {step === CVJourneySteps.SUMMARY && <SummaryStep />}
        {step === CVJourneySteps.LANGUAGE && <LanguageStep />}
        {step === CVJourneySteps.FINALIZE && <FinalizeStep />}
      </div>
    </div>
  );
};
