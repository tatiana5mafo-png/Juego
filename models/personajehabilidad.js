'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PersonajeHabilidad extends Model {
    static associate(models) {}
  }
  PersonajeHabilidad.init({
    personajeId: DataTypes.INTEGER,
    habilidadId: DataTypes.INTEGER,
    nivel: DataTypes.INTEGER,
  }, { sequelize, modelName: 'PersonajeHabilidad' });
  return PersonajeHabilidad;
};