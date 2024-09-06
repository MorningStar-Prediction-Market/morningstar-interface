"use client";
import React, { useRef } from "react";
import Card from "./Card";
import Quote from "@/assets/images/monetize_your_prediction.png";
import Image from "next/image";
const dumpData = [
  {
    title: "2024 Election Forecast",
    buttonText: "View",
    bgColor: "banner_blue",
    percentage: 65,
    label: "Trump",
  },
  {
    title: "2024 Presidential Election",
    buttonText: "Bet now",
    bgColor: "banner_red",
    percentage: 30,
    label: "President",
  },
  {
    title: "U.S. Recession in 2024?",
    buttonText: "Bet now",
    bgColor: "banner_orange",
    percentage: 70,
    label: "Trump",
  },
];

const CardCarousel = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <Image
        src={Quote}
        alt="MorningStar"
        className="w-[330px] h-9 mt-12 mb-6"
      />
      <div className=" overflow-x-auto w-[96vw] max-w-full flex py-4 gap-4 lg:grid lg:grid-cols-3 scrollbar-none">
        {dumpData.map((card, index) => (
          <Card
            key={index}
            percentage={card.percentage}
            label={card.label}
            index={index}
            title={card.title}
            bgColor={card.bgColor}
            url=""
            onClick={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
