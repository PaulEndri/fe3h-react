import { ICharacter } from '../../types/icharacter';

export const Ashe: ICharacter = {
    firstName: 'Ashe',
	alliance: 'Blue Lions',
	name: 'Ashe Ubert',
	birthday: '10/17',
	skill: 'Lance',
	stat: 'CHA',
	flower: ['Violet'],
	gift: ['Ancient Coin', 'Exotic Spices', 'Legends of Chivalry', 'Tasty Baked Treat'],
	lostItems: ['Bundle of Herbs', 'Evil Repelling Amulet', 'Moon Knight’s Tale'],
	trainings: [],
	lectures: [
		{
			question: 'I’m...kind of terrified to walk the monastery grounds at night. It’s unnerving how dark and quiet the place gets! How can I conquer my fear?',
			 answer: 'Think of it as training for night marches.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 35,
		STR: 35,
		MAG: 25,
		DEX: 55,
		SPD: 50,
		LCK: 40,
		DEF: 20,
		RES: 35,
		CHA: 25,
	}
};
