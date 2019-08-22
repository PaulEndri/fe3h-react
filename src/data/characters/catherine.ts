import { ICharacter } from '../../interfaces/iCharacter';

export const Catherine: ICharacter = {
    firstName: 'Catherine',
	alliance: 'Church of Seiros',
	name: 'Catherine',
	birthday: '9/15',
	skill: null,
	stat: {
		name: 'Level',
		value: 15
	},
	flower: [],
	crest: 'Charon',
	tea: ['Rose Petal Blend'],
	gift: ['Blue Cheese', 'Legends of Chivalry', 'Training Weight', 'Whetstone'],
	lostItems: ['Badge Of Graduation', 'Letter To Rhea', 'Weathered Cloak'],
	trainings: ['Sword', 'Brawl'],
	lectures: [
		{
			question: 'One of your students keeps challenging me to fight him, but he has no idea how to wield a sword. It\'s a waste of time for both of us. What am I supposed to do?',
			 answer: 'Drop a hint that he needs a new training partner.'
		},
		{
			question: 'I have a tactical question, Professor. Let’s say you’re leading an army and the enemy, whose forces greatly outnumber your own, has you surrounded. What would you do in that situation?',
			answer: 'Push forward. Punch a hold in their formation.'
		}
	],
	skillProficiencies: ['Sword', 'Brawling'],
	skillWeaknesses: ['Reason'],
	hiddenTalents: [],
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
	},
	maxStats: {
		HP: 92,
		STR: 70,
		MAG: 36,
		DEX: 56,
		SPD: 75,
		LCK: 43,
		DEF: 42,
		RES: 37,
		CHA: 35
	}
};
