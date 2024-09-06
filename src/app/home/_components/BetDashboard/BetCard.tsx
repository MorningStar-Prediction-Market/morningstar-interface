"use client";

import { BetCardDto } from "@/services/bet/bet.types";
import BetAmount from "./BetAmount";
import { useState } from "react";

const BetCard = ({ card }: { card: BetCardDto }) => {
  const [isOpenBetAmount, setIsOpenBetAmount] = useState(false);
  return (
    <div className="bg-gray-800 p-6  rounded-lg shadow-lg hover:bg-gray-700 z-2 relative overflow-hidden">
      <h2 className="text-lg font-bold mb-4">{card.title}</h2>
      <ul className="mb-4 overflow-y-auto h-24 scrollbar-none">
        {card.candidates.map((candidate, idx) => (
          <li key={idx} className="flex justify-between mb-1">
            <span>{candidate.name}</span>
            <div>
              <div className="gap-2 flex items-center">
                <span className="font-bold">{candidate.yesPercentage}%</span>
                <div className="w-12">
                  <button
                    className="z-2 w-12 absolute px-2 py-1 bg-green-600 text-white text-xs rounded opacity-0 hover:opacity-100"
                    onClick={() => setIsOpenBetAmount(true)}
                  >
                    {candidate.yesPercentage}%
                  </button>
                  <div className="w-full px-2 py-1 bg-green-900/70 text-green-300 text-xs rounded text-center">
                    Yes
                  </div>
                </div>
                <div className="w-12">
                  <button
                    className="z-2 w-12 absolute px-2 py-1 bg-red-600 text-white text-xs rounded opacity-0 hover:opacity-100"
                    onClick={() => setIsOpenBetAmount(true)}
                  >
                    {`${100 - candidate.yesPercentage}%`}
                  </button>
                  <div className="w-full px-2 py-1 bg-red-900/70 text-red-500 text-xs rounded text-center">
                    No
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 text-white px-2 py-1 rounded-md">
            {card.betAmount}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="text-gray-300">💬</span>
            <span>{card.comments}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-gray-300">👍</span>
            <span>{card.votes}</span>
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

export default BetCard;
