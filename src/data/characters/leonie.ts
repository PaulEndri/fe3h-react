import { ICharacter } from '../../types/icharacter';

export const Leonie: ICharacter = {
    firstName: 'Leonie',
	alliance: 'Golden Deer',
	name: 'Leonie Pinelli',
	birthday: '8/21',
	skill: 'C Lance',
	stat: '15 STR',
	flower: [],
	gift: ['Fishing Float', 'Hunting Dagger', 'Training Weight'],
	tea: ['Four-Spice Blend', 'Angelica Tea'],
	crest: 'None',
	lostItems: ['Crude Arrow Heads', 'Fur Scarf', 'Hand Drawn Map'],
	trainings: [],
	lectures: [
		{
			question: 'I don’t care about being pretty or anything, but it bothers me that some people don’t even realize I’m a girl.',
			 answer: 'They’re wrong, pay them no mind'
		},
		{
			question: 'People call Captain Jeralt the Blade Breaker. I figure, if I want to be a top-tier mercenary like him, I’m going to need a tough-sounding title of my own. Help me out?',
			answer: 'The Executioner'
		}
	],
	skillProficiencies: ['Lance', 'Bow', 'Riding'],
	skillWeaknesses: [],
	hiddenTalents: [],
	growthRates: {
		HP: 40,
		STR: 40,
		MAG: 20,
		DEX: 55,
		SPD: 60,
		LCK: 40,
		DEF: 40,
		RES: 15,
		CHA: 40,
	}
};
