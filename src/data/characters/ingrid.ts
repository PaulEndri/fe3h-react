import { ICharacter } from "../../interfaces/iCharacter";

export const Ingrid: ICharacter = {
    firstName: "Ingrid",
    alliance: "Blue Lions",
    name: "Ingrid Brandl Galatea",
    birthday: "1/4",
    skill: {
        name: "Flying",
        value: "D"
    },
    stat: {
        name: "DEX",
        value: 15
    },
    flower: [],
    gift: ["Legends of Chivalry", "Riding Boots", "Smoked Meat"],
    tea: ["Mint Leaves", "Chamomile"],
    crest: "Daphnel",
    lostItems: ["Curry Comb", "Jousting Almanac", "Pegasus Horseshoes"],
    trainings: [],
    lectures: [
        {
            question:
                "Art has never been my forte. Even when I apply myself and sketch a ton, I don’t seem to improve much. I can envision an image so perfectly in head, but turning it into something physical that I feel good about eludes me...",
            answer: "Don’t worry about the end result. Just keep practicing."
        },
        {
            question:
                "Times are hard... My favorite food cart that sold the most amazing grilled delights went under. I don't even know what to live for anymore...",
            answer: "Maybe the cart will open back up if the war ends."
        }
    ],
    skillProficiencies: ["Sword", "Lance", "Riding", "Flying"],
    skillWeaknesses: [],
    hiddenTalents: [],
    growthRates: {
        HP: 40,
        STR: 35,
        MAG: 35,
        DEX: 40,
        SPD: 60,
        LCK: 45,
        DEF: 30,
        RES: 40,
        CHA: 45
    },
    maxStats: {
        HP: 79,
        STR: 51,
        MAG: 49,
        DEX: 56,
        SPD: 83,
        LCK: 62,
        DEF: 51,
        RES: 58,
        CHA: 64
    },
    baseStats: {
        HP: 27,
        STR: 8,
        MAG: 6,
        DEX: 6,
        SPD: 8,
        LCK: 6,
        DEF: 5,
        RES: 8,
        CHA: 8
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Food in the dining hall…",
        "Strange fish in the pond…",
        "A new gambit…",
        "Gifts you’d like to receive…",
        "Tell me about yourself…",
        "A strong battalion…",
        "I’m counting on you…",
        "Thanks for everything…",
        "A word of advice…",
        "Mighty weapons…",
        "The existence of Crests…",
        "Books you’ve read recently…",
        "Monastery rules…",
        "The ideal professor…",
        "Cats…",
        "Monastery security…",
        "The last battle…",
        "Classes you might enjoy…",
        "Our first meeting…",
        "The library’s collection…",
        "Cooking mishaps…",
        "Overcoming weaknesses…",
        "The view from the bridge…",
        "Dreamy knights…",
        "Past laughs…",
        "Things you find romantic…",
        "Equipment upkeep…",
        "Perfect recipes…",
        "Working hours for guards…",
        "Evaluating allies…",
        "Plans for the future…",
        "Working together…",
        "Exploring the monastery…",
        "Potential training partners…",
        "You seem well…",
        "Favorite sweets…",
        "Reliable allies…",
        "You’re doing great work…",
        "First crushes…",
        "School days…",
        "Your ambitions…",
        "Fodlan’s future…",
        "Shareable snacks…",
        "Food for life…",
        "Someone you look up to…"
    ],
    teaTimeComments: [
        {
            comment: "As a child, my father and brother used to yell at me for spending so much time with my horse.",
            answers: ["Laugh", "Admonish"]
        },
        {
            comment: "I’m already thinking of my next meal…",
            answers: ["Laugh"]
        },
        {
            comment: "It’s warm around the monastery and the soil is rich… Honestly, I’m envious.",
            answers: ["Chat", "Praise"]
        },
        {
            comment: "Being here calms my nerves… Oh! But I’ll leave if I’m in your way.",
            answers: ["Disagree", "Blush"]
        },
        {
            comment: "I wonder what your favorite food is. Meat? Veggies? Fish, perhaps? Oh, or maybe sweets…",
            answers: ["Laugh", "Chat"]
        },
        {
            comment: "When did you start sword training? I was five when I began…",
            answers: ["Chat"]
        },
        {
            comment: "When I’m here, I feel like I can forget about fighting, even if just for a moment.",
            answers: ["Laugh", "Praise"]
        },
        {
            comment: "Would you like to have a meal with me? Though…it wasn’t long ago that I ate.",
            answers: ["Admonish", "Laugh"]
        },
        {
            comment: "Speaking with you helps me realize I can’t hesitate in life!",
            answers: ["Disagree", "Blush"]
        }
    ]
};
