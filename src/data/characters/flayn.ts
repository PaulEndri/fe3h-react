import { ICharacter } from '../../types/icharacter';

export const Flayn: ICharacter = {
    firstName: 'Flayn',
	alliance: 'Church of Seiros',
	name: 'Flayn',
	birthday: '7/12',
	skill: '-',
	stat: '-',
	flower: ['Forget-me-nots'],
	gift: ['Armored Bear Stuffy', 'Dapper Handkerchief', 'Stylish Hair Clip', 'Tasty Baked Treat'],
	lostItems: ['Antique Clasp', 'Dusty Book of Fables', 'Old Map of Enbarr'],
	tea: ['Sweet-Apple Blend', 'Crescent-Moon Tea', 'Almond Blend'],
	crest: 'Cethleann',
	trainings: [],
	lectures: [
		{
			question: 'I want to be able to talk to males and make friends with them, but my brother always causes such a fuss when I do. Do you have any advice for me?',
			 answer: 'You should have an honest talk with your brother.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 25,
		STR: 25,
		MAG: 55,
		DEX: 45,
		SPD: 35,
		LCK: 15,
		DEF: 25,
		RES: 50,
		CHA: 45,
	}
};
