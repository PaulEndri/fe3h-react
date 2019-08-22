import { ICharacter } from '../../interfaces/iCharacter';

export const Linhardt: ICharacter = {
    firstName: 'Linhardt',
	alliance: 'Black Eagles',
	name: 'Linhardt von Hevring',
	birthday: '11/7',
	crest: 'Cethleann',
	tea: ['Almyran Pine Needles', 'Angelica Tea'],
	skill: {
		name: 'Reason',
		value: 'C'
	},
	stat: {
		name: 'MAG',
		value: 10
	},
	flower: [],
	gift: ['Book of Crest Designs', 'Fishing Float', 'Tasty Baked Treat'],
	lostItems: ['Animated Bait', 'Feather Pillow', 'The Saints Revealed'],
	trainings: [],
	lectures: [
		{
			question: 'When I take a lecture I’m not interested in, I get so...sleepy. I just can\'t fight it. I should just give up, don’t you think? Close my eyes and enjoy a peaceful slumber?',
			 answer: 'No need to fight it. You can’t help it.'
		},
		{
			question: 'I sometimes find books written in languages I’ve never seen before. I’d love to read them somehow, but I don’t even know where to start… Do you have any ideas?',
			answer: 'Piece things together using linguistic clues.'
		}
	],
	skillProficiencies: ['Reason', 'Faith'],
	skillWeaknesses: ['Axe', 'Brawling'],
	hiddenTalents: [],
	growthRates: {
		HP: 35,
		STR: 35,
		MAG: 20,
		DEX: 55,
		SPD: 50,
		LCK: 25,
		DEF: 20,
		RES: 30,
		CHA: 35,
	},
	maxStats: {
		HP: 63,
		STR: 42,
		MAG: 66,
		DEX: 56,
		SPD: 55,
		LCK: 63,
		DEF: 48,
		RES: 65,
		CHA: 43
	}
};
