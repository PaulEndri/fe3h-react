import { Alois } from "./alois";
import { Annette } from "./annette";
import { Ashe } from "./ashe";
import { Bernadetta } from "./bernadetta";
import { Caspar } from "./caspar";
import { Catherine } from "./catherine";
import { Claude } from "./claude";
import { Cyril } from "./cyril";
import { Dedue } from "./dedue";
import { Dimitri } from "./dimitri";
import { Dorothea } from "./dorothea";
import { Edelgard } from "./edelgard";
import { Felix } from "./felix";
import { Ferdinand } from "./ferdinand";
import { Flayn } from "./flayn";
import { Gilbert } from "./gilbert";
import { Hanneman } from "./hanneman";
import { Hilda } from "./hilda";
import { Hubert } from "./hubert";
import { Ingrid } from "./ingrid";
import { Ignatz } from "./ignatz";
import { Leonie } from "./leonie";
import { Linhardt } from "./linhardt";
import { Lorenz } from "./lorenz";
import { Lysithea } from "./lysithea";
import { Manuela } from "./manuela";
import { Marianne } from "./marianne";
import { Mercedes } from "./mercedes";
import { Petra } from "./petra";
import { Raphael } from "./raphael";
import { Seteth } from "./seteth";
import { Shamir } from "./shamir";
import { Sylvain } from "./sylvain";
import CharacterService from "../../services/character";

interface ICharacters {
    [key: string]: CharacterService;
}

const characters = [
    Alois,
    Annette,
    Ashe,
    Bernadetta,
    Caspar,
    Catherine,
    Claude,
    Cyril,
    Dedue,
    Dimitri,
    Dorothea,
    Edelgard,
    Felix,
    Ferdinand,
    Flayn,
    Gilbert,
    Hanneman,
    Hilda,
    Hubert,
    Ingrid,
    Ignatz,
    Leonie,
    Linhardt,
    Lorenz,
    Lysithea,
    Manuela,
    Marianne,
    Mercedes,
    Petra,
    Raphael,
    Seteth,
    Shamir,
    Sylvain
];

const Characters: ICharacters = characters
    .map(c => new CharacterService(c))
    .reduce((total, cs) => {
        total[cs.character.name] = cs;

        return total;
    }, {});

export default Characters;
