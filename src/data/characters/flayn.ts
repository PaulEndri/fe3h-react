import { ICharacter } from "../../interfaces/iCharacter";

export const Flayn: ICharacter = {
    firstName: "Flayn",
    alliance: "Church of Seiros",
    name: "Flayn",
    birthday: "7/12",
    skill: null,
    stat: null,
    flower: ["Forget-me-nots"],
    gift: ["Armored Bear Stuffy", "Dapper Handkerchief", "Stylish Hair Clip", "Tasty Baked Treat"],
    lostItems: ["Antique Clasp", "Dusty Book of Fables", "Old Map of Enbarr"],
    tea: ["Sweet-Apple Blend", "Crescent-Moon Tea", "Almond Blend"],
    crest: "Cethleann",
    trainings: [],
    lectures: [
        {
            question:
                "I want to be able to talk to males and make friends with them, but my brother always causes such a fuss when I do. Do you have any advice for me?",
            answer: "You should have an honest talk with your brother."
        }
    ],
    skillProficiencies: ["Lance", "Faith"],
    skillWeaknesses: ["Riding"],
    hiddenTalents: ["Reason"],
    growthRates: {
        HP: 25,
        STR: 25,
        MAG: 55,
        DEX: 45,
        SPD: 35,
        LCK: 15,
        DEF: 25,
        RES: 50,
        CHA: 45
    },
    maxStats: {
        HP: 56,
        STR: 37,
        MAG: 77,
        DEX: 62,
        SPD: 48,
        LCK: 46,
        DEF: 36,
        RES: 72,
        CHA: 65
    },
    baseStats: {
        HP: 24,
        STR: 6,
        MAG: 9,
        DEX: 6,
        SPD: 5,
        LCK: 4,
        DEF: 5,
        RES: 10,
        CHA: 9
    }
};
