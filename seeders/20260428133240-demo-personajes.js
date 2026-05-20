'use strict';
const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface) {
    const perfiles = await queryInterface.sequelize.query(
      'SELECT id FROM Perfils;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const personajes = perfiles.map(p => ({
      nombre: faker.person.firstName(),
      descripcion: faker.lorem.sentence(),
      ataque: faker.number.int({ min: 30, max: 100 }),
      defensa: faker.number.int({ min: 20, max: 80 }),
      estamina: faker.number.int({ min: 40, max: 100 }),
      perfilId: p.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Personajes', personajes);

    const personajesInsertados = await queryInterface.sequelize.query(
      'SELECT id FROM Personajes;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const habilidades = await queryInterface.sequelize.query(
      'SELECT id FROM Habilidads;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const relaciones = personajesInsertados.map(p => ({
      personajeId: p.id,
      habilidadId: habilidades[Math.floor(Math.random() * habilidades.length)].id,
      nivel: faker.number.int({ min: 1, max: 10 }),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('PersonajeHabilidads', relaciones);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('PersonajeHabilidads', null, {});
    await queryInterface.bulkDelete('Personajes', null, {});
  },
};