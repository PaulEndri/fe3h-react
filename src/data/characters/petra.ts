import { ICharacter } from "../../interfaces/iCharacter";

export const Petra: ICharacter = {
    firstName: "Petra",
    alliance: "Black Eagles",
    name: "Petra Macneary",
    birthday: "9/7",
    skill: {
        name: "Riding",
        value: "C"
    },
    stat: {
        name: "DEX",
        value: 10
    },
    flower: ["Sunflower"],
    tea: ["Four-Spice Blend", "Ginger Tea"],
    crest: "None",
    gift: ["Exotic Spices", "Hunting Dagger", "Smoked Meat"],
    lostItems: ["Annotated Dictionary", "Exotic Feather", "Small Tan Hide"],
    trainings: [],
    lectures: [
        {
            question:
                "I am having a question. I wish for improvement of my lance skills. But I am having uncertainty about how to be training effectively. What should I be doing?",
            answer: "Try studying the movements of others for improvement."
        },
        {
            question:
                "As I am fighting more, my arrows are decreasing in quality. They are not flying as far and have less accuracy. What can I be doing differently?",
            answer:
                "New bowstrings could help you shoot with more force.New bowstrings could help you shoot with more force."
        }
    ],
    skillProficiencies: ["Sword", "Axe", "Bow", "Flying"],
    skillWeaknesses: ["Reason", "Faith"],
    hiddenTalents: [],
    growthRates: {
        HP: 45,
        STR: 40,
        MAG: 25,
        DEX: 50,
        SPD: 60,
        LCK: 45,
        DEF: 30,
        RES: 15,
        CHA: 35
    },
    maxStats: {
        HP: 83,
        STR: 59,
        MAG: 36,
        DEX: 69,
        SPD: 85,
        LCK: 63,
        DEF: 42,
        RES: 35,
        CHA: 63
    },
    baseStats: {
        HP: 25,
        STR: 9,
        MAG: 3,
        DEX: 7,
        SPD: 10,
        LCK: 7,
        DEF: 5,
        RES: 2,
        CHA: 6
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Guessing someone’s age…",
        "Someone you look up to…",
        "A new gambit…",
        "Heart-racing memories…",
        "Strange fish in the pond…",
        "A place you’d like to visit…",
        "Hopes for your future…",
        "Swimming in the ocean…",
        "A strong battalion…",
        "I’m counting on you…",
        "Tell me about yourself…",
        "A word of advice…",
        "Likable allies…",
        "Thanks for everything…",
        "Books you’ve read recently…",
        "Mighty weapons…",
        "The ideal relationship…",
        "Capable comrades…",
        "Monastery mysteries…",
        "The last battle…",
        "Cats…",
        "Monastery rules…",
        "The library’s collection…",
        "Classes you might enjoy…",
        "Monastery security…",
        "The view from the bridge…",
        "Close calls…",
        "Overcoming weaknesses…",
        "Things you find romantic…",
        "Equipment upkeep…",
        "Past laughs…",
        "Working hours for guards…",
        "Evaluating allies…",
        "Plans for the future…",
        "Working together…",
        "Exploring the monastery…",
        "Potential training partners…",
        "You seem different…",
        "Fashion…",
        "Relaxing at the sauna…",
        "You seem well…",
        "Fodlan’s future…",
        "School days…",
        "You’re doing great work…",
        "Gifts you’d like to receive…",
        "Shareable snacks…",
        "Your ambitions…"
    ],
    teaTimeComments: [
        {
            comment: "If you are having problems, I am happy to be listening.",
            answers: ["Chat"]
        },
        {
            comment: "The ocean is far from Garreg Mach… I am feeling a bit lonely at times.",
            answers: ["Sigh", "Praise"]
        },
        {
            comment: "Next I will be studying, training, researching, sparring… I am having a lot to do!",
            answers: ["Admonish", "Praise"]
        },
        {
            comment: "You are working with much…diligence. I am admiring of you.",
            answers: ["Laugh", "Disagree"]
        },
        {
            comment: "You are not remembering where your homeland is? I am thinking that is strange…",
            answers: ["Sigh", "Chat"]
        },
        {
            comment: "One day I am wanting to show you the wonderful land of Brigid and its abundant nature.",
            answers: ["Nod", "Blush"]
        },
        {
            comment: "It gives me great pleasure to be speaking with you like this.",
            answers: ["Sip tea", "Blush"]
        },
        {
            comment: "In Enbarr, I was a hostage. I was spending much time locked away. Books gave me great comfort.",
            answers: ["Sigh", "Praise"]
        },
        {
            comment: "I am requiring much sleep to be staying alert. At least a quarter of each day.",
            answers: ["Laugh", "Admonish"]
        }
    ]
};
