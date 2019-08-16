
import { ICharacter } from "../types/icharacter";
import { IHouse } from "../types/ihouse";
import houses from "../data/houses";
import { CharacterService } from "./character";

export class HouseService {
    static HOUSES: IHouse[] = houses;
    public house?: IHouse;

    static getHouse(name: string): HouseService|undefined {
        const house = HouseService.HOUSES.find(({stub}: IHouse) => stub.toLowerCase() === name.toLowerCase());

        if (house) {
            return new HouseService(house);
        }

        return;
    }

    constructor(houseData?: IHouse) {
        this.house = houseData;
    }

    getLink() {
        return this.house ? `/house/${this.house.stub.toLowerCase()}` : '';
    }

    getStudent(name: string): CharacterService|undefined {
        if (!this.house) {
            return;
        }

        const student = this.house.students.find(({firstName}: ICharacter) => firstName.toLowerCase() === name.toLowerCase());

        return new CharacterService(student);
    }

    getStudents(): CharacterService[]|undefined {
        if (!this.house) {
            return;
        }

        return this.house.students.map((student) => new CharacterService(student));
    }
}