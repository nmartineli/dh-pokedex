const LegendariesService = require('../services/LegendariesService');

const controller = {
	index: (req, res) => {
		const { name } = req.query;

		const legendary = LegendariesService.listPokemonData(name);

		return res.json(legendary);
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
