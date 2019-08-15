import { ICharacter } from '../../types/icharacter';

export const Gilbert: ICharacter = {
    firstName: 'Gilbert',
	alliance: 'Church of Seiros',
	name: 'Gilbert',
	skill: '-',
	stat: '-',
	flower: [],
	gift: ['Ceremonial Sword', 'Fishing Float', 'Goddess Statuette'],
	lostItems: ['Carving Hammer', 'Noseless Puppet', 'Silver Necklace'],
	trainings: ['Lance', 'Axe', 'Heavy Armor', 'Riding'],
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
		HP: 55,
		STR: 45,
		MAG: 20,
		DEX: 45,
		SPD: 30,
		LCK: 15,
		DEF: 45,
		RES: 10,
		CHA: 35,
	}
};
