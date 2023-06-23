import React, { useContext, useState } from "react";
import StepContainer from "@/shared/components/modules/StepContainer";
import Button from "@/shared/components/common/Button";
import ListSearch from "@/shared/components/modules/ListSearch";
import RichTextEditor from "@/shared/components/modules/RichTextEditor";
import { CVJourneyContext } from "@/shared/provider/CVJourneyContextProvider";

const items = [
  "Whimsical Designer with talents in [Task] and [Task]. Works closely with clients to create original visions, conceive designs and consistently meet deadlines. Works well independently or as part of dynamic design team.",
  "Worked with client via email, phone and in-person to collect",
  "Delivered designs to diverse clients on time and within",
  "Worked with creative personnel to establish and create",
  "Reviewed, edited and applied style rules to design,",
];

type Props = {
  onBack: () => void;
  onContinue: () => void;
  currentIndex: number;
};

const ChoosingExperience: React.FC<Props> = ({ onBack, onContinue, currentIndex }) => {
  const { setCVData, cvData } = useContext(CVJourneyContext);
  const [richText, setRichText] = useState(cvData.experiences[currentIndex]?.description ?? '');

  const handleContinue = () => {
    const values = [...cvData.experiences];
    values[currentIndex].description = richText;

    setCVData({
      ...cvData,
      experiences: values,
    });

    onContinue();
  }

  return (
    <StepContainer
      title="Now, describe what you did as a Designer"
      description="Pick from our ready-to-use phrases below or write your own."
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
              onClick={onBack}
            >
              BACK
            </Button>

            <Button
              className="w-full sm:w-auto"
              size="small"
              onClick={handleContinue}
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

export default ChoosingExperience;
