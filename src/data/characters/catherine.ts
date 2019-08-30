import { ICharacter } from "../../interfaces/iCharacter";

export const Catherine: ICharacter = {
    firstName: "Catherine",
    alliance: "Church of Seiros",
    name: "Catherine",
    birthday: "9/15",
    skill: null,
    stat: {
        name: "Level",
        value: 15
    },
    flower: [],
    crest: "Charon",
    tea: ["Rose Petal Blend"],
    gift: ["Blue Cheese", "Legends of Chivalry", "Training Weight", "Whetstone"],
    lostItems: ["Badge Of Graduation", "Letter To Rhea", "Weathered Cloak"],
    trainings: ["Sword", "Brawl"],
    lectures: [
        {
            question:
                "One of your students keeps challenging me to fight him, but he has no idea how to wield a sword. It's a waste of time for both of us. What am I supposed to do?",
            answer: "Drop a hint that he needs a new training partner."
        },
        {
            question:
                "I have a tactical question, Professor. Let’s say you’re leading an army and the enemy, whose forces greatly outnumber your own, has you surrounded. What would you do in that situation?",
            answer: "Push forward. Punch a hold in their formation."
        }
    ],
    skillProficiencies: ["Sword", "Brawling"],
    skillWeaknesses: ["Reason"],
    hiddenTalents: [],
    growthRates: {
        HP: 50,
        STR: 50,
        MAG: 25,
        DEX: 40,
        SPD: 55,
        LCK: 30,
        DEF: 30,
        RES: 20,
        CHA: 25
    },
    maxStats: {
        HP: 92,
        STR: 70,
        MAG: 36,
        DEX: 56,
        SPD: 75,
        LCK: 43,
        DEF: 42,
        RES: 37,
        CHA: 35
    },
    baseStats: {
        HP: 27,
        STR: 8,
        MAG: 5,
        DEX: 6,
        SPD: 7,
        LCK: 6,
        DEF: 5,
        RES: 2,
        CHA: 4
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gardening mishaps…",
        "Strange fish in the pond…",
        "A new gambit…",
        "Hopes for your future…",
        "Tell me about yourself…",
        "A strong battalion…",
        "I heard some gossip…",
        "Thanks for everything…",
        "A word of advice…",
        "I’m counting on you…",
        "The existence of Crests…",
        "Academy memories…",
        "Likable allies…",
        "The ideal relationship…",
        "Capable comrades…",
        "Mighty weapons…",
        "The last battle…",
        "Classes you might enjoy…",
        "Monastery security…",
        "Working hours for guards…",
        "Close calls…",
        "Our first meeting…",
        "Working together…",
        "Cooking mishaps…",
        "Past laughs…",
        "You seem well…",
        "Equipment upkeep…",
        "Potential training partners…",
        "You’re doing great work…",
        "Evaluating allies…",
        "School days…",
        "Your ambitions…",
        "Exploring the monastery…",
        "Shareable snacks…",
        "Food in the dining hall…",
        "Someone you look up to…"
    ],
    teaTimeComments: [
        {
            comment: "I hear your nickname is “Ashen Demon.” It’s good, but not as good as “Thunder Catherine.”",
            answers: ["Sip tea", "Blush", "Disagree"]
        },
        {
            comment: "I’m always watching you. I guess this is your way of returning the favor.",
            answers: ["Nod", "Sigh"]
        },
        {
            comment: "You know war strategy, not just how to wield a sword. Maybe I should study that too.",
            answers: ["Admonish", "Sip tea"]
        },
        {
            comment: "I’m not going to hurt you. No need to look so nervous.",
            answers: ["Sigh", "Sip tea"]
        },
        {
            comment: "I’m a little restless. I don’t much care for waiting around.",
            answers: ["Disagree", "Chat"]
        },
        {
            comment: "You look calm, as usual. I wonder what you look like when you’re nervous.",
            answers: ["Admonish", "Sip tea", "Blush"]
        },
        {
            comment: "I have zero desire to go back to Faerghus. Can you imagine me as a noble?",
            answers: ["Laugh", "Nod"]
        },
        {
            comment: "We should train together.",
            answers: ["Sip tea", "Laugh"]
        },
        {
            comment: "You and I both have sword Relics. We should spar with them soon.",
            answers: ["Nod", "Commend", "Praise"]
        }
    ]
};
