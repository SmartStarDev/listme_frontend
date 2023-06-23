import React from "react";
import NewsCard, {
  NewsCardProps,
} from "@/shared/components/modules/cards/NewsCard";

const News: NewsCardProps[] = [
  {
    imageSrc: "/images/card1.png",
    headerClassName: "bg-secondary",
    label: "Productivity",
    title: "Amet minim mollit non deserunt ullamco",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    userLogoSrc: "/images/user1.png",
    username: "Garcia Marcia",
  },
  {
    imageSrc: "/images/card2.png",
    headerClassName: "bg-beige",
    label: "Productivity",
    title: "Amet minim mollit non deserunt ullamco",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    userLogoSrc: "/images/user2.png",
    username: "Santos Mantos",
  },
  {
    imageSrc: "/images/card1.png",
    headerClassName: "bg-secondary",
    label: "Productivity",
    title: "Amet minim mollit non deserunt ullamco",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    userLogoSrc: "/images/user1.png",
    username: "Garcia Marcia",
  },
  {
    imageSrc: "/images/card2.png",
    headerClassName: "bg-beige",
    label: "Productivity",
    title: "Amet minim mollit non deserunt ullamco",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    userLogoSrc: "/images/user2.png",
    username: "Santos Mantos",
  },
];

const NewsSection = () => {
  return (
    <div className="container pt-10 pb-20">
      <h3 className="text-subTitle text-black mb-8">News</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {News.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
