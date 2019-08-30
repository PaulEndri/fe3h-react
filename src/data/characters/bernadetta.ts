import { ICharacter } from "../../interfaces/iCharacter";

export const Bernadetta: ICharacter = {
    firstName: "Bernadetta",
    alliance: "Black Eagles",
    name: "Bernadetta von Varley",
    birthday: "12/12",
    crest: "Indech",
    tea: ["Albinean Berry Blend", "Honeyed-Fruit Blend"],
    skill: {
        name: "Bow",
        value: "C"
    },
    stat: {
        name: "STR",
        value: 20
    },
    flower: ["Pitcher Plant"],
    gift: ["Armored Bear Stuffy", "Book of Sheet Music", "Dapper Handkerchief", "Landscape Painting", "Watering Can"],
    lostItems: ["Hedgehog Case", "Needle And Thread", "Still-Life Picture"],
    trainings: [],
    lectures: [
        {
            question:
                "Um. Sorry, but you should probably just skip me. I don’t have a question to ask. How would I even think of one?",
            answer: "You just did."
        },
        {
            question:
                "I want to knit an animal doll for someone, but I'm not sure what kind to make. They love eagles, lions, and deer equally! I don't know what to do...",
            answer: "Try using an eagle's head, a lion's body, and a deer's tail."
        }
    ],
    skillProficiencies: ["Lance", "Bow"],
    skillWeaknesses: ["Sword", "Axe", "Brawling", "Heavy Armor"],
    hiddenTalents: ["Riding"],
    growthRates: {
        HP: 35,
        STR: 35,
        MAG: 20,
        DEX: 55,
        SPD: 50,
        LCK: 25,
        DEF: 20,
        RES: 30,
        CHA: 35
    },
    maxStats: {
        HP: 70,
        STR: 51,
        MAG: 40,
        DEX: 75,
        SPD: 69,
        LCK: 41,
        DEF: 41,
        RES: 39,
        CHA: 49
    },
    baseStats: {
        HP: 25,
        STR: 8,
        MAG: 5,
        DEX: 7,
        SPD: 7,
        LCK: 5,
        DEF: 4,
        RES: 2,
        CHA: 6
    },
    teaTimeTopics: [
        "A place you’d like to visit…",
        "I heard some gossip…",
        "Thanks for everything…",
        "A word of advice…",
        "I’m counting on you…",
        "The courtyard couple…",
        "Books you’ve read recently…",
        "Insectivorous plants…",
        "The ideal relationship…",
        "Cats…",
        "Likable allies…",
        "The last battle…",
        "Children at the market…",
        "Our first meeting…",
        "The library’s collection…",
        "Close calls…",
        "Overcoming weaknesses…",
        "The view from the bridge…",
        "Cooking mishaps…",
        "Past laughs…",
        "Things that bother you…",
        "Cute monks…",
        "Perfect recipes…",
        "Things you find romantic…",
        "Exploring the monastery…",
        "Plans for the future…",
        "You seem different…",
        "Fashion…",
        "School days…",
        "You seem well…",
        "Favorite sweets…",
        "School uniforms…",
        "You’re doing great work…",
        "Food in the dining hall…",
        "Shareable snacks…",
        "Gifts you’d like to receive…",
        "Tell me about yourself…"
    ],
    teaTimeComments: [
        {
            comment: "My mother works in the Imperial capital. People there say she’s a genius.",
            answers: ["Laugh", "Commend"]
        },
        {
            comment: "Please don’t eavesdrop on my singing anymore, OK?",
            answers: ["Nod", "Praise"]
        },
        {
            comment: "I was worried you called me here to punish me for something. I’m glad I was wrong.",
            answers: ["Admonish"]
        },
        {
            comment: "If two people decide to be recluses together…does that even still count?",
            answers: ["Laugh", "Chat"]
        },
        {
            comment: "I like to hide out in the greenhouse, but I always have to leave eventually. No place to sleep.",
            answers: ["Nod"]
        },
        {
            comment: "It’s relaxing here! Should’ve brought my sewing kit.",
            answers: ["Nod"]
        },
        {
            comment: "You’re spoiling me. I don’t want to go out on my own anymore.",
            answers: ["Admonish", "Praise"]
        },
        {
            comment: "My room at the monastery is my home away from home, but this is cozy too.",
            answers: ["Disagree", "Laugh", "Admonish"]
        },
        {
            comment: "The room feels a little…empty. Needs more cuteness.",
            answers: ["Laugh", "Admonish"]
        }
    ]
};
