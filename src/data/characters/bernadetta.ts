import { ICharacter } from '../../types/icharacter';

export const Bernadetta: ICharacter = {
    firstName: 'Bernadetta',
	alliance: 'Black Eagles',
	name: 'Bernadetta von Varley',
	birthday: '12/12',
	crest: 'Indech',
	tea: ['Albinean Berry Blend', 'Honeyed-Fruit Blend'],
	skill: 'Bow',
	stat: 'STR',
	flower: ['Pitcher Plant'],
	gift: ['Armored Bear Stuffy', 'Book of Sheet Music', 'Dapper Handkerchief', 'Landscape Painting', 'Watering Can'],
	lostItems: ['Hedgehog Case', 'Needle And Thread', 'Still-Life Picture'],
	trainings: [],
	lectures: [
		{
			question: 'Um. Sorry, but you should probably just skip me. I don’t have a question to ask. How would I even think of one?',
			 answer: 'You just did.'
		},
		{
			question: 'I want to knit an animal doll for someone, but I\'m not sure what kind to make. They love eagles, lions, and deer equally! I don\'t know what to do...',
			answer: 'Try using an eagle\'s head, a lion\'s body, and a deer\'s tail.'
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
