import { ICharacter } from '../../types/icharacter';

export const Mercedes: ICharacter = {
    firstName: 'Mercedes',
	alliance: 'Blue Lions',
	name: 'Mercedes von Martritz',
	birthday: '5/27',
	skill: 'C Bow',
	stat: '15 MAG',
	flower: ['Lavender'],
	tea: ['Albinean Berry Blend', 'Southern Fruit Blend', 'Crescent Moon Tea'],
	crest: 'Lamine',
	gift: ['Armored Bear Stuffy', 'Gemstone Beads', 'Goddess Statuette', 'Tasty Baked Treat'],
	lostItems: ['Book of Ghost Stories', 'Fruit Preserves', 'How to Bake Sweets'],
	trainings: [],
	lectures: [
		{
			question: 'I enjoy a good ghost story, but I’ve never seen a ghost in real life. I would love to have that experience for myself, even just once!',
			 answer: 'Maybe you need a ritual to summon one.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 30,
		STR: 25,
		MAG: 50,
		DEX: 45,
		SPD: 40,
		LCK: 30,
		DEF: 25,
		RES: 45,
		CHA: 40,
	}
};
