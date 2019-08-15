import { ICharacter } from '../../types/icharacter';

export const Leonie: ICharacter = {
    firstName: 'Leonie',
	alliance: 'Golden Deer',
	name: 'Leonie Pinelli',
	birthday: '8/21',
	skill: 'Lance',
	stat: 'STR',
	flower: [],
	gift: ['Fishing Float', 'Hunting Dagger', 'Training Weight'],
	lostItems: ['Crude Arrow Heads', 'Fur Scarf', 'Hand Drawn Map'],
	trainings: [],
	lectures: [
		{
			question: 'I don’t care about being pretty or anything, but it bothers me that some people don’t even realize I’m a girl.',
			 answer: 'They’re wrong, pay them no mind'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 40,
		STR: 40,
		MAG: 20,
		DEX: 55,
		SPD: 60,
		LCK: 40,
		DEF: 40,
		RES: 15,
		CHA: 40,
	}
};
