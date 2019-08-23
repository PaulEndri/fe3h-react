import { ICharacter } from '../../interfaces/iCharacter';

export const Lorenz: ICharacter = {
    firstName: 'Lorenz',
	alliance: 'Golden Deer',
	name: 'Lorenz Hellman Gloucester',
	birthday: '6/13',
	skill: {
		name: 'Reason',
		value: 'C'
	},
	stat: {
		name: 'CHA',
		value: 20
	},
	flower: ['Rose'],
	tea: ['Bergamot', 'Rose Petal Blend', 'Seiros Tea'],
	crest: 'Gloucester',
	gift: ['Book of Sheet Music', 'Floral Adornment', 'Tea Leaves'],
	lostItems: ['A Treatise On Etiquette', 'Artificial Flower', 'Silk Handkerchief'],
	trainings: [],
	lectures: [
		{
			question: 'The ladies have been giving me the cold shoulder, of late, I believe it is because they are intimidated by my noble presence. How can I be more... accessible?',
			 answer: 'Sounds like it’s their problem, not yours.'
		},
		{
			question: 'I have always been confident in my exceptional skill, but... lately I will admit I have experienced some minor doubts. What can I do to restore my confidence?Win your battles consistently. Confidence will come.',
			answer: 'Win your battles consistently. Confidence will come.'
		}
	],
	skillProficiencies: ['Lance', 'Reason', 'Riding'],
	skillWeaknesses: ['Brawling'],
	hiddenTalents: [],
	growthRates: {
		HP: 55,
		STR: 40,
		MAG: 40,
		DEX: 45,
		SPD: 40,
		LCK: 25,
		DEF: 30,
		RES: 40,
		CHA: 35,
	},
	maxStats: {
		HP: 99,
		STR: 58,
		MAG: 57,
		DEX: 62,
		SPD: 57,
		LCK: 48,
		DEF: 55,
		RES: 56,
		CHA: 46
	},
	baseStats: {
		HP: 28,
		STR: 8,
		MAG: 7,
		DEX: 6,
		SPD: 7,
		LCK: 5,
		DEF: 6,
		RES: 6,
		CHA: 3
	}
};
