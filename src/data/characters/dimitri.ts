import { ICharacter } from '../../interfaces/iCharacter';

export const Dimitri: ICharacter = {
    firstName: 'Dimitri',
	alliance: 'Blue Lions',
	name: 'Dimitri Alexandre Blaiddyd',
	birthday: '12/20',
	skill: null,
	stat: null,
	flower: [],
	tea: ['Chamomile'],
	crest: 'Blaiddyd',
	gift: ['Whetstone', 'Training Weight', 'Riding Boots', 'Ceremonial Sword'],
	lostItems: ['Black Leather Gloves', 'Dulled Longsword', 'Training Logbook'],
	trainings: [],
	lectures: [
		{
			question: 'No matter the weapon, it cannot be wielded properly without ample strength and stamina, regardless of the skills one may possess. I’ve been using various training techniques, but lately I feel like they all are lacking…',
			 answer: 'Try focusing on one skill at a time, at least for a while.'
		},
		{
			question: 'Those from northern Faerghus are used to the frigid cold. Although Garreg Mach is located atop a mountain, the summer heat can be quite unbearable for soldiers from the north. What can I do to boost their morale?',
			answer: 'Cooling off in a nearby river is always a good option.'
		}
	],
	skillProficiencies: ['Sword', 'Lance', 'Authority'],
	skillWeaknesses: ['Axe', 'Reason'],
	hiddenTalents: ['Riding'],
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
	},
	maxStats: {
		HP: 99,
		STR: 87,
		MAG: 38,
		DEX: 69,
		SPD: 69,
		LCK: 42,
		DEF: 57,
		RES: 36,
		CHA: 77
	},
	baseStats: {
		HP: 28,
		STR: 12,
		MAG: 4,
		DEX: 7,
		SPD: 7,
		LCK: 5,
		DEF: 7,
		RES: 4,
		CHA: 9
	}
};
