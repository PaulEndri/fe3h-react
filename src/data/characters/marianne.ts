import { ICharacter } from "../../interfaces/iCharacter";

export const Marianne: ICharacter = {
    firstName: "Marianne",
    alliance: "Golden Deer",
    name: "Marianne von Edmund",
    birthday: "11/23",
    skill: {
        name: "Riding",
        value: "C"
    },
    stat: {
        name: "MAG",
        value: 10
    },
    flower: ["Lily of the Valley"],
    gift: ["Armored Bear Stuffy", "Dapper Handkerchief", "Floral Adornment"],
    tea: ["Dagda Fruit Blend", "Cinnamon Blend", "Lavender Blend"],
    crest: "Beast",
    lostItems: ["Bag of Seeds", "Confessional Letter", "How to be Tidy"],
    trainings: [],
    lectures: [
        {
            question:
                "Um, excuse me… Can you help me? I always get the feeling that I’m being watched. I get so nervous that I can’t sleep at night…",
            answer: "You might be right. You should be careful."
        },
        {
            question:
                "Soon a day will come when we must all part ways. I get so sad thinking about it.... It's not practical to keep focusing on this though, is it?",
            answer: "The goddess will always protect everyone."
        }
    ],
    skillProficiencies: ["Sword", "Faith", "Riding", "Flying"],
    skillWeaknesses: ["Authority", "Heavy Armor"],
    hiddenTalents: ["Lance"],
    growthRates: {
        HP: 35,
        STR: 20,
        MAG: 50,
        DEX: 40,
        SPD: 40,
        LCK: 35,
        DEF: 15,
        RES: 45,
        CHA: 40
    },
    maxStats: {
        HP: 68,
        STR: 30,
        MAG: 73,
        DEX: 56,
        SPD: 57,
        LCK: 49,
        DEF: 39,
        RES: 64,
        CHA: 57
    },
    baseStats: {
        HP: 23,
        STR: 5,
        MAG: 11,
        DEX: 6,
        SPD: 7,
        LCK: 6,
        DEF: 4,
        RES: 8,
        CHA: 7
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gardening mishaps…",
        "Strange fish in the pond…",
        "A new gambit…",
        "Hopes for your future…",
        "Tell me about yourself…",
        "A word of advice…",
        "I heard some gossip…",
        "Thanks for everything…",
        "Books you’ve read recently…",
        "Likable allies…",
        "The existence of Crests…",
        "Cats…",
        "Monastery mysteries…",
        "The ideal professor…",
        "Children at the market…",
        "Our first meeting…",
        "The last battle…",
        "Close calls…",
        "Overcoming weaknesses…",
        "The library’s collection…",
        "Exploring the monastery…",
        "Plans for the future…",
        "The view from the bridge…",
        "Fodlan’s future…",
        "Relaxing at the sauna…",
        "You seem different…",
        "Forest birds…",
        "School days…"
    ],
    teaTimeComments: [
        {
            comment: "Spending time with me must be boring, isn’t it?",
            answers: ["Admonish", "Disagree"]
        },
        {
            comment: "I-I’m sorry… I don’t know what to say…",
            answers: ["Chat", "Praise"]
        },
        {
            comment: "It’s a waste to spend your time with me…",
            answers: ["Disagree"]
        },
        {
            comment: "You’ll be met with misfortune if you spend too much time with me…",
            answers: ["Disagree", "Admonish", "Chat"]
        },
        {
            comment: "You don’t seem to be very good at talking… At least you’re not as bad as me.",
            answers: ["Nod", "Sigh"]
        },
        {
            comment: "It’s not like I can go home… My adoptive father doesn’t want me there…",
            answers: ["Chat", "Praise"]
        },
        {
            comment: "Thanks to you, I’m beginning to feel more comfortable talking to people.",
            answers: ["Nod", "Disagree"]
        },
        {
            comment: "I’m all right now. I think I can look forward to living my life.",
            answers: ["Nod", "Laugh", "Commend"]
        },
        {
            comment: "I hope you never leave…oh! Never mind… Ignore me.",
            answers: ["Laugh", "Blush"]
        }
    ]
};
