const LegendaryModel = require('../models/LegendaryModel');
const fs = require('fs');
const legendariesJson = './src/database/legendaries.json';
const { v4: uuidv4 } = require('uuid');
const database = require('../database/models/index');

const LegendariesService = {
	listLegendaries: () => {
		fs.readFile(legendariesJson, 'utf8', function (err, data) {
			if (err) {
				return console.log(err);
			}
			const legendariesList = JSON.parse(data);
			console.log(legendariesList);
			const newLegendariesString = JSON.stringify(legendariesList, null, 2);
			console.log(newLegendariesString);
		});
	},
	listPokemonData: (pokemonName) => {
		const pokemonList = LegendariesService.listLegendaries();
		let pokemon = pokemonList.find((item) => item.name === pokemonName);

		if (!pokemon) {
			pokemon = pokemonList[0];
		}

		return pokemon;
	},
	createLegendary: (name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense, img) => {
		const newLegendary = new LegendaryModel(
			uuidv4(),
			name,
			description,
			type,
			healthPoints,
			specialAttack,
			defense,
			attack,
			experience,
			specialDefense,
			img
		);
		return newLegendary;
	},
	getLegendaryList: async () => {
		const resultados = await database.Legendary.findAll();
		return resultados;
	},
};

module.exports = LegendariesService;
