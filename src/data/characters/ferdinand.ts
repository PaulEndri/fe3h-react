import { ICharacter } from '../../types/icharacter';

export const Ferdinand: ICharacter = {
    firstName: 'Ferdinand',
	alliance: 'Black Eagles',
	name: 'Ferdinand von Aegir',
	birthday: '4/30',
	crest: 'Cichol',
	tea: ['Almyran Pine Needles', 'Southern Fruit Blend', 'Seiros Tea'],
	skill: 'C Hvy. A',
	stat: '10 DEX',
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
			question: '',
			answer: ''
		}
	],
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
	}
};
