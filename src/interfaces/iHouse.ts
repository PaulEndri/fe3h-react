import { ICharacter } from "./iCharacter";

export class IHouse {
    name: string;
    motto: string;
    banner: string;
    stub: string;
    color: "red" | "blue" | "yellow" | "grey";
    leader: ICharacter;
    students: ICharacter[];
}
