import React, { useContext, useState } from "react";
import { CVJourneyContext } from "@/shared/provider/CVJourneyContextProvider";
import { CVJourneySteps } from "@/shared/types";
import CreatingExperience from "./CreatingExperience";
import ChoosingExperience from "./ChoosingExperience";
import ReviewingExperience from "./ReviewingExperience";

const ExperienceStep = () => {
  const { setStep, setCVExperience, cvData } = useContext(CVJourneyContext);
  const [flowStep, setFlowStep] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setStep(CVJourneySteps.HEADER);
  };

  const handleNext = () => {
    setCVExperience(cvData.experiences);
    setCurrentIndex(currentIndex + 1);
  };

  const handleAddMore = () => {
    setFlowStep(1);
    setCurrentIndex(currentIndex + 1);
  };

  const handleEdit = (index: number) => {
    setCurrentIndex(index);
    setFlowStep(2);
  };

  return (
    <>
      {flowStep === 1 && (
        <CreatingExperience
          currentIndex={currentIndex}
          onBack={handlePrev}
          onContinue={() => setFlowStep(2)}
        />
      )}
      {flowStep === 2 && (
        <ChoosingExperience
          currentIndex={currentIndex}
          onBack={() => setFlowStep(1)}
          onContinue={() => setFlowStep(3)}
        />
      )}
      {flowStep === 3 && (
        <ReviewingExperience
          onBack={() => setFlowStep(2)}
          onContinue={handleNext}
          onAddMore={handleAddMore}
          onEdit={handleEdit}
        />
      )}
    </>
  );
};

export default ExperienceStep;
