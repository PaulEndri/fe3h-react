import { ICharacter } from '../../types/icharacter';

export const Hanneman: ICharacter = {
    firstName: 'Hanneman',
	alliance: 'Church of Seiros',
	name: 'Hanneman von Essar',
	birthday: '2/8',
	skill: '-',
	stat: 'Level 15',
	flower: [],
	gift: ['Arithmetic Textbook', 'Book of Crest Designs', 'Dapper Handkerchief', 'Tea Leaves'],
	tea: ['Bergamot', 'Sweet-Apple Blend', 'Honeyed-Fruit Blend', 'Cinnamon Blend'],
	crest: 'Indech',
	lostItems: ['Hammer and Chisel', 'Lens Cloth', 'Sketch of a Sigil'],
	trainings: ['Bow', 'Reason', 'Riding'],
	lectures: [
		{
			question: 'When I ask them to take part in my experiments, even the most industrious students run away from me. No matter how sincerely I plead! Do you have any suggestions?',
			 answer: 'Make the "Experiment" a "job" and pay them handsomely.'
		},
		{
			question: '',
			answer: ''
		}
	],
	growthRates: {
		HP: 40,
		STR: 30,
		MAG: 55,
		DEX: 45,
		SPD: 20,
		LCK: 35,
		DEF: 25,
		RES: 40,
		CHA: 35,
	}
};
