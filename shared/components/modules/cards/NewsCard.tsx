import React from "react";
import Image from "next/image";
import clsx from "clsx";

export type NewsCardProps = {
  imageSrc: string;
  headerClassName: string;
  label: string;
  title: string;
  description: string;
  userLogoSrc: string;
  username: string;
};

const NewsCard: React.FC<NewsCardProps> = ({
  imageSrc,
  headerClassName,
  label,
  title,
  description,
  userLogoSrc,
  username,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <div className={clsx("p-4", headerClassName)}>
        <Image src={imageSrc} alt="cardImage" width={255} height={192} />
      </div>
      <div className="p-4 bg-white">
        <p className="text-ink-500 text-xs mb-2">{label}</p>
        <p className="text-2xl text-black font-semibold mb-2 leading-6">
          {title}
        </p>
        <div className="text-sm text-black mb-4 leading-6">{description}</div>
        <div className="flex items-center">
          <div className="rounded-full border border-ink-400 p-2 mr-1">
            <Image src={userLogoSrc} alt="cardImage" width={24} height={24} />
          </div>
          <p className="text-sm flex-1">{username}</p>
          <span className="text-sm text-info">Read More</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
