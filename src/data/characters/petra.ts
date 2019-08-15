import { ICharacter } from '../../types/icharacter';

export const Petra: ICharacter = {
    firstName: 'Petra',
	alliance: 'Black Eagles',
	name: 'Petra Macneary',
	birthday: '9/7',
	skill: 'Riding',
	stat: 'DEX',
	flower: ['Sunflower'],
	gift: ['Exotic Spices', 'Hunting Dagger', 'Smoked Meat'],
	lostItems: ['Annotated Dictionary', 'Exotic Feather', 'Small Tan Hide'],
	trainings: [],
	lectures: [
		{
			question: 'I am having a question. I wish for improvement of my lance skills. But I am having uncertainty about how to be training effectively. What should I be doing?',
			 answer: 'Try studying the movements of others for improvement.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 45,
		STR: 40,
		MAG: 25,
		DEX: 50,
		SPD: 60,
		LCK: 45,
		DEF: 30,
		RES: 15,
		CHA: 35,
	}
};
