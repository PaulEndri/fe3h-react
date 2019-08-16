import { ICharacter } from '../../types/icharacter';

export const Linhardt: ICharacter = {
    firstName: 'Linhardt',
	alliance: 'Black Eagles',
	name: 'Linhardt von Hevring',
	birthday: '11/7',
	crest: 'Cethleann',
	tea: ['Almyran Pine Needles', 'Angelica Tea'],
	skill: 'Reason',
	stat: 'MAG',
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
			question: '',
			answer: ''
		}
	],
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
	}
};
