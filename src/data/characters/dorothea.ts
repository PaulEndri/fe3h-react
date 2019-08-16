import { ICharacter } from '../../types/icharacter';

export const Dorothea: ICharacter = {
    firstName: 'Dorothea',
	alliance: 'Black Eagles',
	name: 'Dorothea Arnault',
	birthday: '9/29',
	skill: 'B Authority',
	tea: ['Sweet-Apple Blend', 'Albinean Berry Blend'],
	crest: 'None',
	stat: '25 CHA',
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
			question: '',
			answer: ''
		}
	],
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
	}
};
