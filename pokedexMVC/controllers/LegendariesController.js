const LegendaryModel = require('../models/LegendaryModel');

const controller = {
	index: (req, res) => {
		const pineco = new LegendaryModel(1, 'Pineco', 'Melhor Pokemon do Mundo', 'Bug');
		res.json(pineco);
	},
};

module.exports = controller;
