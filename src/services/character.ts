import { ICharacter } from "../interfaces/iCharacter";

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
        return this.character ? `/house/${stub}/character/${this.character.firstName.toLowerCase()}` : ''
    }

    private getImage(key: "thumbnails"|"portraits"): string {
        if (!this.character) {
            return '';
        }

        return `${process.env.PUBLIC_URL}/assets/characters/${key}/${this.character.firstName.toLowerCase()}.png`;
    }
}

export default CharacterService;