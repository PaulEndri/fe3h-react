import { ICharacter } from '../../interfaces/iCharacter';

export const Annette: ICharacter = {
    firstName: 'Annette',
	alliance: 'Blue Lions',
	name: 'Annette Fantine Dominic',
	birthday: '5/9',
	crest: 'Dominic',
	skill: {
		name: 'Faith',
		value: 'B'
	},
	stat: {
		name: 'MAG',
		value: 10
	},
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
			question: 'Just thinking about how, even now, someone out there is fighting for something, I just can’t seem to sit still, even during my breaks. What should I do at times like that?',
			answer: 'You could assist with my daily tasks, if you’d like'
		}
	],
	skillProficiencies: ['Axe', 'Reason', 'Authority'],
	skillWeaknesses: ['Heavy Armor', 'Bow'],
	hiddenTalents: [],
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
