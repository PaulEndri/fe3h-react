import { ICharacter } from '../../types/icharacter';

export const Manuela: ICharacter = {
    firstName: 'Manuela',
	alliance: 'Church of Seiros',
	name: 'Manuela Casagranda',
	birthday: '8/3',
	skill: '-',
	stat: '-',
	flower: [],
	gift: ['Blue Cheese', 'Book of Sheet Music', 'Gemstone Beads', 'Goddess Statuette'],
	lostItems: ['Clean Dusting Cloth', 'Light Purple Beil', 'Wellness Herbs'],
	tea: ['Mint Leaves', 'Lavender Blend'],
	crest: 'None',
	trainings: ['Sword', 'Faith', 'Flying'],
	lectures: [
		{
			question: 'Hey. Maybe you can answer a question I’ve had for a while now… Why is it that men don’t like women who are messy?',
			 answer: 'Men have unrealistic expectations'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 50,
		STR: 35,
		MAG: 35,
		DEX: 40,
		SPD: 60,
		LCK: 35,
		DEF: 30,
		RES: 25,
		CHA: 50,
	}
};
