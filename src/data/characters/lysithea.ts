import { ICharacter } from "../../interfaces/iCharacter";

export const Lysithea: ICharacter = {
    firstName: "Lysithea",
    alliance: "Golden Deer",
    name: "Lysithea von Ordelia",
    birthday: "2/28",
    skill: {
        name: "Faith",
        value: "B"
    },
    stat: {
        name: "MAG",
        value: 15
    },
    flower: ["Lily"],
    tea: ["Sweet-Apple Blend", "Southern Fruit Blend", "Crescent-Moon Tea", "Honeyed-Fruit Blend"],
    crest: "Charon, Gloucester",
    gift: ["Arithmetic Textbook", "Armored Bear Stuffy", "Book of Crest Designs", "Tasty Baked Treat"],
    lostItems: ["Encyclopedia of Sweets", "New Bottle of Perfume", "Princess Doll"],
    trainings: [],
    lectures: [
        {
            question:
                "There’s so much to do and never enough time in which to do it. Sleep is a nuisance, but my body forces me to slow down, even though my mind doesn’t want to. Do you have any tips for shaking tired feelings away?",
            answer: "Sleeping when you’re tired is best for you."
        },
        {
            question:
                "I heard rumors about ghosts roaming the monastery…. I’m certainly not scared, nor do I have time to worry about it, but...uh… You should probably do something about it, for the sake of the others!",
            answer: "Let’s bring more candles to the halls to brighten things up."
        }
    ],
    skillProficiencies: ["Reason", "Faith", "Authority"],
    skillWeaknesses: ["Sword", "Axe", "Bow", "Heavy Armor"],
    hiddenTalents: ["Sword"],
    growthRates: {
        HP: 20,
        STR: 15,
        MAG: 60,
        DEX: 60,
        SPD: 50,
        LCK: 15,
        DEF: 10,
        RES: 25,
        CHA: 25
    },
    maxStats: {
        HP: 48,
        STR: 30,
        MAG: 86,
        DEX: 82,
        SPD: 69,
        LCK: 40,
        DEF: 36,
        RES: 41,
        CHA: 44
    },
    baseStats: {
        HP: 22,
        STR: 4,
        MAG: 11,
        DEX: 7,
        SPD: 7,
        LCK: 4,
        DEF: 3,
        RES: 4,
        CHA: 5
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gifts you’d like to receive…",
        "School uniforms…",
        "A new gambit…",
        "Hopes for your future…",
        "Shareable snacks…",
        "A place you’d like to visit…",
        "I heard some gossip…",
        "Someone you look up to…",
        "Books you’ve read recently…",
        "I’m counting on you…",
        "Strange fish in the pond…",
        "Capable comrades…",
        "Likable allies…",
        "Tell me about yourself…",
        "Cats…",
        "Monastery mysteries…",
        "Thanks for everything…",
        "Classes you might enjoy…",
        "Monastery rules…",
        "The existence of Crests…",
        "Close calls…",
        "Our first meeting…",
        "The ideal professor…",
        "Cooking mishaps…",
        "Overcoming weaknesses…",
        "The last battle…",
        "Evaluating allies…",
        "Past laughs…",
        "The library’s collection…",
        "Fashion…",
        "Perfect recipes…",
        "The thrill of sweets…",
        "Favorite sweets…",
        "Plans for the future…",
        "Working together…",
        "Fodlan’s future…",
        "Relaxing at the sauna…",
        "You seem different…",
        "Food in the dining hall…",
        "School days…",
        "Your ambitions…"
    ],
    teaTimeComments: [
        {
            comment: "I know I could stand to lighten up from time to time.",
            answers: ["Admonish", "Chat", "Praise"]
        },
        {
            comment: "One of the few pleasures I find is in eating sweets. It’s…kind of embarrassing.",
            answers: ["Nod", "Laugh"]
        },
        {
            comment: "Do you believe in ghosts, Professor? Just wondering.",
            answers: ["Laugh", "Chat"]
        },
        {
            comment: "If I hadn’t met you, I don’t think I’d be who I am today.",
            answers: ["Laugh", "Disagree"]
        },
        {
            comment: "It’s not in me to put energy into things that won’t yield results. I just don’t see the point.",
            answers: ["Admonish", "Chat"]
        },
        {
            comment: "Talking to you feels worth my time. I feel there’s a lot I can learn from you.",
            answers: ["Laugh", "Blush"]
        },
        {
            comment:
                "I wonder what I’d do, who I’d be, if I gave everything up for freedom. I think about that all the time.",
            answers: ["Nod", "Chat"]
        },
        {
            comment: "If not for Crests, the world might’ve been a more peaceful place.",
            answers: ["Sigh", "Chat", "Praise"]
        },
        {
            comment: "I’m exhausted by all my incessant thoughts. I just want to empty my mind for now.",
            answers: ["Nod", "Laugh", "Sip tea"]
        }
    ]
};
