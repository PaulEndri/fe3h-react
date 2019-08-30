import { ICharacter } from "../../interfaces/iCharacter";

export const Linhardt: ICharacter = {
    firstName: "Linhardt",
    alliance: "Black Eagles",
    name: "Linhardt von Hevring",
    birthday: "11/7",
    crest: "Cethleann",
    tea: ["Almyran Pine Needles", "Angelica Tea"],
    skill: {
        name: "Reason",
        value: "C"
    },
    stat: {
        name: "MAG",
        value: 10
    },
    flower: [],
    gift: ["Book of Crest Designs", "Fishing Float", "Tasty Baked Treat"],
    lostItems: ["Animated Bait", "Feather Pillow", "The Saints Revealed"],
    trainings: [],
    lectures: [
        {
            question:
                "When I take a lecture I’m not interested in, I get so...sleepy. I just can't fight it. I should just give up, don’t you think? Close my eyes and enjoy a peaceful slumber?",
            answer: "No need to fight it. You can’t help it."
        },
        {
            question:
                "I sometimes find books written in languages I’ve never seen before. I’d love to read them somehow, but I don’t even know where to start… Do you have any ideas?",
            answer: "Piece things together using linguistic clues."
        }
    ],
    skillProficiencies: ["Reason", "Faith"],
    skillWeaknesses: ["Axe", "Brawling"],
    hiddenTalents: [],
    growthRates: {
        HP: 35,
        STR: 35,
        MAG: 20,
        DEX: 55,
        SPD: 50,
        LCK: 25,
        DEF: 20,
        RES: 30,
        CHA: 35
    },
    maxStats: {
        HP: 63,
        STR: 42,
        MAG: 66,
        DEX: 56,
        SPD: 55,
        LCK: 63,
        DEF: 48,
        RES: 65,
        CHA: 43
    },
    baseStats: {
        HP: 24,
        STR: 5,
        MAG: 10,
        DEX: 6,
        SPD: 5,
        LCK: 7,
        DEF: 5,
        RES: 9,
        CHA: 3
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gifts you’d like to receive…",
        "Thanks for everything…",
        "A place you’d like to visit…",
        "I heard some gossip…",
        "The art of napping…",
        "A word of advice…",
        "Monastery mysteries…",
        "The existence of Crests…",
        "Books you’ve read recently…",
        "Our first meeting…",
        "The library’s collection…",
        "Capable comrades…",
        "Overcoming weaknesses…",
        "The view from the bridge…",
        "Cats…",
        "Past laughs…",
        "Things that bother you…",
        "Exploring the monastery…",
        "Plans for the future…",
        "Working hours for guards…",
        "Favorite sweets…",
        "Strange fish in the pond…",
        "Gardening mishaps…",
        "Tell me about yourself…"
    ],
    teaTimeComments: [
        {
            comment: "You are full of mysteries and yet offer no answers. How unfair.",
            answers: ["Disagree", "Chat"]
        },
        {
            comment: "Being surrounded by all these Crest-bearers makes me want to better understand Crestology.",
            answers: ["Praise", "Nod"]
        },
        {
            comment:
                "Crest versus nurture. Which causes a noble’s personality disorder? There’s a research project, eh?",
            answers: ["Chat"]
        },
        {
            comment:
                "I always feel as if I cannot keep up with other people. Everyone else seems to have a destination in mind.",
            answers: ["Laugh", "Praise"]
        },
        {
            comment: "Please wake me if I fall asleep. I don’t wish to be a rude guest.",
            answers: ["Admonish", "Sip tea"]
        },
        {
            comment: "They say the Crest’s power dwells in blood. So why does it have to be so disgusting?",
            answers: ["Admonish", "Chat"]
        },
        {
            comment: "If I don’t become a scholar then perhaps librarian is the job for me.",
            answers: ["Nod", "Praise"]
        },
        {
            comment: "You bear the legendary Crest of Flames. You simply must allow me to study it–please, Professor.",
            answers: ["Commend"]
        },
        {
            comment:
                "We should explore ways to utilize the power of Relics and Crests for something other than combat.",
            answers: ["Nod", "Commend", "Chat"]
        }
    ]
};
