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
			question: 'I know this is highly unlikely, but on the off chance that Rhea surrenders to my terms, what should I do? I would appreciate your thoughts on the matter…',
			answer: 'Strip her of her power so she can’t interfere in politics.'
		}
	],
	skillProficiencies: ['Sword', 'Axe', 'Heavy Armor', 'Authority'],
	skillWeaknesses: ['Bow', 'Faith'],
	hiddenTalents: ['Reason'],
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
