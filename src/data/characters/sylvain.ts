import { ICharacter } from "../../interfaces/iCharacter";

export const Sylvain: ICharacter = {
    firstName: "Sylvain",
    alliance: "Blue Lions",
    name: "Sylvain Jose Gautier",
    birthday: "6/5",
    skill: {
        name: "Reason",
        value: "C"
    },
    stat: {
        name: "CHA",
        value: 25
    },
    flower: [],
    tea: ["Bergamot", "Seiros Tea"],
    crest: "Gautier",
    gift: ["Board Game", "Dapper Handkerchief", "Landscape Painting"],
    lostItems: ["Crumpled Love Letter", "The History of Sreng", "Unused Lipstick"],
    trainings: [],
    lectures: [
        {
            question:
                "I’ve been trying to win the heart of this girl, but none of the fancy gifts or weet things I tell her have worked. Do you know any secret dating tricks I can use to win her heart?",
            answer: "Stay away for a while so she starts to miss you."
        },
        {
            question:
                "All this savagery, day after day, is depressing. Do you have any ideas for fun things I could do to feel better, Professor?",
            answer: "Why don’t you ask a girl out?"
        }
    ],
    skillProficiencies: ["Lance", "Axe", "Riding"],
    skillWeaknesses: ["Bow"],
    hiddenTalents: ["Reason"],
    growthRates: {
        HP: 55,
        STR: 45,
        MAG: 30,
        DEX: 35,
        SPD: 50,
        LCK: 35,
        DEF: 40,
        RES: 25,
        CHA: 40
    },
    maxStats: {
        HP: 98,
        STR: 65,
        MAG: 42,
        DEX: 48,
        SPD: 70,
        LCK: 49,
        DEF: 56,
        RES: 38,
        CHA: 57
    },
    baseStats: {
        HP: 22,
        STR: 9,
        MAG: 5,
        DEX: 5,
        SPD: 8,
        LCK: 6,
        DEF: 6,
        RES: 2,
        CHA: 7
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Guessing someone’s age…",
        "Shareable snacks…",
        "A place you’d like to visit…",
        "Heart-racing memories…",
        "Strange fish in the pond…",
        "Books you’ve read recently…",
        "Hopes for your future…",
        "Tell me about yourself…",
        "Capable comrades…",
        "I heard some gossip…",
        "Thanks for everything…",
        "Classes you might enjoy…",
        "I’m counting on you…",
        "The courtyard couple…",
        "Close calls…",
        "Likable allies…",
        "The ideal relationship…",
        "Cooking mishaps…",
        "Monastery mysteries…",
        "The library’s collection…",
        "Cute monks…",
        "Our first meeting…",
        "The opera…",
        "Dating escapades…",
        "Overcoming weaknesses…",
        "The view from the bridge…",
        "Dining partners…",
        "Past laughs…",
        "Things that bother you…",
        "Evaluating allies…",
        "Perfect recipes…",
        "Things you find romantic…",
        "Exploring the monastery…",
        "Plans for the future…",
        "Working together…",
        "Fashion…",
        "Potential training partners…",
        "You seem different…",
        "Favorite sweets…",
        "Relaxing at the sauna…",
        "You seem well…",
        "First crushes…",
        "Reliable allies…",
        "You’re doing great work…",
        "Food in the dining hall…",
        "School days…",
        "Gifts you’d like to receive…",
        "School uniforms…"
    ],
    teaTimeComments: [
        {
            comment: "Everyone has their own reason to fight. At least I’m honest about mine.",
            answers: ["Commend", "Praise"]
        },
        {
            comment: "Opera, art, literature, I love ’em. They always give you something to talk about.",
            answers: ["Commend", "Chat"]
        },
        {
            comment: "You’re always really stoic.",
            answers: ["Chat", "Sip tea"]
        },
        {
            comment: "I was thinking I should do some proper training sometime. Care to join me, Professor?",
            answers: ["Praise", "Sip tea"]
        },
        {
            comment: "Sometimes, I’m surprised how warm the monastery is. I wish my parents’ home was like this.",
            answers: ["Chat", "Praise"]
        },
        {
            comment: "Somebody gave me some candy earlier. I should have brought some with me.",
            answers: ["Nod", "Sip tea"]
        },
        {
            comment: "I feel like you can see right through me.",
            answers: ["Disagree", "Sip tea"]
        },
        {
            comment:
                "I’m in a bit of trouble with a girl right now. Although, I can’t think of a time when that hasn’t been the case.",
            answers: ["Nod", "Commend", "Praise"]
        },
        {
            comment: "You are really curious, aren’t you? Eh, I’m glad you’re like that.",
            answers: ["Laugh", "Blush"]
        }
    ]
};
