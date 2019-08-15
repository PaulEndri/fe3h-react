import { ICharacter } from '../../types/icharacter';

export const Alois: ICharacter = {
    firstName: 'Alois',
	alliance: 'Church of Seiros',
	name: 'Alois',
	birthday: '12/1',
	skill: '-',
	stat: '-',
	flower: ['Sunflower'],
	gift: ['Ancient Coin', 'Floral Adornment', 'Fishing Float'],
	lostItems: ['Foreign Gold Coin', 'Introduction to Magic', 'Mysterious Notebook'],
	trainings: ['Axe', 'Brawl', 'Heavy Armor'],
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
		HP: 45,
		STR: 45,
		MAG: 20,
		DEX: 35,
		SPD: 40,
		LCK: 30,
		DEF: 40,
		RES: 20,
		CHA: 40
	}
};
