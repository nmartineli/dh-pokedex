const LegendariesService = require('../services/LegendariesService');
const fs = require('fs');
const { validationResult } = require('express-validator');
const legendariesJson = './src/database/legendaries.json';

const controller = {
	indexAll: async (req, res) => {
		const list = await LegendariesService.getLegendaryList();
		return res.json(list);
	},

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
			if (legendaryFilter.length == 0) {
				return res.status(400).send('The id ' + id + ' does not exist');
			} else {
				console.log(legendaryFilter);
				return res.json(legendaryFilter);
			}
		});
	},

	create: async (req, res) => {
		const { name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense } = req.body;

		const legendary = await LegendariesService.createLegendary(
			name,
			description,
			type,
			healthPoints,
			specialAttack,
			defense,
			attack,
			experience,
			specialDefense
		);

		return res.json(legendary);
	},
	update: async (req, res) => {
		const { id } = req.params;
		const { name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense, img } = req.body;

		const updatedLegendary = await LegendariesService.updateLegendary(
			id,
			name,
			description,
			type,
			healthPoints,
			specialAttack,
			defense,
			attack,
			experience,
			specialDefense
		);

		res.json(updatedLegendary);
	},
	delete: (req, res) => {
		fs.readFile(legendariesJson, 'utf8', function (err, data) {
			if (err) {
				return console.log(err);
			}

			const { id } = req.params;
			const { name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense, img } = req.body;
			const legendariesList = JSON.parse(data);

			const legendaryFilter = legendariesList.findIndex((item) => item.id == id);

			if (legendaryFilter == -1) {
				return res.status(400).send('The id ' + id + ' does not exist');
			} else {
				const removedLegendary = legendariesList.splice(legendaryFilter, 1);

				const LegendariesString = JSON.stringify(legendariesList, null, 2);
				fs.writeFileSync(legendariesJson, LegendariesString, (err) => {
					if (err) {
						console.error(err);
						return;
					}
				});
				return res.json(removedLegendary);
			}
		});
	},
	destroy: async (req, res) => {
		const { id } = req.params;

		const deletedLegendary = await LegendariesService.destroyLegendary(id);
		return res.json(deletedLegendary);
	},
};

module.exports = controller;
