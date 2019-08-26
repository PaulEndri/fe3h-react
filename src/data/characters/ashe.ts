import { ICharacter } from "../../interfaces/iCharacter";

export const Ashe: ICharacter = {
    firstName: "Ashe",
    alliance: "Blue Lions",
    name: "Ashe Ubert",
    birthday: "10/17",
    crest: "None",
    skill: {
        name: "Lance",
        value: "C"
    },
    stat: {
        name: "CHA",
        value: 15
    },
    flower: ["Violet"],
    tea: ["Mint Leaves", "Angelica Tea"],
    gift: ["Ancient Coin", "Exotic Spices", "Legends of Chivalry", "Tasty Baked Treat"],
    lostItems: ["Bundle of Herbs", "Evil Repelling Amulet", "Moon Knight’s Tale"],
    trainings: [],
    lectures: [
        {
            question:
                "I’m...kind of terrified to walk the monastery grounds at night. It’s unnerving how dark and quiet the place gets! How can I conquer my fear?",
            answer: "Think of it as training for night marches."
        },
        {
            question:
                "I haven’t been able to see my brother and sister lately, so I’m sending them gifts instead. My brother’s not one to ask for anything, though. I don’t know what to give him?",
            answer: "Maybe you should send him some books."
        }
    ],
    skillProficiencies: ["Axe", "Bow"],
    skillWeaknesses: ["Reason"],
    hiddenTalents: ["Lance"],
    growthRates: {
        HP: 35,
        STR: 35,
        MAG: 25,
        DEX: 55,
        SPD: 50,
        LCK: 40,
        DEF: 20,
        RES: 35,
        CHA: 25
    },
    maxStats: {
        HP: 68,
        STR: 51,
        MAG: 36,
        DEX: 76,
        SPD: 71,
        LCK: 56,
        DEF: 43,
        RES: 49,
        CHA: 36
    },
    baseStats: {
        HP: 23,
        STR: 8,
        MAG: 5,
        DEX: 8,
        SPD: 9,
        LCK: 6,
        DEF: 5,
        RES: 6,
        CHA: 5
    }
};
