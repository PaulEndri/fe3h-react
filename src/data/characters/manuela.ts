import { ICharacter } from '../../interfaces/iCharacter';

export const Manuela: ICharacter = {
    firstName: 'Manuela',
	alliance: 'Church of Seiros',
	name: 'Manuela Casagranda',
	birthday: '8/3',
	skill: null,
	stat: {
		name: 'Level',
		value: '15'
	},
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
			question: 'I think alcohol consumption increases as we continue to fight, day after day after day after… Oh, I mean for the monastery. As a whole, dear. Not just for me. Still, is it something we should be careful about?',
			answer: 'Focus on your own intake. I\'ll worry about everyone else.'
		}
	],
	skillProficiencies: ['Sword', 'Faith', 'Flying'],
	skillWeaknesses: ['Reason'],
	hiddenTalents: [],
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
