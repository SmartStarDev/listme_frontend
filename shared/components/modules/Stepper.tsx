import React from "react";
import clsx from "clsx";
import { FaCheck } from "react-icons/fa";

export type Step = {
  key: number;
  label: string;
};

type Props = {
  steps: Step[];
  currentStep: number;
};

const Stepper: React.FC<Props> = ({ steps, currentStep }) => {
  return (
    <div>
      <div className="flex items-center justify-between border-t border-t-ink-450">
        {steps.map((step, index) => (
          <div key={index} className="relative -mt-3 cursor-pointer">
            <div
              className={clsx(
                "w-6 h-6 rounded-full flex justify-center items-center mb-3",
                step.key <= currentStep ? "bg-primary" : "bg-ink-550"
              )}
            >
              {step.key <= currentStep ? (
                <FaCheck className="fill-white w-5" />
              ) : (
                <span className="text-white font-bold text-sm">{step.key}</span>
              )}
            </div>
            <span className="absolute top-8 left-1/2 -translate-x-1/2 text-sm capitalize font-bold hidden md:block">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
