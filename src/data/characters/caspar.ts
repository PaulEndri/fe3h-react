import { ICharacter } from "../../interfaces/iCharacter";

export const Caspar: ICharacter = {
    firstName: "Caspar",
    alliance: "Black Eagles",
    name: "Caspar von Bergliez",
    birthday: "7/1",
    tea: ["Ginger Tea"],
    crest: "None",
    skill: {
        name: "Brawling",
        value: "C"
    },
    stat: {
        name: "STR",
        value: 10
    },
    flower: [],
    gift: ["Smoked Meat", "Training Weight", "Whetstone"],
    lostItems: ["Grounding Charm", "Tattered Overcoat", "Thunderbrand Replica"],
    trainings: [],
    lectures: [
        {
            question:
                "Pretty soon I’ll have eaten everything they have to offer in the dining hall. Then what am I supposed to do? Keep eating the same boring meals over and over again?",
            answer: "You should just enjoy what you’ve got."
        },
        {
            question:
                "Hey, Professor! I think I’m ready… I think it’s time you finally gave me a nickname! What’s a guy gotta do to earn one?",
            answer: "You actually have one, but it’s too scary to say out loud."
        }
    ],
    skillProficiencies: ["Axe", "Brawling"],
    skillWeaknesses: ["Bow", "Reason", "Authority"],
    hiddenTalents: [],
    growthRates: {
        HP: 55,
        STR: 45,
        MAG: 25,
        DEX: 45,
        SPD: 45,
        LCK: 40,
        DEF: 30,
        RES: 20,
        CHA: 25
    },
    maxStats: {
        HP: 97,
        STR: 65,
        MAG: 41,
        DEX: 61,
        SPD: 62,
        LCK: 58,
        DEF: 51,
        RES: 35,
        CHA: 46
    },
    baseStats: {
        HP: 29,
        STR: 9,
        MAG: 3,
        DEX: 5,
        SPD: 6,
        LCK: 8,
        DEF: 6,
        RES: 2,
        CHA: 4
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gardening mishaps…",
        "Someone you look up to…",
        "A new gambit…",
        "Hopes for your future…",
        "Strange fish in the pond…",
        "A place you’d like to visit…",
        "I’m counting on you…",
        "Tell me about yourself…",
        "A strong battalion…",
        "Methods for growing taller…",
        "Thanks for everything…",
        "A word of advice…",
        "Mighty weapons…",
        "The last battle…",
        "Cats…",
        "Our first meeting…",
        "The view from the bridge…",
        "Children at the market…",
        "Overcoming weaknesses…",
        "Things that bother you…",
        "Classes you might enjoy…",
        "Past laughs…",
        "Working hours for guards…",
        "Close calls…",
        "Perfect recipes…",
        "Working together…",
        "Cooking mishaps…",
        "Plans for the future…",
        "You seem well…",
        "Dreamy knights…",
        "Potential training partners…",
        "You’re doing great work…",
        "Equipment upkeep…",
        "Relaxing at the sauna…",
        "Your ambitions…",
        "Exploring the monastery…",
        "School days…",
        "Food in the dining hall…",
        "Shareable snacks…"
    ],
    teaTimeComments: [
        {
            comment: "Hey, are you getting hungry?",
            answers: ["Laugh", "Sigh"]
        },
        {
            comment: "I’m gonna keep training until I can beat you!",
            answers: ["Disagree", "Blush"]
        },
        {
            comment:
                "I just wanna go wild and let it all out! Come on, Professor, send me out front in our next battle!",
            answers: ["Chat", "Admonish"]
        },
        {
            comment: "I usually don’t get hung up on things, but when I do, I feel stuck!",
            answers: ["Praise"]
        },
        {
            comment: "What is justice really? I’m not so sure I know anymore…",
            answers: ["Commend", "Chat"]
        },
        {
            comment: "Who was that guy? You don’t know who I’m talking about? The suspicious guy who killed himself!",
            answers: ["Nod", "Chat"]
        },
        {
            comment:
                "They say hard work pays off, but I don’t think that’s always true. Either way, I’m gonna keep trying!",
            answers: ["Commend", "Praise"]
        },
        {
            comment: "I really love fighting alongside you. I can always count on your commands to get us through!",
            answers: ["Nod", "Laugh", "Blush"]
        },
        {
            comment:
                "I’m always gonna do things my way. If there’s a wall blocking my path, I’ll punch a hole right through it!",
            answers: ["Laugh", "Commend", "Praise"]
        }
    ]
};
