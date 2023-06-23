import clsx from "clsx";
import React, { useMemo, useState } from "react";

const steps = [
  "Beginner",
  "Elementary",
  "Intermediate",
  "Upper intermediate",
  "Advanced",
  "Proficient",
];

type Props = {
  onChangeStep: (value: number) => void;
  step: number;
}

const StepRangeSlider: React.FC<Props> = ({ onChangeStep, step }) => {
  const [level, setLevel] = useState(step);

  const handleChangeLevel = (event: any) => {
    setLevel(event.target.value);
    onChangeStep(event.target.value);
  };

  const markerPosition = useMemo(() => {
    return { left: `calc(${level * (100 / 5)}% - ${level * (16 / 5)}px)` };
  }, [level]);

  const stepPosition = (step: number) => {
    return { left: `calc(${step * (100 / 5)}% - ${step * (6 / 5)}px)` };
  };

  return (
    <div className="relative w-full h-[1px]">
      <input
        type="range"
        min={0}
        max={5}
        value={level}
        onChange={handleChangeLevel}
        className="h-0.5 bg-ink-700 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 z-20 opacity-0 absolute top-0 w-full"
      />
      <span
        className={clsx(
          "w-6 h-6 z-10 rounded-full bg-primary text-white font-semibold text-sm flex items-center justify-center border-2 border-primary-300 absolute -translate-x-[4px] -translate-y-[11px]"
        )}
        style={markerPosition}
      >
        C1
      </span>
      {steps.map((item, index) => (
        <div
          key={index}
          className="absolute z-1 -top-0.5 w-1.5 h-1.5 rounded-full bg-ink-700"
          style={stepPosition(index)}
        >
          <div className="relative">
            <span className="text-sm absolute top-6 left-1/2 -translate-x-1/2 text-center hidden lg:block">
              {item}
            </span>
          </div>
        </div>
      ))}
      <div className="absolute w-full bg-ink-700 h-[1px] top-0" />
    </div>
  );
};

export default StepRangeSlider;
