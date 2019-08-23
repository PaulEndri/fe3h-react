import { ICharacter } from '../../interfaces/iCharacter';

export const Dorothea: ICharacter = {
    firstName: 'Dorothea',
	alliance: 'Black Eagles',
	name: 'Dorothea Arnault',
	birthday: '9/29',
	tea: ['Sweet-Apple Blend', 'Albinean Berry Blend'],
	crest: 'None',
	skill: {
		name: 'Authority',
		value: 'B'
	},
	stat: {
		name: 'CHA',
		value: 25
	},
	flower: [],
	gift: ['Book of Sheet Music', 'Gemstone Beads', 'Stylish Hair Clip'],
	lostItems: ['Lovely Comb', 'Silver Brooch', 'Songstress Poster'],
	trainings: [],
	lectures: [
		{
			question: 'You know how sometimes an ordinary girl can be more popular than an exceptional beauty? Or how, with aristocrats, some prefer a viscount when they could have a duke instead? Why do you think that is?',
			 answer: 'Fancy meals are boring if you eat them every day.'
		},
		{
			question: 'Songs are so powerless, Professor. No matter how much on sings, there’s no soldier on the battlefield who will listen. It’s horrible that one can only sing of peace in times of peace.',
			answer: 'If we can achieve peace, those songs won’t be powerless.'
		}
	],
	skillProficiencies: ['Sword', 'Reason'],
	skillWeaknesses: ['Faith'],
	hiddenTalents: ['Faith'],
	growthRates: {
		HP: 40,
		STR: 20,
		MAG: 40,
		DEX: 45,
		SPD: 40,
		LCK: 35,
		DEF: 15,
		RES: 35,
		CHA: 40,
	},
	maxStats: {
		HP: 76,
		STR: 30,
		MAG: 61,
		DEX: 62,
		SPD: 57,
		LCK: 49,
		DEF: 38,
		RES: 50,
		CHA: 58
	},
	baseStats: {
		HP: 24,
		STR: 5,
		MAG: 11,
		DEX: 6,
		SPD: 7,
		LCK: 6,
		DEF: 4,
		RES: 7,
		CHA: 8
	}
};
