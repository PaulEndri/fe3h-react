import { ICharacter } from "../../interfaces/iCharacter";

export const Alois: ICharacter = {
    firstName: "Alois",
    alliance: "Church of Seiros",
    name: "Alois",
    crest: "None",
    birthday: "12/1",
    skill: null,
    stat: {
        name: "Level",
        value: 15
    },
    flower: ["Sunflower"],
    tea: ["Crescent-Moon Tea", "Honeyed-Fruit Blend"],
    gift: ["Ancient Coin", "Floral Adornment", "Fishing Float"],
    lostItems: ["Foreign Gold Coin", "Introduction to Magic", "Mysterious Notebook"],
    trainings: ["Axe", "Brawl", "Heavy Armor"],
    lectures: [
        {
            question:
                "The anniversary of Jeralt’s death is coming up. I’d like to put something on his grave, so that he knows we’re all thinking of him. What item would make him happiest?",
            answer: "The best bottle of booze you can find."
        },
        {
            question:
                "As a member of the knights, I sometimes travel by ship for my missions. But I have a bit of a weak stomach...What can I do to tamp down my sea sickness?",
            answer: "Medicine and magic should help"
        }
    ],
    skillProficiencies: ["Axe", "Brawling", "Heavy Armor"],
    skillWeaknesses: ["Reason", "Flying"],
    hiddenTalents: [],
    growthRates: {
        HP: 45,
        STR: 45,
        MAG: 20,
        DEX: 35,
        SPD: 40,
        LCK: 30,
        DEF: 40,
        RES: 20,
        CHA: 40
    },
    maxStats: {
        HP: 86,
        STR: 71,
        MAG: 33,
        DEX: 48,
        SPD: 56,
        LCK: 42,
        DEF: 55,
        RES: 37,
        CHA: 57
    },
    baseStats: {
        HP: 28,
        STR: 9,
        MAG: 4,
        DEX: 5,
        SPD: 6,
        LCK: 5,
        DEF: 5,
        RES: 2,
        CHA: 7
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gardening mishaps…",
        "Someone you look up to…",
        "A new gambit…",
        "Gifts you’d like to receive…",
        "Strange fish in the pond…",
        "A place you’d like to visit…",
        "Good jokes…",
        "Tell me about yourself…",
        "A strong battalion…",
        "I heard some gossip…",
        "Thanks for everything…",
        "A word of advice…",
        "I’m counting on you…",
        "The ideal professor…",
        "Cats…",
        "Mighty weapons…",
        "The last battle…",
        "Children at the market…",
        "Monastery rules…",
        "The opera…",
        "Close calls…",
        "Monastery security…",
        "The view from the bridge…",
        "Cooking mishaps…",
        "Our first meeting…",
        "Things that bother you…",
        "Equipment upkeep…",
        "Overcoming weaknesses…",
        "Working hours for guards…",
        "Exploring the monastery…",
        "Past laughs…",
        "Working together…",
        "Favorite sweets…",
        "Perfect recipes…",
        "You seem well…",
        "First crushes…",
        "Plans for the future…",
        "You’re doing great work…",
        "Fodlan’s future…",
        "School days…",
        "Your ambitions…",
        "Food in the dining hall…",
        "Shareable snacks…"
    ],
    teaTimeComments: [
        {
            comment: "You don’t look much like Captain Jeralt, but you remind me of him.",
            answers: ["Nod", "Commend", "Disagree"]
        },
        {
            comment: "There’s nothing worse than trying to explain a joke.",
            answers: ["Commend"]
        },
        {
            comment: "Ghosts, sailing, spicy foods… These are the fears I have yet to conquer.",
            answers: ["Laugh"]
        },
        {
            comment: "You should go fishing with me soon! The other day, I almost caught one.",
            answers: ["Laugh", "Chat", "Praise"]
        },
        {
            comment: "Don’t forget, if you ever need anything, just let me know.",
            answers: ["Nod", "Chat"]
        },
        {
            comment: "No judge, not even the goddess herself, will bring me to justice. Though I deserve it.",
            answers: ["Sigh", "Praise"]
        },
        {
            comment: "The other night, I felt a ghostly presence in my bed. I leapt to my feet, but…no one was there.",
            answers: ["Laugh"]
        },
        {
            comment: "I’m your big brother Alois! You can ask me anything you want.",
            answers: ["Nod", "Laugh", "Commend"]
        },
        {
            comment: "When the war’s over, I can finally go home to my wife and daughter…",
            answers: ["Nod", "Praise"]
        }
    ]
};
