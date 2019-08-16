import { ICharacter } from '../../types/icharacter';

export const Caspar: ICharacter = {
    firstName: 'Caspar',
	alliance: 'Black Eagles',
	name: 'Caspar von Bergliez',
	birthday: '7/1',
	tea: ['Ginger Tea'],
	crest: 'None',
	skill: 'Brawl',
	stat: 'STR',
	flower: [],
	gift: ['Smoked Meat', 'Training Weight', 'Whetstone'],
	lostItems: ['Grounding Charm', 'Tattered Overcoat', 'Thunderbrand Replica'],
	trainings: [],
	lectures: [
		{
			question: 'Pretty soon I’ll have eaten everything they have to offer in the dining hall. Then what am I supposed to do? Keep eating the same boring meals over and over again?',
			 answer: 'You should just enjoy what you’ve got.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 55,
		STR: 45,
		MAG: 25,
		DEX: 45,
		SPD: 45,
		LCK: 40,
		DEF: 30,
		RES: 20,
		CHA: 25,
	}
};
