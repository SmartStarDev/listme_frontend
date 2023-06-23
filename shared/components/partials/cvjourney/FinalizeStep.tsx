import React, { useContext, useState } from "react";
import StepContainer from "@/shared/components/modules/StepContainer";
import Button from "@/shared/components/common/Button";
import { CVJourneyContext } from "@/shared/provider/CVJourneyContextProvider";
import { CVJourneySteps } from "@/shared/types";
import {
  FaPrint,
  FaDownload,
  FaEnvelope,
  FaPen,
  FaPlusCircle,
} from "react-icons/fa";
import CVPaper from "@/shared/components/modules/CVPaper";
import SubscribeModal from "@/shared/components/modules/SubscribeModal";

const FinalizeStep = () => {
  const { setStep } = useContext(CVJourneyContext);
  const [IsShowSubscribeModal, setIsShowSubscribeModal] = useState(false);

  const handlePrev = () => {
    setStep(CVJourneySteps.LANGUAGE);
  };

  const handleSubscribe = () => {
    setIsShowSubscribeModal(false);
    // TODO: please remove this code after completing
    window.localStorage.removeItem('cv_userId');
  }

  return (
    <StepContainer
      title="Subscribe and start getting job offers"
      description=""
    >
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 px-0 lg:px-20 gap-9">
          <div className="md:col-span-3 order-2 md:order-1">
            <div className="relative">
              <CVPaper />

              {IsShowSubscribeModal && (
                <SubscribeModal
                  onClose={handleSubscribe}
                />
              )}
            </div>

            <div className="pt-7 flex flex-col sm:flex-row justify-center items-center gap-3.5">
              <span className="text-xs font-semibold text-ink-700">
                Terms & Conditions
              </span>
              <span className="hidden sm:block border-l border-l-ink-600 h-3" />
              <span className="text-xs font-semibold text-ink-700">
                Privacy Policy
              </span>
              <span className="hidden sm:block border-l border-l-ink-600 h-3" />
              <span className="text-xs font-semibold text-ink-700">
                Contact Us
              </span>
            </div>
          </div>

          <div className="col-span-1 flex flex-col order-1 md:order-2">
            <div className="flex gap-8 md:block">
              <div className="flex items-center mb-5 gap-3 md:gap-5">
                <FaPrint />
                <span className="text-xs">Print</span>
              </div>
              <div className="flex items-center mb-5 gap-3 md:gap-5">
                <FaDownload />
                <span className="text-xs">Download</span>
              </div>
              <div className="flex items-center mb-5 gap-3 md:gap-5">
                <FaEnvelope />
                <span className="text-xs">Email</span>
              </div>
            </div>

            <div className="mt-4 md:mt-20">
              <p className="text-xs font-semibold mb-3 uppercase">
                Resume Sections
              </p>
              <div className="flex flex-wrap gap-5 md:block">
                <div className="flex items-center md:mb-3 gap-2">
                  <FaPen />
                  <span className="text-xs">Heading</span>
                </div>
                <div className="flex items-center md:mb-3 gap-2">
                  <FaPen />
                  <span className="text-xs">Experience</span>
                </div>
                <div className="flex items-center md:mb-3 gap-2">
                  <FaPen />
                  <span className="text-xs">Education</span>
                </div>
                <div className="flex items-center md:mb-3 gap-2">
                  <FaPen />
                  <span className="text-xs">Skills</span>
                </div>
                <div className="flex items-center md:mb-3 gap-2">
                  <FaPen />
                  <span className="text-xs">Summary</span>
                </div>
                <div className="flex items-center md:mb-3 gap-2">
                  <FaPen />
                  <span className="text-xs">Finalize</span>
                </div>
                <div className="flex items-center md:pt-2 gap-2">
                  <FaPlusCircle />
                  <span className="text-xs">Add a section</span>
                </div>
              </div>
            </div>
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
            onClick={() => setIsShowSubscribeModal(true)}
          >
            SUBSCRIBE
          </Button>
        </div>
      </div>
    </StepContainer>
  );
};

export default FinalizeStep;
