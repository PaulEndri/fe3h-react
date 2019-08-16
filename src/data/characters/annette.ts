import { ICharacter } from '../../types/icharacter';

export const Annette: ICharacter = {
    firstName: 'Annette',
	alliance: 'Blue Lions',
	name: 'Annette Fantine Dominic',
	birthday: '5/9',
	crest: 'Dominic',
	skill: 'B Faith',
	stat: '10 MAG',
	flower: [],
	gift: ['Arithmetic Textbook', 'Book of Sheet Music', 'Stylish Hair Clip'],
	tea: ['Sweet-Apple Blend', 'Rose Petal Blend', 'Almond Blend'],
	lostItems: ['School of Sorcery Book', 'Unfinished Score', 'Wax Diptych'],
	trainings: [],
	lectures: [
		{
			question: 'Lectures about strategy or reason require so much focus, I end up absolutely famished! But if I go to class after a big meal, I can’t help getting sleepy…',
			 answer: 'Bring along a snack, just in case.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 25,
		STR: 30,
		MAG: 50,
		DEX: 50,
		SPD: 35,
		LCK: 35,
		DEF: 20,
		RES: 30,
		CHA: 35,
	}
};
