import { ICharacter } from "../../interfaces/iCharacter";

export const Lorenz: ICharacter = {
    firstName: "Lorenz",
    alliance: "Golden Deer",
    name: "Lorenz Hellman Gloucester",
    birthday: "6/13",
    skill: {
        name: "Reason",
        value: "C"
    },
    stat: {
        name: "CHA",
        value: 20
    },
    flower: ["Rose"],
    tea: ["Bergamot", "Rose Petal Blend", "Seiros Tea"],
    crest: "Gloucester",
    gift: ["Book of Sheet Music", "Floral Adornment", "Tea Leaves"],
    lostItems: ["A Treatise On Etiquette", "Artificial Flower", "Silk Handkerchief"],
    trainings: [],
    lectures: [
        {
            question:
                "The ladies have been giving me the cold shoulder, of late, I believe it is because they are intimidated by my noble presence. How can I be more... accessible?",
            answer: "Sounds like it’s their problem, not yours."
        },
        {
            question:
                "I have always been confident in my exceptional skill, but... lately I will admit I have experienced some minor doubts. What can I do to restore my confidence?Win your battles consistently. Confidence will come.",
            answer: "Win your battles consistently. Confidence will come."
        }
    ],
    skillProficiencies: ["Lance", "Reason", "Riding"],
    skillWeaknesses: ["Brawling"],
    hiddenTalents: [],
    growthRates: {
        HP: 55,
        STR: 40,
        MAG: 40,
        DEX: 45,
        SPD: 40,
        LCK: 25,
        DEF: 30,
        RES: 40,
        CHA: 35
    },
    maxStats: {
        HP: 99,
        STR: 58,
        MAG: 57,
        DEX: 62,
        SPD: 57,
        LCK: 48,
        DEF: 55,
        RES: 56,
        CHA: 46
    },
    baseStats: {
        HP: 28,
        STR: 8,
        MAG: 7,
        DEX: 6,
        SPD: 7,
        LCK: 5,
        DEF: 6,
        RES: 6,
        CHA: 3
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Hopes for your future…",
        "Someone you look up to…",
        "A new gambit…",
        "I’m counting on you…",
        "Tell me about yourself…",
        "A word of advice…",
        "Likable allies…",
        "Thanks for everything…",
        "Capable comrades…",
        "Monastery rules…",
        "The existence of Crests…",
        "Cute monks…",
        "Our first meeting…",
        "The ideal professor…",
        "Dining partners…",
        "Overcoming weaknesses…",
        "The ideal relationship…",
        "Dreamy knights…",
        "Past laughs…",
        "The opera…",
        "Evaluating allies…",
        "Plans for the future…",
        "Things that bother you…",
        "Exploring the monastery…",
        "Relaxing at the sauna…",
        "Things you find romantic…",
        "Fashion…",
        "Reliable allies…",
        "Working together…",
        "First crushes…",
        "Roses…",
        "You seem different…",
        "Fodlan’s future…",
        "School days…",
        "You seem well…",
        "Gifts you’d like to receive…",
        "School uniforms…",
        "Your ambitions…",
        "Heart-racing memories…",
        "Shareable snacks…"
    ],
    teaTimeComments: [
        {
            comment: "A noble’s life is full of rigid expectation. I sometimes envy the freedom of commoners.",
            answers: ["Disagree", "Praise"]
        },
        {
            comment: "The rose perfectly embodies the blend of elegance and power that I seek to possess.",
            answers: ["Nod", "Sip tea"]
        },
        {
            comment: "Do not concern yourself with the rumors. It is not possible for a lady to find me irritating.",
            answers: ["Admonish", "Sip tea"]
        },
        {
            comment: "Even a noble needs a break now and then. One cannot be at one’s best all the time.",
            answers: ["Nod", "Praise"]
        },
        {
            comment:
                "I am not mindlessly following my father. When it is time to make a choice, I decide what I will do.",
            answers: ["Commend", "Chat", "Praise"]
        },
        {
            comment: "You are quite an intriguing person. I would be lying if I said I did not find you fascinating.",
            answers: ["Laugh", "Blush"]
        },
        {
            comment: "Being here helps soothe the heartache from all the bloodshed of this war.",
            answers: ["Praise", "Nod"]
        },
        {
            comment: "I cannot yet speak to you as an equal. Not when there is still so much left to learn.",
            answers: ["Commend", "Disagree", "Praise"]
        },
        {
            comment: "I hope it is not untoward of me to ask, but…might I stay a little longer?",
            answers: ["Nod", "Blush", "Laugh"]
        }
    ]
};
