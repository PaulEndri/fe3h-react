import { ICharacter } from '../../types/icharacter';

export const Dimitri: ICharacter = {
    firstName: 'Dimitri',
	alliance: 'Blue Lions',
	name: 'Dimitri Alexandre Blaiddyd',
	birthday: '12/20',
	skill: '-',
	stat: '-',
	flower: [],
	gift: ['Whetstone', 'Training Weight', 'Riding Boots', 'Ceremonial Sword'],
	lostItems: ['Black Leather Gloves', 'Dulled Longsword', 'Training Logbook'],
	trainings: [],
	lectures: [
		{
			question: 'No matter the weapon, it cannot be wielded properly without ample strength and stamina, regardless of the skills one may possess. I’ve been using various training techniques, but lately I feel like they all are lacking…',
			 answer: 'Try focusing on one skill at a time, at least for a while.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 55,
		STR: 60,
		MAG: 20,
		DEX: 50,
		SPD: 50,
		LCK: 25,
		DEF: 40,
		RES: 20,
		CHA: 55,
	}
};
