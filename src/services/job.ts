import { IClass } from "../interfaces/iClass";
import classes from "../data/classes";

export interface IFilteredJobs {
    beginner: IClass[],
    unique: IClass[],
    advanced: IClass[],
    master: IClass[],
    intermediate: IClass[],
}

class JobService {
    private classes: IClass[];

    constructor(classes: IClass[]) {
        this.classes = classes;
    }

    get beginnerClasses() {
        return this.filterClassByTier('beginner');
    }
    
    get uniqueClasses() {
        return this.filterClassByTier('unique');
    }
    
    get advancedClasses() {
        return this.filterClassByTier('advanced');
    }
    
    get masterClasses() {
        return this.filterClassByTier('master');
    }
    
    get intermediateClasses() {
        return this.filterClassByTier('intermediate');
    }

    filterClassByTier(tier: string): IClass[] {
        return this.classes.filter(c => c.Tier === tier);
    }

    static getAll(): IFilteredJobs {
        const service = new JobService(classes);

        return {
            unique: service.uniqueClasses,
            beginner: service.beginnerClasses,
            intermediate: service.intermediateClasses,
            advanced: service.advancedClasses,
            master: service.masterClasses
        }
    }
}

export default JobService;