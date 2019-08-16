import { ICharacter } from '../../types/icharacter';

export const Edelgard: ICharacter = {
    firstName: 'Edelgard',
	alliance: 'Black Eagles',
	name: 'Edelgard von Hresvelg',
	skill: '-',
	stat: '-',
	crest: 'Seiros, Flames',
	flower: ['Carnation'],
	gift: ['Armored Bear Stuffy', 'Board Game', 'Monarch Studies Book'],
	lostItems: ['Eastern Porcelain', 'Time-worn Quill Pen', 'White Glove'],
	tea: ['Bergamot'],
	trainings: [],
	lectures: [
		{
			question: 'When one professor lectures many students, some will inevitably have trouble keeping up, while others will get too far ahead in their studies. I wonder how this problem might be solved…',
			 answer: 'Perhaps we should make lectures optional.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 40,
		STR: 55,
		MAG: 45,
		DEX: 45,
		SPD: 40,
		LCK: 30,
		DEF: 35,
		RES: 35,
		CHA: 60,
	}
};
