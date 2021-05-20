const express = require('express');

const controller = require('../controllers/LegendariesController');
const validator = require('../middlewares/LegendariesValidator');

const router = express.Router();

/* GET legendaries. */
router.get('/', controller.read);
//router.get('/:id', controller.readPokemon);
router.post('/', validator, controller.create);
router.put('/:id', validator, controller.update);
router.delete('/:id', controller.destroy);

router.get('/all', controller.indexAll);

module.exports = router;
