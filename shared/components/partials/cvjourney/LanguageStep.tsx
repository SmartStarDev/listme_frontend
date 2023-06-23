import React, { useContext, useState } from "react";
import StepContainer from "@/shared/components/modules/StepContainer";
import Button from "@/shared/components/common/Button";
import { CVJourneyContext } from "@/shared/provider/CVJourneyContextProvider";
import { CVJourneySteps, CVLanguage } from "@/shared/types";
import Select, { SelectOption } from "@/shared/components/common/Select";
import { FaPlus } from "react-icons/fa";
import LanguageItem from "@/shared/components/modules/LanguageItem";
import { LANGUAGE_OPTIONS } from "@/shared/constants/options";

const LanguageStep = () => {
  const { setStep, setCVLanguages, cvData } = useContext(CVJourneyContext);

  const [languages, setLanguages] = useState<CVLanguage[]>(cvData.languages ?? []);

  const handlePrev = () => {
    setStep(CVJourneySteps.SUMMARY);
  };

  const handleNext = () => {
    if (languages.length) {
      setCVLanguages(languages);
    }
  };

  const handleChangeLanguage = (index: number) => (option: SelectOption) => {
    const temp = [...languages];

    if (temp[index]) {
      temp[index].name = option.name as string;
      temp[index].level = temp[index].level ?? 0;

    } else {
      temp.push({
        name: option.name as string,
        level: 0,
      });
    }

    setLanguages(temp);
  }

  const handleChangeLanguageLevel = (index: number) => (level: number) => {
    const temp = [...languages];
    temp[index].level = level;
    setLanguages(temp);
  }

  const handleAddOtherLanguage = () => {
    setLanguages([...languages, {
      name: '',
      level: 0
    }]);
  }

  const getLanguageItem = (name: string) => {
    return LANGUAGE_OPTIONS.find((item) => item.name === name) ?? null;
  }

  const handleRemoveLanguage = (index: number) => {
    const temp = [...languages];
    temp.splice(index, 1);
    setLanguages(temp);
  }

  return (
    <StepContainer
      title="What languages do you speak?"
      description="Show skills from your past work that relate to the job you want."
    >
      <div>
        <div>
          <p className="text-sm font-semibold text-ink-800 mb-1">
            First Language
          </p>
          <Select
            options={LANGUAGE_OPTIONS}
            className="w-full sm:max-w-[231px] mb-3"
            selected={getLanguageItem(languages[0]?.name ?? '')}
            onChangeSelection={handleChangeLanguage(0)}
          />
          <div className="flex items-center gap-2 font-semibold text-sm cursor-pointer w-fit hover:opacity-70">
            <FaPlus className="fill-primary" />
            <span className="text-primary">Add Another First Language</span>
          </div>
        </div>

        {languages[0] && (
          <>
            <div className="pt-8 sm:pt-11 mb-3 grid grid-cols-1 gap-4">
              <LanguageItem
                languageName={languages[0].name}
                index={1}
                level={languages[0].level}
                onChangeLevel={handleChangeLanguageLevel(0)}
                onDelete={() => handleRemoveLanguage(0)}
              />
            </div>
            <div
              className="flex items-center gap-2 font-semibold text-sm cursor-pointer w-fit hover:opacity-70"
              onClick={handleAddOtherLanguage}
            >
              <FaPlus className="fill-primary" />
              <span className="text-primary">Add Another Language</span>
            </div>
          </>
        )}

        {languages.slice(1).map((language, index) => (
          <div key={index} className="mt-10">
            <div className="mb-4">
              <Select
                options={LANGUAGE_OPTIONS}
                className="w-full sm:max-w-[231px] mb-3"
                selected={getLanguageItem(languages[index + 1]?.name ?? '')}
                onChangeSelection={handleChangeLanguage(index + 1)}
              />
            </div>
            {language.name && (
              <LanguageItem
                languageName={languages[index + 1].name}
                index={index + 2}
                level={languages[index + 1].level}
                onChangeLevel={handleChangeLanguageLevel(index + 1)}
                onDelete={() => handleRemoveLanguage(index + 1)}
              />
            )}
          </div>
        ))}

        <div className="flex flex-col sm:flex-row justify-center items-center pt-10 md:pt-20 gap-3 md:gap-6">
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
    </StepContainer>
  );
};

export default LanguageStep;
