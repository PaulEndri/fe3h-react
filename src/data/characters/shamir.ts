import { ICharacter } from "../../interfaces/iCharacter";

export const Shamir: ICharacter = {
    firstName: "Shamir",
    alliance: "Church of Seiros",
    name: "Shamir Nevrand",
    skill: null,
    stat: {
        name: "Level",
        value: 15
    },
    flower: ["Sunflower"],
    tea: ["Crescent-Moon Tea", "Chamomile"],
    crest: "None",
    gift: ["Book of Sheet Music", "Coffee Beans", "Exotic Spices", "Hunting Dagger", "Ancient Coin"],
    lostItems: ["Animal Bone Dice", "Bundle of Dry Hemp", "Centipede Picture"],
    trainings: ["Lance", "Bow"],
    lectures: [
        {
            question:
                "Some people hate spiders or centipedes, but they have no strong feelings towards flies or crickets. Why is that?",
            answer: "They may all be bugs, but they’re such different species."
        },
        {
            question:
                "I prefer to use stealth tactics to assassinate my foes on the battlefield, but you take a different approach. Why is that?",
            answer: "Those tactics don’t give the enemy a chance to surrender."
        }
    ],
    skillProficiencies: ["Lance", "Bow"],
    skillWeaknesses: ["Faith"],
    hiddenTalents: [],
    growthRates: {
        HP: 35,
        STR: 40,
        MAG: 20,
        DEX: 50,
        SPD: 40,
        LCK: 55,
        DEF: 20,
        RES: 15,
        CHA: 30
    },
    maxStats: {
        HP: 71,
        STR: 58,
        MAG: 35,
        DEX: 75,
        SPD: 56,
        LCK: 76,
        DEF: 37,
        RES: 35,
        CHA: 43
    },
    baseStats: {
        HP: 26,
        STR: 8,
        MAG: 42,
        DEX: 7,
        SPD: 6,
        LCK: 8,
        DEF: 5,
        RES: 2,
        CHA: 6
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gifts you’d like to receive…",
        "Strange fish in the pond…",
        "A new gambit…",
        "Hopes for your future…",
        "Survival skills…",
        "A place you’d like to visit…",
        "I heard some gossip…",
        "Tell me about yourself…",
        "A strong battalion…",
        "I’m counting on you…",
        "Thanks for everything…",
        "Capable comrades…",
        "Mighty weapons…",
        "The courtyard couple…",
        "Cats…",
        "Monastery security…",
        "The ideal relationship…",
        "Children at the market…",
        "Overcoming weaknesses…",
        "The last battle…",
        "Classes you might enjoy…",
        "Past laughs…",
        "The view from the bridge…",
        "Close calls…",
        "Plans for the future…",
        "Working together…",
        "Equipment upkeep…",
        "Potential training partners…",
        "You’re doing great work…",
        "Evaluating allies…",
        "Reliable allies…",
        "Your ambitions…",
        "Food in the dining hall…",
        "Shareable snacks…"
    ],
    teaTimeComments: [
        {
            comment: "I’m not much for conversation. I’ll gladly leave if you’re bored.",
            answers: ["Disagree"]
        },
        {
            comment: "Heh. You always have an interesting look on your face.",
            answers: ["Disagree", "Sip tea", "Blush"]
        },
        {
            comment: "The Sword of the Creator… It’s an interesting Relic.",
            answers: ["Nod", "Chat"]
        },
        {
            comment: "As far as mercenaries go, I’d say I work for a fair price.",
            answers: ["Laugh", "Commend"]
        },
        {
            comment: "I enjoy a lack of conversation. But how are you?",
            answers: ["Nod", "Sip tea"]
        },
        {
            comment: "I look forward to the next battle. They seem to go smoothly under your command.",
            answers: ["Nod", "Blush"]
        },
        {
            comment: "I apologize for what I said before. It was tactless to compare you to memories from my past.",
            answers: ["Disagree", "Sigh"]
        },
        {
            comment: "This room… It suits you.",
            answers: ["Nod", "Blush"]
        },
        {
            comment: "Dagda is far. It would take months to travel there by foot…",
            answers: ["Admonish", "Chat", "Praise"]
        }
    ]
};
