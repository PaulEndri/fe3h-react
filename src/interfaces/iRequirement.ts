import { Skill } from "../types/skill";
import { Stat } from "../types/stat";

export interface IRequirement {
    name: Skill | Stat;
    value: number | string;
}

export default IRequirement;
