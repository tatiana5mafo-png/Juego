const express = require('express');
const { Usuario, Perfil, Personaje, Habilidad } = require('../../models');

const router = express.Router();

// GET /api/usuarios - Listar todos
router.get('/', async (req, res, next) => {
  try {
    const usuarios = await Usuario.findAll({
      include: [{ model: Perfil }],
    });
    res.json(usuarios);
  } catch (err) {
    next(err);
  }
});

// GET /api/usuarios/:id - Detalle de un usuario con su perfil
router.get('/:id', async (req, res, next) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id, {
      include: [{ model: Perfil }],
    });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (err) {
    next(err);
  }
});

// GET /api/usuarios/:id/personajes - Personajes de un usuario
router.get('/:id/personajes', async (req, res, next) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id, {
      include: [{
        model: Perfil,
        include: [{
          model: Personaje,
          include: [{ model: Habilidad, through: { attributes: ['nivel'] } }],
        }],
      }],
    });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    const personajes = usuario.Perfil ? usuario.Perfil.Personajes : [];
    res.json(personajes);
  } catch (err) {
    next(err);
  }
});

// POST /api/usuarios - Crear usuario
router.post('/', async (req, res, next) => {
  try {
    const { nombre, correo, contrasena } = req.body;
    if (!nombre || !correo) return res.status(400).json({ error: 'nombre y correo son obligatorios' });
    const nuevo = await Usuario.create({ nombre, correo, contrasena });
    res.status(201).json(nuevo);
  } catch (err) {
    next(err);
  }
});

// PUT /api/usuarios/:id - Editar usuario
router.put('/:id', async (req, res, next) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    await usuario.update(req.body);
    res.json(usuario);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/usuarios/:id - Eliminar usuario
router.delete('/:id', async (req, res, next) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    await usuario.destroy();
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;