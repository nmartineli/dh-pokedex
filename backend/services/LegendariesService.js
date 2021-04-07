const LegendaryModel = require('../models/LegendaryModel');

const LegendariesService = {
	listLegendaries: () => {
		const mew = new LegendaryModel(
			1,
			'Mew',
			'So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.',
			'Psychic',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'/images/mew.svg'
		);
		const moltres = new LegendaryModel(
			2,
			'Moltres',
			'So Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.',
			'Fire / Flying',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'/images/moltres.png'
		);
		const articuno = new LegendaryModel(
			3,
			'Articuno',
			'Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.',
			'Ice / Flying',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'/images/articuno.png'
		);
		const zapdos = new LegendaryModel(
			4,
			'Zapdos',
			'Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.',
			'Electric / Flying',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'/images/zapdos.png'
		);
		const diancie = new LegendaryModel(
			5,
			'Diancie',
			'A sudden transformation of Carbink, its pink, glimmering body is said to be the loveliest sight in the whole world. It can instantly create many diamonds by compressing the carbon in the air between its hands.',
			'Rock / Fairy',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'/images/diancie.png'
		);
		const xerneas = new LegendaryModel(
			6,
			'Xerneas',
			'Legends say it can share eternal life. It slept for a thousand years in the form of a tree before its revival. When the horns on its head shine in seven colors, it is said to be sharing everlasting life.',
			'Fairy',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'1000.000',
			'/images/xerneas.png'
		);
		return [mew, moltres, articuno, zapdos, diancie, xerneas];
	},
	listPokemonData: (name) => {
		const pokemonList = LegendariesService.listLegendaries();
		console.log(pokemonList);
		const pokemon = pokemonList.find((item) => item.name.toLowerCase() === name);
		console.log(pokemon);
		return pokemon;
	},
};

module.exports = LegendariesService;
