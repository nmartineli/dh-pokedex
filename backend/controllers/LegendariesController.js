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
			if (legendaryFilter.length == 0) {
				return res.status(400).send('The id ' + id + ' does not exist');
			} else {
				console.log(legendaryFilter);
				return res.json(legendaryFilter);
			}
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
		fs.readFile(legendariesJson, 'utf8', function (err, data) {
			if (err) {
				return console.log(err);
			}
			const legendariesList = JSON.parse(data);
			legendariesList.push(legendary);
			const newLegendariesString = JSON.stringify(legendariesList, null, 2);
			fs.writeFileSync(legendariesJson, newLegendariesString, (err) => {
				if (err) {
					console.error(err);
					return;
				}
			});
			return res.json(legendary);
		});
	},
	update: (req, res) => {
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
				legendariesList[legendaryFilter].name = name;
				legendariesList[legendaryFilter].description = description;
				legendariesList[legendaryFilter].type = type;
				legendariesList[legendaryFilter].healthPoints = healthPoints;
				legendariesList[legendaryFilter].specialAttack = specialAttack;
				legendariesList[legendaryFilter].defense = defense;
				legendariesList[legendaryFilter].attack = attack;
				legendariesList[legendaryFilter].experience = experience;
				legendariesList[legendaryFilter].specialDefense = specialDefense;
				legendariesList[legendaryFilter].img = img;

				console.log(legendariesList);

				const newLegendariesString = JSON.stringify(legendariesList, null, 2);
				fs.writeFileSync(legendariesJson, newLegendariesString, (err) => {
					if (err) {
						console.error(err);
						return;
					}
				});
				return res.json(legendariesList[legendaryFilter]);
			}
		});
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
};

module.exports = controller;
