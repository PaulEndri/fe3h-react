import { ICharacter } from '../../types/icharacter';

export const Marianne: ICharacter = {
    firstName: 'Marianne',
	alliance: 'Golden Deer',
	name: 'Marianne von Edmund',
	birthday: '11/23',
	skill: 'Riding',
	stat: 'MAG',
	flower: ['Lily of the Valley'],
	gift: ['Armored Bear Stuffy', 'Dapper Handkerchief', 'Floral Adornment'],
	lostItems: ['Bag of Seeds', 'Confessional Letter', 'How to be Tidy'],
	trainings: [],
	lectures: [
		{
			question: 'Um, excuse me… Can you help me? I always get the feeling that I’m being watched. I get so nervous that I can’t sleep at night…',
			 answer: 'You might be right. You should be careful.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 35,
		STR: 20,
		MAG: 50,
		DEX: 40,
		SPD: 40,
		LCK: 35,
		DEF: 15,
		RES: 45,
		CHA: 40,
	}
};
