import { ICharacter } from '../../interfaces/iCharacter';

export const Ignatz: ICharacter = {
    firstName: 'Ignatz',
	alliance: 'Golden Deer',
	name: 'Ignatz Victor',
	skill: {
		name: 'Authority',
		value: 'B'
	},
	stat: {
		name: 'DEX',
		value: 10
	},
	flower: ['Forget-me-nots'],
	tea: ['Dagda Fruit Blend', 'Seiros Tea', 'Lavender Blend'],
	crest: 'None',
	gift: ['Ancient Coin', 'Ceremonial Sword', 'Goddess Statuette', 'Landscape Painting'],
	lostItems: ['Art Book', 'Blue Stone', 'Letter to the Goddess'],
	trainings: [],
	lectures: [
		{
			question: 'I’m not very good at sharing my opinion. Usually, I just go along with what everybody else thinks. I don’t want to bother anyone. Um..',
			 answer: 'They’ll appreciate your opinion. Let yourself be heard.'
		},
		{
			question: 'Some of the children were admiring a painting of mine. I’d like to paint a new piece. Something just for them, to make them happy. What do you think I ought to paint?',
			answer: 'Woodland creatures.'
		}
	],
	skillProficiencies: ['Sword', 'Bow', 'Authority', 'Flying'],
	skillWeaknesses: [],
	hiddenTalents: ['Reason'],
	growthRates: {
		HP: 35,
		STR: 35,
		MAG: 30,
		DEX: 50,
		SPD: 50,
		LCK: 55,
		DEF: 25,
		RES: 35,
		CHA: 25,
	}
};
