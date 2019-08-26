import { ICharacter } from "../../interfaces/iCharacter";

export const Gilbert: ICharacter = {
    firstName: "Gilbert",
    alliance: "Church of Seiros",
    name: "Gilbert",
    skill: null,
    stat: null,
    flower: [],
    tea: ["Almond Blend", "Lavender Blend"],
    crest: "None",
    gift: ["Ceremonial Sword", "Fishing Float", "Goddess Statuette"],
    lostItems: ["Carving Hammer", "Noseless Puppet", "Silver Necklace"],
    trainings: ["Lance", "Axe", "Heavy Armor", "Riding"],
    lectures: [],
    skillProficiencies: ["Axe", "Lance", "Heavy Armor", "Riding"],
    skillWeaknesses: [],
    hiddenTalents: [],
    growthRates: {
        HP: 55,
        STR: 45,
        MAG: 20,
        DEX: 45,
        SPD: 30,
        LCK: 15,
        DEF: 45,
        RES: 10,
        CHA: 35
    },
    maxStats: {
        HP: 101,
        STR: 65,
        MAG: 35,
        DEX: 62,
        SPD: 42,
        LCK: 40,
        DEF: 61,
        RES: 35,
        CHA: 49
    },
    baseStats: {
        HP: 30,
        STR: 9,
        MAG: 4,
        DEX: 6,
        SPD: 5,
        LCK: 4,
        DEF: 5,
        RES: 2,
        CHA: 6
    }
};
