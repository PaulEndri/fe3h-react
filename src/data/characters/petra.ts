import { ICharacter } from "../../interfaces/iCharacter";

export const Petra: ICharacter = {
    firstName: "Petra",
    alliance: "Black Eagles",
    name: "Petra Macneary",
    birthday: "9/7",
    skill: {
        name: "Riding",
        value: "C"
    },
    stat: {
        name: "DEX",
        value: 10
    },
    flower: ["Sunflower"],
    tea: ["Four-Spice Blend", "Ginger Tea"],
    crest: "None",
    gift: ["Exotic Spices", "Hunting Dagger", "Smoked Meat"],
    lostItems: ["Annotated Dictionary", "Exotic Feather", "Small Tan Hide"],
    trainings: [],
    lectures: [
        {
            question:
                "I am having a question. I wish for improvement of my lance skills. But I am having uncertainty about how to be training effectively. What should I be doing?",
            answer: "Try studying the movements of others for improvement."
        },
        {
            question:
                "As I am fighting more, my arrows are decreasing in quality. They are not flying as far and have less accuracy. What can I be doing differently?",
            answer:
                "New bowstrings could help you shoot with more force.New bowstrings could help you shoot with more force."
        }
    ],
    skillProficiencies: ["Sword", "Axe", "Bow", "Flying"],
    skillWeaknesses: ["Reason", "Faith"],
    hiddenTalents: [],
    growthRates: {
        HP: 83,
        STR: 59,
        MAG: 36,
        DEX: 69,
        SPD: 85,
        LCK: 63,
        DEF: 42,
        RES: 35,
        CHA: 63
    },
    maxStats: {
        HP: 83,
        STR: 59,
        MAG: 36,
        DEX: 69,
        SPD: 85,
        LCK: 63,
        DEF: 42,
        RES: 35,
        CHA: 63
    },
    baseStats: {
        HP: 25,
        STR: 9,
        MAG: 3,
        DEX: 7,
        SPD: 10,
        LCK: 7,
        DEF: 5,
        RES: 2,
        CHA: 6
    }
};
