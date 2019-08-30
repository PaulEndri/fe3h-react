import { ICharacter } from "../../interfaces/iCharacter";

export const Flayn: ICharacter = {
    firstName: "Flayn",
    alliance: "Church of Seiros",
    name: "Flayn",
    birthday: "7/12",
    skill: null,
    stat: null,
    flower: ["Forget-me-nots"],
    gift: ["Armored Bear Stuffy", "Dapper Handkerchief", "Stylish Hair Clip", "Tasty Baked Treat"],
    lostItems: ["Antique Clasp", "Dusty Book of Fables", "Old Map of Enbarr"],
    tea: ["Sweet-Apple Blend", "Crescent-Moon Tea", "Almond Blend"],
    crest: "Cethleann",
    trainings: [],
    lectures: [
        {
            question:
                "I want to be able to talk to males and make friends with them, but my brother always causes such a fuss when I do. Do you have any advice for me?",
            answer: "You should have an honest talk with your brother."
        }
    ],
    skillProficiencies: ["Lance", "Faith"],
    skillWeaknesses: ["Riding"],
    hiddenTalents: ["Reason"],
    growthRates: {
        HP: 25,
        STR: 25,
        MAG: 55,
        DEX: 45,
        SPD: 35,
        LCK: 15,
        DEF: 25,
        RES: 50,
        CHA: 45
    },
    maxStats: {
        HP: 56,
        STR: 37,
        MAG: 77,
        DEX: 62,
        SPD: 48,
        LCK: 46,
        DEF: 36,
        RES: 72,
        CHA: 65
    },
    baseStats: {
        HP: 24,
        STR: 6,
        MAG: 9,
        DEX: 6,
        SPD: 5,
        LCK: 4,
        DEF: 5,
        RES: 10,
        CHA: 9
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gifts you’d like to receive…",
        "Tell me about yourself…",
        "A word of advice…",
        "Guessing someone’s age…",
        "Thanks for everything…",
        "Books you’ve read recently…",
        "Heart-racing memories…",
        "The courtyard couple…",
        "Cats…",
        "Hopes for your future…",
        "The ideal professor…",
        "Children at the market…",
        "I heard some gossip…",
        "The ideal relationship…",
        "Close calls…",
        "I’m counting on you…",
        "The library’s collection…",
        "Cooking mishaps…",
        "Likable allies…",
        "The opera…",
        "Cute monks…",
        "Our first meeting…",
        "The view from the bridge…",
        "Dining partners…",
        "Past laughs…",
        "Things that bother you…",
        "Dreamy knights…",
        "Perfect recipes…",
        "Things you find romantic…",
        "Favorite sweets…",
        "Plans for the future…",
        "Working together…",
        "First crushes…",
        "Potential training partners…",
        "You seem well…",
        "Fish and the sea…",
        "School days…",
        "You’re doing great work…",
        "Fodlan’s future…",
        "Shareable snacks…",
        "Gardening mishaps…",
        "Strange fish in the pond…"
    ],
    teaTimeComments: [
        {
            comment:
                "Lively places are my favorite. I like the monastery because there are always so many people bustling about.",
            answers: ["Nod"]
        },
        {
            comment: "I desire to see the ocean again–it is difficult being so far away from it",
            answers: ["Nod", "Chat"]
        },
        {
            comment: "You are an interesting person, Professor. You do not seem to know much about yourself.",
            answers: ["Nod", "Disagree"]
        },
        {
            comment:
                "Have you any idea how many types of fish there are? It is unthinkable–their different sizes, shapes, colors… I find it fascinating!",
            answers: ["Commend"]
        },
        {
            comment: "Whenever I look at you, a wave of nostalgia washes over me. I wonder why that is.",
            answers: ["Laugh", "Sip tea"]
        },
        {
            comment:
                "I have a fear of sleeping. I worry that I will awake, and everyone I know and love will have vanished.",
            answers: ["Disagree", "Praise"]
        },
        {
            comment: "I was born in Enbarr, though I have lived in remote lands far away, at times…",
            answers: ["Nod"]
        },
        {
            comment: "You and I are of a rare breed. We should take care of each other.",
            answers: ["Nod"]
        },
        {
            comment: "Even if I fall asleep, please do not leave my side. Promise you will stay near.",
            answers: ["Nod", "Laugh", "Blush"]
        }
    ]
};
