import { ICharacter } from '../../types/icharacter';

export const Jeralt: ICharacter = {
    firstName: 'Jeralt',
	alliance: 'Church of Seiros',
	name: 'Jeralt',
	skill: '-',
	stat: '-',
	flower: ['-'],
	gift: ['-'],
	lostItems: ['Wooden Flask'],
	trainings: ['Lance', 'Authority', 'Riding'],
	lectures: [
		{
			question: '',
			 answer: ''
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 40,
		STR: 35,
		MAG: 35,
		DEX: 40,
		SPD: 60,
		LCK: 45,
		DEF: 30,
		RES: 40,
		CHA: 45,
	}
};
