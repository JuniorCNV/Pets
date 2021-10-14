const express = require("express");
const router = express.Router();

const petsController = require('../controllers/petsController')
const servicosController = require('../controllers/servicosController')

router.get("/pets", petsController.index);

router.get("/servicos", servicosController.index);

module.exports = router;