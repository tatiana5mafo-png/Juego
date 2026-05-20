const { Personaje, Habilidad } = require('../../models');

exports.list = async (req, res, next) => {
  try {
    const personajes = await Personaje.findAll();
    res.json(personajes);
  } catch (err) { next(err); }
};

exports.show = async (req, res, next) => {
  try {
    const personaje = await Personaje.findByPk(req.params.id, {
      include: [{ model: Habilidad, through: { attributes: ['nivel'] } }],
    });
    if (!personaje) return res.status(404).json({ error: 'Personaje no encontrado' });
    res.json(personaje);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const { nombre, descripcion, ataque, defensa, estamina, perfilId } = req.body;
    if (!nombre) return res.status(400).json({ error: 'El nombre es obligatorio' });
    const nuevo = await Personaje.create({ nombre, descripcion, ataque, defensa, estamina, perfilId });
    res.status(201).json(nuevo);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const personaje = await Personaje.findByPk(req.params.id);
    if (!personaje) return res.status(404).json({ error: 'Personaje no encontrado' });
    await personaje.update(req.body);
    res.json(personaje);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const personaje = await Personaje.findByPk(req.params.id);
    if (!personaje) return res.status(404).json({ error: 'Personaje no encontrado' });
    await personaje.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
};

exports.addHabilidad = async (req, res, next) => {
  try {
    const personaje = await Personaje.findByPk(req.params.id);
    if (!personaje) return res.status(404).json({ error: 'Personaje no encontrado' });
    const { habilidadId, nivel } = req.body;
    await personaje.addHabilidad(habilidadId, { through: { nivel } });
    res.status(201).json({ message: 'Habilidad agregada correctamente' });
  } catch (err) { next(err); }
};

exports.removeHabilidad = async (req, res, next) => {
  try {
    const personaje = await Personaje.findByPk(req.params.idP);
    if (!personaje) return res.status(404).json({ error: 'Personaje no encontrado' });
    await personaje.removeHabilidad(req.params.idH);
    res.status(204).send();
  } catch (err) { next(err); }
};