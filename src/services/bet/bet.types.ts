export type BetCardDto = {
  title: string;
  candidates: Candidate[];
  betAmount: string;
  votes: number;
  comments: number;
};
export type BetCardV2Dto = {
  title: string;
  percentages: number;
  description: string;
  votes: number;
  timeLeft: string;
  betAmount: string;
  category: string;
};

export type Candidate = {
  name: string;
  yesPercentage: number;
};
