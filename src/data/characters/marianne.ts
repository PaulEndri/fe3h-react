import { ICharacter } from '../../interfaces/iCharacter';

export const Marianne: ICharacter = {
    firstName: 'Marianne',
	alliance: 'Golden Deer',
	name: 'Marianne von Edmund',
	birthday: '11/23',
	skill: {
		name: 'Riding',
		value: 'C'
	},
	stat: {
		name: 'MAG',
		value: 10
	},
	flower: ['Lily of the Valley'],
	gift: ['Armored Bear Stuffy', 'Dapper Handkerchief', 'Floral Adornment'],
	tea: ['Dagda Fruit Blend', 'Cinnamon Blend', 'Lavender Blend'],
	crest: 'Beast',
	lostItems: ['Bag of Seeds', 'Confessional Letter', 'How to be Tidy'],
	trainings: [],
	lectures: [
		{
			question: 'Um, excuse me… Can you help me? I always get the feeling that I’m being watched. I get so nervous that I can’t sleep at night…',
			 answer: 'You might be right. You should be careful.'
		},
		{
			question: 'Soon a day will come when we must all part ways. I get so sad thinking about it.... It\'s not practical to keep focusing on this though, is it?',
			answer: 'The goddess will always protect everyone.'
		}
	],
	skillProficiencies: ['Sword', 'Faith', 'Riding', 'Flying'],
	skillWeaknesses: ['Authority', 'Heavy Armor'],
	hiddenTalents: ['Lance'],
	growthRates: {
		HP: 35,
		STR: 20,
		MAG: 50,
		DEX: 40,
		SPD: 40,
		LCK: 35,
		DEF: 15,
		RES: 45,
		CHA: 40,
	}
};
