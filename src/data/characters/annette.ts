import { ICharacter } from "../../interfaces/iCharacter";

export const Annette: ICharacter = {
    firstName: "Annette",
    alliance: "Blue Lions",
    name: "Annette Fantine Dominic",
    birthday: "5/9",
    crest: "Dominic",
    skill: {
        name: "Faith",
        value: "B"
    },
    stat: {
        name: "MAG",
        value: 10
    },
    flower: [],
    gift: ["Arithmetic Textbook", "Book of Sheet Music", "Stylish Hair Clip"],
    tea: ["Sweet-Apple Blend", "Rose Petal Blend", "Almond Blend"],
    lostItems: ["School of Sorcery Book", "Unfinished Score", "Wax Diptych"],
    trainings: [],
    lectures: [
        {
            question:
                "Lectures about strategy or reason require so much focus, I end up absolutely famished! But if I go to class after a big meal, I can’t help getting sleepy…",
            answer: "Bring along a snack, just in case."
        },
        {
            question:
                "Just thinking about how, even now, someone out there is fighting for something, I just can’t seem to sit still, even during my breaks. What should I do at times like that?",
            answer: "You could assist with my daily tasks, if you’d like"
        }
    ],
    skillProficiencies: ["Axe", "Reason", "Authority"],
    skillWeaknesses: ["Heavy Armor", "Bow"],
    hiddenTalents: [],
    growthRates: {
        HP: 25,
        STR: 30,
        MAG: 50,
        DEX: 50,
        SPD: 35,
        LCK: 35,
        DEF: 20,
        RES: 30,
        CHA: 35
    },
    maxStats: {
        HP: 55,
        STR: 43,
        MAG: 73,
        DEX: 69,
        SPD: 50,
        LCK: 49,
        DEF: 40,
        RES: 41,
        CHA: 49
    },
    baseStats: {
        HP: 23,
        STR: 6,
        MAG: 11,
        DEX: 7,
        SPD: 7,
        LCK: 6,
        DEF: 5,
        RES: 4,
        CHA: 6
    },
    teaTimeTopics: [
        "A new gambit…",
        "Gifts you’d like to receive…",
        "Thanks for everything…",
        "A place you’d like to visit…",
        "Guessing someone’s age…",
        "The courtyard couple…",
        "A word of advice…",
        "Hopes for your future…",
        "The ideal professor…",
        "Books you’ve read recently…",
        "I’m counting on you…",
        "The ideal relationship…",
        "Children at the market…",
        "Kitchen catastrophes…",
        "The last battle…",
        "Close calls…",
        "Likable allies…",
        "The library’s collection…",
        "Cooking mishaps…",
        "Our first meeting…",
        "The opera…",
        "Cute monks…",
        "Overcoming weaknesses…",
        "Things that bother you…",
        "Dining partners…",
        "Past laughs…",
        "Things you find romantic…",
        "Dreamy knights…",
        "Perfect recipes…",
        "Working together…",
        "Equipment upkeep…",
        "Plans for the future…",
        "You seem different…",
        "Evaluating allies…",
        "Relaxing at the sauna…",
        "You seem well…",
        "Exploring the monastery…",
        "School days…",
        "You’re doing great work…",
        "Fashion…",
        "School uniforms…",
        "Your ambitions…",
        "Favorite sweets…",
        "Shareable snacks…",
        "Food in the dining hall…",
        "Someone you look up to…"
    ],
    teaTimeComments: [
        {
            comment: "No effort is ever in vain… My father used to tell me that.",
            answers: ["Commend", "Chat", "Praise"]
        },
        {
            comment: "The only way to clean is to clean with all your might! Otherwise you’re wasting your time!",
            answers: ["Nod"]
        },
        {
            comment: "Maybe I should have baked us a cake or something…",
            answers: ["Nod", "Laugh"]
        },
        {
            comment: "I feel so at ease here! I really like spending time with you.",
            answers: ["Laugh", "Blush"]
        },
        {
            comment: "I remember the first time I met you. Right away, it was like talking to an old friend.",
            answers: ["Laugh"]
        },
        {
            comment: "I broke a plate again the other day… I wish I could be as calm and graceful as you are.",
            answers: ["Disagree", "Chat", "Praise"]
        },
        {
            comment: "There’s an equation I’ve been thinking about… Can you help me with it later?",
            answers: ["Nod", "Commend", "Praise"]
        },
        {
            comment: "The confectioner is back in town! Would you like to go with me sometime?",
            answers: ["Nod"]
        },
        {
            comment: "When I’m with you…I feel like I can be myself.",
            answers: ["Laugh", "Blush"]
        }
    ]
};
