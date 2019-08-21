import { Skill } from "../types/skill";
import { IRequirement } from "./iRequirement";

export interface IClass {
    HP: number;
    STR: number;
    MAG: number;
    DEX: number;
    SPD: number;
    LCK: number;
    DEF: number;
    RES: number;
    CHA: number;
    Name: string;
    Gender?: "M" | "F";
    Requirements?: IRequirement[];
    Tier: "unique" | "beginner" | "intermediate" | "advanced" | "master"
}