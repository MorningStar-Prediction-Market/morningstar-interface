import React from "react";
import BetCard from "./BetCard";
import CategoriesCarousel from "./CategoriesCarousel";
import { BetCardDto, BetCardV2Dto } from "@/services/bet/bet.types";
import BetAmount from "./BetAmount";
import BetCard2 from "./BetCard2";

const dumpBetData: BetCardDto[] = [
  {
    title: "Presidential Election Winner 2024",
    candidates: [
      { name: "Donald Trump", yesPercentage: 51 },
      { name: "Kamala Harris", yesPercentage: 48 },
      { name: "Other Republican Politician", yesPercentage: 1 },
    ],
    betAmount: "$791.4m Bet",
    votes: 56495,
    comments: 43,
  },
  {
    title: "Popular Vote Winner 2024",
    candidates: [
      { name: "Kamala Harris", yesPercentage: 71 },
      { name: "Donald Trump", yesPercentage: 28 },
      { name: "Michelle Obama", yesPercentage: 1 },
      { name: "Kamala Harris", yesPercentage: 71 },
      { name: "Donald Trump", yesPercentage: 28 },
      { name: "Michelle Obama", yesPercentage: 1 },
    ],
    betAmount: "$184.7m Bet",
    votes: 592,
    comments: 98,
  },
  {
    title: "Tipping Point State in 2024 Election?",
    candidates: [
      { name: "Kamala Harris", yesPercentage: 71 },
      { name: "Donald Trump", yesPercentage: 28 },
      { name: "Michelle Obama", yesPercentage: 1 },
      { name: "Kamala Harris", yesPercentage: 71 },
      { name: "Donald Trump", yesPercentage: 28 },
      { name: "Michelle Obama", yesPercentage: 1 },
    ],
    betAmount: "$1.5m Bet",
    votes: 56,
    comments: 31,
  },
];

const dumpBetData2: BetCardV2Dto[] = [
  {
    title: "Presidential Election Winner 2024",
    percentages: 61,
    description: "Will Donald Trump win the 2024 US Presidential Elections?",
    votes: 56495,
    timeLeft: "103d :6h :31m",
    betAmount: "1.5m",
    category: "Global Politics",
  },
  {
    title: "Popular Vote Winner 2024",
    percentages: 61,
    description: "Will Donald Trump win the 2024 US Presidential Elections?",
    votes: 56495,
    timeLeft: "12h",
    betAmount: "1.5m",
    category: "Global Politics",
  },
  {
    title: "Tipping Point State in 2024 Election?",
    percentages: 61,
    description: "Will Donald Trump win the 2024 US Presidential Elections?",
    votes: 56495,
    timeLeft: "103d :6h :31m",
    betAmount: "1.5m",
    category: "Global Politics",
  },
  {
    title: "Presidential Election Winner 2024",
    percentages: 61,
    description: "Will Donald Trump win the 2024 US Presidential Elections?",
    votes: 56495,
    timeLeft: "103d :6h :31m",
    betAmount: "1.5m",
    category: "Global Politics",
  },
  {
    title: "Popular Vote Winner 2024",
    percentages: 61,
    description: "Will Donald Trump win the 2024 US Presidential Elections?",
    votes: 56495,
    timeLeft: "12h",
    betAmount: "1.5m",
    category: "Global Politics",
  },
  {
    title: "Tipping Point State in 2024 Election?",
    percentages: 61,
    description: "Will Donald Trump win the 2024 US Presidential Elections?",
    votes: 56495,
    timeLeft: "103d :6h :31m",
    betAmount: "1.5m",
    category: "Global Politics",
  },
  {
    title: "Presidential Election Winner 2024",
    percentages: 61,
    description: "Will Donald Trump win the 2024 US Presidential Elections?",
    votes: 56495,
    timeLeft: "103d :6h :31m",
    betAmount: "1.5m",
    category: "Global Politics",
  },
  {
    title: "Popular Vote Winner 2024",
    percentages: 61,
    description: "Will Donald Trump win the 2024 US Presidential Elections?",
    votes: 56495,
    timeLeft: "12h",
    betAmount: "1.5m",
    category: "Global Politics",
  },
];

const dumpCategoriesData = [
  "Top",
  "New",
  "Breaking News",
  "US Election",
  "Debate",
  "Middle East",
  "Mention Markets",
  "US Open",
  "Swing States",
  "Monkeypox",
  "Polling",
  "Economy",
  "Trump",
  "Swing States",
  "Monkeypox",
  "Polling",
  "Economy",
  "Trump",
];
const BetDashboard = () => {
  return (
    <div className="py-8 text-white">
      <CategoriesCarousel categories={dumpCategoriesData} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {dumpBetData2.map((card, index) => (
          <BetCard2 key={index} card={card} />
        ))}
      </div>
    </div>
  );
};
export default BetDashboard;
