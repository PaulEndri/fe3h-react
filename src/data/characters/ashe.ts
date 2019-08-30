import { ICharacter } from "../../interfaces/iCharacter";

export const Ashe: ICharacter = {
    firstName: "Ashe",
    alliance: "Blue Lions",
    name: "Ashe Ubert",
    birthday: "10/17",
    crest: "None",
    skill: {
        name: "Lance",
        value: "C"
    },
    stat: {
        name: "CHA",
        value: 15
    },
    flower: ["Violet"],
    tea: ["Mint Leaves", "Angelica Tea"],
    gift: ["Ancient Coin", "Exotic Spices", "Legends of Chivalry", "Tasty Baked Treat"],
    lostItems: ["Bundle of Herbs", "Evil Repelling Amulet", "Moon Knight’s Tale"],
    trainings: [],
    lectures: [
        {
            question:
                "I’m...kind of terrified to walk the monastery grounds at night. It’s unnerving how dark and quiet the place gets! How can I conquer my fear?",
            answer: "Think of it as training for night marches."
        },
        {
            question:
                "I haven’t been able to see my brother and sister lately, so I’m sending them gifts instead. My brother’s not one to ask for anything, though. I don’t know what to give him?",
            answer: "Maybe you should send him some books."
        }
    ],
    skillProficiencies: ["Axe", "Bow"],
    skillWeaknesses: ["Reason"],
    hiddenTalents: ["Lance"],
    growthRates: {
        HP: 35,
        STR: 35,
        MAG: 25,
        DEX: 55,
        SPD: 50,
        LCK: 40,
        DEF: 20,
        RES: 35,
        CHA: 25
    },
    maxStats: {
        HP: 68,
        STR: 51,
        MAG: 36,
        DEX: 76,
        SPD: 71,
        LCK: 56,
        DEF: 43,
        RES: 49,
        CHA: 36
    },
    baseStats: {
        HP: 23,
        STR: 8,
        MAG: 5,
        DEX: 8,
        SPD: 9,
        LCK: 6,
        DEF: 5,
        RES: 6,
        CHA: 5
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gardening mishaps…",
        "Thanks for everything…",
        "A place you’d like to visit…",
        "Gifts you’d like to receive…",
        "The existence of Crests…",
        "A strong battalion…",
        "I’m counting on you…",
        "The ideal professor…",
        "A word of advice…",
        "Monastery security…",
        "The last battle…",
        "Being the perfect knight…",
        "Past laughs…",
        "The library’s collection…",
        "Books you’ve read recently…",
        "Perfect recipes…",
        "Things that bother you…",
        "Cats…",
        "Plans for the future…",
        "Working hours for guards…",
        "Children at the market…",
        "School days…",
        "Working together…",
        "Close calls…",
        "Shareable snacks…",
        "You seem well…",
        "Dreamy knights…",
        "Someone you look up to…",
        "Your ambitions…",
        "Equipment upkeep…",
        "Strange fish in the pond…",
        "Favorite sweets…",
        "Tell me about yourself…"
    ],
    teaTimeComments: [
        {
            comment: "I still have a lot to learn. I need to work harder.",
            answers: ["Disagree", "Praise"]
        },
        {
            comment: "Have you ever seen a ghost? Probably for the best if you haven’t…",
            answers: ["Disagree", "Sip tea"]
        },
        {
            comment: "I’m good with children. I’ve taken care of my younger siblings since I was a kid.",
            answers: ["Commend", "Laugh"]
        },
        {
            comment: "It’s nice in here. I feel like I can relax.",
            answers: ["Laugh", "Sip tea"]
        },
        {
            comment: "The years I had with Lonato…those were some of the best of my life.",
            answers: ["Nod", "Sigh", "Praise"]
        },
        {
            comment: "I’m confident in my speed. No one can outrun me!",
            answers: ["Commend"]
        },
        {
            comment:
                "I get letters from my brother and sister every once in a while. They have it tough, but they’re getting by.",
            answers: ["Laugh", "Praise"]
        },
        {
            comment: "Time flies when I’m with you.",
            answers: ["Nod", "Blush"]
        },
        {
            comment: "A lot’s happened, but none of it’s been in vain. That’s what I believe.",
            answers: ["Nod", "Commend"]
        }
    ]
};
