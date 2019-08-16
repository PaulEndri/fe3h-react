import { ICharacter } from '../../types/icharacter';

export const Lysithea: ICharacter = {
    firstName: 'Lysithea',
	alliance: 'Golden Deer',
	name: 'Lysithea von Ordelia',
	birthday: '2/28',
	skill: 'Faith',
	stat: 'MAG',
	flower: ['Lily'],
	tea: ['Sweet-Apple Blend', 'Southern Fruit Blend', 'Crescent-Moon Tea', 'Honeyed-Fruit Blend'],
	crest: 'Charon, Gloucester',
	gift: ['Arithmetic Textbook', 'Armored Bear Stuffy', 'Book of Crest Designs', 'Tasty Baked Treat'],
	lostItems: ['Encyclopedia of Sweets', 'New Bottle of Perfume', 'Princess Doll'],
	trainings: [],
	lectures: [
		{
			question: 'There’s so much to do and never enough time in which to do it. Sleep is a nuisance, but my body forces me to slow down, even though my mind doesn’t want to. Do you have any tips for shaking tired feelings away?',
			 answer: 'Sleeping when you’re tired is best for you.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 20,
		STR: 15,
		MAG: 60,
		DEX: 60,
		SPD: 50,
		LCK: 15,
		DEF: 10,
		RES: 25,
		CHA: 25,
	}
};