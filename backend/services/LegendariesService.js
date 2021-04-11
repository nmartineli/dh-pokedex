const LegendaryModel = require('../models/LegendaryModel');
const fs = require('fs');
const legendariesJson = './src/database/legendaries.json';
const { v4: uuidv4 } = require('uuid');

const LegendariesService = {
	listLegendaries: () => {
		fs.readFile(legendariesJson, 'utf8', function (err, data) {
			if (err) {
				return console.log(err);
			}
			let legendariesList = JSON.parse(data);
			return legendariesList;
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
		fs.readFile(legendariesJson, 'utf8', function (err, data) {
			if (err) {
				return console.log(err);
			}
			const legendariesList = JSON.parse(data);
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
			legendariesList.push(newLegendary);
			const newLegendariesString = JSON.stringify(legendariesList, null, 2);
			fs.writeFileSync(legendariesJson, newLegendariesString, (err) => {
				if (err) {
					console.error(err);
					return;
				}
			});
		});
		return 'New legendary created with sucess';
	},
};

module.exports = LegendariesService;
