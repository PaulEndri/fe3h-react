import { ICharacter } from '../../types/icharacter';

export const Cyril: ICharacter = {
    firstName: 'Cyril',
	alliance: 'Church of Seiros',
	name: 'Cyril',
	birthday: '10/25',
	skill: '-',
	stat: 'Level 10',
	flower: ['Baby\'s Breath'],
	gift: ['Hunting Dagger', 'Smoked Meat', 'Watering Can'],
	tea: ['Almyran Pine Needles'],
	crest: 'None',
	lostItems: ['Old Cleaning Cloth', 'Portrait Of Rhea', 'Well-Used Hatchet'],
	trainings: [],
	lectures: [
		{
			question: 'I\'m real happy here, but there\'s somebody who has up and decided to take pity on me. Without asking! It\'s real darn irritating, and I want them to know it. I just don\'t know how I can make myself understood.',
			 answer: 'Show them how happy you are working here.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 35,
		STR: 20,
		MAG: 15,
		DEX: 40,
		SPD: 40,
		LCK: 30,
		DEF: 10,
		RES: 10,
		CHA: 15,
	}
};
