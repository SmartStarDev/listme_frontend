import React, { useContext } from "react";
import Input from "@/shared/components/common/Input";
import StepContainer from "@/shared/components/modules/StepContainer";
import Image from "next/image";
import Button from "@/shared/components/common/Button";
import { CVJourneyContext } from "@/shared/provider/CVJourneyContextProvider";
import { CVJourneySteps, CVHeader } from "@/shared/types";
import { useForm } from "react-hook-form";
import {
  EMAIL_VALIDATION,
  PHONE_NUMBER_VALIDATION,
} from "@/shared/constants/validation";

const HeaderStep = () => {
  const { setStep, setCVHeader, cvData } = useContext(CVJourneyContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CVHeader>({
    defaultValues: cvData.header,
  });

  const handlePrev = () => {
    setStep(CVJourneySteps.START);
  };

  const handleNext = () => {
    handleSubmit(onSubmit)();
  };

  const onSubmit: Parameters<typeof handleSubmit>[0] = (values) => {
    setCVHeader(values);
  };

  return (
    <StepContainer
      title="Let's start with your header"
      description="Include your full name and at least one way for employers to reach you."
    >
      <div className="flex items-start">
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-x-6 md:gap-y-5">
            <div>
              <p className="text-xs mb-0.5">First name</p>
              <Input {...register("firstName")} />
            </div>
            <div>
              <p className="text-xs mb-0.5">Last name</p>
              <Input {...register("lastName")} />
            </div>
            <div>
              <p className="text-xs mb-0.5">City</p>
              <Input {...register("city")} />
            </div>
            <div>
              <p className="text-xs mb-0.5">State</p>
              <Input {...register("state")} />
            </div>
            <div>
              <p className="text-xs mb-0.5">Phone</p>
              <Input
                {...register("phone", {
                  pattern: PHONE_NUMBER_VALIDATION,
                })}
                error={errors.phone?.message}
                placeholder="+1 123 456 7890"
              />
            </div>
            <div>
              <p className="text-xs mb-0.5">Email address *</p>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: EMAIL_VALIDATION,
                })}
                error={errors.email?.message}
              />
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

        <div className="hidden lg:flex w-1/2 justify-end pr-20">
          <Image src="/images/cv.png" alt="step1" width={259} height={270} />
        </div>
      </div>
    </StepContainer>
  );
};

export default HeaderStep;
