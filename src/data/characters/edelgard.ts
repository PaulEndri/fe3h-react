import { ICharacter } from "../../interfaces/iCharacter";

export const Edelgard: ICharacter = {
    firstName: "Edelgard",
    alliance: "Black Eagles",
    name: "Edelgard von Hresvelg",
    skill: null,
    stat: null,
    crest: "Seiros",
    flower: ["Carnation"],
    gift: ["Armored Bear Stuffy", "Board Game", "Monarch Studies Book"],
    lostItems: ["Eastern Porcelain", "Time-worn Quill Pen", "White Glove"],
    tea: ["Bergamot"],
    trainings: [],
    lectures: [
        {
            question:
                "When one professor lectures many students, some will inevitably have trouble keeping up, while others will get too far ahead in their studies. I wonder how this problem might be solved…",
            answer: "Perhaps we should make lectures optional."
        },
        {
            question:
                "I know this is highly unlikely, but on the off chance that Rhea surrenders to my terms, what should I do? I would appreciate your thoughts on the matter…",
            answer: "Strip her of her power so she can’t interfere in politics."
        }
    ],
    skillProficiencies: ["Sword", "Axe", "Heavy Armor", "Authority"],
    skillWeaknesses: ["Bow", "Faith"],
    hiddenTalents: ["Reason"],
    growthRates: {
        HP: 40,
        STR: 55,
        MAG: 45,
        DEX: 45,
        SPD: 40,
        LCK: 30,
        DEF: 35,
        RES: 35,
        CHA: 60
    },
    maxStats: {
        HP: 81,
        STR: 81,
        MAG: 72,
        DEX: 61,
        SPD: 57,
        LCK: 42,
        DEF: 61,
        RES: 47,
        CHA: 85
    },
    baseStats: {
        HP: 29,
        STR: 13,
        MAG: 6,
        DEX: 5,
        SPD: 8,
        LCK: 5,
        DEF: 6,
        RES: 4,
        CHA: 10
    }
};
