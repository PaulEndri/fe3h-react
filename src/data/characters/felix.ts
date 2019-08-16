import { ICharacter } from '../../types/icharacter';

export const Felix: ICharacter = {
    firstName: 'Felix',
	alliance: 'Blue Lions',
	name: 'Felix Hugo Fraldarius',
	birthday: '2/20',
	skill: 'C Sword',
	stat: '15 SPD',
	flower: [],
	tea: ['Almyran Pine Needles', 'Four-Spice Blend'],
	crest: 'None',
	gift: ['Ceremonial Sword', 'Hunting Dagger', 'Smoked Meat', 'Training Weight'],
	lostItems: ['Black Iron Spur', 'Sword Belt Fragment', 'Toothed Dagger'],
	trainings: [],
	lectures: [
		{
			question: 'Magic is not my forte. Being a gifted swordsman, I think my time is best served practicing swordplay technique. Why should I waste my time attending lectures, just to improve my magic skills from mediocre to average?',
			 answer: 'Knowing magic will make you a stronger swordsman.'
		},
		{
			question: 'I’ve had this sword for a long time. It is as much a part of me as the hand that holds it. But a good swordsmith could craft a weapon that’s more effective and durable. Should I stick with my old, familiar sword, or acquire a better one?',
			answer: 'Get the new weapon. Give yourself time to train with it.'
		}
	],
	skillProficiencies: ['Sword', 'Bow', 'Brawling'],
	skillWeaknesses: ['Reason', 'Authority'],
	hiddenTalents: ['Reason'],
	growthRates: {
		HP: 45,
		STR: 55,
		MAG: 30,
		DEX: 45,
		SPD: 55,
		LCK: 40,
		DEF: 30,
		RES: 20,
		CHA: 30,
	}
};
