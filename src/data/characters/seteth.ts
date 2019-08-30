import { ICharacter } from "../../interfaces/iCharacter";

export const Seteth: ICharacter = {
    firstName: "Seteth",
    alliance: "Church of Seiros",
    name: "Seteth",
    birthday: "12/27",
    skill: null,
    stat: null,
    tea: ["Four-Spice Blend", "Ginger Tea", "Angelica Tea"],
    crest: "Cichol",
    flower: [],
    gift: ["Fishing Float", "Dapper Handkerchief", "The History of Fodlan"],
    lostItems: ["Old Fishing Rod", "Snapping Writing Quill", "Unfinished Fable"],
    trainings: ["Sword", "Lance", "Axe", "Authority", "Flying"],
    lectures: [
        {
            question:
                "I am staggered by how routinely the students seem to neglect their studies in favor of petty romance. You should get this under control.",
            answer: "We need to set a better example."
        },
        {
            question:
                "Fishing is what truly calms me, but it is time-consuming. What do you think should I do when a visit to the pond is too inconvenient?",
            answer: "Write a story about someone fishing"
        }
    ],
    skillProficiencies: ["Sword", "Axe", "Lance", "Flying", "Authority"],
    skillWeaknesses: ["Riding"],
    hiddenTalents: [],
    growthRates: {
        HP: 50,
        STR: 45,
        MAG: 35,
        DEX: 50,
        SPD: 50,
        LCK: 25,
        DEF: 30,
        RES: 25,
        CHA: 45
    },
    maxStats: {
        HP: 92,
        STR: 65,
        MAG: 51,
        DEX: 70,
        SPD: 67,
        LCK: 49,
        DEF: 43,
        RES: 41,
        CHA: 65
    },
    baseStats: {
        HP: 27,
        STR: 9,
        MAG: 8,
        DEX: 8,
        SPD: 5,
        LCK: 6,
        DEF: 6,
        RES: 4,
        CHA: 9
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Flayn…",
        "Reliable allies…",
        "A new gambit…",
        "Fodlan’s future…",
        "Tell me about yourself…",
        "A strong battalion…",
        "Guessing someone’s age…",
        "Thanks for everything…",
        "A word of advice…",
        "Hopes for your future…",
        "The ideal professor…",
        "Books you’ve read recently…",
        "I heard some gossip…",
        "The last battle…",
        "Capable comrades…",
        "I’m counting on you…",
        "The library’s collection…",
        "Children at the market…",
        "Likable allies…",
        "The opera…",
        "Classes you might enjoy…",
        "Mighty weapons…",
        "Things that bother you…",
        "Close calls…",
        "Monastery rules…",
        "Working hours for guards…",
        "Equipment upkeep…",
        "Monastery security…",
        "Working together…",
        "Evaluating allies…",
        "Our first meeting…",
        "You’re doing great work…",
        "Exploring the monastery…",
        "Relaxing at the sauna…",
        "Your ambitions…"
    ],
    teaTimeComments: [
        {
            comment: "I wonder why the archbishop is so interested in you.",
            answers: ["Chat", "Sip tea"]
        },
        {
            comment: "I do hope you will inform me of any issues you may encounter in the monastery.",
            answers: ["Nod"]
        },
        {
            comment: "I know I speak harshly at times, but I hope you understand that I am merely doing my job.",
            answers: ["Nod", "Sigh"]
        },
        {
            comment: "You have become very special to us.",
            answers: ["Nod", "Chat"]
        },
        {
            comment: "The more you learn about yourself, the more paths will become open to you.",
            answers: ["Nod", "Chat"]
        },
        {
            comment: "If there is anything I can do for you, please tell me.",
            answers: ["Nod", "Laugh", "Blush"]
        },
        {
            comment: "When my own thoughts grow tiresome, I go fishing. You should join me sometime.",
            answers: ["Nod", "Laugh"]
        },
        {
            comment: "Whatever happens, know I am proud to support you.",
            answers: ["Chat", "Blush"]
        },
        {
            comment: "I put up a stiff front with people, due to my position. But that’s not really me.",
            answers: ["Nod", "Laugh", "Blush"]
        }
    ]
};
