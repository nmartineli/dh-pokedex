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

		res.json(legendary);
	},
	update: (req, res) => {
		const { id } = req.params;

		const { name, description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense } = req.body;

		if (!description) {
			return res.status(400).json({ error: 'Description is required' });
		}

		res.json(legendary);
	},
};

module.exports = controller;
