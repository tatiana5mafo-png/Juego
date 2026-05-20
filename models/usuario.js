'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasOne(models.Perfil, { foreignKey: 'usuarioId' });
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    contrasena: DataTypes.STRING,
  }, { sequelize, modelName: 'Usuario' });
  return Usuario;
};