import { ICharacter } from '../../types/icharacter';

export const Sylvain: ICharacter = {
    firstName: 'Sylvain',
	alliance: 'Blue Lions',
	name: 'Sylvain Jose Gautier',
	birthday: '6/5',
	skill: 'C Reason',
	stat: '25 CHA',
	flower: [],
	tea: ['Bergamot', 'Seiros Tea'],
	crest: 'Gautier',
	gift: ['Board Game', 'Dapper Handkerchief', 'Landscape Painting'],
	lostItems: ['Crumpled Love Letter', 'The History of Sreng', 'Unused Lipstick'],
	trainings: [],
	lectures: [
		{
			question: 'I’ve been trying to win the heart of this girl, but none of the fancy gifts or weet things I tell her have worked. Do you know any secret dating tricks I can use to win her heart?',
			 answer: 'Stay away for a while so she starts to miss you.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 55,
		STR: 45,
		MAG: 30,
		DEX: 35,
		SPD: 50,
		LCK: 35,
		DEF: 40,
		RES: 25,
		CHA: 40,
	}
};
