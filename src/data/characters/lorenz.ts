import { ICharacter } from '../../types/icharacter';

export const Lorenz: ICharacter = {
    firstName: 'Lorenz',
	alliance: 'Golden Deer',
	name: 'Lorenz Hellman Gloucester',
	birthday: '6/13',
	skill: 'Reason',
	stat: 'CHA',
	flower: ['Rose'],
	tea: ['Bergamot', 'Rose Petal Blend', 'Seiros Tea'],
	crest: 'Gloucester',
	gift: ['Book of Sheet Music', 'Floral Adornment', 'Tea Leaves'],
	lostItems: ['A Treatise On Etiquette', 'Artificial Flower', 'Silk Handkerchief'],
	trainings: [],
	lectures: [
		{
			question: 'The ladies have been giving me the cold shoulder, of late, I believe it is because they are intimidated by my noble presence. How can I be more... accessible?',
			 answer: 'Sounds like it’s their problem, not yours.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 55,
		STR: 40,
		MAG: 40,
		DEX: 45,
		SPD: 40,
		LCK: 25,
		DEF: 30,
		RES: 40,
		CHA: 35,
	}
};
