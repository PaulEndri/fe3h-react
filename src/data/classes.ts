import { IClass } from "../interfaces/iClass";

export interface IIndexedJobs {
    [key: string]: IClass;
}

const classes: IClass[] = [
    {
        Name: "Noble",
        HP: 0,
        STR: 0,
        MAG: 0,
        DEX: 0,
        SPD: 0,
        LCK: 0,
        DEF: 0,
        RES: 0,
        CHA: 5,
        Tier: "unique",
        Requirements: []
    },
    {
        Name: "Commoner",
        HP: 0,
        STR: 0,
        MAG: 0,
        DEX: 0,
        SPD: 0,
        LCK: 0,
        DEF: 0,
        RES: 0,
        CHA: 0,
        Tier: "unique",
        Requirements: []
    },
    {
        Name: "Dancer",
        HP: 20,
        STR: -5,
        MAG: 0,
        DEX: 0,
        SPD: 0,
        LCK: 0,
        DEF: -5,
        RES: -5,
        CHA: 10,
        Tier: "unique",
        Requirements: []
    },
    {
        Name: "Myrmidon",
        HP: 10,
        STR: 0,
        MAG: 0,
        DEX: 0,
        SPD: 5,
        LCK: 0,
        DEF: 0,
        RES: -5,
        CHA: 5,
        Tier: "beginner",
        Requirements: [
            {
                name: "Sword",
                value: "D"
            }
        ]
    },
    {
        Name: "Soldier",
        HP: 10,
        STR: 0,
        MAG: 0,
        DEX: 5,
        SPD: 0,
        LCK: 0,
        DEF: 0,
        RES: -5,
        CHA: 5,
        Tier: "beginner",
        Requirements: [
            {
                name: "Lance",
                value: "D"
            }
        ]
    },
    {
        Name: "Fighter",
        HP: 10,
        STR: 5,
        MAG: 0,
        DEX: 0,
        SPD: 0,
        LCK: 0,
        DEF: 0,
        RES: -5,
        CHA: 5,
        Tier: "beginner",
        Requirements: [
            {
                name: "Axe",
                value: "D"
            },
            {
                name: "Bow",
                value: "D"
            },
            {
                name: "Brawling",
                value: "D"
            }
        ]
    },
    {
        Name: "Monk",
        HP: 5,
        STR: 0,
        MAG: 0,
        DEX: 0,
        SPD: 0,
        LCK: 0,
        DEF: 0,
        RES: 5,
        CHA: 5,
        Tier: "beginner",
        Requirements: [
            {
                name: "Reason",
                value: "D"
            },
            {
                name: "Faith",
                value: "D"
            }
        ]
    },
    {
        Name: "Lord",
        HP: 20,
        STR: 0,
        MAG: 0,
        DEX: 10,
        SPD: 0,
        LCK: 0,
        DEF: 0,
        RES: 0,
        CHA: 10,
        Tier: "unique",
        Requirements: [
            {
                name: "Sword",
                value: "D+"
            },
            {
                name: "Authority",
                value: "C"
            }
        ]
    },
    {
        Name: "Mercenary",
        HP: 20,
        STR: 5,
        MAG: 0,
        DEX: 0,
        SPD: 5,
        LCK: 0,
        DEF: 0,
        RES: -5,
        CHA: 5,
        Tier: "intermediate",
        Requirements: [
            {
                name: "Sword",
                value: "C"
            }
        ]
    },
    {
        Name: "Thief",
        HP: 20,
        STR: 0,
        MAG: 0,
        DEX: 10,
        SPD: 10,
        LCK: 0,
        DEF: 0,
        RES: 0,
        CHA: 5,
        Tier: "intermediate",
        Requirements: [
            {
                name: "Sword",
                value: "C"
            }
        ]
    },
    {
        Name: "Armored Knight",
        HP: 20,
        STR: 0,
        MAG: 0,
        DEX: 0,
        SPD: -10,
        LCK: 0,
        DEF: 10,
        RES: -5,
        CHA: 5,
        Tier: "intermediate",
        Requirements: [
            {
                name: "Axe",
                value: "C"
            },
            {
                name: "Heavy Armor",
                value: "D"
            }
        ]
    },
    {
        Name: "Cavalier",
        HP: 20,
        STR: 5,
        MAG: 0,
        DEX: 5,
        SPD: -10,
        LCK: 0,
        DEF: 5,
        RES: 0,
        CHA: 5,
        Tier: "intermediate",
        Requirements: [
            {
                name: "Lance",
                value: "C"
            },
            {
                name: "Riding",
                value: "D"
            }
        ]
    },
    {
        Name: "Brigand",
        HP: 30,
        STR: 10,
        MAG: 0,
        DEX: 0,
        SPD: 0,
        LCK: 0,
        DEF: 0,
        RES: -5,
        CHA: 5,
        Tier: "intermediate",
        Requirements: [
            {
                name: "Axe",
                value: "C"
            }
        ]
    },
    {
        Name: "Archer",
        HP: 5,
        STR: 0,
        MAG: 0,
        DEX: 10,
        SPD: 0,
        LCK: 5,
        DEF: 0,
        RES: 0,
        CHA: 5,
        Tier: "intermediate",
        Requirements: [
            {
                name: "Bow",
                value: "C"
            }
        ]
    },
    {
        Name: "Brawler",
        HP: 30,
        STR: 0,
        MAG: -10,
        DEX: 10,
        SPD: 10,
        LCK: 0,
        DEF: 0,
        RES: -10,
        CHA: 5,
        Tier: "intermediate",
        Requirements: [
            {
                name: "Brawling",
                value: "C"
            }
        ]
    },
    {
        Name: "Mage",
        HP: 5,
        STR: -5,
        MAG: 10,
        DEX: 5,
        SPD: 0,
        LCK: 0,
        DEF: -5,
        RES: 5,
        CHA: 5,
        Tier: "intermediate",
        Requirements: [
            {
                name: "Reason",
                value: "C"
            }
        ]
    },
    {
        Name: "Dark Mage",
        HP: 5,
        STR: -5,
        MAG: 10,
        DEX: 5,
        SPD: 0,
        LCK: 0,
        DEF: -5,
        RES: 5,
        CHA: 0,
        Tier: "intermediate",
        Requirements: [
            {
                name: "Reason",
                value: "C"
            }
        ]
    },
    {
        Name: "Priest",
        HP: 5,
        STR: -5,
        MAG: 5,
        DEX: 5,
        SPD: 0,
        LCK: 0,
        DEF: -5,
        RES: 10,
        CHA: 10,
        Tier: "intermediate",
        Requirements: [
            {
                name: "Faith",
                value: "C"
            }
        ]
    },
    {
        Name: "Pegasus Knight",
        HP: 15,
        STR: 0,
        MAG: 0,
        DEX: 0,
        SPD: 10,
        LCK: 0,
        DEF: 0,
        RES: 5,
        CHA: 10,
        Tier: "intermediate",
        Requirements: [
            {
                name: "Lance",
                value: "C"
            },
            {
                name: "Flying",
                value: "D"
            }
        ]
    },
    {
        Name: "Armored Lord",
        HP: 20,
        STR: 5,
        MAG: 5,
        DEX: 0,
        SPD: 0,
        LCK: 0,
        DEF: 5,
        RES: 5,
        CHA: 10,
        Tier: "unique"
    },
    {
        Name: "High Lord",
        HP: 20,
        STR: 5,
        MAG: 0,
        DEX: 5,
        SPD: 0,
        LCK: 0,
        DEF: 5,
        RES: 0,
        CHA: 10,
        Tier: "unique"
    },
    {
        Name: "Wyvern Master",
        HP: 20,
        STR: 10,
        MAG: 0,
        DEX: 0,
        SPD: 5,
        LCK: 0,
        DEF: 5,
        RES: 0,
        CHA: 10,
        Tier: "unique"
    },
    {
        Name: "Hero",
        HP: 30,
        STR: 10,
        MAG: 0,
        DEX: 0,
        SPD: 10,
        LCK: 0,
        DEF: 0,
        RES: -5,
        CHA: 5,
        Tier: "advanced",
        Gender: "M",
        Requirements: [
            {
                name: "Sword",
                value: "B"
            },
            {
                name: "Axe",
                value: "C"
            }
        ]
    },
    {
        Name: "Swordmaster",
        HP: 25,
        STR: 10,
        MAG: 0,
        DEX: 0,
        SPD: 20,
        LCK: 0,
        DEF: 0,
        RES: -5,
        CHA: 5,
        Tier: "advanced",
        Requirements: [
            {
                name: "Sword",
                value: "A"
            }
        ]
    },
    {
        Name: "Assassin",
        HP: 20,
        STR: 0,
        MAG: 0,
        DEX: 20,
        SPD: 20,
        LCK: 0,
        DEF: 0,
        RES: 0,
        CHA: 0,
        Tier: "advanced",
        Requirements: [
            {
                name: "Sword",
                value: "B"
            },
            {
                name: "Bow",
                value: "C"
            }
        ]
    },
    {
        Name: "Fortress Knight",
        HP: 30,
        STR: 10,
        MAG: 0,
        DEX: 0,
        SPD: -10,
        LCK: 0,
        DEF: 15,
        RES: 0,
        CHA: 5,
        Tier: "advanced",
        Requirements: [
            {
                name: "Axe",
                value: "B"
            },
            {
                name: "Heavy Armor",
                value: "B"
            }
        ]
    },
    {
        Name: "Paladin",
        HP: 30,
        STR: 10,
        MAG: 0,
        DEX: 5,
        SPD: -10,
        LCK: 5,
        DEF: 5,
        RES: 5,
        CHA: 5,
        Tier: "advanced",
        Requirements: [
            {
                name: "Lance",
                value: "B"
            },
            {
                name: "Riding",
                value: "B"
            }
        ]
    },
    {
        Name: "Wyvern Rider",
        HP: 30,
        STR: 10,
        MAG: -5,
        DEX: 0,
        SPD: 0,
        LCK: 0,
        DEF: 5,
        RES: -5,
        CHA: 5,
        Tier: "advanced",
        Requirements: [
            {
                name: "Axe",
                value: "B"
            },
            {
                name: "Flying",
                value: "C"
            }
        ]
    },
    {
        Name: "Warrior",
        HP: 40,
        STR: 15,
        MAG: -5,
        DEX: 0,
        SPD: 0,
        LCK: 0,
        DEF: 0,
        RES: 0,
        CHA: 5,
        Tier: "advanced",
        Requirements: [
            {
                name: "Axe",
                value: "A"
            }
        ]
    },
    {
        Name: "Sniper",
        HP: 10,
        STR: 5,
        MAG: 0,
        DEX: 20,
        SPD: 0,
        LCK: 10,
        DEF: 0,
        RES: 0,
        CHA: 5,
        Tier: "advanced",
        Requirements: [
            {
                name: "Bow",
                value: "A"
            }
        ]
    },
    {
        Name: "Grappler",
        HP: 40,
        STR: 10,
        MAG: 0,
        DEX: 10,
        SPD: 10,
        LCK: 0,
        DEF: 0,
        RES: 0,
        CHA: 5,
        Tier: "advanced",
        Gender: "F",
        Requirements: [
            {
                name: "Brawling",
                value: "A"
            }
        ]
    },
    {
        Name: "Warlock",
        HP: 10,
        STR: 0,
        MAG: 10,
        DEX: 0,
        SPD: 0,
        LCK: 0,
        DEF: -5,
        RES: 5,
        CHA: 5,
        Tier: "advanced",
        Requirements: [
            {
                name: "Reason",
                value: "A"
            }
        ]
    },
    {
        Name: "Dark Bishop",
        HP: 10,
        STR: 0,
        MAG: 10,
        DEX: 0,
        SPD: 0,
        LCK: 0,
        DEF: -5,
        RES: 5,
        CHA: 0,
        Tier: "advanced",
        Requirements: [
            {
                name: "Reason",
                value: "A"
            }
        ]
    },
    {
        Name: "Bishop",
        HP: 10,
        STR: 0,
        MAG: 10,
        DEX: 0,
        SPD: 0,
        LCK: 10,
        DEF: -5,
        RES: 5,
        CHA: 10,
        Tier: "advanced",
        Requirements: [
            {
                name: "Faith",
                value: "A"
            }
        ]
    },
    {
        Name: "Enlightened One",
        HP: 20,
        STR: 10,
        MAG: 10,
        DEX: 0,
        SPD: 0,
        LCK: 0,
        DEF: 5,
        RES: 0,
        CHA: 5,
        Tier: "unique"
    },
    {
        Name: "Emperor",
        HP: 30,
        STR: 10,
        MAG: 10,
        DEX: 0,
        SPD: 0,
        LCK: 0,
        DEF: 5,
        RES: 5,
        CHA: 10,
        Tier: "unique"
    },
    {
        Name: "Great Lord",
        HP: 30,
        STR: 10,
        MAG: 0,
        DEX: 10,
        SPD: 0,
        LCK: 0,
        DEF: 5,
        RES: 0,
        CHA: 10,
        Tier: "unique"
    },
    {
        Name: "Barbarossa",
        HP: 30,
        STR: 15,
        MAG: 0,
        DEX: 0,
        SPD: 10,
        LCK: 0,
        DEF: 5,
        RES: 0,
        CHA: 10,
        Tier: "unique"
    },
    {
        Name: "Falcon Knight",
        HP: 30,
        STR: 10,
        MAG: 0,
        DEX: 0,
        SPD: 20,
        LCK: 0,
        DEF: 0,
        RES: 5,
        CHA: 10,
        Tier: "master",
        Requirements: [
            {
                name: "Sword",
                value: "C"
            },
            {
                name: "Lance",
                value: "A"
            },
            {
                name: "Flying",
                value: "B+"
            }
        ]
    },
    {
        Name: "Wyvern Lord",
        HP: 30,
        STR: 15,
        MAG: -5,
        DEX: 0,
        SPD: 10,
        LCK: 0,
        DEF: 5,
        RES: 0,
        CHA: 5,
        Tier: "master",
        Requirements: [
            {
                name: "Lance",
                value: "C"
            },
            {
                name: "Axe",
                value: "A"
            },
            {
                name: "Flying",
                value: "A"
            }
        ]
    },
    {
        Name: "Mortal Savant",
        HP: 20,
        STR: 10,
        MAG: 10,
        DEX: 0,
        SPD: -10,
        LCK: 10,
        DEF: 0,
        RES: 0,
        CHA: 5,
        Tier: "master",
        Requirements: [
            {
                name: "Sword",
                value: "A"
            },
            {
                name: "Reason",
                value: "B+"
            }
        ]
    },
    {
        Name: "Great Knight",
        HP: 30,
        STR: 10,
        MAG: 0,
        DEX: 0,
        SPD: -10,
        LCK: 0,
        DEF: 5,
        RES: -5,
        CHA: 5,
        Tier: "master",
        Requirements: [
            {
                name: "Axe",
                value: "B+"
            },
            {
                name: "Heavy Armor",
                value: "A"
            },
            {
                name: "Riding",
                value: "B+"
            }
        ]
    },
    {
        Name: "Bow Knight",
        HP: 10,
        STR: 0,
        MAG: 0,
        DEX: 0,
        SPD: -5,
        LCK: 0,
        DEF: 0,
        RES: 0,
        CHA: 5,
        Tier: "master",
        Requirements: [
            {
                name: "Lance",
                value: "C"
            },
            {
                name: "Bow",
                value: "A"
            },
            {
                name: "Riding",
                value: "A"
            }
        ]
    },
    {
        Name: "Dark Knight",
        HP: 10,
        STR: 5,
        MAG: 10,
        DEX: 0,
        SPD: -5,
        LCK: 0,
        DEF: 5,
        RES: 10,
        CHA: 5,
        Tier: "master",
        Requirements: [
            {
                name: "Lance",
                value: "C"
            },
            {
                name: "Reason",
                value: "B+"
            },
            {
                name: "Riding",
                value: "A+"
            }
        ]
    },
    {
        Name: "Holy Knight",
        HP: 10,
        STR: 0,
        MAG: 10,
        DEX: 0,
        SPD: -5,
        LCK: 10,
        DEF: 5,
        RES: 10,
        CHA: 10,
        Tier: "master",
        Requirements: [
            {
                name: "Lance",
                value: "C"
            },
            {
                name: "Riding",
                value: "A"
            },
            {
                name: "Faith",
                value: "B+"
            }
        ]
    },
    {
        Name: "War Master",
        HP: 40,
        STR: 15,
        MAG: 0,
        DEX: 0,
        SPD: 10,
        LCK: 0,
        DEF: 0,
        RES: 0,
        CHA: 5,
        Tier: "master",
        Gender: "M",
        Requirements: [
            {
                name: "Axe",
                value: "A"
            },
            {
                name: "Brawling",
                value: "A"
            }
        ]
    },
    {
        Name: "Gremory",
        HP: 10,
        STR: 0,
        MAG: 10,
        DEX: 10,
        SPD: 0,
        LCK: 0,
        DEF: 0,
        RES: 5,
        CHA: 10,
        Tier: "master",
        Gender: "F",
        Requirements: [
            {
                name: "Reason",
                value: "A"
            },
            {
                name: "Faith",
                value: "A"
            }
        ]
    }
];

const Classes: IIndexedJobs = classes.reduce((classes, job) => {
    classes[job.Name] = job;
    return classes;
}, {});

export default Classes;
