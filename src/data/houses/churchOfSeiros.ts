import { IHouse } from "../../interfaces/iHouse";
import ChurchOfSeirosBanner from "./seirosBanner.png";
import { Rhea } from "../characters/rhea";
import { Cyril } from "../characters/cyril";
import { Seteth } from "../characters/seteth";
import { Flayn } from "../characters/flayn";
import { Gilbert } from "../characters/gilbert";
// import { Jeralt } from '../characters/jeralt';
import { Shamir } from "../characters/shamir";
import { Catherine } from "../characters/catherine";
import { Alois } from "../characters/alois";
import { Hanneman } from "../characters/hanneman";
import { Manuela } from "../characters/manuela";

export const ChurchOfSeiros: IHouse = {
    name: "Church Of Seiros",
    stub: "seiros",
    color: "grey",
    leader: Rhea,
    students: [Hanneman, Manuela, Alois, Cyril, Seteth, Flayn, Gilbert, Shamir, Catherine],
    banner: ChurchOfSeirosBanner,
    motto: "and the Knights of Seiros"
};
