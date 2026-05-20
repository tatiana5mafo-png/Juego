const express = require('express');
const ctrl = require('../controllers/personajes.controller');
const { validatePersonaje } = require('../validators/personaje.validator');

const router = express.Router();

router.get('/', ctrl.list);
router.get('/:id', ctrl.show);
router.post('/', validatePersonaje, ctrl.create);
router.put('/:id', validatePersonaje, ctrl.update);
router.delete('/:id', ctrl.remove);
router.post('/:id/habilidades', ctrl.addHabilidad);
router.delete('/:idP/habilidades/:idH', ctrl.removeHabilidad);

module.exports = router;