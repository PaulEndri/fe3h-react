import { IGrowthRate } from "./igrowthRate";

interface Lecture {
  question: string;
  answer: string;
}

export interface ICharacter {
  name: string;
  alliance?: string;
  firstName: string;
  birthday?: string;
  skill?: string;
  stat?: string;
  flower?: string[];
  gift: string[];
  lostItems: string[];
  trainings?: string[];
  lectures: Lecture[];
  growthRates: IGrowthRate;
}
