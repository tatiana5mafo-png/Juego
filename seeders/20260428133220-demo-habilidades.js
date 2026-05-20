'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Habilidads', [
      { nombre: 'Espadazo', descripcion: 'Ataque con espada.', incremento_ataque: 10, incremento_defensa: 0, incremento_estamina: -5, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Escudo de Hierro', descripcion: 'Aumenta la defensa.', incremento_ataque: 0, incremento_defensa: 15, incremento_estamina: -3, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Bola de Fuego', descripcion: 'Lanza fuego al enemigo.', incremento_ataque: 20, incremento_defensa: -5, incremento_estamina: -10, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Regeneración', descripcion: 'Recupera estamina.', incremento_ataque: 0, incremento_defensa: 0, incremento_estamina: 25, createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Paso Sombra', descripcion: 'Teletransportación corta.', incremento_ataque: 8, incremento_defensa: 5, incremento_estamina: -8, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Habilidads', null, {});
  },
};