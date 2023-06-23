import React, { useContext, useEffect, useState } from "react";
import StepContainer from "@/shared/components/modules/StepContainer";
import Button from "@/shared/components/common/Button";
import { CVJourneyContext } from "@/shared/provider/CVJourneyContextProvider";
import { CVJourneySteps } from "@/shared/types";
import ListSearch from "@/shared/components/modules/ListSearch";
import RichTextEditor from "@/shared/components/modules/RichTextEditor";

const items = [
  "Whimsical Designer with talents in [Task] and [Task]. Works closely with clients to create original visions, conceive designs and consistently meet deadlines. Works well independently or as part of dynamic design team.",
  "Worked with client via email, phone and in-person to collect",
  "Delivered designs to diverse clients on time and within",
  "Worked with creative personnel to establish and create",
  "Reviewed, edited and applied style rules to design,",
];

const SummaryStep = () => {
  const { setStep, setCVSummary, cvData } = useContext(CVJourneyContext);
  const [richText, setRichText] = useState("");

  useEffect(() => {
    if (cvData.summary) {
      setRichText(cvData.summary);
    }
  }, [cvData]);

  const handlePrev = () => {
    setStep(CVJourneySteps.SKILL);
  };

  const handleNext = () => {
    setCVSummary(richText);
  };

  return (
    <StepContainer
      title="We're almost finished! Let's wrap up with a strong summary."
      description="Show skills from your past work that relate to the job you want."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="order-2 lg:order-1">
          <ListSearch searchItems={items} onSelectItem={setRichText} />

          <div className="flex flex-col sm:flex-row justify-center items-center pt-8 gap-3 sm:gap-6">
            <Button
              className="w-full sm:w-auto"
              size="small"
              color="secondary"
              variant="outline"
              onClick={handlePrev}
            >
              BACK
            </Button>

            <Button
              className="w-full sm:w-auto"
              size="small"
              onClick={handleNext}
            >
              CONTINUE
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <RichTextEditor value={richText} onChangeValue={setRichText} />
        </div>
      </div>
    </StepContainer>
  );
};

export default SummaryStep;
