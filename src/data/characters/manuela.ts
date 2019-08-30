import { ICharacter } from "../../interfaces/iCharacter";

export const Manuela: ICharacter = {
    firstName: "Manuela",
    alliance: "Church of Seiros",
    name: "Manuela Casagranda",
    birthday: "8/3",
    skill: null,
    stat: {
        name: "Level",
        value: "15"
    },
    flower: [],
    gift: ["Blue Cheese", "Book of Sheet Music", "Gemstone Beads", "Goddess Statuette"],
    lostItems: ["Clean Dusting Cloth", "Light Purple Beil", "Wellness Herbs"],
    tea: ["Mint Leaves", "Lavender Blend"],
    crest: "None",
    trainings: ["Sword", "Faith", "Flying"],
    lectures: [
        {
            question:
                "Hey. Maybe you can answer a question I’ve had for a while now… Why is it that men don’t like women who are messy?",
            answer: "Men have unrealistic expectations"
        },
        {
            question:
                "I think alcohol consumption increases as we continue to fight, day after day after day after… Oh, I mean for the monastery. As a whole, dear. Not just for me. Still, is it something we should be careful about?",
            answer: "Focus on your own intake. I'll worry about everyone else."
        }
    ],
    skillProficiencies: ["Sword", "Faith", "Flying"],
    skillWeaknesses: ["Reason"],
    hiddenTalents: [],
    growthRates: {
        HP: 50,
        STR: 35,
        MAG: 35,
        DEX: 40,
        SPD: 60,
        LCK: 35,
        DEF: 30,
        RES: 25,
        CHA: 50
    },
    maxStats: {
        HP: 91,
        STR: 53,
        MAG: 48,
        DEX: 56,
        SPD: 83,
        LCK: 52,
        DEF: 42,
        RES: 44,
        CHA: 69
    },
    baseStats: {
        HP: 26,
        STR: 10,
        MAG: 8,
        DEX: 6,
        SPD: 8,
        LCK: 6,
        DEF: 5,
        RES: 4,
        CHA: 7
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gardening mishaps…",
        "School days…",
        "A strong battalion…",
        "Gifts you’d like to receive…",
        "Shareable snacks…",
        "A word of advice…",
        "Guessing someone’s age…",
        "Tell me about yourself…",
        "Best performance venues…",
        "Heart-racing memories…",
        "Thanks for everything…",
        "Children at the market…",
        "Hopes for your future…",
        "The courtyard couple…",
        "Classes you might enjoy…",
        "I heard some gossip…",
        "The ideal professor…",
        "Close calls…",
        "I’m counting on you…",
        "The ideal relationship…",
        "Cooking mishaps…",
        "Likable allies…",
        "The opera…",
        "Cute monks…",
        "Monastery security…",
        "Things that bother you…",
        "Dining partners…",
        "Our first meeting…",
        "Things you find romantic…",
        "Dreamy knights…",
        "Overcoming weaknesses…",
        "Working hours for guards…",
        "Exploring the monastery…",
        "Past laughs…",
        "Working together…",
        "Fashion…",
        "Perfect recipes…",
        "You seem well…",
        "Favorite sweets…",
        "Plans for the future…",
        "You’re doing great work…",
        "First crushes…",
        "Relaxing at the sauna…",
        "Food in the dining hall…",
        "Reliable allies…"
    ],
    teaTimeComments: [
        {
            comment: "There’s no alcohol in here. It’s better if you can sleep without it, but… All you have is tea?",
            answers: ["Admonish", "Sip tea"]
        },
        {
            comment: "Am I that terrible of a woman? So, I’m a little unkempt, what of it?",
            answers: ["Disagree", "Admonish"]
        },
        {
            comment: "Who are you really? Such a mystery. I don’t really understand you… Tell me everything.",
            answers: ["Sigh", "Chat"]
        },
        {
            comment: "What should I do to find love, Professor? I don’t want to spend my days alone.",
            answers: ["Praise", "Chat"]
        },
        {
            comment: "You think I complain too much, don’t you? I know I do, but I can’t help it.",
            answers: ["Disagree", "Praise"]
        },
        {
            comment: "Sometimes I think back to when I used to shine as a songstress.",
            answers: ["Nod", "Sip tea"]
        },
        {
            comment: "I must thank you for spending so much time with me. Your company helps me keep sane.",
            answers: ["Laugh", "Praise"]
        },
        {
            comment: "Your room is so nice and clean. How do you keep it like this?",
            answers: ["Disagree", "Chat"]
        },
        {
            comment: "You are always so kind to me, Professor. I love it, but that, too, is its own vice, isn’t it?",
            answers: ["Sip tea", "Blush"]
        }
    ]
};
