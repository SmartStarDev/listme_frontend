import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  description: string;
}>;

const StepContainer: React.FC<Props> = ({ children, title, description }) => {
  return (
    <div className="pt-6 md:pt-12">
      <div className="mb-10">
        <div className="flex items-center justify-center mb-1">
          <h2 className="text-subTitle mr-3 text-center">{title}</h2>
        </div>
        <p className="text-center text-sm">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default StepContainer;
