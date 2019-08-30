import { ICharacter } from "../../interfaces/iCharacter";

export const Ignatz: ICharacter = {
    firstName: "Ignatz",
    alliance: "Golden Deer",
    name: "Ignatz Victor",
    skill: {
        name: "Authority",
        value: "B"
    },
    stat: {
        name: "DEX",
        value: 10
    },
    flower: ["Forget-me-nots"],
    tea: ["Dagda Fruit Blend", "Seiros Tea", "Lavender Blend"],
    crest: "None",
    gift: ["Ancient Coin", "Ceremonial Sword", "Goddess Statuette", "Landscape Painting"],
    lostItems: ["Art Book", "Blue Stone", "Letter to the Goddess"],
    trainings: [],
    lectures: [
        {
            question:
                "I’m not very good at sharing my opinion. Usually, I just go along with what everybody else thinks. I don’t want to bother anyone. Um..",
            answer: "They’ll appreciate your opinion. Let yourself be heard."
        },
        {
            question:
                "Some of the children were admiring a painting of mine. I’d like to paint a new piece. Something just for them, to make them happy. What do you think I ought to paint?",
            answer: "Woodland creatures."
        }
    ],
    skillProficiencies: ["Sword", "Bow", "Authority", "Flying"],
    skillWeaknesses: [],
    hiddenTalents: ["Reason"],
    growthRates: {
        HP: 35,
        STR: 35,
        MAG: 30,
        DEX: 50,
        SPD: 50,
        LCK: 55,
        DEF: 25,
        RES: 35,
        CHA: 25
    },
    maxStats: {
        HP: 70,
        STR: 51,
        MAG: 42,
        DEX: 69,
        SPD: 70,
        LCK: 76,
        DEF: 43,
        RES: 49,
        CHA: 45
    },
    baseStats: {
        HP: 25,
        STR: 8,
        MAG: 5,
        DEX: 7,
        SPD: 8,
        LCK: 8,
        DEF: 4,
        RES: 6,
        CHA: 4
    },
    teaTimeTopics: [
        "Interested Topics",
        "A place you’d like to visit…",
        "Gardening mishaps…",
        "Someone you look up to…",
        "A word of advice…",
        "Gifts you’d like to receive…",
        "Strange fish in the pond…",
        "Books you’ve read recently…",
        "Guessing someone’s age…",
        "Tell me about yourself…",
        "Capable comrades…",
        "I heard some gossip…",
        "Thanks for everything…",
        "Cats…",
        "I’m counting on you…",
        "The courtyard couple…",
        "Children at the market…",
        "Likable allies…",
        "The library’s collection…",
        "Classes you might enjoy…",
        "Mixing pigments…",
        "The opera…",
        "Close calls…",
        "Monastery mysteries…",
        "The view from the bridge…",
        "Cute monks…",
        "Monastery rules…",
        "Things that bother you…",
        "Equipment upkeep…",
        "Our first meeting…",
        "Working together…",
        "Evaluating allies…",
        "Overcoming weaknesses…",
        "You seem different…",
        "Exploring the monastery…",
        "Past laughs…",
        "You seem well…",
        "First crushes…",
        "Plans for the future…",
        "You’re doing great work…",
        "Fodlan’s future…",
        "School days…"
    ],
    teaTimeComments: [
        {
            comment: "I wanna support my family, but I don’t know if I can handle being a knight.",
            answers: ["Nod", "Praise"]
        },
        {
            comment: "I think it’s good to have a hobby. Some people say it’s a waste of time, but I think it’s nice.",
            answers: ["Nod", "Chat"]
        },
        {
            comment: "You’re so young and so accomplished! I admire you.",
            answers: ["Disagree", "Sip tea", "Blush"]
        },
        {
            comment: "I’m realizing that I can learn a lot from you.",
            answers: ["Laugh"]
        },
        {
            comment: "I don’t know what I can do, but I’m prepared to assume responsibility for my future.",
            answers: ["Commend", "Praise"]
        },
        {
            comment: "With you and all the friends I’ve made, I’m glad I came here.",
            answers: ["Laugh"]
        },
        {
            comment: "Thank you for letting me continue with my art. I’ll do my part on the battlefield.",
            answers: ["Laugh", "Nod", "Praise"]
        },
        {
            comment: "Oh, don’t mind me. I was just admiring you.",
            answers: ["Sip tea", "Blush"]
        },
        {
            comment: "I need to keep training. I know a brush and canvas aren’t enough to protect you.",
            answers: ["Chat", "Blush", "Praise"]
        }
    ]
};
