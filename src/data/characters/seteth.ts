import { ICharacter } from '../../types/icharacter';

export const Seteth: ICharacter = {
    firstName: 'Seteth',
	alliance: 'Church of Seiros',
	name: 'Seteth',
	birthday: '12/27',
	skill: '-',
	stat: '-',
	flower: [],
	gift: ['Fishing Float', 'Dapper Handkerchief', 'The History of Fodlan'],
	lostItems: ['Old Fishing Rod', 'Snapping Writing Quill', 'Unfinished Fable'],
	trainings: ['Sword', 'Lance', 'Axe', 'Authority', 'Flying'],
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
		HP: 50,
		STR: 45,
		MAG: 35,
		DEX: 50,
		SPD: 50,
		LCK: 25,
		DEF: 30,
		RES: 25,
		CHA: 45,
	}
};
