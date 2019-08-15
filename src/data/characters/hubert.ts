import { ICharacter } from '../../types/icharacter';

export const Hubert: ICharacter = {
    firstName: 'Hubert',
	alliance: 'Black Eagles',
	birthday: '4/17',
	name: 'Hubert von Vestra',
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
			question: '',
			answer: ''
		}
	],
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
