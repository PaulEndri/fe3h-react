import { ICharacter } from "../../interfaces/iCharacter";

export const Ferdinand: ICharacter = {
    firstName: "Ferdinand",
    alliance: "Black Eagles",
    name: "Ferdinand von Aegir",
    birthday: "4/30",
    crest: "Cichol",
    tea: ["Almyran Pine Needles", "Southern Fruit Blend", "Seiros Tea"],
    skill: {
        name: "Heavy Armor",
        value: "C"
    },
    stat: {
        name: "DEX",
        value: 10
    },
    flower: [],
    gift: ["Riding Boots", "Tea Leaves", "Whetstone"],
    lostItems: ["Agricultural Survey", "Bag of Tea Leaves", "Maintenance Oil"],
    trainings: [],
    lectures: [
        {
            question:
                "I am an avid arms collector. Since coming to live here, however, I have had much more trouble finding new items for my collection. Any ideas as to where I might find some uncommon weapons?",
            answer: "Ask a blacksmith to teach you how to craft your own."
        },
        {
            question:
                "Death is an inevitable result of military conflict. Not only soldiers, but also warhorses, who have no say in their line of work, lay down their lives on the battlefield. What steps can a commander take to minimize this loss of life?",
            answer: "Adopt new tactics that increase survivability."
        }
    ],
    skillProficiencies: ["Sword", "Axe", "Lance", "Riding"],
    skillWeaknesses: [],
    hiddenTalents: ["Heavy Armor"],
    growthRates: {
        HP: 50,
        STR: 45,
        MAG: 20,
        DEX: 40,
        SPD: 50,
        LCK: 40,
        DEF: 35,
        RES: 20,
        CHA: 40
    },
    maxStats: {
        HP: 93,
        STR: 64,
        MAG: 40,
        DEX: 56,
        SPD: 70,
        LCK: 56,
        DEF: 36,
        RES: 37,
        CHA: 57
    },
    baseStats: {
        HP: 28,
        STR: 8,
        MAG: 5,
        DEX: 6,
        SPD: 8,
        LCK: 6,
        DEF: 6,
        RES: 2,
        CHA: 7
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Food in the dining hall…",
        "Tell me about yourself…",
        "A strong battalion…",
        "Gifts you’d like to receive…",
        "Thanks for everything…",
        "A word of advice…",
        "Guessing someone’s age…",
        "The existence of Crests…",
        "Capable comrades…",
        "Heart-racing memories…",
        "The ideal professor…",
        "Children at the market…",
        "Hopes for your future…",
        "The ideal relationship…",
        "Classes you might enjoy…",
        "I heard some gossip…",
        "The last battle…",
        "Close calls…",
        "I’m counting on you…",
        "The meaning of nobility…",
        "Cooking mishaps…",
        "Likable allies…",
        "The opera…",
        "Cute monks…",
        "Mighty weapons…",
        "Things that bother you…",
        "Dining partners…",
        "Monastery rules…",
        "Things you find romantic…",
        "Dreamy knights…",
        "Past laughs…",
        "Working together…",
        "Equipment upkeep…",
        "Plans for the future…",
        "You seem different…",
        "Evaluating allies…",
        "Potential training partners…",
        "You seem well…",
        "Exploring the monastery…",
        "Relaxing at the sauna…",
        "You’re doing great work…",
        "Fashion…",
        "School days…",
        "Your ambitions…",
        "First crushes…",
        "School uniforms…",
        "Fodlan’s future…",
        "Someone you look up to…"
    ],
    teaTimeComments: [
        {
            comment: "You have a way of making people feel comfortable. I almost cannot help telling you everything.",
            answers: ["Disagree", "Blush"]
        },
        {
            comment:
                "Since I was a child, I have loved riding horses and fighting. People used to tell me to act more like a noble.",
            answers: ["Laugh", "Commend"]
        },
        {
            comment:
                "You often hear stories of nobles and commoners in love. I am not against such things, but reality is not so simple.",
            answers: ["Nod", "Commend", "Chat"]
        },
        {
            comment: "When I am unhappy, I try to bestow happiness upon others. Such is the way of the true noble.",
            answers: ["Sigh", "Chat", "Praise"]
        },
        {
            comment: "You treat everyone the same, regardless of status. Perhaps I should do that as well.",
            answers: ["Commend", "Blush", "Praise"]
        },
        {
            comment: "I am extremely versatile. In fact, I fear I am a jack-of-all-trades.",
            answers: ["Laugh", "Disagree", "Praise"]
        },
        {
            comment: "I suppose the Sword of the Creator never goes dull, so you do not need to sharpen it.",
            answers: ["Nod", "Chat"]
        },
        {
            comment: "You will always remember me, will you not?",
            answers: ["Sip Tea", "Blush"]
        },
        {
            comment: "Hmm. It can be good to relax now and then. Shall we play a game?",
            answers: ["Nod", "Laugh"]
        }
    ]
};
