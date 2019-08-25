import { ICharacter } from "../interfaces/iCharacter";
import { ISkillData } from "../interfaces/iSkillData";
import SkillData from "../data/skillData";

export interface IIndexedCharacterList {
    [key: string]: CharacterService;
}

export class CharacterService {
    public character?: ICharacter;

    constructor(character?: ICharacter) {
        this.character = character;
    }

    getThumbnail(): string {
        return this.getImage("thumbnails");
    }

    getPortrait(): string {
        return this.getImage("portraits");
    }

    getLink(stub): string {
        return this.character ? `/house/${stub}/character/${this.character.firstName.toLowerCase()}` : "";
    }

    getHouse(): string {
        if (this.character.alliance.includes("Blue")) {
            return "bluelions";
        } else if (this.character.alliance.includes("Black")) {
            return "blackeagles";
        } else if (this.character.alliance.includes("Golden")) {
            return "goldendeer";
        } else {
            return "seiros";
        }
    }

    isRecruitable(): boolean {
        return this.character.stat ? true : false;
    }

    getPersonalSkill(): ISkillData {
        return SkillData.find(sk => sk.personal === this.character.firstName);
    }

    getHighestGrowths(limit?: number) {
        const organizedGrowths = Object.keys(this.character.growthRates)
            .map(key => [key, this.character.growthRates[key]])
            .sort((a, b) => {
                const aVal = a[1];
                const bVal = b[1];

                if (bVal > aVal) {
                    return 1;
                } else if (bVal < aVal) {
                    return -1;
                } else {
                    return 0;
                }
            });

        if (limit) {
            return organizedGrowths.slice(0, limit);
        }

        return organizedGrowths;
    }

    getLowestGrowths(limit?: number) {
        const organizedGrowths = this.getHighestGrowths().reverse();

        if (limit) {
            return organizedGrowths.slice(0, limit);
        }

        return organizedGrowths;
    }

    getTotalGrowths() {
        return Object.values(this.character.growthRates).reduce((total, current) => total + current, 0);
    }
    private getImage(key: "thumbnails" | "portraits"): string {
        if (!this.character) {
            return "";
        }

        return `${process.env.PUBLIC_URL}/assets/characters/${key}/${this.character.firstName.toLowerCase()}.png`;
    }
}

export default CharacterService;
