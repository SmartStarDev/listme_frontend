import React from "react";
import RateCard from "@/shared/components/modules/cards/RateCard";

const CardGroupSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container pr-0 lg:pr-[5rem] py-10">
      <RateCard />
      <RateCard />
      <RateCard />
      <RateCard />
    </div>
  );
};

export default CardGroupSection;
