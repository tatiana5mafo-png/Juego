const { Habilidad } = require('../../models');

exports.list = async (req, res, next) => {
  try {
    const habilidades = await Habilidad.findAll();
    res.json(habilidades);
  } catch (err) { next(err); }
};

exports.show = async (req, res, next) => {
  try {
    const habilidad = await Habilidad.findByPk(req.params.id);
    if (!habilidad) return res.status(404).json({ error: 'Habilidad no encontrada' });
    res.json(habilidad);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const { nombre, descripcion, incremento_ataque, incremento_defensa, incremento_estamina } = req.body;
    if (!nombre) return res.status(400).json({ error: 'El nombre es obligatorio' });
    const nueva = await Habilidad.create({ nombre, descripcion, incremento_ataque, incremento_defensa, incremento_estamina });
    res.status(201).json(nueva);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const habilidad = await Habilidad.findByPk(req.params.id);
    if (!habilidad) return res.status(404).json({ error: 'Habilidad no encontrada' });
    await habilidad.update(req.body);
    res.json(habilidad);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const habilidad = await Habilidad.findByPk(req.params.id);
    if (!habilidad) return res.status(404).json({ error: 'Habilidad no encontrada' });
    await habilidad.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};