import { ICharacter } from '../../interfaces/iCharacter';

export const Claude: ICharacter = {
    firstName: 'Claude',
	alliance: 'Golden Deer',
	name: 'Claude von Riegan',
	birthday: '7/24',
	skill: null,
	stat: null,
	flower: [],
	gift: ['Board Game Piece', 'Exotic Spices', 'Riding Boots'],
	lostItems: ['Leather Bow Sheath', 'Mild Stomach Poison', 'Board Game Piece'],
	tea: ['Almyran Pine Needles', 'Chamomile'],
	crest: 'Reigan',
	trainings: [],
	lectures: [
		{
			question: 'That was a fascinating lecture, but now my brain is fried. I feel like I need a change of pace to reinvigorate me. What do you recommend?',
			 answer: 'Try going for a stroll around the monastery.'
		},
		{
			question: 'I’ve been thinking it would be nice to throw a big feast for everyone, but we’re lacking in surplus supplies. Do you have any recommendations for cheap yet tasty food?',
			answer: 'You should go hunting for what you need in the forest.'
		}
	],
	skillProficiencies: ['Sword', 'Bow', 'Authority', 'Flying', 'Riding'],
	skillWeaknesses: ['Lance', 'Faith'],
	hiddenTalents: ['Axe'],
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
	},
	maxStats: {
		HP: 71,
		STR: 61,
		MAG: 40,
		DEX: 89,
		SPD: 76,
		LCK: 63,
		DEF: 50,
		RES: 42,
		CHA: 76
	}
};
