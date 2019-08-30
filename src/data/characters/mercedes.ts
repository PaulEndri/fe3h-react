import { ICharacter } from "../../interfaces/iCharacter";

export const Mercedes: ICharacter = {
    firstName: "Mercedes",
    alliance: "Blue Lions",
    name: "Mercedes von Martritz",
    birthday: "5/27",
    skill: {
        name: "Bow",
        value: "C"
    },
    stat: {
        name: "MAG",
        value: 15
    },
    flower: ["Lavender"],
    tea: ["Albinean Berry Blend", "Southern Fruit Blend", "Crescent Moon Tea"],
    crest: "Lamine",
    gift: ["Armored Bear Stuffy", "Gemstone Beads", "Goddess Statuette", "Tasty Baked Treat"],
    lostItems: ["Book of Ghost Stories", "Fruit Preserves", "How to Bake Sweets"],
    trainings: [],
    lectures: [
        {
            question:
                "I enjoy a good ghost story, but I’ve never seen a ghost in real life. I would love to have that experience for myself, even just once!",
            answer: "Maybe you need a ritual to summon one."
        },
        {
            question:
                "Seeing the cathedral in such a run-down state makes me feel so sorry for the goddess… As soon as this way is finally over, I’m going to devote myself to making this place more beautiful than ever!",
            answer: "Let’s plant flowers to make it more colorful"
        }
    ],
    skillProficiencies: ["Reason", "Faith"],
    skillWeaknesses: ["Sword", "Lance", "Axe"],
    hiddenTalents: ["Bow"],
    growthRates: {
        HP: 30,
        STR: 25,
        MAG: 50,
        DEX: 45,
        SPD: 40,
        LCK: 30,
        DEF: 25,
        RES: 45,
        CHA: 40
    },
    maxStats: {
        HP: 64,
        STR: 37,
        MAG: 72,
        DEX: 62,
        SPD: 58,
        LCK: 54,
        DEF: 44,
        RES: 65,
        CHA: 58
    },
    baseStats: {
        HP: 25,
        STR: 6,
        MAG: 10,
        DEX: 6,
        SPD: 8,
        LCK: 5,
        DEF: 5,
        RES: 9,
        CHA: 8
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Food in the dining hall…",
        "School uniforms…",
        "A place you’d like to visit…",
        "Gardening mishaps…",
        "Shareable snacks…",
        "A word of advice…",
        "Ghost stories…",
        "Tell me about yourself…",
        "Books you’ve read recently…",
        "Gifts you’d like to receive…",
        "Thanks for everything…",
        "Cats…",
        "Heart-racing memories…",
        "The courtyard couple…",
        "Children at the market…",
        "I heard some gossip…",
        "The ideal relationship…",
        "Cooking mishaps…",
        "I’m counting on you…",
        "The last battle…",
        "Cute monks…",
        "Likable allies…",
        "The library’s collection…",
        "Dining partners…",
        "Monastery rules…",
        "The opera…",
        "Dreamy knights…",
        "Overcoming weaknesses…",
        "Things that bother you…",
        "Exploring the monastery…",
        "Past laughs…",
        "You seem different…",
        "Fashion…",
        "Perfect recipes…",
        "You’re doing great work…",
        "Favorite sweets…",
        "Relaxing at the sauna…",
        "First crushes…",
        "School days…"
    ],
    teaTimeComments: [
        {
            comment: "I baked a cake earlier today. Should I have brought some with me?",
            answers: ["Nod", "Sip tea"]
        },
        {
            comment: "The cathedral is nice and quiet. It’s so relaxing!",
            answers: ["Disagree", "Blush"]
        },
        {
            comment: "I’m actually quite skilled at drawing. I wouldn’t mind using you as a model!",
            answers: ["Nod", "Commend", "Blush"]
        },
        {
            comment: "I baked a cake earlier today. Should I have brought some with me?",
            answers: ["Nod", "Sip tea"]
        },
        {
            comment: "I used to live in a quiet and beautiful church…but it’s not bad here either!",
            answers: ["Commend"]
        },
        {
            comment: "I should probably write to my mother soon…",
            answers: ["Nod", "Chat", "Praise"]
        },
        {
            comment:
                "You should really brighten this room up a bit. Have you considered putting flowers in the window?",
            answers: ["Nod", "Commend"]
        },
        {
            comment: "As I continue to grow, I’ve learned not to regret the choices I’ve made!",
            answers: ["Commend", "Praise"]
        },
        {
            comment: "Not to be a bother, but do you mind if I stay just a little longer?",
            answers: ["Nod", "Blush", "Praise"]
        }
    ]
};
