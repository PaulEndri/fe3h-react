import { ICharacter } from '../../types/icharacter';

export const Shamir: ICharacter = {
    firstName: 'Shamir',
	alliance: 'Church of Seiros',
	name: 'Shamir Nevrand',
	skill: '-',
	stat: 'Level 15',
	flower: ['Sunflower'],
	tea: ['Crescent-Moon Tea', 'Chamomile'],
	crest: 'None',
	gift: ['Book of Sheet Music', 'Coffee Beans', 'Exotic Spices', 'Hunting Dagger', 'Ancient Coin'],
	lostItems: ['Animal Bone Dice', 'Bundle of Dry Hemp', 'Centipede Picture'],
	trainings: ['Lance', 'Bow'],
	lectures: [
		{
			question: '',
			 answer: ''
		},
		{
			question: '',
			answer: ''
		}
	],
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
	}
};
