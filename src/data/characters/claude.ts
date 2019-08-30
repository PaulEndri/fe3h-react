import { ICharacter } from "../../interfaces/iCharacter";

export const Claude: ICharacter = {
    firstName: "Claude",
    alliance: "Golden Deer",
    name: "Claude von Riegan",
    birthday: "7/24",
    skill: null,
    stat: null,
    flower: [],
    gift: ["Board Game Piece", "Exotic Spices", "Riding Boots"],
    lostItems: ["Leather Bow Sheath", "Mild Stomach Poison", "Board Game Piece"],
    tea: ["Almyran Pine Needles", "Chamomile"],
    crest: "Reigan",
    trainings: [],
    lectures: [
        {
            question:
                "That was a fascinating lecture, but now my brain is fried. I feel like I need a change of pace to reinvigorate me. What do you recommend?",
            answer: "Try going for a stroll around the monastery."
        },
        {
            question:
                "I’ve been thinking it would be nice to throw a big feast for everyone, but we’re lacking in surplus supplies. Do you have any recommendations for cheap yet tasty food?",
            answer: "You should go hunting for what you need in the forest."
        }
    ],
    skillProficiencies: ["Sword", "Bow", "Authority", "Flying", "Riding"],
    skillWeaknesses: ["Lance", "Faith"],
    hiddenTalents: ["Axe"],
    growthRates: {
        HP: 35,
        STR: 40,
        MAG: 25,
        DEX: 60,
        SPD: 55,
        LCK: 45,
        DEF: 30,
        RES: 25,
        CHA: 55
    },
    maxStats: {
        HP: 71,
        STR: 61,
        MAG: 40,
        DEX: 89,
        SPD: 76,
        LCK: 63,
        DEF: 50,
        RES: 42,
        CHA: 76
    },
    baseStats: {
        HP: 26,
        STR: 11,
        MAG: 5,
        DEX: 8,
        SPD: 8,
        LCK: 7,
        DEF: 6,
        RES: 4,
        CHA: 8
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Food in the dining hall…",
        "Plans for the future…",
        "A new gambit…",
        "Gardening mishaps…",
        "Reliable allies…",
        "A place you’d like to visit…",
        "Gifts you’d like to receive…",
        "School days…",
        "A strong battalion…",
        "Guessing someone’s age…",
        "Strange fish in the pond…",
        "A word of advice…",
        "Hopes for your future…",
        "Tell me about yourself…",
        "Books you’ve read recently…",
        "I heard some gossip…",
        "Thanks for everything…",
        "Capable comrades…",
        "I’m counting on you…",
        "The existence of Crests…",
        "Celebrations…",
        "Likable allies…",
        "The ideal professor…",
        "Children at the market…",
        "Mighty weapons…",
        "The last battle…",
        "Classes you might enjoy…",
        "Monastery mysteries…",
        "The library’s collection…",
        "Close calls…",
        "Monastery security…",
        "Things that bother you…",
        "Equipment upkeep…",
        "Our first meeting…",
        "Working together…",
        "Evaluating allies…",
        "Overcoming weaknesses…",
        "You seem different…",
        "Exploring the monastery…",
        "Past laughs…",
        "You seem well…",
        "Fodlan’s future…",
        "Perfect recipes…",
        "Your ambitions…"
    ],
    teaTimeComments: [
        {
            comment: "You’re such a mystery.",
            answers: ["Disagree"]
        },
        {
            comment: "I want to know more about you.",
            answers: ["Nod"]
        },
        {
            comment: "Do you really have time for this? I know how busy you are…",
            answers: ["Disagree", "Sip tea"]
        },
        {
            comment: "I feel like we’ve known each other for a while, and yet, I’m still fascinated by you.",
            answers: ["Laugh", "Blush"]
        },
        {
            comment: "You’re not like the others. You’re an outsider, just like me.",
            answers: ["Nod", "Chat"]
        },
        {
            comment: "There are too many mysteries in this world. I wonder how many we can solve in our lifetime…",
            answers: ["Nod", "Praise"]
        },
        {
            comment:
                "I’ll take you to my hometown one day. There are some truly tasty dishes you can’t find in Fodlan.",
            answers: ["Laugh", "Nod"]
        },
        {
            comment:
                "By the way, they’ve discovered a new kind of poison mushroom. When you eat it, your body exudes a mysterious steam! Um, or so I hear…",
            answers: ["Commend", "Laugh"]
        },
        {
            comment: "You’ve become quite expressive, haven’t you? You weren’t like that when we first met.",
            answers: ["Nod", "Blush", "Laugh"]
        }
    ]
};
