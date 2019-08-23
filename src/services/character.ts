import { ICharacter } from "../interfaces/iCharacter";
import { ISkillData } from "../interfaces/iSkillData";
import SkillData from "../data/skillData";

export class CharacterService {
    public character? : ICharacter;

    constructor(character?: ICharacter) {
        this.character = character;
    }

    getThumbnail(): string {
        return this.getImage('thumbnails');
    }

    getPortrait(): string {
        return this.getImage('portraits');
    }

    getLink(stub): string {
        return this.character ? `/house/${stub}/character/${this.character.firstName.toLowerCase()}` : '';
    }

    getHouse(): string {
        if (this.character.alliance.includes('Blue')) {
            return 'bluelions';
        } else if (this.character.alliance.includes('Black')) {
            return 'blackeagles';
        } else if (this.character.alliance.includes('Golden')) {
            return 'goldendeer';
        } else {
            return 'seiros';
        }
    }

    isRecruitable(): boolean {
        return this.character.stat ? true : false;
    }

    getPersonalSkill(): ISkillData {
        return SkillData.find((sk) => sk.personal === this.character.firstName)
    }

    private getImage(key: "thumbnails"|"portraits"): string {
        if (!this.character) {
            return '';
        }

        return `${process.env.PUBLIC_URL}/assets/characters/${key}/${this.character.firstName.toLowerCase()}.png`;
    }
}

export default CharacterService;