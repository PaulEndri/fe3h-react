import { ICharacter } from "../../interfaces/iCharacter";

export const Cyril: ICharacter = {
    firstName: "Cyril",
    alliance: "Church of Seiros",
    name: "Cyril",
    birthday: "10/25",
    skill: null,
    stat: {
        name: "Level",
        value: 10
    },
    flower: ["Baby's Breath"],
    gift: ["Hunting Dagger", "Smoked Meat", "Watering Can"],
    tea: ["Almyran Pine Needles"],
    crest: "None",
    lostItems: ["Old Cleaning Cloth", "Portrait Of Rhea", "Well-Used Hatchet"],
    trainings: [],
    lectures: [
        {
            question:
                "I'm real happy here, but there's somebody who has up and decided to take pity on me. Without asking! It's real darn irritating, and I want them to know it. I just don't know how I can make myself understood.",
            answer: "Show them how happy you are working here."
        },
        {
            question:
                "I don’t think there’s much difference between Almyra and Fodlan. But everyone else seems to think Almyra is so completely different. Why’s that.",
            answer: "It’s prejudice towards unknown places, nothing more."
        }
    ],
    skillProficiencies: ["Axe", "Lance", "Brawling", "Riding", "Flying"],
    skillWeaknesses: ["Reason", "Faith"],
    hiddenTalents: [],
    growthRates: {
        HP: 35,
        STR: 20,
        MAG: 15,
        DEX: 40,
        SPD: 40,
        LCK: 30,
        DEF: 10,
        RES: 10,
        CHA: 15
    },
    maxStats: {
        HP: 85,
        STR: 55,
        MAG: 48,
        DEX: 78,
        SPD: 76,
        LCK: 66,
        DEF: 45,
        RES: 41,
        CHA: 48
    },
    baseStats: {
        HP: 24,
        STR: 7,
        MAG: 4,
        DEX: 6,
        SPD: 6,
        LCK: 6,
        DEF: 5,
        RES: 2,
        CHA: 4
    }
};
