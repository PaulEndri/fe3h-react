import { ICharacter } from "../../interfaces/iCharacter";

export const Edelgard: ICharacter = {
    firstName: "Edelgard",
    alliance: "Black Eagles",
    name: "Edelgard von Hresvelg",
    skill: null,
    stat: null,
    crest: "Seiros",
    flower: ["Carnation"],
    gift: ["Armored Bear Stuffy", "Board Game", "Monarch Studies Book"],
    lostItems: ["Eastern Porcelain", "Time-worn Quill Pen", "White Glove"],
    tea: ["Bergamot"],
    trainings: [],
    lectures: [
        {
            question:
                "When one professor lectures many students, some will inevitably have trouble keeping up, while others will get too far ahead in their studies. I wonder how this problem might be solved…",
            answer: "Perhaps we should make lectures optional."
        },
        {
            question:
                "I know this is highly unlikely, but on the off chance that Rhea surrenders to my terms, what should I do? I would appreciate your thoughts on the matter…",
            answer: "Strip her of her power so she can’t interfere in politics."
        }
    ],
    skillProficiencies: ["Sword", "Axe", "Heavy Armor", "Authority"],
    skillWeaknesses: ["Bow", "Faith"],
    hiddenTalents: ["Reason"],
    growthRates: {
        HP: 40,
        STR: 55,
        MAG: 45,
        DEX: 45,
        SPD: 40,
        LCK: 30,
        DEF: 35,
        RES: 35,
        CHA: 60
    },
    maxStats: {
        HP: 81,
        STR: 81,
        MAG: 72,
        DEX: 61,
        SPD: 57,
        LCK: 42,
        DEF: 61,
        RES: 47,
        CHA: 85
    },
    baseStats: {
        HP: 29,
        STR: 13,
        MAG: 6,
        DEX: 5,
        SPD: 8,
        LCK: 5,
        DEF: 6,
        RES: 4,
        CHA: 10
    },
    teaTimeTopics: [
        "A new gambit…",
        "Gifts you’d like to receive…",
        "Tell me about yourself…",
        "A strong battalion…",
        "Hopes for your future…",
        "Thanks for everything…",
        "A word of advice…",
        "I heard some gossip…",
        "The existence of Crests…",
        "Books you’ve read recently…",
        "I’m counting on you…",
        "The ideal professor…",
        "Capable comrades…",
        "Monastery mysteries…",
        "The last battle…",
        "Cats…",
        "Monastery rules…",
        "The library’s collection…",
        "Classes you might enjoy…",
        "Monastery security…",
        "The opera…",
        "Close calls…",
        "Our first meeting…",
        "The view from the bridge…",
        "Dreaming of lazy days…",
        "Overcoming weaknesses…",
        "Things that bother you…",
        "Equipment upkeep…",
        "Past laughs…",
        "Things you find romantic…",
        "Evaluating allies…",
        "Plans for the future…",
        "You seem different…",
        "Exploring the monastery…",
        "Reliable allies…",
        "You’re doing great work…",
        "Favorite sweets…",
        "School days…",
        "Your ambitions…",
        "Fodlan’s future…",
        "School uniforms…"
    ],
    teaTimeComments: [
        {
            comment: "It upsets Hubert when I spend time alone with you. I’ll refrain from telling him about this.",
            answers: ["Nod", "Laugh"]
        },
        {
            comment: "If I hadn’t been born to House Hresvelg, I imagine life would have been much simpler.",
            answers: ["Praise", "Laugh"]
        },
        {
            comment: "You’re much more meticulous than I would have guessed.",
            answers: ["Nod", "Disagree", "Blush"]
        },
        {
            comment:
                "A moment of relaxation… It has been a while. I find spending these quiet moments with you rather comforting.",
            answers: ["Sip Tea", "Blush"]
        },
        {
            comment: "Do you remember the day we met? You protected me from those bandits.",
            answers: ["Nod", "Blush"]
        },
        {
            comment: "You’re always so calm.",
            answers: ["Disagree", "Sigh", "Sip tea"]
        },
        {
            comment: "One day, I’ll show you around the palace in Enbarr. It has a lovely garden.",
            answers: ["Nod"]
        },
        {
            comment:
                "Here I can take a break from the burden of being emperor. Perhaps that’s why I’m so comfortable with you.",
            answers: ["Nod", "Laugh", "Blush"]
        },
        {
            comment:
                "I have no intention of handing the Imperial throne over to any child I might have. Instead, I’ll choose an outsider who’s brilliant and kind.",
            answers: ["Commend", "Chat", "Praise"]
        }
    ]
};
