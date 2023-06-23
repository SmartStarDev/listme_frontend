import React, { useContext } from "react";
import StepContainer from "@/shared/components/modules/StepContainer";
import Button from "@/shared/components/common/Button";
import ExperienceItem from "@/shared/components/modules/ExperienceItem";
import { CVJourneyContext } from "@/shared/provider/CVJourneyContextProvider";

type Props = {
  onBack: () => void;
  onContinue: () => void;
  onAddMore: () => void;
  onEdit: (index: number) => void;
};

const ReviewingExperience: React.FC<Props> = ({
  onBack,
  onContinue,
  onAddMore,
  onEdit,
}) => {
  const {
    cvData: { experiences, ...rest },
    setCVData,
  } = useContext(CVJourneyContext);

  const handleDeleteExperience = (index: number) => {
    const data = [...experiences];
    data.splice(index, 1);
    setCVData({
      ...rest,
      experiences: data,
    });
  };

  return (
    <StepContainer title="Review your experience" description="">
      <div>
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            experience={experience}
            onEdit={() => onEdit(index)}
            onDelete={() => handleDeleteExperience(index)}
          />
        ))}

        <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-6 pt-40">
          <Button
            size="small"
            color="secondary"
            variant="outline"
            onClick={onBack}
          >
            BACK
          </Button>

          <div className="flex items-center flex-col md:flex-row gap-3 md:gap-6">
            <Button
              className="!bg-ink-700 w-full md:w-auto"
              size="small"
              onClick={onAddMore}
            >
              + ADD MORE EXPERIENCE
            </Button>
            <Button
              className="w-full md:w-auto"
              size="small"
              onClick={onContinue}
            >
              CONTINUE
            </Button>
          </div>
        </div>
      </div>
    </StepContainer>
  );
};

export default ReviewingExperience;
