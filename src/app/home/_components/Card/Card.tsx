import SemiCircularProgressBar from "@/packages/@ui-kit/SemiCircularProgressBar";
import React from "react";
import VoteImage from "@/assets/images/vote_image.png";
import Image from "next/image";
import Rec1 from "@/assets/images/rectangle_1.png";
import Rec2 from "@/assets/images/rectangle_2.png";
import Rec3 from "@/assets/images/rectangle_3.png";

interface CardProps {
  index: number;
  title: string;
  label: string;
  url: string;
  percentage: number;
  bgColor: string;
  onClick: () => void;
}

const Card = ({
  index,
  title,
  label,
  url,
  percentage,
  bgColor,
  onClick,
}: CardProps) => {
  const themeCard = () => {
    switch (bgColor) {
      case "banner_blue":
        return Rec1;
      case "banner_red":
        return Rec2;
      case "banner_orange":
        return Rec3;
      default:
        return Rec1;
    }
  };
  return (
    <div
      key={index}
      className={`w-full min-w-80 max-w-[448px] max-h-[132px] flex justify-between rounded-lg pl-4 py-4 shadow-lg flex-shrink-0 }`}
      style={{
        backgroundImage: `url(${themeCard().src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="">
        <SemiCircularProgressBar
          value={percentage}
          maxValue={100}
          label={label}
        />
        <h3 className="font-bold text-text mt-5 mb-2">{title}</h3>

        <button className="bg-white/25 border border-white text-white text-[10px] py-0.5 px-2 rounded-full hover:bg-white/50">
          Bet now
        </button>
      </div>
      <Image
        src={VoteImage}
        alt={title}
        width={100}
        height={100}
        className="object-cove"
      />
    </div>
  );
};

export default Card;
