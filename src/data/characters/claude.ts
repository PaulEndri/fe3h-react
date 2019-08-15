import { ICharacter } from '../../types/icharacter';

export const Claude: ICharacter = {
    firstName: 'Claude',
	alliance: 'Golden Deer',
	name: 'Claude von Riegan',
	birthday: '7/24',
	skill: '-',
	stat: '-',
	flower: [],
	gift: ['Board Game Piece', 'Exotic Spices', 'Riding Boots'],
	lostItems: ['Leather Bow Sheath', 'Mild Stomach Poison', 'Board Game Piece'],
	trainings: [],
	lectures: [
		{
			question: 'That was a fascinating lecture, but now my brain is fried. I feel like I need a change of pace to reinvigorate me. What do you recommend?',
			 answer: 'Try going for a stroll around the monastery.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 35,
		STR: 40,
		MAG: 25,
		DEX: 60,
		SPD: 55,
		LCK: 45,
		DEF: 30,
		RES: 25,
		CHA: 55,
	}
};
