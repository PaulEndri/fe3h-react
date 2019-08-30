import { ICharacter } from "../../interfaces/iCharacter";

export const Hanneman: ICharacter = {
    firstName: "Hanneman",
    alliance: "Church of Seiros",
    name: "Hanneman von Essar",
    birthday: "2/8",
    skill: null,
    stat: {
        name: "Level",
        value: 15
    },
    flower: [],
    gift: ["Arithmetic Textbook", "Book of Crest Designs", "Dapper Handkerchief", "Tea Leaves"],
    tea: ["Bergamot", "Sweet-Apple Blend", "Honeyed-Fruit Blend", "Cinnamon Blend"],
    crest: "Indech",
    lostItems: ["Hammer and Chisel", "Lens Cloth", "Sketch of a Sigil"],
    trainings: ["Bow", "Reason", "Riding"],
    lectures: [
        {
            question:
                "When I ask them to take part in my experiments, even the most industrious students run away from me. No matter how sincerely I plead! Do you have any suggestions?",
            answer: 'Make the "Experiment" a "job" and pay them handsomely.'
        },
        {
            question:
                "When I do nothing but fight, my spirits falter and I lose the will to keep things tidy. This is when my room falls to disorder, and my spirits falter even more Is there no way to break this cycle?",
            answer: "Take a short break to do something that raises your spirits."
        }
    ],
    skillProficiencies: ["Bow", "Reason", "Riding"],
    skillWeaknesses: ["Heavy Armor", "Flying"],
    hiddenTalents: [],
    growthRates: {
        HP: 40,
        STR: 30,
        MAG: 55,
        DEX: 45,
        SPD: 20,
        LCK: 35,
        DEF: 25,
        RES: 40,
        CHA: 35
    },
    maxStats: {
        HP: 77,
        STR: 46,
        MAG: 78,
        DEX: 62,
        SPD: 35,
        LCK: 49,
        DEF: 36,
        RES: 57,
        CHA: 48
    },
    baseStats: {
        HP: 25,
        STR: 6,
        MAG: 10,
        DEX: 6,
        SPD: 6,
        LCK: 4,
        DEF: 5,
        RES: 7,
        CHA: 5
    },
    teaTimeTopics: [
        "A dinner invitation…",
        "Gifts you’d like to receive…",
        "School days…",
        "A new gambit…",
        "Heart-racing memories…",
        "Shareable snacks…",
        "A place you’d like to visit…",
        "Hopes for your future…",
        "Tell me about yourself…",
        "A word of advice…",
        "I heard some gossip…",
        "Thanks for everything…",
        "Books you’ve read recently…",
        "I’m counting on you…",
        "The existence of Crests…",
        "Capable comrades…",
        "Likable allies…",
        "The ideal professor…",
        "Cooking mishaps…",
        "Monastery mysteries…",
        "The last battle…",
        "Equipment upkeep…",
        "Monastery rules…",
        "The library’s collection…",
        "Evaluating allies…",
        "Monastery security…",
        "Things that bother you…",
        "Exploring the monastery…",
        "Our first meeting…",
        "You seem well…",
        "Fashion…",
        "Overcoming weaknesses…",
        "You’re doing great work…",
        "Favorite sweets…",
        "Past laughs…",
        "Your research…",
        "Fodlan’s future…",
        "Plans for the future…",
        "Food in the dining hall…",
        "Relaxing at the sauna…"
    ],
    teaTimeComments: [
        {
            comment: "The “Ashen Demon.” What an unbelievable title, knowing who you are now…",
            answers: ["Disagree", "Sip tea"]
        },
        {
            comment: "Since I have never found out the secret of your birth, I am exceptionally intrigued.",
            answers: ["Blush", "Chat"]
        },
        {
            comment: "Why don’t you come by later? I’d very much like to dive into some research together.",
            answers: ["Commend", "Sip tea"]
        },
        {
            comment:
                "The Crest of Flames shares many traits with other Crests. Yet, it also has many unique characteristics.",
            answers: ["Nod", "Chat"]
        },
        {
            comment: "It was my own choice to leave behind my noble title and holdings. I’ll not be going back.",
            answers: ["Commend", "Praise"]
        },
        {
            comment: "The monastery holds so many documents in its library, yet certain facts continue to elude me.",
            answers: ["Commend", "Chat", "Praise"]
        },
        {
            comment:
                "All of my hard work, my unrelenting study of Crests, is all in the name of my sister, rest her soul.",
            answers: ["Sigh", "Praise"]
        },
        {
            comment: "I never can stop talking about Crests, can I? Don’t you dare laugh at me.",
            answers: ["Laugh", "Admonish"]
        },
        {
            comment:
                "Can’t be helped. I’ll tell you about my favorite food again. Or perhaps we should talk about drinks?",
            answers: ["Admonish", "Laugh", "Sip tea"]
        }
    ]
};
