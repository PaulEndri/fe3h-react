import { ICharacter } from "../../interfaces/iCharacter";

export const Felix: ICharacter = {
    firstName: "Felix",
    alliance: "Blue Lions",
    name: "Felix Hugo Fraldarius",
    birthday: "2/20",
    skill: {
        name: "Sword",
        value: "C"
    },
    stat: {
        name: "SPD",
        value: 15
    },
    flower: [],
    tea: ["Almyran Pine Needles", "Four-Spice Blend"],
    crest: "None",
    gift: ["Ceremonial Sword", "Hunting Dagger", "Smoked Meat", "Training Weight"],
    lostItems: ["Black Iron Spur", "Sword Belt Fragment", "Toothed Dagger"],
    trainings: [],
    lectures: [
        {
            question:
                "Magic is not my forte. Being a gifted swordsman, I think my time is best served practicing swordplay technique. Why should I waste my time attending lectures, just to improve my magic skills from mediocre to average?",
            answer: "Knowing magic will make you a stronger swordsman."
        },
        {
            question:
                "I’ve had this sword for a long time. It is as much a part of me as the hand that holds it. But a good swordsmith could craft a weapon that’s more effective and durable. Should I stick with my old, familiar sword, or acquire a better one?",
            answer: "Get the new weapon. Give yourself time to train with it."
        }
    ],
    skillProficiencies: ["Sword", "Bow", "Brawling"],
    skillWeaknesses: ["Reason", "Authority"],
    hiddenTalents: ["Reason"],
    growthRates: {
        HP: 45,
        STR: 55,
        MAG: 30,
        DEX: 45,
        SPD: 55,
        LCK: 40,
        DEF: 30,
        RES: 20,
        CHA: 30
    },
    maxStats: {
        HP: 84,
        STR: 78,
        MAG: 42,
        DEX: 62,
        SPD: 77,
        LCK: 55,
        DEF: 51,
        RES: 35,
        CHA: 42
    },
    baseStats: {
        HP: 26,
        STR: 10,
        MAG: 5,
        DEX: 6,
        SPD: 9,
        LCK: 5,
        DEF: 5,
        RES: 3,
        CHA: 5
    },
    teaTimeTopics: [
        "A new gambit…",
        "Exploring the monastery…",
        "Reliable allies…",
        "A new sword technique…",
        "Food in the dining hall…",
        "Shareable snacks…",
        "A strong battalion…",
        "I’m counting on you…",
        "Someone you look up to…",
        "Capable comrades…",
        "Mighty weapons…",
        "The last battle…",
        "Cats…",
        "Monastery security…",
        "The opera…",
        "Children at the market…",
        "Our first meeting…",
        "Working together…",
        "Classes you might enjoy…",
        "Overcoming weaknesses…",
        "You’re doing great work…",
        "Equipment upkeep…",
        "Plans for the future…",
        "Your ambitions…",
        "Evaluating allies…",
        "Potential training partners…"
    ],
    teaTimeComments: [
        {
            comment: "Crests, lineage, knighthood… Trifles. Skill and survival are the only things that matter.",
            answers: ["Nod", "Commend", "Chat"]
        },
        {
            comment: "You intrigue me. What made you so strong?",
            answers: ["Chat", "Blush"]
        },
        {
            comment:
                "I’m glad I was born into a family of soldiers. I’ve been wielding a sword for as long as I can remember.",
            answers: ["Commend"]
        },
        {
            comment: "I know it’s important to take a break, but if you rest too long, your muscles wither.",
            answers: ["Nod", "Chat"]
        },
        {
            comment: "Some people like to snack when they take a break. No willpower.",
            answers: ["Nod", "Sip tea"]
        },
        {
            comment: "Spending time with you is…not bad.",
            answers: ["Laugh", "Blush"]
        },
        {
            comment: "Join me for sword training again. I want to know my victory isn’t a fluke.",
            answers: ["Nod", "Commend"]
        },
        {
            comment: "I’m always thinking about wars, but this room feels so peaceful.",
            answers: ["Laugh"]
        },
        {
            comment: "Well…I appreciate all that you do for me.",
            answers: ["Blush", "Laugh"]
        }
    ]
};
