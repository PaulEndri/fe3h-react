import { ICharacter } from '../../types/icharacter';

export const Catherine: ICharacter = {
    firstName: 'Catherine',
	alliance: 'Church of Seiros',
	name: 'Catherine',
	birthday: '9/15',
	skill: '-',
	stat: 'Level 15',
	flower: [],
	crest: 'Charon',
	tea: ['Rose Petal Blend'],
	gift: ['Blue Cheese', 'Legends of Chivalry', 'Training Weight', 'Whetstone'],
	lostItems: ['Badge Of Graduation', 'Letter To Rhea', 'Weathered Cloak'],
	trainings: ['Sword', 'Brawl'],
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
		STR: 50,
		MAG: 25,
		DEX: 40,
		SPD: 55,
		LCK: 30,
		DEF: 30,
		RES: 20,
		CHA: 25,
	}
};
