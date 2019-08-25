import { IHouse } from "../../interfaces/iHouse";
import { Edelgard } from "../characters/edelgard";
import { Ferdinand } from "../characters/ferdinand";
import { Bernadetta } from "../characters/bernadetta";
import { Dorothea } from "../characters/dorothea";
import { Caspar } from "../characters/caspar";
import { Hubert } from "../characters/hubert";
import { Linhardt } from "../characters/linhardt";
import { Petra } from "../characters/petra";
import BlackEaglesBanner from "./blackEaglesBanner.png";

export const BlackEagles: IHouse = {
    name: "Black Eagles",
    stub: "blackEagles",
    color: "red",
    leader: Edelgard,
    students: [Edelgard, Ferdinand, Bernadetta, Dorothea, Caspar, Hubert, Linhardt, Petra],
    banner: BlackEaglesBanner,
    motto: "Adrestian Empire"
};
