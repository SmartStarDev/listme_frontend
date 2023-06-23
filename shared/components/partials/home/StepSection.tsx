import React from "react";
import Image from "next/image";

const StepSection = () => {
  return (
    <div className="container py-10 flex flex-col md:flex-row mt-2">
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <div className="rounded-3xl bg-beige p-6 max-w-full md:max-w-[560px]">
          <div className="text-subTitle mb-5 text-ink-600">
            <h3 className="text-ink-600">No hustle. No trouble.</h3>
            <h3 className="text-ink-600">Only possibilities</h3>
          </div>
          <div className="rounded-xl flex bg-white py-2.5 px-1.5 mb-2.5">
            <span className="bg-beige w-6 h-6 rounded-full flex items-center justify-center font-semibold text-white mr-3 flex-shrink-0">
              1
            </span>
            <p className="text-sm font-normal mt-0.5 leading-6">
              Five minutes to easily create your CV (includes ListMe tips and
              help).
            </p>
          </div>
          <div className="rounded-xl flex bg-white py-2.5 px-1.5 mb-2.5 mr-0 lg:mr-10">
            <span className="bg-beige w-6 h-6 rounded-full flex items-center justify-center font-semibold text-white mr-3 flex-shrink-0">
              2
            </span>
            <p className="text-sm font-normal mt-0.5 leading-6">
              Use ListMe and give the journey of your life the jumpstart you
              deserve!
            </p>
          </div>
          <div className="rounded-xl flex bg-white py-2.5 px-1.5 mr-0 lg:mr-14">
            <span className="bg-beige w-6 h-6 rounded-full flex items-center justify-center font-semibold text-white mr-3 flex-shrink-0">
              3
            </span>
            <p className="text-sm font-normal mt-0.5">
              All it takes is one action and the offers will come pouring in
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-start pl-8">
        <Image
          src="/images/steps-circle.svg"
          alt="steps"
          width={453}
          height={337}
        />
      </div>
    </div>
  );
};

export default StepSection;
