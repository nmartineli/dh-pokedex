const LegendariesService = require('../services/LegendariesService');
const fs = require('fs');
const legendariesJson = './src/database/legendaries.json';

const controller = {
	read: (req, res) => {
		fs.readFile(legendariesJson, 'utf8', function (err, data) {
			if (err) {
				return console.log(err);
			}
			const legendariesList = JSON.parse(data);
			return res.json(legendariesList);
		});
	},

	readPokemon: (req, res) => {
		const { id } = req.params;
		fs.readFile(legendariesJson, 'utf8', function (err, data) {
			if (err) {
				return console.log(err);
			}
			const legendariesList = JSON.parse(data);
			const legendaryFilter = legendariesList.filter((item) => {
				return item.id == id;
			});
			console.log(legendaryFilter);
			return res.json(legendaryFilter);
		});
	},

	create: (req, res) => {
		const { name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense, img } = req.body;

		const legendary = LegendariesService.createLegendary(
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

		return res.json(legendary);
	},
	update: (req, res) => {
		const { id } = req.params;

		const { name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense, img } = req.body;

		if (!id) {
			return res.status(400).json({ error: 'The ' + id + ' does not exist' });
		}

		return res.json(legendary);
	},
};

module.exports = controller;
