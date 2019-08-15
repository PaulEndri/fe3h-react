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
    type: "unique" | "beginner" | "intermediate" | "advanced" | "master"
}