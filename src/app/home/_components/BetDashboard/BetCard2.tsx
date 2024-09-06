"use client";

import { BetCardDto, BetCardV2Dto } from "@/services/bet/bet.types";
import BetAmount from "./BetAmount";
import { useState } from "react";
import Image from "next/image";
import BetIcon from "@/assets/svg/bet_icon.svg";
import USA from "@/assets/svg/usa.svg";

import { MdOutlineTimer } from "react-icons/md";
import SemiCircularProgressBar from "@/packages/@ui-kit/SemiCircularProgressBar";

const BetCard2 = ({ card }: { card: BetCardV2Dto }) => {
  const [isOpenBetAmount, setIsOpenBetAmount] = useState(false);
  return (
    <div className="bg-card_bg min-w-[290px] rounded-lg p-4 shadow-lg z-2 relative overflow-hidden justify-between flex flex-col">
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image src={USA} alt="bet amount" className="w-3 h-3" />
            <span className="text-[10px] text-title">{card.category}</span>
          </div>
          <SemiCircularProgressBar
            value={card.percentages}
            maxValue={100}
            label={"trump"}
          />
        </div>
        <div className="max-w-[240px] mt-2  whitespace-pre-line">
          <span className="font-bold">{card.title}</span>
          <div className="text-[10px]">{card.description}</div>
        </div>
      </div>

      <div>
        <div className="flex gap-2 mt-8 mb-2">
          <button className="bg-button_primary/15 flex-1  text-button_primary text-sm py-1 px-9 hover:bg-button_primary/70 hover:text-white">
            Bet now
          </button>
          <button className="bg-button_secondary/15 flex-1 text-button_secondary text-sm py-1 px-9 hover:bg-button_secondary/70 hover:text-white ">
            Bet now
          </button>
        </div>
        <div className="flex justify-between items-center text-[10px] text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MdOutlineTimer className="text-gray-300" />
              <span>{card.timeLeft}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src={BetIcon} alt="bet amount" className="w-3 h-3" />
              <span>{card.votes}</span>
            </div>
          </div>
        </div>
      </div>

      <BetAmount
        isOpen={isOpenBetAmount}
        onClose={() => setIsOpenBetAmount(false)}
      />
    </div>
  );
};

export default BetCard2;
