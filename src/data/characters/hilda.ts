import { ICharacter } from '../../types/icharacter';

export const Hilda: ICharacter = {
    firstName: 'Hilda',
	alliance: 'Golden Deer',
	name: 'Hilda Valentine Goneril',
	birthday: '2/3',
	skill: 'Axe',
	stat: 'CHA',
	flower: ['Anemone'],
	gift: ['Armored Bear Stuffy', 'Dapper Handkerchief', 'Gemstone Beads', 'Stylish Hair Clip'],
	lostItems: ['Handmade Hair Clip', 'Spotless Bandage', 'Used Bottle of Perfume'],
	trainings: [],
	lectures: [
		{
			question: 'I hate cleaning my room. It’s so boring, and to be honest, I’m kinda lazy. But I don’t want my room to get messy. Who do you think I should get to tidy up for me?',
			 answer: 'Ask somebody who’s good at cleaning.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 50,
		STR: 45,
		MAG: 25,
		DEX: 30,
		SPD: 50,
		LCK: 35,
		DEF: 35,
		RES: 20,
		CHA: 50,
	}
};
