import { ICharacter } from "../../interfaces/iCharacter";

export const Hubert: ICharacter = {
    firstName: "Hubert",
    alliance: "Black Eagles",
    birthday: "4/17",
    name: "Hubert von Vestra",
    crest: "None",
    tea: ["Dagda Fruit Blend", "Cinnamon Blend"],
    skill: null,
    stat: null,
    flower: [],
    gift: ["Board Game", "Coffee Beans", "The History of Fodlan"],
    lostItems: ["Folding Razor", "Hresvelg Treatise", "Noxious Handkerchief"],
    trainings: [],
    lectures: [
        {
            question:
                "Such interesting ideas you seem to have, Professor, but tell me this: what would you do if you were given the task of teaching a subject than you yourself did not understand?",
            answer: "I’d take the time to study the subject before teaching it."
        },
        {
            question:
                "The weak-willed care little for how they are governed, but lady Edelgard wishes to open their eyes. How would you achieve this, in her position?",
            answer: "The only way to help them is to educate them."
        }
    ],
    skillProficiencies: ["Bow", "Reason", "Authority"],
    skillWeaknesses: ["Axe", "Faith", "Flying"],
    hiddenTalents: ["Lance"],
    growthRates: {
        HP: 35,
        STR: 30,
        MAG: 55,
        DEX: 45,
        SPD: 45,
        LCK: 35,
        DEF: 25,
        RES: 40,
        CHA: 35
    },
    maxStats: {
        HP: 67,
        STR: 43,
        MAG: 80,
        DEX: 62,
        SPD: 63,
        LCK: 51,
        DEF: 45,
        RES: 57,
        CHA: 49
    },
    baseStats: {
        HP: 22,
        STR: 6,
        MAG: 12,
        DEX: 6,
        SPD: 7,
        LCK: 6,
        DEF: 4,
        RES: 7,
        CHA: 6
    },
    teaTimeTopics: [
        "A new gambit…",
        "Fodlan’s future…",
        "Reliable allies…",
        "A place you’d like to visit…",
        "Guessing someone’s age…",
        "Someone you look up to…",
        "A strong battalion…",
        "I heard some gossip…",
        "Successful plots…",
        "Books you’ve read recently…",
        "I’m counting on you…",
        "The last battle…",
        "Capable comrades…",
        "Mighty weapons…",
        "The library’s collection…",
        "Close calls…",
        "Monastery mysteries…",
        "Working together…",
        "Equipment upkeep…",
        "Monastery rules…",
        "Your ambitions…"
    ],
    teaTimeComments: [
        {
            comment:
                "While I am quite busy, this is not a waste of my time. I’m grateful for the opportunity to observe you.",
            answers: ["Sigh", "Sip Tea"]
        },
        {
            comment: "The head of House Vestra has always been a minister to the emperor.",
            answers: ["Praise", "Commend"]
        },
        {
            comment: "Lady Edelgard has taken a liking to you. She will want to hear all about this.",
            answers: ["Nod", "Disagree"]
        },
        {
            comment: "Most who spend time around me seem to become bored and depressed. Heh. Can’t imagine why.",
            answers: ["Praise", "Admonish", "Disagree"]
        },
        {
            comment: "Sometimes your insights are so keen they seem to border on precognition.",
            answers: ["Disagree", "Sip Tea"]
        },
        {
            comment: "House Vestra is one of few noble houses not to lay claim to any territory.",
            answers: ["Commend", "Chat"]
        },
        {
            comment: "As a humble servant to Her Majesty, I sometimes envy the status she has given you.",
            answers: ["Disagree", "Chat", "Praise"]
        },
        {
            comment: "For choosing to walk this path with Her Majesty, you have my eternal gratitude.",
            answers: ["Nod", "Blush"]
        },
        {
            comment: "Sometimes I like to imagine that you were sent to us by a rival of the goddess to bring her low.",
            answers: ["Blush", "Chat"]
        }
    ]
};
