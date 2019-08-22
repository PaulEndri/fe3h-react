import { ICharacter } from '../../interfaces/iCharacter';

export const Shamir: ICharacter = {
    firstName: 'Shamir',
	alliance: 'Church of Seiros',
	name: 'Shamir Nevrand',
	skill: null,
	stat: {
		name: 'Level',
		value: 15
	},
	flower: ['Sunflower'],
	tea: ['Crescent-Moon Tea', 'Chamomile'],
	crest: 'None',
	gift: ['Book of Sheet Music', 'Coffee Beans', 'Exotic Spices', 'Hunting Dagger', 'Ancient Coin'],
	lostItems: ['Animal Bone Dice', 'Bundle of Dry Hemp', 'Centipede Picture'],
	trainings: ['Lance', 'Bow'],
	lectures: [
		{
			question: 'Some people hate spiders or centipedes, but they have no strong feelings towards flies or crickets. Why is that?',
			 answer: 'They may all be bugs, but they’re such different species.'
		},
		{
			question: 'I prefer to use stealth tactics to assassinate my foes on the battlefield, but you take a different approach. Why is that?',
			answer: 'Those tactics don’t give the enemy a chance to surrender.'
		}
	],
	skillProficiencies: ['Lance', 'Bow'],
	skillWeaknesses: ['Faith'],
	hiddenTalents: [],
	growthRates: {
		HP: 35,
		STR: 40,
		MAG: 20,
		DEX: 50,
		SPD: 40,
		LCK: 55,
		DEF: 20,
		RES: 15,
		CHA: 30,
	},
	maxStats: {
		HP: 71,
		STR: 58,
		MAG: 35,
		DEX: 75,
		SPD: 56,
		LCK: 76,
		DEF: 37,
		RES: 35,
		CHA: 43,
	}
};
