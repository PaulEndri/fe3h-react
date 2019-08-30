import { ICharacter } from "../../interfaces/iCharacter";

export const Dorothea: ICharacter = {
    firstName: "Dorothea",
    alliance: "Black Eagles",
    name: "Dorothea Arnault",
    birthday: "9/29",
    tea: ["Sweet-Apple Blend", "Albinean Berry Blend"],
    crest: "None",
    skill: {
        name: "Authority",
        value: "B"
    },
    stat: {
        name: "CHA",
        value: 25
    },
    flower: [],
    gift: ["Book of Sheet Music", "Gemstone Beads", "Stylish Hair Clip"],
    lostItems: ["Lovely Comb", "Silver Brooch", "Songstress Poster"],
    trainings: [],
    lectures: [
        {
            question:
                "You know how sometimes an ordinary girl can be more popular than an exceptional beauty? Or how, with aristocrats, some prefer a viscount when they could have a duke instead? Why do you think that is?",
            answer: "Fancy meals are boring if you eat them every day."
        },
        {
            question:
                "Songs are so powerless, Professor. No matter how much on sings, there’s no soldier on the battlefield who will listen. It’s horrible that one can only sing of peace in times of peace.",
            answer: "If we can achieve peace, those songs won’t be powerless."
        }
    ],
    skillProficiencies: ["Sword", "Reason"],
    skillWeaknesses: ["Faith"],
    hiddenTalents: ["Faith"],
    growthRates: {
        HP: 40,
        STR: 20,
        MAG: 40,
        DEX: 45,
        SPD: 40,
        LCK: 35,
        DEF: 15,
        RES: 35,
        CHA: 40
    },
    maxStats: {
        HP: 76,
        STR: 30,
        MAG: 61,
        DEX: 62,
        SPD: 57,
        LCK: 49,
        DEF: 38,
        RES: 50,
        CHA: 58
    },
    baseStats: {
        HP: 24,
        STR: 5,
        MAG: 11,
        DEX: 6,
        SPD: 7,
        LCK: 6,
        DEF: 4,
        RES: 7,
        CHA: 8
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "I heard some gossip…",
        "Tell me about yourself…",
        "A new gambit…",
        "I’m counting on you…",
        "Thanks for everything…",
        "Books you’ve read recently…",
        "Likable allies…",
        "The courtyard couple…",
        "Close calls…",
        "Monastery rules…",
        "The ideal relationship…",
        "Cute monks…",
        "Monastery security…",
        "The melody of words…",
        "Dining partners…",
        "Our first meeting…",
        "The opera…",
        "Dreamy knights…",
        "Past laughs…",
        "Things that bother you…",
        "Evaluating allies…",
        "Plans for the future…",
        "Things you find romantic…",
        "Exploring the monastery…",
        "Potential training partners…",
        "Working hours for guards…",
        "Fashion…",
        "Relaxing at the sauna…",
        "Working together…",
        "First crushes…",
        "School days…",
        "You seem different…",
        "Gifts you’d like to receive…",
        "School uniforms…",
        "You seem well…",
        "Heart-racing memories…",
        "Someone you look up to…",
        "You’re doing great work…",
        "Hopes for your future…",
        "Strange fish in the pond…"
    ],
    teaTimeComments: [
        {
            comment: "More nobles than you’d expect make a pilgrimage to Garreg Mach to pray.",
            answers: ["Commend"]
        },
        {
            comment: "I am not really a fan of hymns. I don’t want to offer silly songs to my goddess.",
            answers: ["Sigh", "Chat"]
        },
        {
            comment:
                "My ideal partner is religious, but only just. And they have enough money to live on for all our days.",
            answers: ["Blush", "Praise"]
        },
        {
            comment: "So, you don’t have any weaknesses after all? I’m totally envious of you.",
            answers: ["Disagree", "Sip tea"]
        },
        {
            comment:
                "You’re such an open-minded person, Professor. I’m glad you don’t judge me for living how I want to.",
            answers: ["Laugh", "Sip tea", "Blush"]
        },
        {
            comment: "Why are men so vain? They should know their lies will never last.",
            answers: ["Laugh", "Chat", "Sip Tea"]
        },
        {
            comment: "Don’t you think you feel stronger attraction to someone when you know you may die tomorrow?",
            answers: ["Nod", "Chat"]
        },
        {
            comment: "So many people have died… I’m so terribly down. I feel better here, with you though.",
            answers: ["Nod", "Praise"]
        },
        {
            comment: "Whatever the future may bring, I’m so glad I met you.",
            answers: ["Blush"]
        }
    ]
};
