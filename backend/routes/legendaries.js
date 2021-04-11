const express = require('express');
const router = express.Router();
const controller = require('../controllers/LegendariesController');

/* GET legendaries. */
router.get('/', controller.read);
router.get('/:id', controller.readPokemon);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
