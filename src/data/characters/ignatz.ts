import { ICharacter } from '../../types/icharacter';

export const Ignatz: ICharacter = {
    firstName: 'Ignatz',
	alliance: 'Golden Deer',
	name: 'Ignatz Victor',
	skill: 'B Authority',
	stat: '10 DEX',
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
			question: '',
			answer: ''
		}
	],
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
