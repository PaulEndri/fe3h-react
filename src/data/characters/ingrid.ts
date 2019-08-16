import { ICharacter } from '../../types/icharacter';

export const Ingrid: ICharacter = {
    firstName: 'Ingrid',
	alliance: 'Blue Lions',
	name: 'Ingrid Brandl Galatea',
	birthday: '1/4',
	skill: 'D Flying',
	stat: '15 DEX',
	flower: [],
	gift: ['Legends of Chivalry', 'Riding Boots', 'Smoked Meat'],
	tea: ['Mint Leaves', 'Chamomile'],
	crest: 'Daphnel',
	lostItems: ['Curry Comb', 'Jousting Almanac', 'Pegasus Horseshoes'],
	trainings: [],
	lectures: [
		{
			question: 'Art has never been my forte. Even when I apply myself and sketch a ton, I don’t seem to improve much. I can envision an image so perfectly in head, but turning it into something physical that I feel good about eludes me...',
			 answer: 'Don’t worry about the end result. Just keep practicing.'
		},
		{
			question: 'Times are hard... My favorite food cart that sold the most amazing grilled delights went under. I don\'t even know what to live for anymore...',
			answer: 'Maybe the cart will open back up if the war ends.'
		}
	],
	skillProficiencies: ['Sword', 'Lance', 'Riding', 'Flying'],
	skillWeaknesses: [],
	hiddenTalents: [],
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
