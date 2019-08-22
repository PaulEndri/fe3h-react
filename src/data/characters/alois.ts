import { ICharacter } from '../../interfaces/iCharacter';

export const Alois: ICharacter = {
    firstName: 'Alois',
	alliance: 'Church of Seiros',
	name: 'Alois',
	crest: 'None',
	birthday: '12/1',
	skill: null,
	stat: {
		name: 'Level',
		value: 15
	},
	flower: ['Sunflower'],
	tea: ['Crescent-Moon Tea', 'Honeyed-Fruit Blend'],
	gift: ['Ancient Coin', 'Floral Adornment', 'Fishing Float'],
	lostItems: ['Foreign Gold Coin', 'Introduction to Magic', 'Mysterious Notebook'],
	trainings: ['Axe', 'Brawl', 'Heavy Armor'],
	lectures: [
		{
			question: 'The anniversary of Jeralt’s death is coming up. I’d like to put something on his grave, so that he knows we’re all thinking of him. What item would make him happiest?',
			 answer: 'The best bottle of booze you can find.'
		},
		{
			question: 'As a member of the knights, I sometimes travel by ship for my missions. But I have a bit of a weak stomach...What can I do to tamp down my sea sickness?',
			answer: 'Medicine and magic should help'
		}
	],
	skillProficiencies: [
		'Axe', 'Brawling', 'Heavy Armor'
	],
	skillWeaknesses: [
		'Reason', 'Flying'
	],
	hiddenTalents: [],
	growthRates: {
		HP: 45,
		STR: 45,
		MAG: 20,
		DEX: 35,
		SPD: 40,
		LCK: 30,
		DEF: 40,
		RES: 20,
		CHA: 40
	},
	maxStats: {
		HP: 86,
		STR: 71,
		MAG: 33,
		DEX: 48,
		SPD: 56,
		LCK: 42,
		DEF: 55,
		RES: 37,
		CHA: 57
	}
};
