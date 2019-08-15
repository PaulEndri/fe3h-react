import { ICharacter } from "../types/icharacter";

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

    private getImage(key: "thumbnails"|"portraits"): string {
        if (!this.character) {
            return '';
        }

        return `${process.env.PUBLIC_URL}/assets/characters/${key}/${this.character.firstName.toLowerCase()}.png`;
    }
}

export default CharacterService;