import React from "react";
import Image from "next/image";

// TODO: please complete common as component
const Rating = () => {
  return (
    <div className="flex gap-1">
      <Image
        src="/images/icons/star_full.svg"
        alt="star_full"
        width={16}
        height={16}
      />
      <Image
        src="/images/icons/star_full.svg"
        alt="star_full"
        width={16}
        height={16}
      />
      <Image
        src="/images/icons/star_full.svg"
        alt="star_full"
        width={16}
        height={16}
      />
      <Image
        src="/images/icons/star_full.svg"
        alt="star_full"
        width={16}
        height={16}
      />
      <Image
        src="/images/icons/star_half.svg"
        alt="star_full"
        width={16}
        height={16}
      />
    </div>
  );
};

export default Rating;
