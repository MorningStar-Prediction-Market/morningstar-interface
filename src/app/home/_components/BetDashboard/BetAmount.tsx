"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const BetAmount = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [betAmount, setBetAmount] = useState(10);
  const winAmount = (betAmount * 1.931).toFixed(2); // Calculation for winning amount

  return (
    <div
      className={`p-4 h-full rounded-lg bg-gray-800 absolute shadow-lg text-white  inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Donald Trump"
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="font-bold">Donald Trump</span>
        </div>
        <button className="text-gray-300 hover:text-gray-100" onClick={onClose}>
          <FaTimes />
        </button>
      </div>

      {/* Betting Input */}
      <div className="flex items-center mb-4 bg-gray-800 p-2 rounded-lg gap-2">
        <div className="flex flex-1">
          <input
            type="text"
            className="bg-transparent text-white text-xl font-semibold w-full outline-none"
            value={`$${betAmount}`}
            readOnly
          />
          <div className="flex space-x-2 ml-4">
            <button
              onClick={() => setBetAmount(betAmount + 1)}
              className="bg-gray-600 text-white px-2 py-1 rounded-lg hover:bg-gray-500 transition"
            >
              +1
            </button>
            <button
              onClick={() => setBetAmount(betAmount + 10)}
              className="bg-gray-600 text-white px-2 py-1 rounded-lg hover:bg-gray-500 transition"
            >
              +10
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between flex-1">
          <input
            type="range"
            min="1"
            max="100"
            value={betAmount}
            onChange={(e) => setBetAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Slider */}

      {/* Bet Button */}
      <button className="w-full bg-green-800 text-center py-2 rounded-lg text-lg font-bold hover:bg-green-400 transition">
        Bet Yes
        <p className="text-sm mt-1">To win ${winAmount}</p>
      </button>
    </div>
  );
};

export default BetAmount;
