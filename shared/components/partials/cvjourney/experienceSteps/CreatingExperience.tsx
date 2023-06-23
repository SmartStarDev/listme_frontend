import React, { useContext } from "react";
import Input from "@/shared/components/common/Input";
import { FaCheckCircle } from "react-icons/fa";
import StepContainer from "@/shared/components/modules/StepContainer";
import Image from "next/image";
import Button from "@/shared/components/common/Button";
import CheckBox from "@/shared/components/common/CheckBox";
import { CVExperience } from "@/shared/types";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "@/shared/components/common/DatePicker";
import { DATE_VALIDATION_PATTERN } from "@/shared/constants/validation";
import { CVJourneyContext } from "@/shared/provider/CVJourneyContextProvider";

type Props = {
  onBack: () => void;
  onContinue: () => void;
  currentIndex: number;
};

const CreatingExperience: React.FC<Props> = ({
  onBack,
  onContinue,
  currentIndex,
}) => {
  const { setCVData, cvData } = useContext(CVJourneyContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<Omit<CVExperience, "history">>({
    defaultValues: cvData.experiences[currentIndex] ?? {},
  });

  const handleContinue = () => {
    handleSubmit(onSubmit)();
  };

  const onSubmit: Parameters<typeof handleSubmit>[0] = (values) => {
    const currentData = cvData.experiences[currentIndex];

    if (currentData) {
      const data = [...cvData.experiences];
      data.splice(currentIndex, 1);
      data.splice(currentIndex, 0, values);
      setCVData({
        ...cvData,
        experiences: data,
      });
    } else {
      setCVData({
        ...cvData,
        experiences: [...cvData.experiences, values],
      });
    }

    onContinue();
  };

  return (
    <StepContainer
      title="Let’s work on your experience"
      description="Start with your most recent job first."
    >
      <div className="flex items-start">
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-x-6 md:gap-y-5">
            <div>
              <p className="text-xs mb-0.5">Job title</p>
              <Input
                {...register("jobTitle", { required: "Title is required" })}
                error={errors.jobTitle?.message}
                endIcon={<FaCheckCircle className="fill-primary" />}
              />
            </div>
            <div>
              <p className="text-xs mb-0.5">Employer</p>
              <Input
                {...register("employer", { required: "Employer is required" })}
                error={errors.employer?.message}
                endIcon={<FaCheckCircle className="fill-primary" />}
              />
            </div>
            <div>
              <p className="text-xs mb-0.5">City</p>
              <Input
                {...register("city", { required: "City is required" })}
                error={errors.city?.message}
                endIcon={<FaCheckCircle className="fill-primary" />}
              />
            </div>
            <div>
              <p className="text-xs mb-0.5">State</p>
              <Input
                {...register("state", { required: "State is required" })}
                error={errors.state?.message}
                endIcon={<FaCheckCircle className="fill-primary" />}
              />
            </div>
            <div>
              <p className="text-xs mb-0.5">Start date</p>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    onChangeDate={onChange}
                    error={errors.startDate?.message}
                    placeholder="DD/MM/YYYY"
                    initialValue={value}
                  />
                )}
                rules={{
                  required: "Start date is required",
                  pattern: DATE_VALIDATION_PATTERN,
                }}
                name="startDate"
              />
            </div>
            <div>
              <p className="text-xs mb-0.5">End date</p>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    onChangeDate={onChange}
                    error={errors.endDate?.message}
                    placeholder="DD/MM/YYYY"
                    initialValue={value}
                  />
                )}
                rules={{
                  required: "End date is required",
                  pattern: DATE_VALIDATION_PATTERN,
                }}
                name="endDate"
              />
            </div>
            <div />
            <div>
              <CheckBox
                label="I currently work here"
                {...register("isWorkNow")}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center pt-10 md:pt-20 gap-3 md:gap-6">
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

        <div className="hidden w-1/2 lg:flex justify-end pr-20">
          <Image src="/images/cv.png" alt="step1" width={259} height={270} />
        </div>
      </div>
    </StepContainer>
  );
};

export default CreatingExperience;
