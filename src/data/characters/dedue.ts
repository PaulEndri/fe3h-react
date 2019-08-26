import { ICharacter } from "../../interfaces/iCharacter";

export const Dedue: ICharacter = {
    firstName: "Dedue",
    alliance: "Blue Lions",
    name: "Dedue Molinaro",
    birthday: "8/31",
    skill: null,
    stat: null,
    flower: [],
    tea: ["Cinnamon Blend", "Four-Spice Blend", "Ginger Tea"],
    crest: "None",
    gift: ["Floral Adornment", "Watering Can", "Exotic Spices"],
    lostItems: ["Cooking Pot", "Gardening Shears", "Gold Earring"],
    trainings: [],
    lectures: [
        {
            question:
                "Though I have served His Highness for four years, he has eluded my every attempt to learn his favorite foods.",
            answer: "Maybe he just likes everything."
        }
    ],
    skillProficiencies: ["Axe", "Brawling", "Lance", "Heavy Armor"],
    skillWeaknesses: ["Riding", "Flying"],
    hiddenTalents: [],
    growthRates: {
        HP: 60,
        STR: 50,
        MAG: 15,
        DEX: 30,
        SPD: 20,
        LCK: 25,
        DEF: 50,
        RES: 10,
        CHA: 30
    },
    maxStats: {
        HP: 108,
        STR: 74,
        MAG: 30,
        DEX: 42,
        SPD: 35,
        LCK: 44,
        DEF: 70,
        RES: 35,
        CHA: 41
    },
    baseStats: {
        HP: 30,
        STR: 12,
        MAG: 2,
        DEX: 5,
        SPD: 7,
        LCK: 5,
        DEF: 8,
        RES: 1,
        CHA: 4
    }
};
