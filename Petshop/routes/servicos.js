const express = require('express');
const servicosController = require('../controllers/servicosController');
const router = express.Router();

router.get('/', servicosController.index);
router.get('/cadastro', servicosController.store);


// router
//     .route('/servicos')
//     .get('/', servicosController.index)
//     .get('/cadastro', servicosController.store)
//     .post('/', servicosController.save)
//     .get('/:id/edit', servicosController.edit)
//     .put('/:id', servicosController.update)
//     .delete('/:id', servicosController.delete)

module.exports = router