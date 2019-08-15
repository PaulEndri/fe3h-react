import { ICharacter } from '../../types/icharacter';

export const Rhea: ICharacter = {
    firstName: 'Rhea',
	alliance: 'Church of Seiros',
	name: 'Rhea',
	birthday: '1/11',
	skill: '-',
	stat: '-',
	flower: [],
	gift: ['Goddess Statuette', 'Landscape Painting', 'Ancient Coin'],
	lostItems: [],
	trainings: ['Sword', 'Brawl', 'Reason', 'Faith'],
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
