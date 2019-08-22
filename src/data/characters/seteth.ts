import { ICharacter } from '../../interfaces/iCharacter';

export const Seteth: ICharacter = {
    firstName: 'Seteth',
	alliance: 'Church of Seiros',
	name: 'Seteth',
	birthday: '12/27',
	skill: null,
	stat: null,
	tea: ['Four-Spice Blend', 'Ginger Tea', 'Angelica Tea'],
	crest: 'Cichol',
	flower: [],
	gift: ['Fishing Float', 'Dapper Handkerchief', 'The History of Fodlan'],
	lostItems: ['Old Fishing Rod', 'Snapping Writing Quill', 'Unfinished Fable'],
	trainings: ['Sword', 'Lance', 'Axe', 'Authority', 'Flying'],
	lectures: [
		{
			question: 'I am staggered by how routinely the students seem to neglect their studies in favor of petty romance. You should get this under control.',
			 answer: 'We need to set a better example.'
		},
		{
			question: 'Fishing is what truly calms me, but it is time-consuming. What do you think should I do when a visit to the pond is too inconvenient?',
			answer: 'Write a story about someone fishing'
		}
	],
	skillProficiencies: ['Sword', 'Axe', 'Lance', 'Flying', 'Authority'],
	skillWeaknesses: ['Riding'],
	hiddenTalents: [],
	growthRates: {
		HP: 50,
		STR: 45,
		MAG: 35,
		DEX: 50,
		SPD: 50,
		LCK: 25,
		DEF: 30,
		RES: 25,
		CHA: 45,
	},
	maxStats: {
		HP: 92,
		STR: 65,
		MAG: 51,
		DEX: 70,
		SPD: 67,
		LCK: 49,
		DEF: 43,
		RES: 41,
		CHA: 65,
	}
};
