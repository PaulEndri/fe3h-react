import { ICharacter } from '../../types/icharacter';

export const Dedue: ICharacter = {
    firstName: 'Dedue',
	alliance: 'Blue Lions',
	name: 'Dedue Molinaro',
	birthday: '8/31',
	skill: '-',
	stat: '-',
	flower: [],
	tea: ['Cinnamon Blend', 'Four-Spice Blend', 'Ginger Tea'],
	crest: 'None',
	gift: ['Floral Adornment', 'Watering Can', 'Exotic Spices'],
	lostItems: ['Cooking Pot', 'Gardening Shears', 'Gold Earring'],
	trainings: [],
	lectures: [
		{
			question: 'Though I have served His Highness for four years, he has eluded my every attempt to learn his favorite foods.',
			 answer: 'Maybe he just likes everything.'
		}
	],
	skillProficiencies: ['Axe', 'Brawling', 'Lance', 'Heavy Armor'],
	skillWeaknesses: ['Riding', 'Flying'],
	hiddenTalents: [],
	growthRates: {
		HP: 60,
		STR: 50,
		MAG: 15,
		DEX: 30,
		SPD: 20,
		LCK: 25,
		DEF: 50,
		RES: 10,
		CHA: 30,
	}
};
