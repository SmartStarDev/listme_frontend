import { FaTrashAlt, FaPen } from "react-icons/fa";
import React from "react";
import { CVExperience } from "@/shared/types";
import moment from "moment";

type Props = {
  experience: CVExperience;
  onEdit: () => void;
  onDelete: () => void;
};

const ExperienceItem: React.FC<Props> = ({ experience, onEdit, onDelete }) => {
  const renderStandardDate = (value: string) => {
    let [day, month, year] = value.split("/");
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  return (
    <div className="flex items-start py-9">
      <div className="font-semibold text-2xl pr-9">1.</div>
      <div className="flex flex-col lg:flex-row flex-1">
        <div>
          <div className="text-ink-800 mb-2 font-semibold text-xl">
            <p>{experience.jobTitle}</p>
            <p>{experience.employer}</p>
          </div>
          <p className="text-ink-800 text-sm font-semibold">
            {experience.city}, {experience.state} |{" "}
            {moment(renderStandardDate(experience.startDate)).format("MMM YYYY")} -{" "}
            {moment(renderStandardDate(experience.endDate)).format("MMM YYYY")}
          </p>
        </div>
        <div className="flex-1 px-0 lg:px-24 pt-2">
          <p dangerouslySetInnerHTML={{ __html: experience.description }} />
        </div>

        <div className="flex items-center gap-7 pt-6 lg:pt-0">
          <span className="cursor-pointer hover:opacity-70" onClick={onEdit}>
            <FaPen />
          </span>
          <span className="cursor-pointer hover:opacity-70" onClick={onDelete}>
            <FaTrashAlt />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
