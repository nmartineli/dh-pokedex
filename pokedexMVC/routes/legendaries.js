const express = require('express');
const controller = require('../controllers/LegendariesController');
const router = express.Router();
const constroller = require('../controllers/LegendariesController');

/* GET legendaries. */
router.get('/', controller.index);

module.exports = router;
