import { ICharacter } from "../../interfaces/iCharacter";

export const Cyril: ICharacter = {
    firstName: "Cyril",
    alliance: "Church of Seiros",
    name: "Cyril",
    birthday: "10/25",
    skill: null,
    stat: {
        name: "Level",
        value: 10
    },
    flower: ["Baby's Breath"],
    gift: ["Hunting Dagger", "Smoked Meat", "Watering Can"],
    tea: ["Almyran Pine Needles"],
    crest: "None",
    lostItems: ["Old Cleaning Cloth", "Portrait Of Rhea", "Well-Used Hatchet"],
    trainings: [],
    lectures: [
        {
            question:
                "I'm real happy here, but there's somebody who has up and decided to take pity on me. Without asking! It's real darn irritating, and I want them to know it. I just don't know how I can make myself understood.",
            answer: "Show them how happy you are working here."
        },
        {
            question:
                "I don’t think there’s much difference between Almyra and Fodlan. But everyone else seems to think Almyra is so completely different. Why’s that.",
            answer: "It’s prejudice towards unknown places, nothing more."
        }
    ],
    skillProficiencies: ["Axe", "Lance", "Brawling", "Riding", "Flying"],
    skillWeaknesses: ["Reason", "Faith"],
    hiddenTalents: [],
    growthRates: {
        HP: 35,
        STR: 20,
        MAG: 15,
        DEX: 40,
        SPD: 40,
        LCK: 30,
        DEF: 10,
        RES: 10,
        CHA: 15
    },
    maxStats: {
        HP: 85,
        STR: 55,
        MAG: 48,
        DEX: 78,
        SPD: 76,
        LCK: 66,
        DEF: 45,
        RES: 41,
        CHA: 48
    },
    baseStats: {
        HP: 24,
        STR: 7,
        MAG: 4,
        DEX: 6,
        SPD: 6,
        LCK: 6,
        DEF: 5,
        RES: 2,
        CHA: 4
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gifts you’d like to receive…",
        "Tell me about yourself…",
        "Cats…",
        "Guessing someone’s age…",
        "Thanks for everything…",
        "Children at the market…",
        "I heard some gossip…",
        "The view from the bridge…",
        "Classes you might enjoy…",
        "I’m counting on you…",
        "Things that bother you…",
        "Close calls…",
        "Lady Rhea…",
        "Working hours for guards…",
        "Cute monks…",
        "Likable allies…",
        "You seem different…",
        "Equipment upkeep…",
        "Monastery security…",
        "You seem well…",
        "Exploring the monastery…",
        "Overcoming weaknesses…",
        "You’re doing great work…",
        "Favorite sweets…",
        "Perfect recipes…",
        "Your ambitions…",
        "Food in the dining hall…",
        "Shareable snacks…",
        "Gardening mishaps…",
        "Strange fish in the pond…"
    ],
    teaTimeComments: [
        {
            comment: "Lady Rhea sure seems to like you, Professor. I don’t know why…",
            answers: ["Nod", "Sip tea"]
        },
        {
            comment: "If I got kicked out of the monastery, I’d have no other place to go.",
            answers: ["Disagree", "Commend", "Blush"]
        },
        {
            comment: "I like working. Feels real good to be needed.",
            answers: ["Commend", "Praise"]
        },
        {
            comment: "If there’s anything ’bout Lady Rhea you wanna know, I can probably tell ya.",
            answers: ["Nod", "Sip tea"]
        },
        {
            comment: "I’m the best at cleaning. I never miss any smudge or spot or dirt or grime or even…filth.",
            answers: ["Commend"]
        },
        {
            comment: "Even if the goddess really does exist, I wonder if she’d protect Almyrans…",
            answers: ["Disagree", "Chat", "Praise"]
        },
        {
            comment:
                "I think you’re an amazing person, Professor. I mean, Lady Rhea is still the best, but I like ya well enough.",
            answers: ["Nod", "Laugh"]
        },
        {
            comment: "I’m real busy all the time, but talking with you like this gets me excited to do more!",
            answers: ["Laugh", "Blush"]
        },
        {
            comment: "I’m getting sleepy… Busy day and all.",
            answers: ["Nod", "Laugh"]
        }
    ]
};
