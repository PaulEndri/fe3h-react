import { ICharacter } from "../../interfaces/iCharacter";

export const Dimitri: ICharacter = {
    firstName: "Dimitri",
    alliance: "Blue Lions",
    name: "Dimitri Alexandre Blaiddyd",
    birthday: "12/20",
    skill: null,
    stat: null,
    flower: [],
    tea: ["Chamomile"],
    crest: "Blaiddyd",
    gift: ["Whetstone", "Training Weight", "Riding Boots", "Ceremonial Sword"],
    lostItems: ["Black Leather Gloves", "Dulled Longsword", "Training Logbook"],
    trainings: [],
    lectures: [
        {
            question:
                "No matter the weapon, it cannot be wielded properly without ample strength and stamina, regardless of the skills one may possess. I’ve been using various training techniques, but lately I feel like they all are lacking…",
            answer: "Try focusing on one skill at a time, at least for a while."
        },
        {
            question:
                "Those from northern Faerghus are used to the frigid cold. Although Garreg Mach is located atop a mountain, the summer heat can be quite unbearable for soldiers from the north. What can I do to boost their morale?",
            answer: "Cooling off in a nearby river is always a good option."
        }
    ],
    skillProficiencies: ["Sword", "Lance", "Authority"],
    skillWeaknesses: ["Axe", "Reason"],
    hiddenTalents: ["Riding"],
    growthRates: {
        HP: 55,
        STR: 60,
        MAG: 20,
        DEX: 50,
        SPD: 50,
        LCK: 25,
        DEF: 40,
        RES: 20,
        CHA: 55
    },
    maxStats: {
        HP: 99,
        STR: 87,
        MAG: 38,
        DEX: 69,
        SPD: 69,
        LCK: 42,
        DEF: 57,
        RES: 36,
        CHA: 77
    },
    baseStats: {
        HP: 28,
        STR: 12,
        MAG: 4,
        DEX: 7,
        SPD: 7,
        LCK: 5,
        DEF: 7,
        RES: 4,
        CHA: 9
    },
    teaTimeTopics: [
        "A new gambit…",
        "I’m counting on you…",
        "Tell me about yourself…",
        "A place you’d like to visit…",
        "Mighty weapons…",
        "Thanks for everything…",
        "A strong battalion…",
        "Monastery rules…",
        "The ideal professor…",
        "A word of advice…",
        "Monastery security…",
        "The last battle…",
        "Books you’ve read recently…",
        "Our first meeting…",
        "The library’s collection…",
        "Children at the market…",
        "Overcoming weaknesses…",
        "The view from the bridge…",
        "Close calls…",
        "Past laughs…",
        "Things that bother you…",
        "Cooking mishaps…",
        "Potential training partners…",
        "Working hours for guards…",
        "Equipment upkeep…",
        "Reliable allies…",
        "Working together…",
        "Evaluating allies…",
        "School days…",
        "You seem well…",
        "Exploring the monastery…",
        "Someone you look up to…",
        "You’re doing great work…",
        "Fodlan’s future…",
        "Sturdy weapons…",
        "Your ambitions…"
    ],
    teaTimeComments: [
        {
            comment: "Please join me for training when you have the time. There is much I could learn from you.",
            answers: ["Nod", "Disagree", "Blush"]
        },
        {
            comment: "I cannot tell you how long it has been since I indulged in a nice, relaxing conversation…",
            answers: ["Laugh", "Sip tea"]
        },
        {
            comment: "I apologize for troubling you. I am grateful for your support.",
            answers: ["Nod", "Blush"]
        },
        {
            comment:
                "Perhaps because of my strength, I have always been rather clumsy. I always end up breaking things that are precious…",
            answers: ["Praise", "Chat"]
        },
        {
            comment:
                "When I feel down, I go out for a long ride on my own. There is no place more relaxing than a trusted steed’s back.",
            answers: ["Nod"]
        },
        {
            comment:
                "I do my training, and then care for my swords and spears…and then the day is over before I know it.",
            answers: ["Nod", "Laugh"]
        },
        {
            comment:
                "You really helped me. More than I can say. If it weren’t for you, I do not know where I would be now…",
            answers: ["Disagree", "Praise", "Blush"]
        },
        {
            comment: "I would invite you to my quarters next, but I fear my space is so bare it is almost laughable.",
            answers: ["Disagree", "Laugh"]
        },
        {
            comment: "These last five years, I have been many places, and I have seen many things.",
            answers: ["Chat", "Praise"]
        }
    ]
};
