import React, { useContext, useEffect, useState } from "react";
import StepContainer from "@/shared/components/modules/StepContainer";
import Input from "@/shared/components/common/Input";
import Select, { SelectOption } from "@/shared/components/common/Select";
import CheckBox from "@/shared/components/common/CheckBox";
import Image from "next/image";
import Button from "@/shared/components/common/Button";
import { CVJourneyContext } from "@/shared/provider/CVJourneyContextProvider";
import { CVJourneySteps, CVEducation } from "@/shared/types";
import { useForm } from "react-hook-form";
import {
  DEGREE_OPTIONS,
  MONTH_OPTIONS,
  YEAR_OPTIONS,
} from "@/shared/constants/options";

const EducationStep = () => {
  const { setStep, cvData, setCVEducation } =
    useContext(CVJourneyContext);

  const [year, setYear] = useState<SelectOption | null>(null);
  const [month, setMonth] = useState<SelectOption | null>(null);
  const [degree, setDegree] = useState<SelectOption | null>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<CVEducation>({
    defaultValues: cvData.education,
  });

  useEffect(() => {
    if (cvData.education) {
      const date = cvData.education.graduationDate.split('-');
      if (date.length === 2) {
        setYear(YEAR_OPTIONS.find((item) => item.value === Number(date[0])) ?? null);
        setMonth(MONTH_OPTIONS.find((item) => item.value === Number(date[1])) ?? null);
        setDegree(DEGREE_OPTIONS.find((item) => item.value === cvData.education.degree) ?? null);
      }
    }
  }, [cvData.education]);

  const onChangeMonth = (value: SelectOption) => {
    setMonth(value);
    setValue("graduationDate", `${year?.value}-${value.value}`);
  };

  const onChangeYear = (value: SelectOption) => {
    setYear(value);
    setValue("graduationDate", `${value.value}-${month?.value}`);
  };

  const onChangeDegree = (value: SelectOption) => {
    setDegree(value);
    setValue("degree", String(value.value));
  };

  const handlePrev = () => {
    setStep(CVJourneySteps.EXPERIENCE);
  };

  const handleNext = () => {
    handleSubmit(onSubmit)();
  };

  const onSubmit: Parameters<typeof handleSubmit>[0] = (values) => {
    setCVEducation(values);
  };

  return (
    <StepContainer
      title="Tell us about your education"
      description="Tell us about any colleges, degrees, or training courses you took. Even if you didn’t finish, it’s important to list them."
    >
      <div className="flex items-start">
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-x-6 lg:gap-y-5">
            <div>
              <p className="text-xs mb-0.5">School name</p>
              <Input
                {...register("schoolName", {
                  required: "School Name is required",
                })}
                error={errors.schoolName?.message}
              />
            </div>
            <div>
              <p className="text-xs mb-0.5">School location</p>
              <Input
                {...register("schoolLocation", {
                  required: "School Location is required",
                })}
                error={errors.schoolLocation?.message}
              />
            </div>
            <div>
              <p className="text-xs mb-0.5">Degree</p>
              <Select
                selected={degree}
                onChangeSelection={onChangeDegree}
                options={DEGREE_OPTIONS}
                placeholder="Degree"
              />
            </div>
            <div className="mr-0 lg:-mr-16">
              <p className="text-xs mb-0.5">Graduation date</p>
              <div className="grid grid-cols-2 gap-3 sm:gap-x-6">
                <Select
                  selected={month}
                  onChangeSelection={onChangeMonth}
                  options={MONTH_OPTIONS}
                  placeholder="Month"
                />
                <Select
                  selected={year}
                  onChangeSelection={onChangeYear}
                  options={YEAR_OPTIONS}
                  placeholder="Year"
                />
              </div>
            </div>
            <div>
              <p className="text-xs mb-0.5">Field of study</p>
              <Input {...register("fieldOfStudy")} />
            </div>

            <div>
              <CheckBox label="I'm still encrolled" {...register("enrolled")} />
            </div>
          </div>

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

        <div className="hidden w-1/2 lg:flex justify-end pr-20">
          <Image src="/images/cv.png" alt="step1" width={259} height={270} />
        </div>
      </div>
    </StepContainer>
  );
};

export default EducationStep;
