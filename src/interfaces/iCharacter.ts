import { IGrowthRate } from "./iGrowthRate";
import { Skill } from "../types/skill";
import IRequirement from "./iRequirement";

interface Lecture {
    question: string;
    answer: string;
}

export interface ICharacter {
    name: string;
    alliance?: string;
    firstName: string;
    crest: string;
    birthday?: string;
    skill?: IRequirement;
    stat?: IRequirement;
    flower: string[];
    gift: string[];
    tea: string[];
    lostItems: string[];
    trainings?: string[];
    lectures: Lecture[];
    skillProficiencies: Skill[];
    skillWeaknesses: Skill[];
    hiddenTalents: Skill[];
    growthRates: IGrowthRate;
    maxStats: IGrowthRate;
    baseStats: IGrowthRate;
    teaTimeTopics: string[];
    teaTimeComments: {
        comment: string;
        answers: string[];
    }[];
}
