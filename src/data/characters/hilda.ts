import { ICharacter } from "../../interfaces/iCharacter";

export const Hilda: ICharacter = {
    firstName: "Hilda",
    alliance: "Golden Deer",
    name: "Hilda Valentine Goneril",
    birthday: "2/3",
    skill: {
        name: "Axe",
        value: "C"
    },
    stat: {
        name: "CHA",
        value: 30
    },
    flower: ["Anemone"],
    tea: ["Albinean Berry Blend", "Southern Fruit Blend", "Rose Petal Blend", "Mint Leaves"],
    crest: "Goneril",
    gift: ["Armored Bear Stuffy", "Dapper Handkerchief", "Gemstone Beads", "Stylish Hair Clip"],
    lostItems: ["Handmade Hair Clip", "Spotless Bandage", "Used Bottle of Perfume"],
    trainings: [],
    lectures: [
        {
            question:
                "I hate cleaning my room. It’s so boring, and to be honest, I’m kinda lazy. But I don’t want my room to get messy. Who do you think I should get to tidy up for me?",
            answer: "Ask somebody who’s good at cleaning."
        },
        {
            question:
                "Whenever I visit home, my brother yammers on and on about all the things I'm doing wrong. It's SO exhausting, I wish he'd back off and let me live my life. What do you think I should do?",
            answer: "Yammer back at him! See how he likes it!"
        }
    ],
    skillProficiencies: ["Lance", "Axe"],
    skillWeaknesses: ["Authority", "Faith"],
    hiddenTalents: ["Heavy Armor"],
    growthRates: {
        HP: 50,
        STR: 45,
        MAG: 25,
        DEX: 30,
        SPD: 50,
        LCK: 35,
        DEF: 35,
        RES: 20,
        CHA: 50
    },
    maxStats: {
        HP: 94,
        STR: 66,
        MAG: 36,
        DEX: 42,
        SPD: 70,
        LCK: 49,
        DEF: 49,
        RES: 39,
        CHA: 76
    },
    baseStats: {
        HP: 29,
        STR: 10,
        MAG: 5,
        DEX: 5,
        SPD: 8,
        LCK: 6,
        DEF: 6,
        RES: 3,
        CHA: 7
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gardening mishaps…",
        "School uniforms…",
        "A place you’d like to visit…",
        "Gifts you’d like to receive…",
        "Shareable snacks…",
        "Classes you might enjoy…",
        "Guessing someone’s age…",
        "Tell me about yourself…",
        "Close calls…",
        "Heart-racing memories…",
        "Thanks for everything…",
        "Cute accessories…",
        "Hopes for your future…",
        "The courtyard couple…",
        "Cute monks…",
        "I heard some gossip…",
        "The ideal relationship…",
        "Dining partners…",
        "Likable allies…",
        "The opera…",
        "Dreamy knights…",
        "Our first meeting…",
        "Things that bother you…",
        "Evaluating allies…",
        "Past laughs…",
        "Things you find romantic…",
        "Fashion…",
        "Plans for the future…",
        "You seem different…",
        "Favorite sweets…",
        "Relaxing at the sauna…",
        "You seem well…",
        "First crushes…",
        "Reliable allies…",
        "You’re doing great work…",
        "Food in the dining hall…",
        "School days…"
    ],
    teaTimeComments: [
        {
            comment: "You know? I love hearing myself talk!",
            answers: ["Nod", "Sip tea"]
        },
        {
            comment: "Have you ever cried, Professor? It’s hard to imagine you crying.",
            answers: ["Sip tea", "Praise"]
        },
        {
            comment: "You don’t say much, so you’re easy to talk to.",
            answers: ["Laugh", "Admonish"]
        },
        {
            comment: "My mind keeps drifting today…",
            answers: ["Nod", "Laugh"]
        },
        {
            comment: "No matter what happens in this crazy world, I know I’ll be safe if I stay by your side.",
            answers: ["Nod", "Chat"]
        },
        {
            comment: "Everyone’s so serious all the time. Boooooring.",
            answers: ["Nod", "Laugh"]
        },
        {
            comment: "We should go on a trip together someday, when it’s peaceful.",
            answers: ["Nod", "Laugh", "Blush"]
        },
        {
            comment: "Your room’s so neat! You should clean mine too.",
            answers: ["Nod", "Disagree"]
        },
        {
            comment: "I wish I could stay here and chat all day. Time to go back to the real world though.",
            answers: ["Laugh", "Praise"]
        }
    ]
};
