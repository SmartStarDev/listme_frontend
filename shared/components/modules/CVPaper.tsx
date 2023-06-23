import React, { useContext } from "react";
import Image from "next/image";
import { CVJourneyContext } from "@/shared/provider/CVJourneyContextProvider";

const CVPaper = () => {
  const { cvData } = useContext(CVJourneyContext);

  return (
    <div className="border border-ink-400 bg-white rounded-lg px-6 sm:px-9 py-7 min-h-[872px]">
      <div className="text-xs font-semibold text-center flex flex-col sm:flex-row justify-center gap-2 mb-6">
        <span>{cvData.header.email}</span>
        <span>{cvData.header.phone}</span>
        <span>{`${cvData.header.firstName} ${cvData.header.lastName}`}</span>
      </div>

      <div className="flex justify-center mb-14">
        <Image
          src="/dark-logo.svg"
          alt="Logo"
          width={100}
          height={28}
          priority
        />
      </div>

      <div className="mb-4">
        <div className="mb-2 flex gap-2">
          <h3 className="text-ink-600 font-semibold text-sm">Summary</h3>
          <div className="flex-1 mt-2 border-t border-ink-450" />
        </div>

        <div className="text-xs text-ink-700 w-4/5">
          {cvData.summary}
        </div>
      </div>

      <div className="mb-10">
        <div className="mb-2 flex gap-2">
          <h3 className="text-ink-600 font-semibold text-sm">Skills</h3>
          <div className="flex-1 mt-2 border-t border-ink-450" />
        </div>

        <div className="text-xs text-ink-700 grid grid-cols-1 pl-3">
          {cvData.skills.map((skill, index) => (
            <p key={index}>{skill.name}</p>
          ))}
          {/*<div>*/}
          {/*  <p>Originality</p>*/}
          {/*  <p>Design strategy</p>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <p>People skills</p>*/}
          {/*</div>*/}
        </div>
      </div>

      <div className="mb-10">
        <div className="mb-2 flex gap-2">
          <h3 className="text-ink-600 font-semibold text-sm">Experience</h3>
          <div className="flex-1 mt-2 border-t border-ink-450" />
        </div>

        <div className="text-xs text-ink-700 flex flex-col md:flex-row items-center gap-6 md:gap-9">
          {cvData.experiences.map((item, index) => (
            <div key={index} className="mb-5">
              <div>
                <p>{item.jobTitle} | {item.employer}</p>
                <p>{item.startDate} - {item.endDate}</p>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-2 flex gap-2">
          <h3 className="text-ink-600 font-semibold text-sm">
            Education and Training
          </h3>
          <div className="flex-1 mt-2 border-t border-ink-450" />
        </div>

        <div className="text-xs text-ink-700">
          <div>
            <p className="font-semibold mb-1">BA - bachelor</p>
            <p>EKA | Etonian Academy of Arts</p>
            <p>01/2023 - 05/2023</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-2 flex gap-2">
          <h3 className="text-ink-600 font-semibold text-sm">Languages</h3>
          <div className="flex-1 mt-2 border-t border-ink-450" />
        </div>

        <div className="text-xs text-ink-700">
          <div>
            <div className="mb-2 flex items-center gap-1">
              <span className="font-semibold">Estonian:</span>
              <span>First Language</span>
            </div>

            <div className="max-w-[270px] text-xs">
              <div className="flex justify-between font-semibold">
                <span>Italian:</span>
                <span>C1</span>
              </div>
              <div className="w-full bg-ink-400 h-[3px]">
                <div className="w-3/5 bg-ink-600 h-full"></div>
              </div>
              <p>Advanced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPaper;
