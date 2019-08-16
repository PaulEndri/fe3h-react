import { ICharacter } from '../../types/icharacter';

export const Lysithea: ICharacter = {
    firstName: 'Lysithea',
	alliance: 'Golden Deer',
	name: 'Lysithea von Ordelia',
	birthday: '2/28',
	skill: 'B Faith',
	stat: '15 MAG',
	flower: ['Lily'],
	tea: ['Sweet-Apple Blend', 'Southern Fruit Blend', 'Crescent-Moon Tea', 'Honeyed-Fruit Blend'],
	crest: 'Charon, Gloucester',
	gift: ['Arithmetic Textbook', 'Armored Bear Stuffy', 'Book of Crest Designs', 'Tasty Baked Treat'],
	lostItems: ['Encyclopedia of Sweets', 'New Bottle of Perfume', 'Princess Doll'],
	trainings: [],
	lectures: [
		{
			question: 'There’s so much to do and never enough time in which to do it. Sleep is a nuisance, but my body forces me to slow down, even though my mind doesn’t want to. Do you have any tips for shaking tired feelings away?',
			 answer: 'Sleeping when you’re tired is best for you.'
		},
		{
			question: 'I heard rumors about ghosts roaming the monastery…. I’m certainly not scared, nor do I have time to worry about it, but...uh… You should probably do something about it, for the sake of the others!',
			answer: 'Let’s bring more candles to the halls to brighten things up.'
		}
	],
	skillProficiencies: ['Reason', 'Faith', 'Authority'],
	skillWeaknesses: ['Sword', 'Axe', 'Bow', 'Heavy Armor'],
	hiddenTalents: ['Sword'],
	growthRates: {
		HP: 20,
		STR: 15,
		MAG: 60,
		DEX: 60,
		SPD: 50,
		LCK: 15,
		DEF: 10,
		RES: 25,
		CHA: 25,
	}
};
