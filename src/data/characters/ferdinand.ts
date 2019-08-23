import { ICharacter } from '../../interfaces/iCharacter';

export const Ferdinand: ICharacter = {
    firstName: 'Ferdinand',
	alliance: 'Black Eagles',
	name: 'Ferdinand von Aegir',
	birthday: '4/30',
	crest: 'Cichol',
	tea: ['Almyran Pine Needles', 'Southern Fruit Blend', 'Seiros Tea'],
	skill: {
		name: 'Heavy Armor',
		value: 'C'
	},
	stat: {
		name: 'DEX',
		value: 10
	},
	flower: [],
	gift: ['Riding Boots', 'Tea Leaves', 'Whetstone'],
	lostItems: ['Agricultural Survey', 'Bag of Tea Leaves', 'Maintenance Oil'],
	trainings: [],
	lectures: [
		{
			question: 'I am an avid arms collector. Since coming to live here, however, I have had much more trouble finding new items for my collection. Any ideas as to where I might find some uncommon weapons?',
			 answer: 'Ask a blacksmith to teach you how to craft your own.'
		},
		{
			question: 'Death is an inevitable result of military conflict. Not only soldiers, but also warhorses, who have no say in their line of work, lay down their lives on the battlefield. What steps can a commander take to minimize this loss of life?',
			answer: 'Adopt new tactics that increase survivability.'
		}
	],
	skillProficiencies: ['Sword', 'Axe', 'Lance', 'Riding'],
	skillWeaknesses: [],
	hiddenTalents: ['Heavy Armor'],
	growthRates: {
		HP: 50,
		STR: 45,
		MAG: 20,
		DEX: 40,
		SPD: 50,
		LCK: 40,
		DEF: 35,
		RES: 20,
		CHA: 40,
	},
	maxStats: {
		HP: 93,
		STR: 64,
		MAG: 40,
		DEX: 56,
		SPD: 70,
		LCK: 56,
		DEF: 36,
		RES: 37,
		CHA: 57
	},
	baseStats: {
		HP: 28,
		STR: 8,
		MAG: 5,
		DEX: 6,
		SPD: 8,
		LCK: 6,
		DEF: 6,
		RES: 2,
		CHA: 7
	}
};
