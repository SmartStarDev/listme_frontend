import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import Button from "@/shared/components/common/Button";

type Props = {
  onClose: () => void;
};

const SubscribeModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="backdrop-blur-[4px] absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
      <div className="max-w-[311px] w-full p-3 sm:p-6 bg-primary rounded-3xl mx-4">
        <div className="flex flex-col items-center border-b border-b-white">
          <span className="text-xs font-semibold mb-4 sm:mb-8 text-white">
            FIND A JOB
          </span>

          <span className="text-5xl font-bold mb-3 text-white">1€</span>

          <span className="text-xl font-bold mb-4 sm:mb-10 text-white">
            PER MONTH
          </span>
        </div>

        <div className="py-5 sm:py-10 px-3 sm:px-6 grid grid-cols-1 gap-3.5">
          <div className="flex items-start gap-2">
            <FaRegCheckCircle className="w-3 h-3 mt-1 fill-white flex-shrink-0" />
            <span className="text-sm font-light text-white">
              Job offers via email
            </span>
          </div>
          <div className="flex items-start gap-2">
            <FaRegCheckCircle className="w-3 h-3 mt-1 fill-white flex-shrink-0" />
            <span className="text-sm font-light text-white">
              Weekly reports who reviewed your application
            </span>
          </div>
          <div className="flex items-start gap-2">
            <FaRegCheckCircle className="w-3 h-3 mt-1 fill-white flex-shrink-0" />
            <span className="text-sm font-light text-white">
              Something else
            </span>
          </div>
        </div>

        <Button
          className="min-w-full text-sm sm:text-base"
          variant="outline"
          onClick={onClose}
        >
          SUBSCRIBE TO SEE
        </Button>
      </div>
    </div>
  );
};

export default SubscribeModal;
