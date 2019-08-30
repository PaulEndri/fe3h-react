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
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Food in the dining hall…",
        "Shareable snacks…",
        "A strong battalion…",
        "Gardening mishaps…",
        "Someone you look up to…",
        "A word of advice…",
        "Gifts you’d like to receive…",
        "Strange fish in the pond…",
        "Capable comrades…",
        "I’m counting on you…",
        "Thanks for everything…",
        "Cooking mishaps…",
        "Monastery security…",
        "The last battle…",
        "Dimitri…",
        "Our first meeting…",
        "Working hours for guards…",
        "Equipment upkeep…",
        "Overcoming weaknesses…",
        "Working together…",
        "Exploring the monastery…",
        "Perfect recipes…",
        "Your ambitions…",
        "Favorite sweets…",
        "Potential training partners…",
        "Fodlan’s future…",
        "Reliable allies…"
    ],
    teaTimeComments: [
        {
            comment: "Was there something you wanted to discuss?",
            answers: ["Nod", "Sip tea", "Blush"]
        },
        {
            comment: "I do not like classrooms. I would rather learn at my own pace.",
            answers: ["Disagree", "Praise"]
        },
        {
            comment: "I am the sword and shield of His Highness. I must constantly work to improve.",
            answers: ["Commend", "Praise"]
        },
        {
            comment: "Should I have brought sweets?",
            answers: ["Disagree", "Nod"]
        },
        {
            comment: "This life was given to me by His Highness. I do not intend to give it to anyone else.",
            answers: ["Commend", "Chat"]
        },
        {
            comment: "The flowers in the greenhouse are in bloom. You should have a look later.",
            answers: ["Nod", "Laugh"]
        },
        {
            comment: "I feel comfortable here.",
            answers: ["Laugh", "Blush"]
        },
        {
            comment: "Next time, you should visit me. I will prepare tea and cake.",
            answers: ["Nod", "Blush"]
        },
        {
            comment: "Long ago, I once held a grudge against the blood of Duscur. Now, I… Well, it is not important.",
            answers: ["Chat", "Praise"]
        }
    ]
};
