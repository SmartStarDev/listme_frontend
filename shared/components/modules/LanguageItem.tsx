import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import StepRangeSlider from "@/shared/components/modules/StepRangeSlider";

type Props = {
  index: number;
  languageName: string;
  level: number;
  onChangeLevel: (level: number) => void;
  onDelete: () => void;
}

const LanguageItem: React.FC<Props> = ({ index, languageName, level, onChangeLevel, onDelete }) => {

  return (
    <div className="rounded-2xl border border-ink-400 bg-white p-6 sm:p-9 sm:pb-12 flex">
      <div className="font-semibold text-xl pr-6 sm:pr-9">{index}.</div>
      <div className="flex flex-1 flex-col lg:flex-row">
        <div>
          <p className="text-ink-600 mb-1 font-semibold">{languageName}</p>
          <p className="text-ink-570 text-sm">Self Assessment | C1</p>
        </div>
        <div className="mb-4 lg:mb-0 lg:flex-1 px-0 lg:px-24 pt-2 h-12 items-center flex lg:items-start">
          <StepRangeSlider step={level} onChangeStep={onChangeLevel} />
        </div>

        <div className="flex items-center">
          <FaTrashAlt className="cursor-pointer" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default LanguageItem;
