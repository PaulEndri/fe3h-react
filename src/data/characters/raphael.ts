import { ICharacter } from '../../interfaces/iCharacter';

export const Raphael: ICharacter = {
    firstName: 'Raphael',
	alliance: 'Golden Deer',
	name: 'Raphael Kirsten',
	birthday: '5/19',
	skill: {
		name: 'Heavy Armor',
		value: 'C'
	},
	stat: {
		name: 'STR',
		value: 20
	},
	flower: [],
	gift: ['Smoked Meat', 'Tasty Baked Treat', 'Training Weight'],
	tea: ['Almond Blend', 'Ginger Tea'],
	crest: 'None',
	lostItems: ['Big Spoon', 'Burlap Sack of Rocks', 'Wooden Button'],
	trainings: [],
	lectures: [
		{
			question: 'I just wanna eat meat and fish, but everyone in the dining hall says I gotta eat vegetables too! I’m never gonna get full on stupid leaves!',
			 answer: 'Eating vegetable will help your muscles grow.'
		},
		{
			question: 'I had to leave my grandpa in charge of taking care of my little sis while I\'m away. I was thinking I should send him something nice to say thanks. Any suggestions?',
			answer: 'A tough-looking hat.'
		}
	],
	skillProficiencies: ['Axe', 'Brawling', 'Heavy Armor'],
	skillWeaknesses: ['Bow', 'Reason', 'Riding'],
	hiddenTalents: [],
	growthRates: {
		HP: 65,
		STR: 50,
		MAG: 15,
		DEX: 35,
		SPD: 15,
		LCK: 35,
		DEF: 45,
		RES: 10,
		CHA: 25,
	},
	maxStats: {
		HP: 114,
		STR: 73,
		MAG: 31,
		DEX: 48,
		SPD: 33,
		LCK: 49,
		DEF: 63,
		RES: 36,
		CHA: 51,
	}
};
