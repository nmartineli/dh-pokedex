const LegendariesService = require('../services/LegendariesService');

const controller = {
    index: (req, res) => {
        const { name } = req.query;
		console.log(name);
        const legendary = LegendariesService.listPokemonData(name);        
		console.log(legendary);
        return res.render('legendaries', {
            legendary
        });      
    }
}

module.exports = controller;