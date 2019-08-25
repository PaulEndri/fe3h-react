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
    }
};
