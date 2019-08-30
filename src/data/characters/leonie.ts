import { ICharacter } from "../../interfaces/iCharacter";

export const Leonie: ICharacter = {
    firstName: "Leonie",
    alliance: "Golden Deer",
    name: "Leonie Pinelli",
    birthday: "8/21",
    skill: {
        name: "Lance",
        value: "C"
    },
    stat: {
        name: "STR",
        value: 16
    },
    flower: [],
    gift: ["Fishing Float", "Hunting Dagger", "Training Weight"],
    tea: ["Four-Spice Blend", "Angelica Tea"],
    crest: "None",
    lostItems: ["Crude Arrow Heads", "Fur Scarf", "Hand Drawn Map"],
    trainings: [],
    lectures: [
        {
            question:
                "I don’t care about being pretty or anything, but it bothers me that some people don’t even realize I’m a girl.",
            answer: "They’re wrong, pay them no mind"
        },
        {
            question:
                "People call Captain Jeralt the Blade Breaker. I figure, if I want to be a top-tier mercenary like him, I’m going to need a tough-sounding title of my own. Help me out?",
            answer: "The Executioner"
        }
    ],
    skillProficiencies: ["Lance", "Bow", "Riding"],
    skillWeaknesses: [],
    hiddenTalents: [],
    growthRates: {
        HP: 40,
        STR: 40,
        MAG: 20,
        DEX: 55,
        SPD: 60,
        LCK: 40,
        DEF: 40,
        RES: 15,
        CHA: 40
    },
    maxStats: {
        HP: 78,
        STR: 59,
        MAG: 38,
        DEX: 76,
        SPD: 84,
        LCK: 56,
        DEF: 57,
        RES: 36,
        CHA: 57
    },
    baseStats: {
        HP: 26,
        STR: 9,
        MAG: 5,
        DEX: 8,
        SPD: 9,
        LCK: 6,
        DEF: 7,
        RES: 2,
        CHA: 7
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gifts you’d like to receive…",
        "Shareable snacks…",
        "A new gambit…",
        "Hopes for your future…",
        "Someone you look up to…",
        "A place you’d like to visit…",
        "I heard some gossip…",
        "Tell me about yourself…",
        "A strong battalion…",
        "I’m counting on you…",
        "Thanks for everything…",
        "A word of advice…",
        "Jeralt…",
        "The ideal professor…",
        "Books you’ve read recently…",
        "Mighty weapons…",
        "The last battle…",
        "Capable comrades…",
        "Monastery mysteries…",
        "The view from the bridge…",
        "Children at the market…",
        "Monastery security…",
        "Things that bother you…",
        "Classes you might enjoy…",
        "Our first meeting…",
        "Working together…",
        "Close calls…",
        "Overcoming weaknesses…",
        "You seem different…",
        "Equipment upkeep…",
        "Past laughs…",
        "You seem well…",
        "Evaluating allies…",
        "Plans for the future…",
        "You’re doing great work…",
        "Exploring the monastery…",
        "Potential training partners…",
        "Your ambitions…",
        "Fodlan’s future…",
        "Reliable allies…",
        "Food in the dining hall…",
        "School days…"
    ],
    teaTimeComments: [
        {
            comment: "Hope you’ve been keeping up with your training. If you’re not careful, I’ll surpass you.",
            answers: ["Nod", "Commend"]
        },
        {
            comment: "I don’t care what you think of me. I just don’t want to lose to you.",
            answers: ["Commend", "Admonish"]
        },
        {
            comment: "Don’t throw away anything that’s still usable, OK? I’ll take whatever you don’t need.",
            answers: ["Nod", "Commend"]
        },
        {
            comment: "Back home, I always trained alone. No one else in my village wanted to be a mercenary.",
            answers: ["Nod", "Sigh", "Praise"]
        },
        {
            comment: "I’m proud to be the greatest apprentice to the best mercenary in Fodlan. That keeps me going.",
            answers: ["Nod", "Praise"]
        },
        {
            comment: "I feel bad acting out so much around you. Seems like I just can’t help it.",
            answers: ["Disagree", "Laugh", "Chat"]
        },
        {
            comment: "I’ll always be here for you. Just like I promised Captain Jeralt.",
            answers: ["Nod", "Laugh"]
        },
        {
            comment: "Don’t worry about what I owe to my village. I don’t live this frugally for nothing.",
            answers: ["Nod", "Commend", "Praise"]
        },
        {
            comment:
                "People always seem to be talking about romance, but…honestly, I’m just not interested in that stuff.",
            answers: ["Commend", "Praise", "Chat"]
        }
    ]
};
