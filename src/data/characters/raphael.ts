import { ICharacter } from "../../interfaces/iCharacter";

export const Raphael: ICharacter = {
    firstName: "Raphael",
    alliance: "Golden Deer",
    name: "Raphael Kirsten",
    birthday: "5/19",
    skill: {
        name: "Heavy Armor",
        value: "C"
    },
    stat: {
        name: "STR",
        value: 20
    },
    flower: [],
    gift: ["Smoked Meat", "Tasty Baked Treat", "Training Weight"],
    tea: ["Almond Blend", "Ginger Tea"],
    crest: "None",
    lostItems: ["Big Spoon", "Burlap Sack of Rocks", "Wooden Button"],
    trainings: [],
    lectures: [
        {
            question:
                "I just wanna eat meat and fish, but everyone in the dining hall says I gotta eat vegetables too! I’m never gonna get full on stupid leaves!",
            answer: "Eating vegetable will help your muscles grow."
        },
        {
            question:
                "I had to leave my grandpa in charge of taking care of my little sis while I'm away. I was thinking I should send him something nice to say thanks. Any suggestions?",
            answer: "A tough-looking hat."
        }
    ],
    skillProficiencies: ["Axe", "Brawling", "Heavy Armor"],
    skillWeaknesses: ["Bow", "Reason", "Riding"],
    hiddenTalents: [],
    growthRates: {
        HP: 65,
        STR: 50,
        MAG: 15,
        DEX: 35,
        SPD: 15,
        LCK: 35,
        DEF: 45,
        RES: 10,
        CHA: 25
    },
    maxStats: {
        HP: 114,
        STR: 73,
        MAG: 31,
        DEX: 48,
        SPD: 33,
        LCK: 49,
        DEF: 63,
        RES: 36,
        CHA: 51
    },
    baseStats: {
        HP: 30,
        STR: 11,
        MAG: 3,
        DEX: 5,
        SPD: 6,
        LCK: 6,
        DEF: 7,
        RES: 1,
        CHA: 4
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gardening mishaps…",
        "Strange fish in the pond…",
        "A strong battalion…",
        "Gifts you’d like to receive…",
        "Tell me about yourself…",
        "A word of advice…",
        "I’m counting on you…",
        "Thanks for everything…",
        "Cats…",
        "Muscle growth…",
        "The last battle…",
        "Children at the market…",
        "Overcoming weaknesses…",
        "The opera…",
        "Classes you might enjoy…",
        "Past laughs…",
        "Things that bother you…",
        "Close calls…",
        "Perfect recipes…",
        "Working together…",
        "Cooking mishaps…",
        "Plans for the future…",
        "You seem well…",
        "Dining partners…",
        "Potential training partners…",
        "You’re doing great work…",
        "Dreamy knights…",
        "School days…",
        "Your ambitions…",
        "Favorite sweets…",
        "Shareable snacks…",
        "Food in the dining hall…",
        "Someone you look up to…"
    ],
    teaTimeComments: [
        {
            comment: "I gotta become a proper knight so I can take care of my little sis!",
            answers: ["Commend", "Praise"]
        },
        {
            comment: "No one else comes close to having muscles like me, but that’s not good enough, is it?",
            answers: ["Laugh", "Chat"]
        },
        {
            comment: "Is there anything to eat, Professor? My stomach’s saying it’s snack time!",
            answers: ["Laugh", "Commend", "Admonish"]
        },
        {
            comment: "I can’t miss a single lecture if I wanna become a proper knight!",
            answers: ["Nod", "Praise", "Chat"]
        },
        {
            comment: "My grandpa used to be real strong when he was younger. I obviously take after the guy!",
            answers: ["Commend", "Laugh"]
        },
        {
            comment: "You’re pretty strong for being so shrimpy. You’d be unstoppable if you put on some muscle!",
            answers: ["Laugh", "Blush", "Disagree"]
        },
        {
            comment: "Wanna train together? I can show you some new techniques I thought up!",
            answers: ["Sip tea", "Nod"]
        },
        {
            comment: "I wouldn’t have come here if my parents were still alive. That means I never woulda met you!",
            answers: ["Nod", "Sigh"]
        },
        {
            comment: "You seem tired, Professor. The best cure for sleepiness is sleep!",
            answers: ["Disagree", "Laugh"]
        }
    ]
};
