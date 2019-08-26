import { ICharacter } from "../../interfaces/iCharacter";

export const Caspar: ICharacter = {
    firstName: "Caspar",
    alliance: "Black Eagles",
    name: "Caspar von Bergliez",
    birthday: "7/1",
    tea: ["Ginger Tea"],
    crest: "None",
    skill: {
        name: "Brawling",
        value: "C"
    },
    stat: {
        name: "STR",
        value: 10
    },
    flower: [],
    gift: ["Smoked Meat", "Training Weight", "Whetstone"],
    lostItems: ["Grounding Charm", "Tattered Overcoat", "Thunderbrand Replica"],
    trainings: [],
    lectures: [
        {
            question:
                "Pretty soon I’ll have eaten everything they have to offer in the dining hall. Then what am I supposed to do? Keep eating the same boring meals over and over again?",
            answer: "You should just enjoy what you’ve got."
        },
        {
            question:
                "Hey, Professor! I think I’m ready… I think it’s time you finally gave me a nickname! What’s a guy gotta do to earn one?",
            answer: "You actually have one, but it’s too scary to say out loud."
        }
    ],
    skillProficiencies: ["Axe", "Brawling"],
    skillWeaknesses: ["Bow", "Reason", "Authority"],
    hiddenTalents: [],
    growthRates: {
        HP: 55,
        STR: 45,
        MAG: 25,
        DEX: 45,
        SPD: 45,
        LCK: 40,
        DEF: 30,
        RES: 20,
        CHA: 25
    },
    maxStats: {
        HP: 97,
        STR: 65,
        MAG: 41,
        DEX: 61,
        SPD: 62,
        LCK: 58,
        DEF: 51,
        RES: 35,
        CHA: 46
    },
    baseStats: {
        HP: 29,
        STR: 9,
        MAG: 3,
        DEX: 5,
        SPD: 6,
        LCK: 8,
        DEF: 6,
        RES: 2,
        CHA: 4
    }
};
