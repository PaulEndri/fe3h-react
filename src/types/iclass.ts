export interface IClassRequirement {
    name: string;
    level: string;
}

export interface IClass {
    HP: number;
    STR: number;
    MAG: number;
    DEX: number;
    SPD: number;
    LCK: number;
    DEF: number;
    RES: number;
    CHA: number;
    Name: string;
    Requirements?: IClassRequirement[];
    Tier: "unique" | "beginner" | "intermediate" | "advanced" | "master"
}