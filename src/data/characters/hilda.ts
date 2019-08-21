import { ICharacter } from '../../interfaces/iCharacter';

export const Hilda: ICharacter = {
    firstName: 'Hilda',
	alliance: 'Golden Deer',
	name: 'Hilda Valentine Goneril',
	birthday: '2/3',
	skill: {
		name: 'Axe',
		value: 'C'
	},
	stat: {
		name: 'CHA',
		value: 30
	},
	flower: ['Anemone'],
	tea: ['Albinean Berry Blend', 'Southern Fruit Blend', 'Rose Petal Blend', 'Mint Leaves'],
	crest: 'Goneril',
	gift: ['Armored Bear Stuffy', 'Dapper Handkerchief', 'Gemstone Beads', 'Stylish Hair Clip'],
	lostItems: ['Handmade Hair Clip', 'Spotless Bandage', 'Used Bottle of Perfume'],
	trainings: [],
	lectures: [
		{
			question: 'I hate cleaning my room. It’s so boring, and to be honest, I’m kinda lazy. But I don’t want my room to get messy. Who do you think I should get to tidy up for me?',
			 answer: 'Ask somebody who’s good at cleaning.'
		},
		{
			question: 'Whenever I visit home, my brother yammers on and on about all the things I\'m doing wrong. It\'s SO exhausting, I wish he\'d back off and let me live my life. What do you think I should do?',
			answer: 'Yammer back at him! See how he likes it!'
		}
	],
	skillProficiencies: ['Lance', 'Axe'],
	skillWeaknesses: ['Authority', 'Faith'],
	hiddenTalents: ['Heavy Armor'],
	growthRates: {
		HP: 50,
		STR: 45,
		MAG: 25,
		DEX: 30,
		SPD: 50,
		LCK: 35,
		DEF: 35,
		RES: 20,
		CHA: 50,
	}
};
