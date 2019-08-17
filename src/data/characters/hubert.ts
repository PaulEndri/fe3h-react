import { ICharacter } from '../../types/icharacter';

export const Hubert: ICharacter = {
    firstName: 'Hubert',
	alliance: 'Black Eagles',
	birthday: '4/17',
	name: 'Hubert von Vestra',
	crest: 'None',
	tea: ['Dagda Fruit Blend', 'Cinnamon Blend'],
	skill: '-',
	stat: '-',
	flower: [],
	gift: ['Board Game', 'Coffee Beans', 'The History of Fodlan'],
	lostItems: ['Folding Razor', 'Hresvelg Treatise', 'Noxious Handkerchief'],
	trainings: [],
	lectures: [
		{
			question: 'Such interesting ideas you seem to have, Professor, but tell me this: what would you do if you were given the task of teaching a subject than you yourself did not understand?',
			 answer: 'I’d take the time to study the subject before teaching it.'
		},
		{
			question: 'The weak-willed care little for how they are governed, but lady Edelgard wishes to open their eyes. How would you achieve this, in her position?',
			answer: 'The only way to help them is to educate them.'
		}
	],
	skillProficiencies: ['Bow', 'Reason', 'Authority'],
	skillWeaknesses: ['Axe', 'Faith', 'Flying'],
	hiddenTalents: ['Lance'],
	growthRates: {
		HP: 35,
		STR: 30,
		MAG: 55,
		DEX: 45,
		SPD: 45,
		LCK: 35,
		DEF: 25,
		RES: 40,
		CHA: 35,
	}
};
