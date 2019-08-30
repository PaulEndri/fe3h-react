import { ICharacter } from "../../interfaces/iCharacter";

export const Gilbert: ICharacter = {
    firstName: "Gilbert",
    alliance: "Church of Seiros",
    name: "Gilbert",
    skill: null,
    stat: null,
    flower: [],
    tea: ["Almond Blend", "Lavender Blend"],
    crest: "None",
    gift: ["Ceremonial Sword", "Fishing Float", "Goddess Statuette"],
    lostItems: ["Carving Hammer", "Noseless Puppet", "Silver Necklace"],
    trainings: ["Lance", "Axe", "Heavy Armor", "Riding"],
    lectures: [],
    skillProficiencies: ["Axe", "Lance", "Heavy Armor", "Riding"],
    skillWeaknesses: [],
    hiddenTalents: [],
    growthRates: {
        HP: 55,
        STR: 45,
        MAG: 20,
        DEX: 45,
        SPD: 30,
        LCK: 15,
        DEF: 45,
        RES: 10,
        CHA: 35
    },
    maxStats: {
        HP: 101,
        STR: 65,
        MAG: 35,
        DEX: 62,
        SPD: 42,
        LCK: 40,
        DEF: 61,
        RES: 35,
        CHA: 49
    },
    baseStats: {
        HP: 30,
        STR: 9,
        MAG: 4,
        DEX: 6,
        SPD: 5,
        LCK: 4,
        DEF: 5,
        RES: 2,
        CHA: 6
    },
    teaTimeTopics: [
        "A new gambit…",
        "Fodlan’s future…",
        "Someone you look up to…",
        "A place you’d like to visit…",
        "I’m counting on you…",
        "Strange fish in the pond…",
        "A strong battalion…",
        "Mighty weapons…",
        "Thanks for everything…",
        "A word of advice…",
        "Monastery rules…",
        "The ideal professor…",
        "Books you’ve read recently…",
        "Monastery security…",
        "The last battle…",
        "Capable comrades…",
        "Overcoming weaknesses…",
        "The library’s collection…",
        "Children at the market…",
        "Perfect recipes…",
        "Wood carving…",
        "Equipment upkeep…",
        "Potential training partners…",
        "Working hours for guards…",
        "Evaluating allies…",
        "Reliable allies…",
        "Working together…",
        "Favorite sweets…",
        "Shareable snacks…",
        "Your ambitions…"
    ],
    teaTimeComments: [
        {
            comment: "Walking first thing in the morning is a pleasant way to begin your day. Try it sometime.",
            answers: ["Nod"]
        },
        {
            comment: "I enjoy a bit of fishing. I hear you do as well?",
            answers: ["Nod"]
        },
        {
            comment:
                "Spear, sword, archery, martial arts, soldiery… I believe I’ve mastered most things worth mastering.",
            answers: ["Nod"]
        },
        {
            comment: "I’ve served the royal family for decades, and marched through history by their side.",
            answers: ["Nod", "Sigh"]
        },
        {
            comment: "I am an unforgivable sinner. I do not deserve a peaceful life.",
            answers: ["Disagree", "Praise"]
        },
        {
            comment: "No judge, not even the goddess herself, will bring me to justice. Though I deserve it.",
            answers: ["Sigh", "Praise"]
        },
        {
            comment:
                "It’s true that strength alone will not make you powerful. Yet you will not become powerful without it.",
            answers: ["Chat"]
        },
        {
            comment:
                "The Holy Kingdom of Faerghus is the nation of proud knights. I love that country… and miss it deeply.",
            answers: ["Nod"]
        },
        {
            comment: "I am sorry, but relaxing is…not a skill I possess.",
            answers: ["Laugh", "Praise"]
        }
    ]
};
